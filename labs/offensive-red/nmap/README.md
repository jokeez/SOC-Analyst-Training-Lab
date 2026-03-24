# Nmap

Focused Nmap learning track with short labs and clear blue-team takeaways.

## Track Rules

- One lab = one Nmap concept.
- No tool mixing inside this track.
- Every lab includes a defensive note (purple mindset).

## Sections

| # | Section | Description | Status |
|:--|:--------|:------------|:------:|
| 01 | [Discovery](./01-discovery/) | Host discovery — TCP SYN ping vs ICMP; `live-hosts.txt` workflow | ✅ |
| 02 | [SYN Scan](./02-syn-scan/) | `-sS -Pn` baseline scan | ✅ |
| 03 | [Service Detection](./03-service-detection/) | `-sV` and exposure review | ✅ |
| 04 | [Speed vs Depth](./04-speed-vs-depth/) | targeted ports vs full range | ✅ |
| 05 | [Output and Reporting](./05-output-reporting/) | `-oN`, `-oA`, baseline snapshots | ✅ |
| 06 | [Safe NSE Intro](./06-safe-nse/) | `--script safe` basics | ✅ |

## Shared Files

- [commands.md](./commands.md) - quick flags cheat sheet.
- [scripts/](./scripts/) - reusable Nmap scripts:
  - `nmap-scan.sh` (recon workflow)
  - `nmap-defend-check.sh` (defensive checks)
