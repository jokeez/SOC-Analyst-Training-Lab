# 🗺️ SOC Analyst Training Lab — Roadmap

High-level plan for labs, videos, and portfolio evolution.

---

## Progress Snapshot

- Linux Hardening: `<progress value="6" max="6"></progress>` **6/6 (100%)** — docs + scripts; Lab 06 is repo-first (no walkthrough video).
- Nmap Series: `<progress value="6" max="6"></progress>` **6/6 (100%)** — Labs 01–06 published on video.
- Hydra Series: `<progress value="4" max="4"></progress>` **4/4 (100%)** — Labs 00–03 published on video + `hydra-labs-menu.sh`.
- Blue Team (`labs/defensive-blue/`): `<progress value="0" max="6"></progress>` **0/6 (0%)** — standards + README; first hands-on labs next (e.g. Wireshark SOC triage baseline).
- SOC Analyst Path: `<progress value="3" max="10"></progress>` **3/10 (30%)** — Linux + Nmap + Hydra video blocks closed; SQLi demo in repo; **Hashcat / John** lab skeleton next; Blue numbered labs after that mini-block.

---

## ✅ Done — Infrastructure Hardening


| #   | Topic                | Focus                                                             |
| --- | -------------------- | ----------------------------------------------------------------- |
| 01  | Firewall (UFW)       | Default deny, rate limiting                                       |
| 02  | SSH Keys             | Key-based auth                                                    |
| 03  | Security Banners     | MOTD, legal                                                       |
| 04  | SSH Agent Forwarding | Jump servers, bastion                                             |
| 05  | Fail2Ban             | SSH jail, brute-force mitigation                                  |
| 06  | Final Automation     | `auto-secure.sh` — repo/docs only (no separate walkthrough video) |


---

## 🔜 Near term (1–2 months)

- **Hashcat + John the Ripper (Red track)** — short baseline videos after Hydra: [hashcat](./labs/offensive-red/hashcat/) and [john-the-ripper](./labs/offensive-red/john-the-ripper/) (repo skeleton + Lab 01 placeholders); English on-screen captions; **lab-generated hashes only**.
- **SQL Injection (Red track)** — walkthrough videos for the [sql-injection](./labs/offensive-red/sql-injection/) local demo; links synced in root `README.md` and the GitHub Pages site.
- **Defensive Blue baseline** ([labs/defensive-blue](./labs/defensive-blue/)) — first numbered labs (e.g. Wireshark triage) **after** the password-cracking mini-block, same [LAB_TEMPLATE.md](./labs/LAB_TEMPLATE.md) discipline.
- **Optional Red expansions** — further tools only with a clear Purple story (e.g. controlled phishing) — same “base series → advanced block” rhythm as Nmap/Hydra.

---

## 📅 Mid term (3–6 months)

- **Hydra track** — ✅ Labs 00–03 shipped; revisit only for a deliberate “Phase B” or cross-topic (e.g. SIEM-only view of the same events).
- **Blue Team block** — grow `labs/defensive-blue/` beyond README: detection notes, PCAP workflows, mini–incident response write-ups.
- **Windows / AD** — baseline hardening and first SOC-focused checks.

---

## 📅 Longer term (6–12 months)

- **SIEM / analytics** — ingest logs into Elastic / Graylog / Wazuh; write basic detections.
- **Web security bridge** — app exposure mapping and remediation-oriented labs.
- **Career package** — interview prep, scenario answers, and concise SOC evidence mapping.

---

## Principles

- One video = one main skill; playlists do not mix tools.
- Each lab maps Red action → Blue mitigation (Purple workflow).
- New labs follow the shared template: `[labs/LAB_TEMPLATE.md](./labs/LAB_TEMPLATE.md)`.