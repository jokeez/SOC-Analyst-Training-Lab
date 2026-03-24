# 🛡️ SOC Analyst Training Lab

**MiroslavSec** — hands-on cybersecurity portfolio focused on SOC / Blue Team growth.

[![GitHub Portfolio](https://img.shields.io/badge/GitHub-Portfolio-181717?style=for-the-badge&logo=github)](https://github.com/jokeez/SOC-Analyst-Training-Lab)
[![LinkedIn Connect](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/miroslav-u-7152233b5/)
[![YouTube Watch Labs](https://img.shields.io/badge/YouTube-Watch%20Labs-FF0000?style=for-the-badge&logo=youtube)](https://www.youtube.com/@MiroslavSec1)

---

## 🎯 Objective

Build practical evidence of security skills through:

- Linux hardening labs  
- Offensive and defensive tool series  
- TryHackMe daily practice  
- Public documentation and videos  

This repository is **portfolio-first**: every block shows **what was done**, **how it was validated**, and **what defensive takeaway was learned**.

---

## 📊 Tracks overview

| Track | Scope | Status |
|:------|:------|:------:|
| **Linux Hardening** | UFW, SSH hardening, banners, agent forwarding, Fail2Ban, final automation | ✅ **01–06** (docs + scripts) |
| **Red Team (Offensive)** | Nmap, Hydra, and future attack-surface tooling | 🚧 In progress |
| **Blue Team (Defensive)** | Detection, hardening, logging, and incident mini-cases | 🧱 Building |
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

### Nmap (published)

| # | Lab | Video |
|:--|:----|:------|
| 01 | Host Discovery + Fast Scan | [▶️ Watch](https://youtu.be/abxydAApkko) |
| 02 | SYN Scan Basics | [▶️ Watch](https://youtu.be/vPJW-t86lgc) |
| 03 | Service Detection | [▶️ Watch](https://youtu.be/vn8LKGCSVQk) |
| 04 | Speed vs Depth | [▶️ Watch](https://youtu.be/uDrDLcGPx1A) |

---

## 🟣 Purple Engine

This portfolio follows a **Purple Team workflow**:

- **Red (offensive):** discover and simulate realistic attack techniques.
- **Blue (defensive):** detect, harden, and validate mitigations.
- **Purple (bridge):** connect attack evidence to concrete defensive actions.

### Traceability Matrix (Attack → Defense)

| Attack phase (Red) | Tool / technique | Detection / mitigation (Blue) | Lab evidence |
|:-------------------|:-----------------|:------------------------------|:------------|
| Network recon | `nmap -sn`, `nmap -sV` | Service minimization, banner strategy, segmentation | [Nmap Lab 01–03](./labs/offensive-red/nmap/) |
| Port exposure mapping | SYN scan (`-sS -Pn`) | Firewall rule review + exposure baseline | [Nmap Lab 02](./labs/offensive-red/nmap/02-syn-scan/) |
| Brute-force simulation | Hydra (planned) | Fail2Ban + SSH keys + hardening policy | [Linux Lab 05](./Linux-Hardening/Lab05-Fail2Ban/) |
| Safe service enumeration | NSE `--script safe` | Logging + anomalous pattern monitoring | [Nmap Lab 06](./labs/offensive-red/nmap/06-safe-nse/) |
| SSH hardening validation | Key-only auth / custom port checks | `sshd_config` policy + UFW + backup-and-verify flow | [Linux Lab 02/03/06](./Linux-Hardening/) |

### Lab Standard

Every lab should follow the same engineering format:

1. **Scenario** — what problem is being solved?
2. **Scope & authorization** — lab-only and authorized targets.
3. **Reproduction (Red)** — how the issue is observed.
4. **Remediation (Blue)** — fix/hardening steps.
5. **Verification** — proof that behavior changed after fixes.
6. **Artifacts** — scripts, command logs, or reports.
7. **Defensive takeaway** — SOC-relevant conclusion.

Template: [`labs/LAB_TEMPLATE.md`](./labs/LAB_TEMPLATE.md)

---

## 📁 Repository structure

| Path | Purpose |
|:-----|:--------|
| [`Linux-Hardening/`](./Linux-Hardening/) | Linux series (labs 01–06) |
| [`labs/offensive-red/`](./labs/offensive-red/) | Red Team tools and workflows (Nmap/Hydra/...) |
| [`labs/defensive-blue/`](./labs/defensive-blue/) | Blue Team detections, mitigations, and case notes |
| [`labs/LAB_TEMPLATE.md`](./labs/LAB_TEMPLATE.md) | Standard template for consistent lab quality |
| [`docs/`](./docs/) | Portfolio site (GitHub Pages) |
| [`scripts/`](./scripts/) | Shared automation helpers |
| [`ROADMAP.md`](./ROADMAP.md) | High-level timeline and next steps |
| [`LICENSE`](./LICENSE) | MIT — code and docs in this repo |

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
