#!/usr/bin/env python3
"""
Fetch latest videos from YouTube channel RSS and write docs/data/videos.json.
Used by GitHub Action so the site shows new videos automatically.
Requires: CHANNEL_ID env var (e.g. from repo variables). Get it from YouTube Studio → Settings → Advanced.
"""
import os
import json
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

RSS_URL = "https://www.youtube.com/feeds/videos.xml?channel_id={channel_id}"
MAX_VIDEOS = 15
OUTPUT_PATH = Path(__file__).resolve().parent.parent / "docs" / "data" / "videos.json"
NS = {"atom": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015"}


def main():
    channel_id = os.environ.get("YOUTUBE_CHANNEL_ID", "").strip()
    if not channel_id:
        print("YOUTUBE_CHANNEL_ID not set. Skipping update. Set it in repo Variables or workflow.")
        return

    url = RSS_URL.format(channel_id=channel_id)
    req = urllib.request.Request(url, headers={"User-Agent": "MiroslavSec-Site-Updater/1.0"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        tree = ET.parse(resp)
    root = tree.getroot()

    videos = []
    for entry in root.findall("atom:entry", NS)[:MAX_VIDEOS]:
        video_id = None
        vid_el = entry.find("yt:videoId", NS)
        if vid_el is not None and vid_el.text:
            video_id = vid_el.text
        else:
            id_el = entry.find("atom:id", NS)
            if id_el is not None and id_el.text and "video:" in id_el.text:
                video_id = id_el.text.strip().split(":")[-1]
        title_el = entry.find("atom:title", NS)
        title = title_el.text.strip() if title_el is not None and title_el.text else "Video"
        if video_id:
            videos.append({"id": video_id, "title": title})

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(videos, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {len(videos)} videos to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
