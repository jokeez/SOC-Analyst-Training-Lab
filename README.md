# 🛡️ SOC Analyst Training Lab

**MiroslavSec** — hands-on cybersecurity portfolio focused on SOC / Blue Team growth.

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

This repository is **portfolio-first**: every block shows **what was done**, **how it was validated**, and **what defensive takeaway was learned**.

---

## 📊 Tracks overview

| Track | Scope | Status |
|:------|:------|:------:|
| **Linux Hardening** | UFW, SSH hardening, banners, agent forwarding, Fail2Ban, final automation | ✅ **01–06** (docs + scripts) |
| **Nmap** | Six labs: discovery → SYN scan → services → speed vs depth → output → safe NSE | 🚧 In progress |
| **Hydra** | SSH, HTTP, FTP workflows | ⏳ Planned |
| **SOC expansion** | Windows/AD, logging, SIEM, incident mini-cases | ⏳ Planned |

---

## 🔥 Current focus

- Daily: TryHackMe learning and notes  
- Weekly: batch recording and scheduled publishing  
- Rule: **one tool per series** (no mixing tools in one video block)

---

## 📺 Video index

Where a lab has a walkthrough, the link is below. **Shared / orchestration scripts** (e.g. Lab 06 master runbook) stay **GitHub-only** — documented here, not as a separate video.

### Linux Hardening

| # | Lab | Video / materials |
|:--|:----|:------|
| 01 | Firewall (UFW) | [▶️ Watch](https://youtu.be/zgGrlMZAEcM) |
| 02 | SSH Keys | [▶️ Watch](https://youtu.be/ULZVP8h6Uvc) |
| 03 | Security Banners | [▶️ Watch](https://youtu.be/ILBxHbIw74Y) |
| 04 | SSH Agent Forwarding | [▶️ Watch](https://youtu.be/NOCivaFgoXc) |
| 05 | Fail2Ban | [▶️ Watch](https://youtu.be/KGf3O-4LXkQ?si=MVaqIkHsp7_x4Et6) |
| 06 | Final Automation | [Docs + `auto-secure.sh`](./Linux-Hardening/Lab06-Final-Automation/) |

---

## 📁 Repository structure

| Path | Purpose |
|:-----|:--------|
| [`Linux-Hardening/`](./Linux-Hardening/) | Linux series (labs 01–06) |
| [`Pentest/nmap/`](./Pentest/nmap/) | Nmap-only series (six sections + scripts) |
| [`Pentest/hydra/`](./Pentest/hydra/) | Hydra-only series (planned) |
| [`docs/`](./docs/) | Portfolio site (GitHub Pages) |
| [`scripts/`](./scripts/) | Shared automation helpers |
| [`ROADMAP.md`](./ROADMAP.md) | High-level timeline and next steps |

---

## ✅ Content standards

- One video = one main skill.  
- One series = one tool (no tool mixing).  
- Lab docs use named markdown files (`LABxx.md` or `Labxx-*.md`).  
- Each lab includes: objective → steps → validation → **defensive takeaway** (purple angle where it fits).

---

## 🚀 Publish workflow (when you release a lab video)

1. Upload the video (public or scheduled).  
2. Update the lab markdown in its folder.  
3. Update this **`README.md`** (video table) if that lab gets a watch link.  
4. Update **`docs/index.html`** lab cards / links.  
5. If the lab should appear on the site video list, add it to **`docs/data/videos.json`**.  
6. Keep naming consistent across GitHub, site, and playlists.

---

## ⚙️ Quick start

```bash
git clone https://github.com/jokeez/SOC-Analyst-Training-Lab.git
cd SOC-Analyst-Training-Lab
```

Open the lab folder you need and follow its markdown guide.

### Linux Hardening — master script (final runbook)

After you understand each step, you can chain **labs 02 + 03 + 01 + 05** in one safe order (SSH **2222**, UFW, Fail2Ban stay aligned):

```bash
cd Linux-Hardening/Lab06-Final-Automation
chmod +x auto-secure.sh
./auto-secure.sh
```

- **Write-up:** [`Lab06-Final-Automation.md`](./Linux-Hardening/Lab06-Final-Automation/Lab06-Final-Automation.md)  
- **Order:** Lab 02 (keys) → Lab 03 (port/banner) → Lab 01 (UFW) → Lab 05 (Fail2Ban). Lab 04 is **client-side** only.  
- **Before:** your public key in `~/.ssh/authorized_keys` and a tested SSH login; keep a spare session open.

---

## 🌐 Portfolio & profiles

- **Website:** [MiroslavSec](https://jokeez.github.io/SOC-Analyst-Training-Lab/)  
- **Certification museum:** [Certifications](https://jokeez.github.io/SOC-Analyst-Training-Lab/certifications.html)  
- **TryHackMe:** [MiroslavSEC](https://tryhackme.com/p/MiroslavSEC)  
- **YouTube:** [MiroslavSec1](https://www.youtube.com/@MiroslavSec1)  
- **LinkedIn:** [miroslav-u-7152233b5](https://www.linkedin.com/in/miroslav-u-7152233b5/)
