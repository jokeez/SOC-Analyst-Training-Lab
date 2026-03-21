# 🛡️ SOC Analyst Training Lab

**MiroslavSec** — hands-on cybersecurity portfolio focused on SOC/Blue Team growth.

[![GitHub Portfolio](https://img.shields.io/badge/GitHub-Portfolio-181717?style=for-the-badge&logo=github)](https://github.com/jokeez/SOC-Analyst-Training-Lab)
[![LinkedIn Connect](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/miroslav-u-7152233b5/)
[![YouTube Watch Labs](https://img.shields.io/badge/YouTube-Watch%20Labs-FF0000?style=for-the-badge&logo=youtube)](https://www.youtube.com/@MiroslavSec1)

---

## 🎯 Objective

Build practical evidence of security skills through:
- Linux hardening labs
- Recon and pentest tool series
- TryHackMe daily practice
- Public documentation and videos

This repository is portfolio-first: every block should show **what was done**, **how it was validated**, and **what defensive takeaway was learned**.

---

## 📊 Tracks Overview

| Track | Scope | Status |
|:------|:------|:------:|
| **Linux Hardening** | UFW, SSH hardening, banners, agent forwarding, Fail2Ban, final automation | ✅ Completed (01–06) |
| **Nmap** | Discovery, Port Scan, NSE scripts | 🚧 In progress |
| **Hydra** | SSH, HTTP, FTP workflows | ⏳ Planned |
| **SOC Expansion** | Windows/AD, logging, SIEM, incident mini-cases | ⏳ Planned |

---

## 🔥 Current Focus

- Daily: TryHackMe learning and notes
- Weekly: batch recording and scheduled publishing
- Rule: one tool per series (no mixing tools in one video block)

---

## 📺 Video Index

### Linux Hardening (Completed)
| # | Lab | Video |
|:--|:----|:------|
| 01 | Firewall (UFW) | [▶️](https://youtu.be/zgGrlMZAEcM) |
| 02 | SSH Keys | [▶️](https://youtu.be/ULZVP8h6Uvc) |
| 03 | Security Banners | [▶️](https://youtu.be/ILBxHbIw74Y) |
| 04 | SSH Agent Forwarding | [▶️](https://youtu.be/NOCivaFgoXc) |
| 05 | Fail2Ban | [▶️](https://youtu.be/KGf3O-4LXkQ?si=MVaqIkHsp7_x4Et6) |
| 06 | Final Automation | 🎬 Recorded (publishing soon) |

---

## 📁 Repository Structure

| Path | Purpose |
|:-----|:--------|
| [`Linux-Hardening/`](./Linux-Hardening/) | SOC lab series (01–06) |
| [`Pentest/nmap/`](./Pentest/nmap/) | Nmap-only series |
| [`Pentest/hydra/`](./Pentest/hydra/) | Hydra-only series |
| [`docs/`](./docs/) | Portfolio website (GitHub Pages) |
| [`scripts/`](./scripts/) | Automation helpers |

---

## ✅ Content Standards

- One video = one main skill.
- One series = one tool (no tool mixing).
- Lab docs use named markdown files (`LABxx.md` or `Labxx-*.md`), not per-folder README by default.
- Each lab includes:
  - objective
  - run steps
  - validation
  - defensive takeaway

---

## 🚀 Publish Workflow (Every New Video)

1. Record and upload video (public or scheduled).
2. Update lab markdown file in its folder.
3. Update `README.md` track status and video table (if needed).
4. Update `docs/index.html` lab card status/links.
5. Update `docs/data/videos.json` with new YouTube video id/title.
6. Keep naming/style consistent (no tool mixing between series).

This keeps GitHub + website + video index always synchronized.

---

## ⚙️ Quick Start

```bash
git clone https://github.com/jokeez/SOC-Analyst-Training-Lab.git
cd SOC-Analyst-Training-Lab
```

Then open the specific lab folder and follow its markdown guide.

---

## 🌐 Portfolio & Profiles

- Website: [MiroslavSec](https://jokeez.github.io/SOC-Analyst-Training-Lab/)
- Certification Museum: [Certifications](https://jokeez.github.io/SOC-Analyst-Training-Lab/certifications.html)
- TryHackMe: [MiroslavSEC](https://tryhackme.com/p/MiroslavSEC)
- YouTube: [MiroslavSec1](https://www.youtube.com/@MiroslavSec1)
- LinkedIn: [miroslav-u-7152233b5](https://www.linkedin.com/in/miroslav-u-7152233b5/)
