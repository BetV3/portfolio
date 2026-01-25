# Homelab Network Architecture

## Metadata
- **Status**: Production
- **Category**: Networking
- **GitHub**: https://github.com/USERNAME/REPO
- **Demo**: (none - internal infrastructure)

## Metrics
| Metric | Value | Subtext |
|--------|-------|---------|
| VLANs | X | network segments |
| Devices | XX+ | managed endpoints |
| Uptime | XX.X% | over past 12 months |
| Firewall Rules | XXX+ | active policies |

## Technology Stack
- pfSense / OPNsense (Firewall)
- Ubiquiti / Managed Switches (Switching)
- WireGuard / OpenVPN (VPN)
- Grafana (Monitoring)
- Prometheus (Metrics)
- Pi-hole / AdGuard (DNS)
- Docker (Services)
- Proxmox / ESXi (Virtualization)

## Overview
<!-- Why did you build this? What does your homelab accomplish? -->
An enterprise-grade network architecture implemented in a home environment, featuring proper network segmentation, firewall rules, VPN access, and comprehensive monitoring. This lab serves as both a learning environment and a production platform for self-hosted services.

The network follows defense-in-depth principles with multiple security layers, ensuring that a compromise in one segment cannot easily spread to others.

## Network Topology

### VLANs
<!-- List your actual VLANs -->
| VLAN ID | Name | Purpose | Subnet |
|---------|------|---------|--------|
| 10 | Management | Network infrastructure | 10.0.10.0/24 |
| 20 | Servers | Production services | 10.0.20.0/24 |
| 30 | Workstations | User devices | 10.0.30.0/24 |
| 40 | IoT | Smart devices (isolated) | 10.0.40.0/24 |
| 50 | Guest | Visitor access | 10.0.50.0/24 |
| 99 | DMZ | Public-facing services | 10.0.99.0/24 |

### Hardware
<!-- List your actual hardware -->
- **Firewall**: (Model/specs)
- **Core Switch**: (Model/specs)
- **Access Points**: (Model/specs)
- **Servers**: (Model/specs)
- **Storage**: (Model/specs)

## Security Architecture

### Firewall Rules Philosophy
<!-- Describe your approach -->
- Default deny all inter-VLAN traffic
- Explicit allow rules for required services
- Geo-blocking for inbound connections
- IDS/IPS for threat detection

### Key Security Features
- **Network Segmentation** - IoT devices cannot reach server VLAN
- **VPN-Only Remote Access** - No ports exposed except VPN
- **DNS Filtering** - Block malicious domains at network level
- **Certificate Management** - Internal CA for HTTPS everywhere

## Technical Implementation

### pfSense/OPNsense Configuration
<!-- Update with your actual rules -->
```
# Example firewall rule structure
VLAN30 (Workstations) -> VLAN20 (Servers)
  - Allow: TCP 443 (HTTPS)
  - Allow: TCP 22 (SSH)
  - Allow: TCP 5432 (PostgreSQL)
  - Deny: ALL (default)

VLAN40 (IoT) -> ANY
  - Allow: UDP 53 (DNS to Pi-hole only)
  - Allow: TCP 443 (HTTPS to internet)
  - Deny: ALL local networks
```

### WireGuard VPN Config
<!-- Update with your actual config (sanitized) -->
```ini
[Interface]
Address = 10.0.100.1/24
ListenPort = 51820
PrivateKey = <REDACTED>

[Peer]
PublicKey = <PEER_PUBLIC_KEY>
AllowedIPs = 10.0.100.2/32
```

### Monitoring Stack
<!-- Update with your actual setup -->
```yaml
# docker-compose.yml
services:
  prometheus:
    image: prom/prometheus
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"

  node-exporter:
    image: prom/node-exporter
```

## Services Hosted
<!-- List services running on your homelab -->
- **Service 1** - Description
- **Service 2** - Description
- **Service 3** - Description
- **Service 4** - Description

## Challenges & Solutions

### Challenge 1
- **Problem**: (e.g., IoT devices requiring cloud access while staying isolated)
- **Solution**: (Your solution)

### Challenge 2
- **Problem**: (e.g., Maintaining remote access securely)
- **Solution**: (Your solution)

### Challenge 3
- **Problem**: (e.g., Monitoring distributed across VLANs)
- **Solution**: (Your solution)

## Lessons Learned
1. **Lesson 1** - Description
2. **Lesson 2** - Description
3. **Lesson 3** - Description
4. **Lesson 4** - Description

## Future Improvements
- Improvement 1
- Improvement 2
- Improvement 3
- Improvement 4

## Network Diagram
<!-- Add path to your network diagram image -->
(Coming soon)
