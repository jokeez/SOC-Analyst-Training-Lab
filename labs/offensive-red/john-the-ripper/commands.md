# John the Ripper — command index (lab track)

Per-lab copies of commands live next to each lab README when recorded.

## Common patterns (lab-safe)

```bash
# List formats (jumbo build may show more)
john --list=formats | head

# Basic wordlist run (example file names only)
john --wordlist=wordlist.txt hashes.txt

# Show cracked passwords for current session
john --show hashes.txt
```

## `unshadow` (Linux lab context)

When your **own** disposable VM allows it:

```bash
unshadow /etc/passwd /etc/shadow > local_combined.txt
# Then run john against local_combined.txt in an isolated snapshot only.
```

Never ship real `shadow` content in this repository.

## Safety

Treat `artifacts/` as **local-only**. Add specific `.gitignore` rules under each lab when you introduce files.
