// Project data.
//
// RULE FOR THIS FILE: every metric here must be reproducible from the repo,
// a live service, or a measurement I can re-run. If a number cannot be
// backed up in an interview, it does not belong here. Projects that are
// still in progress say so via `status` rather than borrowing future numbers.

export type ProjectStatus = "live" | "complete" | "in-progress" | "design";

export interface ProjectMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface ProjectSection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  status: ProjectStatus;
  accent: string; // tailwind color stem, e.g. "emerald"
  github?: string;
  demo?: string;
  tech: { name: string; category: string }[];
  metrics?: ProjectMetric[];
  sections: ProjectSection[];
  featured?: boolean;
  order: number;
}

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Live in production",
  complete: "Complete",
  "in-progress": "In progress",
  design: "Design phase",
};

export const projects: Project[] = [
  {
    slug: "checkpulse",
    title: "CheckPulse",
    tagline:
      "Multi-region uptime, DNS, and SSL monitoring for agencies. Deployed, public, and handling real traffic.",
    category: "SaaS / Platform",
    status: "live",
    accent: "emerald",
    github: "https://github.com/BetV3/UptimeBot",
    demo: "https://checkpulse.dev",
    order: 1,
    featured: true,
    tech: [
      { name: "FastAPI", category: "API" },
      { name: "PostgreSQL", category: "Storage" },
      { name: "Redis", category: "Cache / Broker" },
      { name: "Celery", category: "Scheduling" },
      { name: "Docker Compose", category: "Deploy" },
      { name: "Cloudflare Tunnel", category: "Ingress" },
      { name: "Stripe", category: "Billing" },
      { name: "Jinja2 + Tailwind", category: "Dashboard" },
    ],
    metrics: [
      { label: "Regions", value: "3", subtext: "US / EU / Asia probes" },
      { label: "Consensus", value: "2+", subtext: "regions must agree to alert" },
      { label: "Alert channels", value: "5", subtext: "Slack, Discord, Telegram, email, webhook" },
      { label: "Containers", value: "7", subtext: "on a single 1.9 GB VPS" },
    ],
    sections: [
      {
        heading: "What it does",
        body: [
          "CheckPulse monitors uptime, DNS resolution, and SSL certificate health for agencies that are contractually on the hook for a portfolio of client websites. Each client gets a brandable public status page; alerts fan out to Slack, Discord, Telegram, email, or a webhook.",
          "It is deployed and publicly reachable at checkpulse.dev, running as seven containers behind a Cloudflare tunnel with no inbound ports open on the host.",
        ],
      },
      {
        heading: "The design decision I care about: consensus before alerting",
        body: [
          "Single-probe monitors cry wolf. A blip between one probe and one target produces a 3am page for an outage that never happened, and after enough false alarms people stop reading the alerts — which is worse than having no monitoring at all.",
          "CheckPulse runs probes from three regions and only transitions a monitor to DOWN when at least two regions independently agree. That trades a small amount of detection latency for alerts that are worth waking up for. The check workers are Celery tasks; region agreement is resolved in the incident detector rather than in the probe, so adding a fourth region is a config change rather than a rewrite.",
        ],
      },
      {
        heading: "Running seven containers in 1.9 GB",
        body: [
          "The whole stack lives on one small VPS: API, worker pool, beat scheduler, Postgres, Redis, the tunnel connector, and the dashboard. Memory is the binding constraint, not CPU.",
          "That constraint drove real choices — Postgres tuned down from its defaults, worker concurrency capped so Celery prefetch cannot balloon resident memory, and no per-service observability sidecars. It is a useful exercise in sizing a system for the box you actually have instead of the box you would like to have.",
        ],
      },
      {
        heading: "Incident: the signup form became someone else's email validator",
        body: [
          "Between April and July 2026, roughly 1,191 accounts were created by a bot walking an alphabetical list of corporate email addresses. It was not trying to use the product. It was using my verification email as an oracle: submit an address, see whether the mail bounces, learn whether the mailbox is real.",
          "The damage was not CPU or storage, it was sender reputation — three months of unsolicited verification mail went out from the transactional domain, with my DKIM signature on it.",
          "The fix was a Cloudflare Turnstile gate on every endpoint that can trigger an outbound email, and a split between the transactional sending domain and any other mail. The fake accounts are quarantined rather than deleted so the abuse pattern stays auditable.",
          "The general lesson: any unauthenticated endpoint that sends mail to an attacker-supplied address is an email validation service you are operating for free, and you will not notice from your own dashboards — the traffic looks like growth.",
        ],
      },
      {
        heading: "Honest status",
        body: [
          "Three real user accounts, zero paying customers. Stripe is wired up with Free / $12 / $49 tiers and one checkout was started and abandoned.",
          "I am listing it because the engineering is real and deployed, not because it has traction. It does not.",
        ],
      },
    ],
  },
  {
    slug: "fleet-watchdog",
    title: "Fleet Watchdog",
    tagline:
      "A ~250-line Python watchdog that runs on a different host from the agent fleet it watches, built after a cron job failed 970 times in four days and alerted exactly once.",
    category: "Infrastructure / Reliability",
    status: "live",
    accent: "amber",
    order: 2,
    featured: true,
    tech: [
      { name: "Python", category: "Language" },
      { name: "System cron", category: "Scheduling" },
      { name: "SSH", category: "Access" },
      { name: "Discord webhooks", category: "Alerting" },
      { name: "keepalived (VRRP)", category: "High availability" },
      { name: "Langfuse", category: "Observability" },
      { name: "ClickHouse", category: "Datastore" },
    ],
    metrics: [
      {
        label: "Silent failure streak",
        value: "970",
        subtext: "consecutive failed runs over four days, one alert on the first",
      },
      {
        label: "Same bug, different layers",
        value: "4",
        subtext: "components in one stack reported success while doing nothing",
      },
      {
        label: "Signals watched",
        value: "23",
        subtext: "5 HTTP, 6 SSH, 11 DNS/keepalived, plus every cron job's last run",
      },
      {
        label: "Dead man's threshold",
        value: "20 min",
        subtext: "~4 missed runs before the other host reports the watchdog gone",
      },
    ],
    sections: [
      {
        heading: "The pattern I kept hitting",
        body: [
          "Four separate times in one stack, a component told me it was working while doing nothing at all. A cron job that sat in a clean skipped state while failing. An observability plugin listed as enabled that wrote no data. A DNS health check that passed no matter how broken DNS was. An alert sender that returned without an error and delivered nothing. Different technologies, same bug: the success path and the working path had come apart, and only the success path was visible.",
          "A component that crashes is the easy case. It leaves a stack trace, it fails a check, someone gets paged. A component that reports success and does nothing produces exactly the same signal as a component that is fine, so the only thing that finds it is a person going to look. In the worst of these, nobody looked for four days.",
          "After the fourth one I stopped treating them as four incidents and started treating them as one failure class. The monitoring I built assumes that a component's own report of its health is the least trustworthy signal I have.",
        ],
      },
      {
        heading: "Four ways the same failure showed up",
        body: [
          "The cron job jobs-worker was scheduled every five minutes on weekdays. It failed 970 consecutive times over four days. An alert fired on the first failure and then never again, because the job settled into a skipped state and stayed there. The reason nobody heard about failures 2 through 970 is that the alerting lived inside the same agent runtime as the job it was watching. When that runtime stopped doing useful work, it also stopped complaining.",
          "An observability plugin showed as enabled in the plugin list and was fully configured with credentials. It recorded nothing. The langfuse SDK was not present in the virtualenv, and the plugin failed open: missing import, no error, silent no-op. Working out why the install had not taken, I found that 3 of the 4 virtualenvs had no pip at all, because uv had created them. The install had failed as quietly as the plugin did.",
          "A keepalived health check ran dig against an internal name, and keepalived reads only the exit code. On the live boxes I measured what dig actually returns: exit 0 on NXDOMAIN, 0 on SERVFAIL, 0 on REFUSED. Only a dead port gave exit 9. So the check could detect that the DNS process was gone and literally nothing else. If the authoritative server died while the resolver stayed up, every internal name would come back NXDOMAIN, the check would still pass, and the virtual IP would stay parked on the broken node.",
          "The fourth one was in the watchdog itself. It posted alerts to a Discord webhook using Python's urllib. Discord sits behind Cloudflare, which rejects urllib's default User-Agent with error 1010 and an HTTP 403. curl worked, urllib did not. The watchdog ran on schedule, looked healthy, and delivered zero alerts. Setting an explicit User-Agent fixed it. I only caught it because I tested delivery instead of trusting that the send code had run.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "watchdog.py is about 250 lines of Python. It runs on a different host from the fleet it watches, under plain system cron every five minutes. It deliberately does not run under the agent framework's own scheduler, because a watchdog that shares a runtime with what it watches dies silently alongside it. That is precisely how the first outage stayed invisible for four days.",
          "It covers 23 signals: 5 HTTP endpoint checks, 6 SSH liveness checks, 11 DNS and keepalived checks, and the last-run status of every agent cron job. Alerts go to Discord. It connects using its own dedicated SSH key rather than mine, so revoking the watchdog's access touches nothing else.",
          "Every alert carries a stable ID of the form WD-XXXX, derived deterministically by hashing the check key, so the same problem gets the same ID across runs, restarts and weeks. That is a small detail that pays off in conversation: I can say fix WD-08A0 a month later and it still points at exactly one check.",
          "It caught a real cron drift failure on its first run.",
        ],
      },
      {
        heading: "Two hosts watching each other",
        body: [
          "A watchdog on a separate host is still a single host. If the watchdog host dies, alerting dies with it, and silence looks exactly like health — the same failure shape as the original 970-failure outage, one level up.",
          "So a second script runs on the original host on a */10 cron and checks one thing: the age of the watchdog's state file on the watchdog host. If that file is older than 20 minutes, roughly four missed runs, it alerts. Host A watches host B, host B watches host A, so whichever one dies, the other one notices. It is the inverse of the watchdog rather than a copy of it, and it is the piece that makes the watchdog's own failure detectable.",
        ],
      },
      {
        heading: "Proving the alerts actually fire",
        body: [
          "Every failure above reported success, so I did not take the watchdog's word for its own behaviour either.",
          "I injected a deliberately dead check. The alert fired exactly once. The second run stayed silent, so a stuck problem does not turn into repeat spam. Removing the check produced exactly one recovery message. I then backdated the watchdog's state file to exercise the dead man's switch and got the same three results: one alert, silence on the second run, exactly one recovery.",
          "The observability plugin got the same treatment. I counted rows in ClickHouse before and after a real agent turn, and the count went from 1 to 3. Reading enabled in the plugin list is what fooled me the first time, so the fix does not count until data lands somewhere I can count it.",
        ],
      },
      {
        heading: "Honest status",
        body: [
          "This watches a personal nine-agent fleet, not a commercial production system. The traffic is mine and the cost of a missed alert is mine. I am listing it because the failure analysis and the design decisions are real, not because it operates at scale.",
          "One gap is still open, and it is the one that matters most: the job never ran at all, as distinct from the job ran and failed. Everything described here inspects the result of something that executed. Catching a job that quietly stopped being scheduled needs push heartbeat monitors. The Uptime Kuma container is running and has no monitors configured, which is the same shape of problem as a plugin that shows enabled and records nothing.",
          "There is also no alerting on cost thresholds yet, even though the data is available. I know about it and I have not built it.",
        ],
      },
    ],
  },
  {
    slug: "ha-dns",
    title: "Highly Available DNS Pair",
    tagline:
      "Two PowerDNS nodes behind a keepalived VIP. Replication was silently dead, two health checks in a row could not return failure, and only a real failover test caught the second one.",
    category: "Infrastructure / Networking",
    status: "live",
    accent: "sky",
    order: 3,
    tech: [
      { name: "PowerDNS Recursor", category: "Client-facing resolver" },
      { name: "PowerDNS Authoritative", category: "Internal zones" },
      { name: "keepalived / VRRP", category: "Failover" },
      { name: "SQLite", category: "Zone storage" },
      { name: "systemd-networkd / netplan", category: "Host networking" },
      { name: "Bash + dig", category: "Health checks" },
    ],
    metrics: [
      {
        label: "Failover probes",
        value: "20/20",
        subtext: "correct answers during an induced failover",
      },
      {
        label: "VIP release",
        value: "~4 s",
        subtext: "from check failure to keepalived FAULT",
      },
      {
        label: "VIP moves",
        value: "13",
        subtext: "keepalived state transitions in 30 days",
      },
      {
        label: "Broken health checks",
        value: "2",
        subtext: "the original, and my own replacement",
      },
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "Two DNS servers share a virtual IP through keepalived/VRRP. Clients only ever talk to the virtual address, and whichever node currently holds it answers.",
          "Each node runs two PowerDNS daemons split by port: a recursor on :53 that clients query and that validates DNSSEC, and an authoritative server on :5300 that is internal only. The recursor forwards the internal zones to the local authoritative server and recurses everything else. PowerDNS 5.0.2 on a sqlite backend.",
          "I did not design that split and I am not claiming it. It was already in place and it is sound. What I did was check whether the failover wrapped around it actually worked, and it did not.",
        ],
      },
      {
        heading: "The serials agreed and the data did not",
        body: [
          "The main zone was kind NATIVE on the primary and SLAVE on the secondary. NATIVE tells PowerDNS that the underlying database is replicated out of band, so it sends no NOTIFY messages at all. There was no out-of-band replication — no cron job, no timer, no script on either box.",
          "Someone had added a record without bumping the zone serial. Both nodes advertised the same serial while serving different data, and a secondary only pulls a fresh copy when the primary's serial is higher, so it could never resync. Nothing was failing. It was doing exactly what it was configured to do and staying wrong indefinitely.",
          "The proof I captured before changing anything: querying the primary for the drifted record returned an address, the same query against the secondary returned empty, and both SOA serials read identically. A zone transfer diff showed exactly one record difference.",
          "What was already correct matters here. The primary flag, the also-notify target, and the zone transfer ACL were all set properly — the zone KIND was the entire bug. Setting it to MASTER, bumping the serial and forcing a NOTIFY fixed it, and afterwards all four zones verified at matching serials.",
          "That drift only bites if the virtual IP actually moves, and it does. keepalived logged 13 state transitions in the preceding 30 days, the most recent when the network interface dropped for about three minutes. Every one of those silently changed which answers the network received. Preemption is not disabled, so the primary grabs the IP straight back on recovery — the address flaps between two servers holding different data.",
        ],
      },
      {
        heading: "Two health checks that could not fail",
        body: [
          "keepalived decided whether the node was healthy by running dig against a local name and reading the exit code, which is the only thing keepalived looks at. I measured what dig actually exits with on these boxes: 0 on NXDOMAIN, 0 on SERVFAIL, 0 on REFUSED. Only a dead port produced a non-zero status, 9.",
          "So the check answered exactly one question — is the recursor process still running. If the authoritative server died while the recursor stayed up, every internal name would return NXDOMAIN, the check would keep passing, and the virtual IP would stay parked on the broken node. A check that cannot return failure for the failure you care about is not a health check, it is a process monitor with a misleading name.",
          "My replacement was wrong in the same family. It asserted that the output of dig was non-empty. dig writes its communications errors to stdout, not stderr, so the variable was non-empty precisely when the server was down. I had written a check that passed harder as things got worse.",
          "The version that shipped checks dig's exit status and then validates the shape of the answer: an SOA record has to have seven fields with a numeric serial. The comment I left in the script is the lesson — never trust dig's stdout without also checking its exit status.",
        ],
      },
      {
        heading: "Breaking it on purpose",
        body: [
          "A failover pair is a hypothesis until you break it. I only found the second bad health check because I stopped the authoritative server on the primary and watched what the check returned: 0, with the server verifiably down. Reading the script again would not have shown me that. The green status was the thing that was wrong.",
          "With the corrected check in place I ran the test again. Stopped the authoritative server on the primary node. The health check returned 1. keepalived entered FAULT state and released the virtual IP in about four seconds, and the secondary took over.",
          "Running alongside it was a probe loop querying the virtual IP every two seconds for 40 seconds, spanning the failure and the recovery: 20 consecutive probes, zero failed queries, every one returning the correct address.",
          "That is one test on a small system and I would not call it proof of availability. It is the difference between believing failover works and having watched it work once, under a failure I chose and timed.",
        ],
      },
      {
        heading: "The outage I caused",
        body: [
          "I took the secondary off the network for about two hours and twenty minutes, and it was entirely my own doing. While applying a resolver configuration change I wrote the netplan YAML with mode 600.",
          "netplan propagates that mode to the file it generates under /run/systemd/network/, and systemd-networkd runs as its own user, not root. It could not read its own generated config. The journal recorded the whole thing in three lines: permission denied opening the generated network file, then reconfiguring with the dracut default, then acquiring a DHCPv4 address. With its real config unreadable the host fell through to the dracut initramfs DHCP catch-all and picked up a random address — while still holding the virtual IP. For a moment both nodes answered for the same address: a genuine split brain, caused by a file permission. DNS service was never interrupted, because the primary held the IP throughout. That is not a mitigation I designed.",
          "The trap is that netplan warns at mode 644 that permissions are too open, and silently breaks at 600. The warning points the opposite direction from the failure.",
          "I root-caused it by reading the systemd-networkd journal rather than guessing at it, which is the one part of this I would repeat. Recovery over SSH narrowed the options: netplan apply tears the interface down and is a console-required operation, not something to run on a host you are reaching through that interface. Adding an address with ip addr add is additive and cannot drop the link, so it is safe remotely, and networkctl reload re-reads configuration without touching links. I used those. keepalived needed a restart too — it cannot bind a unicast source address that does not exist, which is why it had been sitting as MASTER holding an address it should not have had.",
        ],
      },
      {
        heading: "The rest of the hardening",
        body: [
          "keepalived was silently refusing to run health-check scripts at all without script security enabled. I caught that by validating the config before reloading rather than after, which is the entire reason that check exists.",
          "VRRP authentication was added. keepalived truncates the auth password to exactly eight characters, so it has to be exactly eight or the two nodes silently disagree.",
          "The service unit had Restart=no and now has Restart=always. Reverse DNS records and 18 forward records were added for hosts that previously had no names at all.",
        ],
      },
      {
        heading: "Honest limitations",
        body: [
          "This is a homelab DNS pair serving a personal network, not a commercial production system. What I am claiming is the defects found and the testing that found them, not the scale of the thing.",
          "One defect is still open, deliberately. Neither nameserver can resolve its own zone through the system resolver — both point at a router that does not know the internal zone. Fixing that is the exact class of change that caused the outage above, so it waits until I can do it with console access instead of over SSH. Deferring it with a stated reason is a better answer than doing it a second time from the wrong end of the network.",
        ],
      },
    ],
  },
  {
    slug: "verified-backups",
    title: "Restore-Tested Backups",
    tagline:
      "Nightly restic backups to a host on different physical hardware, proven by an actual restore: 9,849 messages read back out of the restored database.",
    category: "Infrastructure / Data",
    status: "live",
    accent: "violet",
    order: 4,
    tech: [
      { name: "restic", category: "Backup engine" },
      { name: "PostgreSQL", category: "Dumped databases" },
      { name: "SQLite", category: "Dumped databases" },
      { name: "Python", category: "SQLite .backup API" },
      { name: "cron", category: "Scheduling" },
    ],
    metrics: [
      {
        label: "Databases with a copy",
        value: "5",
        subtext: "three Postgres, two SQLite; it was one",
      },
      {
        label: "Restore test",
        value: "9,849",
        subtext: "messages read back out of a restored copy, across 316 sessions",
      },
      {
        label: "Dead man's switch",
        value: "20 min",
        subtext: "stale watchdog state before the other host alerts",
      },
      {
        label: "Offsite copies",
        value: "0",
        subtext: "everything is in one building",
      },
    ],
    sections: [
      {
        heading: "What it does",
        body: [
          "Every night at 02:40, restic snapshots the main agent host to a second host and prunes to a retention window of 14 daily, 8 weekly, and 6 monthly snapshots. Before this existed, exactly one database had a backup of any kind. Conversation state, the agent working directories, and the orchestrator database had zero copies.",
          "Three PostgreSQL databases are dumped fresh on each run. Two SQLite databases, the largest a 64 MB conversation database, are captured through Python's .backup API rather than copied off disk. That distinction matters: copying a live SQLite file while its write-ahead log is active gives you a corrupt snapshot, and you find that out at restore time, which is the worst time to find it out.",
          "The run also tars up the git vault's bare remote, which is otherwise a single point of failure in its own right, along with agent directories, cron definitions, and config files. Virtualenvs, build caches and logs are excluded, since they rebuild from source and would crowd out things that do not.",
        ],
      },
      {
        heading: "A backup that has never been restored is a hypothesis",
        body: [
          "Most backups are untested. The job runs, the log says success, and nobody has ever tried to bring the data back, so what you actually hold is a belief about your data rather than a copy of it.",
          "So I restored it. The restore goes to a scratch directory and the script checks four things: restic's repository integrity check returned no errors were found; the restored conversation database opened and answered a query with 9,849 messages across 316 sessions; SQLite's integrity check on that same restored file returned ok; and the restored PostgreSQL dump was confirmed to be a valid archive containing 132 entries.",
          "The row counts are the part I care about. A restore that produces files is not the same as a restore that produces a working database, and the gap between the two does not show up until you query it.",
          "This is a script, not something I did once and wrote down. Any change to the backup job can be followed by a re-run, which is the only reason the numbers on this page are worth quoting.",
        ],
      },
      {
        heading: "Why the copy sits on different physical hardware",
        body: [
          "The main agent host, the database host, the task queue, and all four worker VMs run on a single physical host. That is acceptable for a lab, but it means one machine failing takes the entire critical path with it.",
          "So the backup target was placed on a different physical hypervisor. A backup that dies alongside the thing it was backing up is not a backup, and a second VM on the same box would have looked like redundancy on the diagram while providing none of it.",
        ],
      },
      {
        heading: "The dead man's switch: each host watches the other",
        body: [
          "The monitoring watchdog runs on the backup host and watches the agent host. That arrangement has an obvious hole. If the backup host dies, alerting dies with it and nothing is left to say so, and silence looks exactly like health.",
          "I know what that costs here. An agent job in this same fleet once failed 970 times in a row over four days. It alerted on the first failure and then went quiet, and the quiet read as fine.",
          "The fix is a second script that runs on the original host on a */10 cron and checks one thing: the age of the watchdog's state file on the backup host. If that file is older than 20 minutes, roughly four missed runs, it alerts. It is deliberately the inverse of the main monitor. The watchdog on host B watches host A, and this watches the watchdog on host B, so either host going dark is noticed by the other.",
          "I tested it by backdating the state file. The alert fired, the second run stayed silent instead of repeating itself, and recovery was sent exactly once.",
        ],
      },
      {
        heading: "What this does not cover",
        body: [
          "There is no offsite copy. Both hosts are in the same building, so a fire takes the originals and every snapshot with them. The fix is not complicated, a cloud repository holding the small but critical subset, and I have not done it. Until I do, this protects against a disk or a host failing, not against the building.",
          "The destination has 26 GB of capacity, and that ceiling, rather than any policy I wrote, is the real constraint on what gets retained.",
          "The observability stack's own databases are not backed up. That is a deliberate call, since traces are replaceable. Its configuration is not replaceable, and that is covered.",
          "The repository password lives in a mode-600 file. A restic repository is encrypted, so losing that password means losing the backups outright with no recovery path. That is a real single point of failure, and it is the same property that makes the repository safe to leave sitting on another machine.",
        ],
      },
    ],
  },
  {
    slug: "distributed-log-analyzer",
    title: "Distributed Log Analyzer",
    tagline:
      "Go master-worker system that parses a 3.3 GB, 10M-line access log. 36s single worker, 6s at 8-11 workers.",
    category: "Distributed Systems",
    status: "complete",
    accent: "blue",
    github: "https://github.com/BetV3/Distributed-Multithreaded-Log-Analyzer",
    order: 5,
    featured: true,
    tech: [
      { name: "Go", category: "Language" },
      { name: "gRPC", category: "Coordination" },
      { name: "Goroutines / channels", category: "Concurrency" },
      { name: "Docker", category: "Packaging" },
    ],
    metrics: [
      { label: "Input size", value: "3.3 GB", subtext: "single access log" },
      { label: "Lines", value: "10M+", subtext: "parsed per run" },
      { label: "Single worker", value: "36 s", subtext: "measured baseline" },
      { label: "8-11 workers", value: "6 s", subtext: "~6x speedup" },
    ],
    sections: [
      {
        heading: "What it does",
        body: [
          "A master process splits a large web server access log into ranges and hands them to worker nodes over gRPC. Workers parse their range and return HTTP status code counts, which the master merges.",
          "The numbers above are measured on a real 3.3 GB / 10 million line log, not projected: 36 seconds with one worker, 6 seconds with 8 to 11 workers.",
        ],
      },
      {
        heading: "Where the speedup stops",
        body: [
          "Scaling is close to linear up to roughly 8 workers and then flattens. Past that point the job is no longer parse-bound — it is bound by reading the file and by the coordination chatter of handing out and collecting ranges.",
          "The interesting part of this project was not writing the parser, it was finding that ceiling with profiling and buffer tuning instead of guessing at it. Adding workers past the knee makes the run slower, which is the kind of result that only shows up if you actually measure.",
        ],
      },
    ],
  },
  {
    slug: "api-gateway",
    title: "API Gateway",
    tagline:
      "A Go gateway written from scratch: JWT auth with RBAC, layered rate limiting, round-robin load balancing, Prometheus metrics.",
    category: "Backend Services",
    status: "complete",
    accent: "orange",
    github: "https://github.com/BetV3/apigateway",
    order: 6,
    featured: true,
    tech: [
      { name: "Go", category: "Language" },
      { name: "Redis", category: "Distributed rate limiting" },
      { name: "JWT", category: "Auth" },
      { name: "Prometheus", category: "Metrics" },
      { name: "Docker", category: "Containers" },
    ],
    sections: [
      {
        heading: "What it does",
        body: [
          "A single entry point in front of multiple backend services. Requests pass through an explicit middleware chain — request ID, structured logging, authentication, rate limiting — before being routed to a backend by path prefix and balanced round-robin across healthy instances.",
          "Written from scratch in Go rather than configured on top of an existing proxy, because the point was to understand what a gateway actually has to do.",
        ],
      },
      {
        heading: "Two-layer rate limiting",
        body: [
          "Rate limiting runs in-memory first and falls back to Redis for limits that must hold across gateway replicas. The in-memory layer absorbs the common case without a network hop; Redis is only consulted when a limit is genuinely shared.",
          "The trade-off is deliberate and worth stating plainly: the in-memory layer means a burst can slightly exceed a global limit during the window before replicas reconcile. For protecting a backend from overload that is an acceptable error; for billing or quota enforcement it would not be.",
        ],
      },
      {
        heading: "No performance numbers here on purpose",
        body: [
          "I have not run a load test against this gateway on hardware I would be willing to quote, so there are no requests-per-second or p99 figures on this page. When I benchmark it properly, the numbers will go here with the method next to them.",
        ],
      },
    ],
  },
  {
    slug: "talos-platform",
    title: "Talos Kubernetes Platform",
    tagline:
      "Three Talos clusters across a 7-host vSphere estate. Design freeze, IP plan, and failure tests written before any VM exists.",
    category: "Infrastructure",
    status: "design",
    accent: "cyan",
    github: "https://github.com/BetV3/talos-platform",
    order: 7,
    tech: [
      { name: "Talos Linux", category: "OS" },
      { name: "Kubernetes", category: "Orchestration" },
      { name: "vSphere / ESXi", category: "Virtualization" },
      { name: "OpenTofu", category: "IaC" },
      { name: "govc", category: "Tooling" },
    ],
    metrics: [
      { label: "Clusters", value: "3", subtext: "mgmt / east / west" },
      { label: "Topology", value: "3+3", subtext: "control plane + workers each" },
      { label: "ESXi hosts", value: "7", subtext: "cluster Compute-01" },
      { label: "VLANs", value: "110/120/130", subtext: "one per cluster" },
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "Three immutable Talos Kubernetes clusters — a management cluster and two workload clusters — planned across my vSphere estate, each on its own VLAN with its own API VIP.",
          "This project is in its design phase and the page says so. What exists today is the part most homelab writeups skip: an architecture doc with an explicit failure model and stated non-goals, a full IP plan covering VLANs, pod and service CIDRs and static addresses, a host-to-VM placement map with DRS rules, a bootstrap runbook, a failure-test catalogue, and a secrets policy that keeps generated Talos configs and secrets out of git.",
        ],
      },
      {
        heading: "Why design-first",
        body: [
          "Talos has no SSH and no shell. You cannot fix a node by logging into it, which means the config has to be right before the machine boots. That property turns 'write the IP plan first' from good hygiene into a hard requirement, and it is the main reason I picked Talos for this.",
          "Deciding the failure model on paper — what happens when a host dies, when a VLAN drops, when etcd loses quorum — is also considerably cheaper than discovering it with 18 VMs already running.",
        ],
      },
    ],
  },
  {
    slug: "data-pipeline",
    title: "Data Pipeline Platform",
    tagline:
      "Kafka-based event pipeline built in explicit tiers. Producer, consumer, and metrics are working; the reliability tiers are not built yet.",
    category: "Data Engineering",
    status: "in-progress",
    accent: "purple",
    github: "https://github.com/BetV3/data-pipeline",
    order: 8,
    tech: [
      { name: "Apache Kafka", category: "Streaming" },
      { name: "Python", category: "ETL" },
      { name: "PostgreSQL", category: "Storage" },
      { name: "Docker Compose", category: "Local stack" },
      { name: "Prometheus", category: "Metrics" },
    ],
    sections: [
      {
        heading: "Where it actually is",
        body: [
          "The project is structured as four tiers, and I am partway through the second. T0 (local stack plus an end-to-end tracer-bullet flow) works. T1 adds a dead letter queue, schema evolution, backpressure handling, and basic observability — the producer and consumer with metrics are committed, the rest is in progress.",
          "T2 (multi-source ingestion, backfills, hot/cold storage, orchestration) and T3 (reliability drills, SLOs, scale tests, a capacity model) are planned and not started.",
        ],
      },
      {
        heading: "Why the tiers are public",
        body: [
          "It would be easy to describe this as a system 'handling millions of events per day'. It is not doing that, and I would rather the page match the repository.",
          "The tier structure is the honest version and I think it is also the more useful one: it states what reliability work is done, what is next, and what 'finished' means. Throughput numbers go on this page when T3 scale tests produce them.",
        ],
      },
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure Pipeline",
    tagline:
      "Terraform modules for provisioning AWS environments, wired to a CI deployment workflow.",
    category: "Infrastructure",
    status: "in-progress",
    accent: "amber",
    github: "https://github.com/BetV3/cloud-infrastructure-pipeline",
    order: 9,
    tech: [
      { name: "Terraform", category: "IaC" },
      { name: "AWS", category: "Cloud" },
      { name: "GitHub Actions", category: "CI/CD" },
      { name: "Python", category: "Tooling" },
    ],
    sections: [
      {
        heading: "What exists",
        body: [
          "Terraform configuration for provisioning AWS environments reproducibly, with a CI workflow that plans and applies changes rather than relying on anyone running Terraform from a laptop.",
          "This is a working but early module set, not a multi-region auto-scaling platform. It is listed at its real size.",
        ],
      },
    ],
  },
  {
    slug: "homelab",
    title: "Homelab Infrastructure",
    tagline:
      "A 7-host vSphere cluster that runs everything else on this page, managed through the vCenter API rather than the web UI.",
    category: "Infrastructure",
    status: "live",
    accent: "pink",
    order: 10,
    tech: [
      { name: "VMware vSphere 8", category: "Hypervisor" },
      { name: "vCenter", category: "Management" },
      { name: "govc", category: "API tooling" },
      { name: "Cloudflare Tunnel", category: "Remote access" },
      { name: "Linux", category: "Guests" },
    ],
    metrics: [
      { label: "ESXi hosts", value: "7", subtext: "cluster Compute-01" },
      { label: "CPU cores", value: "132", subtext: "aggregate physical" },
      { label: "Memory", value: "~607 GB", subtext: "aggregate" },
      { label: "VMs", value: "32", subtext: "at time of writing" },
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "A seven-host ESXi cluster under vCenter 8, totalling 132 physical cores and roughly 607 GB of RAM, currently running 32 VMs. These figures were read from the vCenter API when this page was written, not estimated.",
          "It is the substrate for the Talos platform, the data pipeline, and the build and automation hosts behind my other projects.",
        ],
      },
      {
        heading: "Managed through the API, with a scoped service account",
        body: [
          "Day-to-day operations go through the vCenter API rather than the web client. Automation authenticates as a dedicated service account bound to a custom role, and its mutating permissions are scoped to a single VM folder — so an automation bug can damage a sandbox, not the estate.",
          "Least privilege is easy to endorse and slightly annoying to implement, which is exactly why it is worth doing on your own infrastructure first. Getting the role definition wrong at home costs an afternoon.",
        ],
      },
      {
        heading: "Remote access with no inbound ports",
        body: [
          "Nothing in the lab is exposed by port forwarding. External access runs over Cloudflare tunnels, so the lab makes outbound connections and there is no inbound attack surface on my home IP.",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsSorted(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getProjectsSorted().filter((p) => p.featured);
}
