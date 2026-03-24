# 🗺️ SOC Analyst Training Lab — Roadmap

High-level plan for labs, videos, and portfolio evolution.

---

## Progress Snapshot

- Nmap Series: `<progress value="4" max="6"></progress>` **4/6 (67%)**
- Linux Hardening: `<progress value="6" max="6"></progress>` **6/6 (100%)**
- Blue Team Labs: `<progress value="1" max="6"></progress>` **1/6 (17%)**
- SOC Analyst Path: `<progress value="2" max="10"></progress>` **2/10 (20%)**

---

## ✅ Done — Infrastructure Hardening

| # | Topic | Focus |
|:--|:-----|:------|
| 01 | Firewall (UFW) | Default deny, rate limiting |
| 02 | SSH Keys | Key-based auth |
| 03 | Security Banners | MOTD, legal |
| 04 | SSH Agent Forwarding | Jump servers, bastion |
| 05 | Fail2Ban | SSH jail, brute-force mitigation |
| 06 | Final Automation | `auto-secure.sh` — repo/docs only (no separate walkthrough video) |

---

## 🔜 Near term (1–2 months) — Red Team (Nmap)

Six sections in [`labs/offensive-red/nmap/`](./labs/offensive-red/nmap/); videos are added as they go live.

| # | Topic | Focus |
|:--|:-----|:------|
| 01 | [Discovery](./labs/offensive-red/nmap/01-discovery/) | Host discovery, TCP SYN ping vs ICMP |
| 02 | [SYN Scan](./labs/offensive-red/nmap/02-syn-scan/) | `-sS -Pn` baseline |
| 03 | [Service Detection](./labs/offensive-red/nmap/03-service-detection/) | `-sV`, banners |
| 04 | [Speed vs Depth](./labs/offensive-red/nmap/04-speed-vs-depth/) | Targeted ports vs full range |
| 05 | [Output / Reporting](./labs/offensive-red/nmap/05-output-reporting/) | `-oN`, `-oA` |
| 06 | [Safe NSE](./labs/offensive-red/nmap/06-safe-nse/) | `--script safe` |

---

## 📅 Mid term (3–6 months)

- **Hydra track** (`labs/offensive-red/hydra/`) — SSH, HTTP form, FTP, with linked defensive controls.
- **Blue Team block** (`labs/defensive-blue/`) — detections, logging checks, response mini-cases.
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
- New labs follow the shared template: [`labs/LAB_TEMPLATE.md`](./labs/LAB_TEMPLATE.md).
