# 🔴 Red Team Labs (Offensive)

Hands-on offensive labs for controlled reconnaissance, service analysis, and safe attack-surface simulation.

## 🧭 Quick links

- [Nmap](./nmap/)
- [Hydra](./hydra/)
- [Back to Labs workspace](../README.md)

## 📦 Tool map


| Tool              | Focus area                                                  | Current state                     |
| ----------------- | ----------------------------------------------------------- | --------------------------------- |
| [Nmap](./nmap/)   | Discovery, SYN scan, service detection, reporting, safe NSE | ✅ Published block (01-06)         |
| [Hydra](./hydra/) | Brute-force simulation vs defensive controls                | 🚧 Lab 00 live, expansion planned |


## 📌 Folder standard

Each tool folder should contain:

- `README.md` for scope and safety boundaries
- `commands.md` for flags and quick command references
- scripts/artifacts that allow reproducible execution

Purple note: each offensive lab should map to at least one defensive control in the root traceability matrix.