# Nmap 04: Speed vs Depth

## Objective

Compare targeted scans and full-range scans.

## Core Commands

```bash
nmap -p 22,80,443 <target>
nmap -p- <target>
```

## Quick Start Script

```bash
chmod +x nmap-speed-vs-depth.sh
./nmap-speed-vs-depth.sh <target>
```

## Defensive Note

- Use targeted checks for quick validation.
- Run full scans periodically for baseline reviews.
- Alert on newly opened unexpected ports.
