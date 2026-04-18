# Hashcat — command index (lab track)

Use the per-lab `commands.md` inside each numbered folder when it exists. This file is a **track-level** cheat sheet only.

## Common patterns (lab-safe)

```bash
# Identify hash type (example; paths are illustrative)
hashcat --example-hashes | grep -i bcrypt

# Benchmark (local machine, no target material)
hashcat -b

# Crack with wordlist (only on hashes you own / are authorized to test)
hashcat -m <mode> -a 0 hashes.txt wordlist.txt
```

## Flags to document per lab

- `-m` — hash mode (see `hashcat --help` / example hashes).
- `-a` — attack mode (0 straight, 1 combinator, …).
- `--force` — sometimes needed on odd OpenCL setups; document **why** if you use it.

## Safety

Never paste real organizational hashes into the public repo. Keep `artifacts/` to **local** copies only (see `.gitignore` at track level if added later).
