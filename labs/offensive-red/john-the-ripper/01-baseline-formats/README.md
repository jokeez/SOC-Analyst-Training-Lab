# Lab 01 — Baseline: formats and wordlist

**Status:** skeleton — fill after recording.

## 1) Scenario

Show how John **identifies or accepts** hash formats you created locally, run a **small** wordlist, and print results with `--show`.

## 2) Scope & authorization

- Use **synthetic** hashes or a **throwaway** Linux user password hash from a VM **you** created for class.  
- No real organizational `shadow` files in Git.

## 3) Reproduction (Red)

```bash
# TODO: document john invocation + example hash file layout after recording
```

## 4) Remediation (Blue)

- Enforce **long passwords** + MFA for interactive logins (Hydra angle).  
- For **at-rest** secrets, prefer modern KDFs; monitor for **mass hash export** (backup tools, volume shadow abuse, DC sync).

## 5) Verification

- John reports cracked password matching your known test value.  
- Re-run with changed password hash and confirm behavior.

## 6) Artifacts

- Keep hash files **local** or redacted; optional `artifacts/.gitkeep` only in repo.

## 7) Defensive takeaway

- John/Hashcat are **symptoms tools** — the incident often started with **collection** of material worth cracking.

## 8) MITRE ATT&CK (example)

| Tactic | Technique | Note |
| ------ | --------- | ---- |
| Credential Access | T1110.002 — Password Cracking | Offline, CPU/wordlist focused |
