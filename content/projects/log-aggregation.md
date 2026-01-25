# Log Aggregation System

## Metadata
- **Status**: Production
- **Category**: Observability
- **GitHub**: https://github.com/USERNAME/REPO
- **Demo**: (none)

## Metrics
| Metric | Value | Subtext |
|--------|-------|---------|
| Logs/Day | X GB | ingested daily |
| Sources | XX+ | log sources |
| Retention | X days | hot storage |
| Query Time | < X s | typical searches |

## Technology Stack
- Elasticsearch (Search & Storage)
- Logstash (Processing)
- Kibana (Visualization)
- Filebeat (Collection)
- Docker (Containers)
- S3 (Archive Storage)
- Kafka (Buffer - if used)

## Overview
<!-- Why did you build this? What logging problems does it solve? -->
A centralized logging solution built on the ELK stack that aggregates logs from all services and infrastructure components. The system provides fast full-text search, custom dashboards, alerting, and long-term storage optimization.

Designed to handle the logging needs of a growing infrastructure while keeping costs manageable through tiered storage and intelligent retention policies.

## Architecture

### Data Flow
<!-- Describe how logs flow through the system -->
```
[Applications] → [Filebeat] → [Logstash] → [Elasticsearch] → [Kibana]
                                  ↓
                            [S3 Archive]
```

### Components

#### Collection Layer
- **Filebeat** - Lightweight log shipper on each host
- **Docker logging driver** - Container log collection
- **Syslog receiver** - Network device logs

#### Processing Layer
- **Logstash** - Parse, transform, enrich logs
- **Grok patterns** - Structured field extraction
- **GeoIP enrichment** - Location data for IPs

#### Storage Layer
- **Hot nodes** - Fast SSDs for recent logs (X days)
- **Warm nodes** - HDDs for older logs (X days)
- **Cold/Archive** - S3 for long-term retention

#### Visualization Layer
- **Kibana** - Dashboards, search, alerting
- **Custom dashboards** - Per-service views
- **Alerting** - Anomaly detection and notifications

## Log Sources
<!-- List your actual log sources -->
| Source | Type | Volume | Retention |
|--------|------|--------|-----------|
| Application logs | JSON | X GB/day | X days |
| Nginx access logs | Combined | X GB/day | X days |
| System logs | Syslog | X GB/day | X days |
| Security logs | Mixed | X GB/day | X days |
| Database logs | Text | X GB/day | X days |

## Technical Implementation

### Filebeat Configuration
<!-- Update with your actual config -->
```yaml
filebeat.inputs:
  - type: container
    paths:
      - '/var/lib/docker/containers/*/*.log'
    processors:
      - add_docker_metadata: ~

  - type: log
    paths:
      - /var/log/nginx/access.log
    fields:
      type: nginx-access
    fields_under_root: true

output.logstash:
  hosts: ["logstash:5044"]

logging.level: warning
```

### Logstash Pipeline
<!-- Update with your actual pipeline -->
```ruby
input {
  beats {
    port => 5044
  }
}

filter {
  if [type] == "nginx-access" {
    grok {
      match => {
        "message" => '%{IPORHOST:client_ip} - %{USER:ident} \[%{HTTPDATE:timestamp}\] "%{WORD:method} %{URIPATHPARAM:request} HTTP/%{NUMBER:http_version}" %{NUMBER:status} %{NUMBER:bytes}'
      }
    }

    geoip {
      source => "client_ip"
      target => "geoip"
    }

    date {
      match => [ "timestamp", "dd/MMM/yyyy:HH:mm:ss Z" ]
    }
  }

  # Add common fields
  mutate {
    add_field => { "environment" => "${ENVIRONMENT}" }
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "logs-%{[type]}-%{+YYYY.MM.dd}"
  }
}
```

### Elasticsearch Index Template
<!-- Update with your actual template -->
```json
{
  "index_patterns": ["logs-*"],
  "template": {
    "settings": {
      "number_of_shards": 2,
      "number_of_replicas": 1,
      "index.lifecycle.name": "logs-policy",
      "index.lifecycle.rollover_alias": "logs"
    },
    "mappings": {
      "properties": {
        "@timestamp": { "type": "date" },
        "message": { "type": "text" },
        "level": { "type": "keyword" },
        "service": { "type": "keyword" },
        "trace_id": { "type": "keyword" },
        "client_ip": { "type": "ip" },
        "geoip": {
          "properties": {
            "location": { "type": "geo_point" }
          }
        }
      }
    }
  }
}
```

### Index Lifecycle Policy
<!-- Update with your actual policy -->
```json
{
  "policy": {
    "phases": {
      "hot": {
        "min_age": "0ms",
        "actions": {
          "rollover": {
            "max_size": "50gb",
            "max_age": "1d"
          }
        }
      },
      "warm": {
        "min_age": "7d",
        "actions": {
          "shrink": { "number_of_shards": 1 },
          "forcemerge": { "max_num_segments": 1 }
        }
      },
      "cold": {
        "min_age": "30d",
        "actions": {
          "searchable_snapshot": {
            "snapshot_repository": "s3-repository"
          }
        }
      },
      "delete": {
        "min_age": "90d",
        "actions": {
          "delete": {}
        }
      }
    }
  }
}
```

## Dashboards & Alerting

### Key Dashboards
<!-- Describe your dashboards -->
- **Overview** - Total log volume, error rates, top sources
- **Error Analysis** - Error trends, stack traces, affected services
- **Security** - Failed logins, suspicious IPs, access patterns
- **Performance** - Response times, slow queries, bottlenecks

### Alert Rules
<!-- Describe your alerts -->
- Error rate spike (>X% increase in 5 minutes)
- Disk space warnings (>X% used)
- Missing logs (no data from source in X minutes)
- Security events (failed logins, blocked IPs)

## Challenges & Solutions

### Challenge 1
- **Problem**: (e.g., Elasticsearch heap pressure during peak hours)
- **Solution**: (Your solution)

### Challenge 2
- **Problem**: (e.g., Log parsing failures for inconsistent formats)
- **Solution**: (Your solution)

### Challenge 3
- **Problem**: (e.g., Storage costs growing unsustainably)
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
