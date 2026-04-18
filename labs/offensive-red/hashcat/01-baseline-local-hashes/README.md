# Lab 01 — Baseline: local hashes only

**Status:** skeleton — fill commands and screenshots when you record.

## 1) Scenario

Demonstrate a **repeatable offline workflow**: take a hash you **created yourself** from a known password, run Hashcat with a tiny wordlist, recover the password, and document what **defenders** should assume once hashes leak.

## 2) Scope & authorization

- **In scope:** hashes produced on your machine (e.g. from `mkpasswd`, Python `hashlib`, or a disposable Linux user you control).
- **Out of scope:** any hash from production, employers, schools, or third parties without written permission.

## 3) Reproduction (Red)

Document the exact commands you used (English labels for video overlays):

```bash
# TODO: add your lab-only hash generation + hashcat invocation after recording
```

## 4) Remediation (Blue)

- Password length / complexity policy, rotation where appropriate.  
- Prefer slow hashes (**bcrypt**, **Argon2**) for password storage.  
- Protect **hash sources** (backup tapes, AD database access, Kerberos tickets) — offline cracking starts after **theft or export**.

## 5) Verification

- Show `hashcat` reporting `Cracked` (or equivalent) for your **known** password.  
- Show that changing the password / salt changes the outcome.

## 6) Artifacts

- Local `artifacts/` (optional): keep **out of Git** — add hashes only to ignored paths or keep them in OBS/recording only.

## 7) Defensive takeaway

- Offline cracking is **parallel and silent** — detection shifts to **preventing hash collection** and **strong storage**.

## 8) MITRE ATT&CK (example)

| Tactic | Technique | Note |
| ------ | --------- | ---- |
| Credential Access | T1110.002 — Password Cracking | Offline against stolen hashes |
