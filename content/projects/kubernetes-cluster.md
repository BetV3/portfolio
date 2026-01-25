# Kubernetes Cluster Setup

## Metadata
- **Status**: Production
- **Category**: Container Orchestration
- **GitHub**: https://github.com/USERNAME/REPO
- **Demo**: (none)

## Metrics
| Metric | Value | Subtext |
|--------|-------|---------|
| Nodes | X | worker nodes |
| Pods | XX+ | running workloads |
| Namespaces | X | isolated environments |
| Deployments | XX | managed applications |

## Technology Stack
- Kubernetes (Orchestration)
- ArgoCD (GitOps)
- Helm (Package Management)
- Prometheus (Monitoring)
- Grafana (Visualization)
- Cert-Manager (TLS)
- Ingress-NGINX (Ingress)
- Longhorn / Rook-Ceph (Storage)

## Overview
<!-- Why did you build this? What workloads does it run? -->
A production-ready Kubernetes cluster implementing GitOps workflows for automated deployments. All application configurations are stored in Git, and ArgoCD ensures the cluster state matches the desired state defined in the repository.

The cluster runs on (bare metal / cloud VMs / managed service) and serves as the platform for deploying containerized applications with high availability and automated scaling.

## Cluster Architecture

### Node Configuration
<!-- List your actual nodes -->
| Role | Count | Specs | Purpose |
|------|-------|-------|---------|
| Control Plane | X | CPU/RAM/Storage | API server, etcd, scheduler |
| Worker | X | CPU/RAM/Storage | Application workloads |
| Storage | X | CPU/RAM/Storage | Persistent volumes |

### Namespaces
<!-- List your actual namespaces -->
- **argocd** - GitOps tooling
- **monitoring** - Prometheus, Grafana, Alertmanager
- **ingress-nginx** - Ingress controllers
- **cert-manager** - Certificate management
- **app-production** - Production workloads
- **app-staging** - Staging workloads

## GitOps Workflow

### Repository Structure
<!-- Update with your actual structure -->
```
k8s-gitops/
├── apps/
│   ├── production/
│   │   ├── app1/
│   │   ├── app2/
│   │   └── kustomization.yaml
│   └── staging/
│       ├── app1/
│       ├── app2/
│       └── kustomization.yaml
├── infrastructure/
│   ├── controllers/
│   │   ├── ingress-nginx/
│   │   └── cert-manager/
│   ├── monitoring/
│   │   ├── prometheus/
│   │   └── grafana/
│   └── storage/
│       └── longhorn/
└── clusters/
    └── homelab/
        ├── apps.yaml
        └── infrastructure.yaml
```

### ArgoCD Application
<!-- Update with your actual config -->
```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/USERNAME/k8s-gitops
    targetRevision: HEAD
    path: apps/production/my-app
  destination:
    server: https://kubernetes.default.svc
    namespace: app-production
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

## Technical Implementation

### Cluster Bootstrap
<!-- Describe how you bootstrapped the cluster -->
```bash
# Example: k3s installation
curl -sfL https://get.k3s.io | sh -s - server \
  --cluster-init \
  --disable traefik \
  --disable servicelb
```

### Helm Values Example
<!-- Update with your actual values -->
```yaml
# prometheus-stack values
prometheus:
  prometheusSpec:
    retention: 30d
    storageSpec:
      volumeClaimTemplate:
        spec:
          accessModes: ["ReadWriteOnce"]
          resources:
            requests:
              storage: 50Gi

grafana:
  adminPassword: <REDACTED>
  persistence:
    enabled: true
    size: 10Gi
```

### Ingress Configuration
<!-- Update with your actual config -->
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-app
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  ingressClassName: nginx
  tls:
    - hosts:
        - app.example.com
      secretName: app-tls
  rules:
    - host: app.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: my-app
                port:
                  number: 80
```

## Observability Stack

### Monitoring
- **Prometheus** - Metrics collection and alerting
- **Grafana** - Dashboards and visualization
- **Alertmanager** - Alert routing and silencing

### Logging
- **Loki** - Log aggregation (if used)
- **Promtail** - Log collection (if used)

### Key Dashboards
- Cluster overview (nodes, pods, resource usage)
- Application metrics (requests, latency, errors)
- Storage utilization
- Network traffic

## Challenges & Solutions

### Challenge 1
- **Problem**: (e.g., Persistent storage across node failures)
- **Solution**: (Your solution)

### Challenge 2
- **Problem**: (e.g., Secret management in GitOps)
- **Solution**: (Your solution - sealed secrets, external secrets, SOPS?)

### Challenge 3
- **Problem**: (e.g., Zero-downtime deployments)
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

## Architecture Diagram
<!-- Add path to your architecture diagram image -->
(Coming soon)
