# Nmap 05: Output and Reporting

## Objective

Save scan artifacts for comparison, reporting, and future audits.

## Core Commands

```bash
nmap -oN scan.txt <target>
nmap -oA baseline <target>
```

## Quick Start Script

```bash
chmod +x nmap-output-reporting.sh
./nmap-output-reporting.sh <target>
```

## Defensive Note

- Keep baseline snapshots by date.
- Compare old and new reports to detect drift.
- Track changes as part of regular security reviews.
