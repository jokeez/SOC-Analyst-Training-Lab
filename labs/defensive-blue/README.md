# 🔵 Blue Team Labs (Defensive)

This folder contains defensive labs and SOC-oriented mini-cases focused on **detection**, **evidence**, and **validation** of controls. It complements the Red track: same Purple mindset, but the **primary lens is the analyst** (traffic, logs, triage), not the attack tool demo.

## 🧭 Quick links

- [Back to Labs workspace](../README.md)
- [Red Team labs](../offensive-red/)
- [Lab template](../LAB_TEMPLATE.md)
- [Main Purple matrix](../../README.md#-traceability-matrix-attack--defense)
- [Roadmap — near term](../../ROADMAP.md)

## 🧱 Planned blocks (baseline first)

Numbered labs will live here as `01-...`, `02-...` before any deep folder split. Initial topics:

1. **Wireshark — SOC triage baseline** — display filters, follow stream, export evidence; one narrow scenario per video/lab.
2. **Log timelines** — auth or service logs: burst vs steady noise, what to write in a one-page triage note.
3. **Control validation** — prove a mitigation or detection actually fires (replay or checklist), not only “we enabled it”.

Later: SIEM-style workflows (Elastic / Splunk / etc.), IR mini-cases, hardening verification checklists.

## 📌 Build standard

Each Blue lab should include:

1. Detection goal  
2. Data/log source (or PCAP)  
3. Rule/check logic (even if written as prose first)  
4. Validation steps  
5. Defensive takeaway  

Purple note: link each lab to a **Red technique or lab** where it makes sense (same event class, different camera angle). Example bridge: [Hydra Lab 00 — speed vs detection](../offensive-red/hydra/00-speed-vs-detection/) (live logs, rate limit, lockout — analyst-readable panel).

## Naming

- Use the shared [Lab template](../LAB_TEMPLATE.md) sections.  
- Prefer `README.md` + optional `commands.md` / small scripts inside each lab folder, same style as `labs/offensive-red/`.
