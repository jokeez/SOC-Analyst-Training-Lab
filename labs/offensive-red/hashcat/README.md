# Hashcat

**Offline hash recovery** in a **lab-only** setting: you work on **hashes you generated yourself** (or other explicitly authorized material). This track continues the **Hydra** storyline: *online guessing* vs *offline cracking* — same purple rule: **pair every offensive step with detection and hardening**.

All docs and on-screen text for this series are **English**; command lines can be shown as text overlays in editing.

## Position vs Hydra


| Hydra                                      | Hashcat                              |
| ------------------------------------------ | ------------------------------------ |
| Targets **live services** (SSH, HTTP, FTP) | Works on **captured hash strings**   |
| Rate limits / lockouts / network logs      | GPU/CPU throughput, wordlists, rules |
| “Try passwords online”                     | “Try passwords offline on a digest”  |


## Track rules

- **Authorization:** only hashes from **your own** generators (e.g. `mkpasswd`, Python, test VMs) or public **capture-the-flag** style examples where rules allow it.
- **No** cracked production credentials, **no** dumps from real breaches in this repo.
- One lab = one **skill slice** (modes, wordlists, rules, or benchmark) — not a full password-cracking course in one folder.
- Every lab ends with **Blue**: password policy, MFA where online auth matters, hash choice (bcrypt/Argon2), monitoring for **credential theft** that enables offline cracking.

## Sections (skeleton)


| #   | Folder                                                  | Description                                                | Video      |
| --- | ------------------------------------------------------- | ---------------------------------------------------------- | ---------- |
| 01  | [01-baseline-local-hashes](./01-baseline-local-hashes/) | Workflow: identify hash type, wordlist run, output hygiene | 🎬 Planned |


Further labs (02+) can cover rules, masks, or GPU notes — add folders when you lock the recording outline.

## Quick links

- [Back to Red Team labs](../README.md)
- [Command index](./commands.md)
- [Main video index](../../../README.md#-video-index)