# 🗺️ SOC Analyst Training Lab — Roadmap

High-level plan for the repo and video series. One main goal per lab/video; playlists stay separate (hardening / recon / attack).

---

## ✅ Done — Linux Hardening

| # | Topic | Focus |
|:--|:-----|:------|
| 01 | Firewall (UFW) | Default deny, rate limiting |
| 02 | SSH Keys | Key-based auth |
| 03 | Security Banners | MOTD, legal |
| 04 | SSH Agent Forwarding | Jump servers, bastion |
| 05 | Fail2Ban | SSH jail, brute-force mitigation |
| 06 | Final Automation | `auto-secure.sh` — **repo/docs only** (no separate walkthrough video) |

---

## 🔜 Near term (1–2 months) — Nmap

Six sections in [`Pentest/nmap/`](./Pentest/nmap/); videos added to the site as each is published.

| # | Topic | Focus |
|:--|:-----|:------|
| 01 | [Discovery](./Pentest/nmap/01-discovery/) | Host discovery, TCP SYN ping vs ICMP |
| 02 | [SYN Scan](./Pentest/nmap/02-syn-scan/) | `-sS -Pn` baseline |
| 03 | [Service Detection](./Pentest/nmap/03-service-detection/) | `-sV`, banners |
| 04 | [Speed vs Depth](./Pentest/nmap/04-speed-vs-depth/) | Targeted ports vs full range |
| 05 | [Output / Reporting](./Pentest/nmap/05-output-reporting/) | `-oN`, `-oA` |
| 06 | [Safe NSE](./Pentest/nmap/06-safe-nse/) | `--script safe` |

---

## 📅 Mid term (3–6 months)

- **Hydra** — SSH, HTTP form, FTP; attack + defense (Fail2Ban / logging).
- **Windows / AD** — First block: hardening Windows Server, RDP, local policies (2–3 labs).
- **SOC topics** — Logging (rsyslog/journald), simple log analysis; “suspicious SSH” mini-incident.

---

## 📅 Longer term (6–12 months)

- **SIEM / analytics** — Ship logs to Elastic / Graylog / Wazuh; basic rules/dashboards.
- **Web / app security** — Small vulnerable app (Docker) + Nmap/Hydra/OWASP ZAP; find → exploit → fix.
- **Career** — Optional `career/` folder: interview checklist, sample answers (“How do you harden SSH?”, “UFW setup?”).

---

## Principles

- One video = one main skill; playlists don’t mix (hardening vs recon vs attack).
- Each new block = folder + lab markdown doc (`LABxx.md`/`Labxx-*.md`) + scripts + (optional) `commands.md`.
- Every lab has a **defensive takeaway** where it makes sense (blue-team / purple angle).
