# Lab 01: Network Hardening with UFW 🛡️

This lab focuses on securing a Linux server's entry points by configuring the **Uncomplicated Firewall (UFW)**. 

### 🎯 Objective
Minimize the server's "attack surface" by implementing a **Default Deny** policy and protecting critical services from automated brute-force attacks.

### 🛠 Security Features in `setup-ufw.sh`:

*   **Default Deny Policy**: Sets the fundamental security posture: `deny incoming` (nothing gets in unless explicitly allowed) and `allow outgoing`.
*   **Custom SSH Port (2222)**: Moving SSH from the default port 22 to **2222** helps evade 99% of common script-kiddie scans and automated bots.
*   **Rate Limiting (`ufw limit`)**: Unlike a standard `allow`, the `limit` rule automatically blocks IP addresses that attempt multiple connections in a short window. This is a crucial defense against SSH brute-forcing.
*   **Web Standard Access**: Opens ports 80 (HTTP) and 443 (HTTPS) for web traffic.
*   **Active Monitoring**: Enables UFW logging, which is essential for a **SOC Analyst** to monitor suspicious traffic in `/var/log/ufw.log`.

### 🚀 Usage Instruction
1. Make the script executable:
   ```bash
   chmod +x setup-ufw.sh
