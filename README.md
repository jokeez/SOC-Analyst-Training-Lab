# 🛡️ SOC Analyst Training Lab

**MiroslavSec** — Linux hardening, pentest tools, TryHackMe, hands-on practice.

---

## 🎯 Project Objective

Demonstrate practical skills in **Server Hardening**, **Network Reconnaissance**, and **Security Tools** (Nmap, Hydra, John, Metasploit). For aspiring SOC Analysts and Security Engineers.

---

## 📺 Video Index

| Playlist | Topics | Status |
|:---------|:-------|:------:|
| **SOC Labs** | UFW, SSH, Banners, Agent Forwarding, Fail2Ban | 01–04 ✅ · 05–06 ⏳ |
| **Nmap** | Discovery, Port Scan, Scripts | ⏳ |
| **Pentest Tools** | Hydra, John, Hashcat | ⏳ |

### SOC Labs
| # | Lab | Video |
|:--|:----|:------|
| 01 | Firewall (UFW) | [▶️](https://youtu.be/zgGrlMZAEcM) |
| 02 | SSH Keys | [▶️](https://youtu.be/ULZVP8h6Uvc) |
| 03 | Security Banners | [▶️](https://youtu.be/ILBxHbIw74Y) |
| 04 | SSH Agent Forwarding | [▶️](https://youtu.be/NOCivaFgoXc) |
| 05 | Fail2Ban | ⏳ |
| 06 | Final Automation | ⏳ |

---

## 📁 Structure

### Linux Hardening (SOC Labs)
| # | Lab | Focus |
|:--|:----|:------|
| 01 | [Firewall (UFW)](./Linux-Hardening/Lab01-UFW/) | Default Deny, Rate Limiting |
| 02 | [SSH Keys](./Linux-Hardening/Lab02-SSH-Hardening/) | Key-based Auth |
| 03 | [Security Banners](./Linux-Hardening/Lab03-SSH-Banners/) | MOTD, Legal |
| 04 | [SSH Agent Forwarding](./Linux-Hardening/Lab04-SSH-Agent-Forwarding/) | Jump Servers |
| 05 | [Fail2Ban](./Linux-Hardening/Lab05-Fail2Ban/) | Brute-force Protection |
| 06 | [Final Automation](./Linux-Hardening/Lab06-Final-Automation/) | All-in-one Script |

### Pentest & Recon
| Tool | Sections |
|:-----|:---------|
| [Nmap](./Pentest/nmap/) | [01 Discovery](./Pentest/nmap/01-discovery/) — Host discovery, TCP SYN ping |
| [Hydra](./Pentest/hydra/) | SSH, HTTP, FTP (⏳ planned) |

In pentest folders: `README.md`, `commands.md` (flag cheat sheet from video), scripts.

---

## 📋 Lab Order (SOC)

1. **Lab 02** (SSH Keys) — add your key first  
2. **Lab 03** (Banners) — SSH port 2222  
3. **Lab 01** (UFW) — open port 2222  

---

## ⚙️ Quick Deploy

```bash
git clone https://github.com/jokeez/SOC-Analyst-Training-Lab.git
cd SOC-Analyst-Training-Lab
# See lab docs for scripts
```

---

## 🌐 Portfolio

**[MiroslavSec](https://jokeez.github.io/SOC-Analyst-Training-Lab/)** — Labs, TryHackMe, Videos, Connect.

Videos on the site are loaded from `docs/data/videos.json`. To have new YouTube uploads appear automatically, set the repository variable **`YOUTUBE_CHANNEL_ID`** (Settings → Secrets and variables → Actions → Variables). Get your channel ID in YouTube Studio → Settings → Advanced. The workflow runs every 6 hours and on manual trigger.
