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
  /** How the number was measured and when it was read. Shown under the card. */
  source?: string;
  /** A public artifact that reproduces or proves the figure. A specific file, not a repo root. */
  evidence?: string;
}

export interface ProjectSection {
  heading: string;
  body: string[];
  /** Optional diagram rendered after the prose. Path is relative to /public. */
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
}

/**
 * Recruiter-facing facts. Every field is optional so a project can leave out
 * anything it cannot source: a missing timeframe is better than a guessed one.
 */
export interface ProjectRecruiterFacts {
  /** e.g. "Solo: designed, built and operate" */
  role: string;
  /** Start to end or present, e.g. "Sep 2026 to present". Omit if unsourced. */
  timeframe?: string;
  /** Where the timeframe came from, e.g. "repo created 2026-03-24". */
  timeframeSource?: string;
  teamSize: string;
  /** One line. Written before any architecture prose. */
  outcome: string;
  problem: string;
  approach: string;
  result: string;
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
  recruiter?: ProjectRecruiterFacts;
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
    recruiter: {
      role:
        "Solo: designed, built, deployed and operate",
      timeframe:
        "Mar 2026 to present",
      timeframeSource:
        "repo created 2026-03-24, last push 2026-10-04",
      teamSize:
        "1",
      outcome:
        "A monitoring SaaS running in production on a 1.9 GB VPS, with a documented abuse incident and the fix that closed it.",
      problem:
        "Agencies that manage client sites are contractually responsible for uptime but get paged for blips a single probe imagines.",
      approach:
        "Probes from three regions, an incident detector that needs two regions to agree, Celery workers sized to the memory the box actually has, and a Cloudflare tunnel so the host opens no ports.",
      result:
        "Deployed and public. Three real accounts, no paying customers, and a sender-reputation incident (about 1,191 bot signups) that I detected, root-caused and gated with Turnstile. The page says all of that plainly.",
    },
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
      { label: "Containers", value: "7", subtext: "on a single 1.9 GB VPS", source: "docker compose ps on the VPS", evidence: "https://github.com/BetV3/UptimeBot" },
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
          "Single-probe monitors cry wolf. A blip between one probe and one target produces a 3am page for an outage that never happened, and after enough false alarms people stop reading the alerts, which is worse than having no monitoring at all.",
          "CheckPulse runs probes from three regions and only transitions a monitor to DOWN when at least two regions independently agree. That trades a small amount of detection latency for alerts that are worth waking up for. The check workers are Celery tasks; region agreement is resolved in the incident detector rather than in the probe, so adding a fourth region is a config change rather than a rewrite.",
        ],
      },
      {
        heading: "Running seven containers in 1.9 GB",
        body: [
          "The whole stack lives on one small VPS: API, worker pool, beat scheduler, Postgres, Redis, the tunnel connector, and the dashboard. Memory is the binding constraint, not CPU.",
          "That constraint drove real choices: Postgres tuned down from its defaults, worker concurrency capped so Celery prefetch cannot balloon resident memory, and no per-service observability sidecars. It is a useful exercise in sizing a system for the box you actually have instead of the box you would like to have.",
        ],
      },
      {
        heading: "Incident: the signup form became someone else's email validator",
        body: [
          "Between April and July 2026, roughly 1,191 accounts were created by a bot walking an alphabetical list of corporate email addresses. It was not trying to use the product. It was using my verification email as an oracle: submit an address, see whether the mail bounces, learn whether the mailbox is real.",
          "The damage was not CPU or storage, it was sender reputation. Three months of unsolicited verification mail went out from the transactional domain, with my DKIM signature on it.",
          "The fix was a Cloudflare Turnstile gate on every endpoint that can trigger an outbound email, and a split between the transactional sending domain and any other mail. The fake accounts are quarantined rather than deleted so the abuse pattern stays auditable.",
          "The general lesson: any unauthenticated endpoint that sends mail to an attacker-supplied address is an email validation service you are operating for free, and you will not notice from your own dashboards, because the traffic looks like growth.",
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
    github: "https://github.com/BetV3/Homelab_Scripts/tree/main/monitoring",
    title: "Fleet Watchdog",
    tagline:
      "A ~250-line Python watchdog that runs on a different host from the agent fleet it watches, built after a cron job failed 970 times in four days and alerted exactly once.",
    category: "Infrastructure / Reliability",
    status: "live",
    accent: "amber",
    order: 2,
    recruiter: {
      role:
        "Solo: designed, built and operate",
      timeframe:
        "Sep 2026 to present",
      timeframeSource:
        "first release 18 Sep 2026, operational notes",
      teamSize:
        "1",
      outcome:
        "Replaced an alerting path that missed 969 of 970 failures with one that runs outside the thing it watches and has been proven to fire.",
      problem:
        "A scheduled job failed 970 times in a row over four days and alerted once, because the alerting lived inside the runtime that was failing.",
      approach:
        "A small Python watchdog on a separate host under system cron, stable alert IDs, dedupe and recovery messages, a second host watching the watchdog, and every signal red-run before it was trusted.",
      result:
        "115 signals today across hosts, DNS, Kubernetes, PKI, CI and storage. It caught a real scheduler drift on its first run, a certificate 7 hours from expiry, and a renewal timer bouncing a service 67 times a day.",
    },
    featured: true,
    tech: [
      { name: "Python", category: "Language" },
      { name: "System cron", category: "Scheduling" },
      { name: "SSH", category: "Access" },
      { name: "Webhook alerts", category: "Alerting" },
      { name: "keepalived (VRRP)", category: "High availability" },
      { name: "Langfuse", category: "Observability" },
      { name: "ClickHouse", category: "Datastore" },
    ],
    metrics: [
      {
        label: "Silent failure streak",
        value: "970",
        subtext: "consecutive failed runs over four days, one alert on the first",
        source: "counted from the scheduler's execution log, 18 Sep 2026",
      },
      {
        label: "Same bug, different layers",
        value: "4",
        subtext: "components in one stack reported success while doing nothing",
      },
      {
        label: "Signals watched",
        value: "115",
        subtext: "23 at first release (18 Sep 2026); 115 fleet-wide now",
        source: "the watchdog's signal registry, read 8 Oct 2026",
        evidence: "https://github.com/BetV3/Homelab_Scripts/tree/main/monitoring",
      },
      {
        label: "Longest miss",
        value: "9d 8h",
        subtext: "prod API unreachable through its VIP while the API signal stayed green",
        source: "kube-vip lease acquireTime 29 Sep 2026 to first verified ok 8 Oct 2026",
        evidence: "/blog/monitor-that-never-used-the-vip",
      },
      {
        label: "Dead man's threshold",
        value: "20 min",
        subtext: "~4 missed runs before the other host reports the watchdog gone",
        source: "the deadman script's threshold; tested by backdating the state file, 18 Sep 2026",
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
          "A worker cron job was scheduled every five minutes on weekdays. It failed 970 consecutive times over four days. An alert fired on the first failure and then never again, because the job settled into a skipped state and stayed there. The reason nobody heard about failures 2 through 970 is that the alerting lived inside the same agent runtime as the job it was watching. When that runtime stopped doing useful work, it also stopped complaining.",
          "An observability plugin showed as enabled in the plugin list and was fully configured with credentials. It recorded nothing. The langfuse SDK was not present in the virtualenv, and the plugin failed open: missing import, no error, silent no-op. Working out why the install had not taken, I found that 3 of the 4 virtualenvs had no pip at all, because uv had created them. The install had failed as quietly as the plugin did.",
          "A keepalived health check ran dig against an internal name, and keepalived reads only the exit code. On the live boxes I measured what dig actually returns: exit 0 on NXDOMAIN, 0 on SERVFAIL, 0 on REFUSED. Only a dead port gave exit 9. So the check could detect that the DNS process was gone and literally nothing else. If the authoritative server died while the resolver stayed up, every internal name would come back NXDOMAIN, the check would still pass, and the virtual IP would stay parked on the broken node.",
          "The fourth one was in the watchdog itself. It posted alerts to a Discord webhook using Python's urllib. Discord sits behind Cloudflare, which rejects urllib's default User-Agent with error 1010 and an HTTP 403. curl worked, urllib did not. The watchdog ran on schedule, looked healthy, and delivered zero alerts. Setting an explicit User-Agent fixed it. I only caught it because I tested delivery instead of trusting that the send code had run.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "watchdog.py is about 250 lines of Python. It runs on a different host from the fleet it watches, under plain system cron every five minutes. It deliberately does not run under the agent framework's own scheduler, because a watchdog that shares a runtime with what it watches dies silently alongside it. That is precisely how the first outage stayed invisible for four days.",
          "At first release it covered 23 signals: 5 HTTP endpoint checks, 6 SSH liveness checks, 11 DNS and keepalived checks, and the last-run status of every agent cron job. Modules added since (Kubernetes, PKI, CI, storage, the observability stack, the public edge) bring it to 115 signals as of 8 October 2026. Alerts go to a chat webhook. It connects using its own dedicated SSH key rather than mine, so revoking the watchdog's access touches nothing else.",
          "Every alert carries a stable ID of the form WD-XXXX, derived deterministically by hashing the check key, so the same problem gets the same ID across runs, restarts and weeks. That is a small detail that pays off in conversation: I can say fix WD-08A0 a month later and it still points at exactly one check.",
          "It caught a real cron drift failure on its first run.",
        ],
      },
      {
        heading: "Two hosts watching each other",
        body: [
          "A watchdog on a separate host is still a single host. If the watchdog host dies, alerting dies with it, and silence looks exactly like health: the same failure shape as the original 970-failure outage, one level up.",
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
        heading: "The one it missed",
        body: [
          "On 8 October 2026 I found the production Kubernetes API had been unreachable through its virtual IP for 9 days, 8 hours and 43 minutes. Two of the three control planes had been joined without the VIP in their certificate's Subject Alternative Names, and the VIP had moved to one of them on 29 September. Every kubeconfig failed with an x509 error from that moment.",
          "The watchdog's signal for this was labelled prod API (via VIP) and stayed green the entire time. It ran kubectl on a control plane against that node's local kubeconfig, which points at 127.0.0.1. It was asking a node whether the node was fine. The label said VIP and the code never touched it. The metrics stack was green too, because its scraper skipped certificate verification and so could not see a certificate failure.",
          "The fix added the SAN block to both nodes with a rolling restart measured through the VIP at half-second resolution (153 s of outage ended, then one 6.4 s blip as the holder's API server came back). The API signal now goes through the VIP explicitly, a new signal checks every control plane's served certificate for the VIP, and the scraper verifies against the cluster CA. The new signal shipped with a test that fakes the exact state I found and asserts the signal goes red.",
          "I am listing this under the watchdog rather than hiding it because it is the clearest example of the failure class this project exists for: the label was a description of what I intended, not of what the code did.",
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
    recruiter: {
      role:
        "Solo: audited, repaired and tested an existing pair",
      timeframe:
        "Sep 2026",
      timeframeSource:
        "repair and failover test 18 Sep 2026",
      teamSize:
        "1",
      outcome:
        "Found silent replication drift and two health checks that could not fail, fixed them, and proved failover with a timed test.",
      problem:
        "Two DNS servers behind a virtual IP that had been flapping 13 times in 30 days while serving different answers, with a health check that only noticed a dead process.",
      approach:
        "Compared zone data and serials on both nodes, measured what dig actually exits with, wrote a check that validates the answer's shape, then stopped the authoritative server on purpose and watched.",
      result:
        "Zones at serial parity, VIP released in about 4 seconds under a real failure, 20 of 20 probes answered through it. One self-inflicted 2h20m outage, root-caused from the journal and written up.",
    },
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
        source: "a dig loop against the VIP every 2 s for 40 s, 18 Sep 2026",
      },
      {
        label: "VIP release",
        value: "~4 s",
        subtext: "from check failure to keepalived FAULT",
        source: "keepalived journal timestamps during the test, 18 Sep 2026",
      },
      {
        label: "VIP moves",
        value: "13",
        subtext: "keepalived state transitions in the 30 days before the repair",
        source: "journalctl -u keepalived on both nodes, 18 Sep 2026",
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
          "The main zone was kind NATIVE on the primary and SLAVE on the secondary. NATIVE tells PowerDNS that the underlying database is replicated out of band, so it sends no NOTIFY messages at all. There was no out-of-band replication: no cron job, no timer, no script on either box.",
          "Someone had added a record without bumping the zone serial. Both nodes advertised the same serial while serving different data, and a secondary only pulls a fresh copy when the primary's serial is higher, so it could never resync. Nothing was failing. It was doing exactly what it was configured to do and staying wrong indefinitely.",
          "The proof I captured before changing anything: querying the primary for the drifted record returned an address, the same query against the secondary returned empty, and both SOA serials read identically. A zone transfer diff showed exactly one record difference.",
          "What was already correct matters here. The primary flag, the also-notify target, and the zone transfer ACL were all set properly. The zone KIND was the entire bug. Setting it to MASTER, bumping the serial and forcing a NOTIFY fixed it, and afterwards all four zones verified at matching serials.",
          "That drift only bites if the virtual IP actually moves, and it does. keepalived logged 13 state transitions in the preceding 30 days, the most recent when the network interface dropped for about three minutes. Every one of those silently changed which answers the network received. Preemption is not disabled, so the primary grabs the IP straight back on recovery. The address flaps between two servers holding different data.",
        ],
      },
      {
        heading: "Two health checks that could not fail",
        body: [
          "keepalived decided whether the node was healthy by running dig against a local name and reading the exit code, which is the only thing keepalived looks at. I measured what dig actually exits with on these boxes: 0 on NXDOMAIN, 0 on SERVFAIL, 0 on REFUSED. Only a dead port produced a non-zero status, 9.",
          "So the check answered exactly one question: is the recursor process still running. If the authoritative server died while the recursor stayed up, every internal name would return NXDOMAIN, the check would keep passing, and the virtual IP would stay parked on the broken node. A check that cannot return failure for the failure you care about is not a health check, it is a process monitor with a misleading name.",
          "My replacement was wrong in the same family. It asserted that the output of dig was non-empty. dig writes its communications errors to stdout, not stderr, so the variable was non-empty precisely when the server was down. I had written a check that passed harder as things got worse.",
          "The version that shipped checks dig's exit status and then validates the shape of the answer: an SOA record has to have seven fields with a numeric serial. The comment I left in the script is the lesson: never trust dig's stdout without also checking its exit status.",
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
          "netplan propagates that mode to the file it generates under /run/systemd/network/, and systemd-networkd runs as its own user, not root. It could not read its own generated config. The journal recorded the whole thing in three lines: permission denied opening the generated network file, then reconfiguring with the dracut default, then acquiring a DHCPv4 address. With its real config unreadable the host fell through to the dracut initramfs DHCP catch-all and picked up a random address, while still holding the virtual IP. For a moment both nodes answered for the same address: a genuine split brain, caused by a file permission. DNS service was never interrupted, because the primary held the IP throughout. That is not a mitigation I designed.",
          "The trap is that netplan warns at mode 644 that permissions are too open, and silently breaks at 600. The warning points the opposite direction from the failure.",
          "I root-caused it by reading the systemd-networkd journal rather than guessing at it, which is the one part of this I would repeat. Recovery over SSH narrowed the options: netplan apply tears the interface down and is a console-required operation, not something to run on a host you are reaching through that interface. Adding an address with ip addr add is additive and cannot drop the link, so it is safe remotely, and networkctl reload re-reads configuration without touching links. I used those. keepalived needed a restart too. It cannot bind a unicast source address that does not exist, which is why it had been sitting as MASTER holding an address it should not have had.",
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
          "One defect is still open, deliberately. Neither nameserver can resolve its own zone through the system resolver: both point at a router that does not know the internal zone. Fixing that is the exact class of change that caused the outage above, so it waits until I can do it with console access instead of over SSH. Deferring it with a stated reason is a better answer than doing it a second time from the wrong end of the network.",
        ],
      },
    ],
  },
  {
    slug: "verified-backups",
    github: "https://github.com/BetV3/Homelab_Scripts/tree/main/backup",
    title: "Restore-Tested Backups",
    tagline:
      "Nightly restic backups to a host on different physical hardware, proven by an actual restore: 9,849 messages read back out of the restored database.",
    category: "Infrastructure / Data",
    status: "live",
    accent: "violet",
    order: 4,
    recruiter: {
      role:
        "Solo: designed, built and operate",
      timeframe:
        "Sep 2026 to present",
      timeframeSource:
        "first nightly run and restore test 18 Sep 2026",
      teamSize:
        "1",
      outcome:
        "Took five databases from zero copies to nightly restic snapshots on separate hardware, and proved a restore by counting rows out of it.",
      problem:
        "One database had a backup. Conversation state, working directories and the task queue had none, and the host they lived on was a single physical machine.",
      approach:
        "restic to a host on a different hypervisor, consistent SQLite snapshots through the .backup API, fresh Postgres dumps per run, a retention policy, and a scripted restore that asserts on row counts rather than file presence.",
      result:
        "Restore returned 9,849 messages across 316 sessions with integrity ok. The verifier later caught a 0-byte token in a Kubernetes backup that had reported success. No offsite copy yet, stated on the page.",
    },
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
        source: "SELECT count(*) on the restored SQLite file, 18 Sep 2026",
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
    recruiter: {
      role:
        "Solo: designed and built",
      timeframe:
        "Jan 2025",
      timeframeSource:
        "repo created 2025-01-08",
      teamSize:
        "1",
      outcome:
        "A Go master-worker log parser that cut a 10M-line job from 36 s to 6 s, with the scaling ceiling measured rather than guessed.",
      problem:
        "Parsing a 3.3 GB access log on one core takes long enough to be worth distributing, but distributing it badly makes it slower.",
      approach:
        "A master splits the file into byte ranges and hands them to workers over gRPC; workers parse and return status-code counts the master merges. Profiled and tuned buffers to find where the speedup stops.",
      result:
        "Near-linear scaling to about 8 workers, flat after that because the job becomes I/O and coordination bound. Adding workers past the knee makes it slower.",
    },
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
      { label: "Single worker", value: "36 s", subtext: "measured baseline", source: "timed run recorded in the repo README, Jan 2025", evidence: "https://github.com/BetV3/Distributed-Multithreaded-Log-Analyzer" },
      { label: "8-11 workers", value: "6 s", subtext: "~6x speedup", source: "timed run recorded in the repo README, Jan 2025", evidence: "https://github.com/BetV3/Distributed-Multithreaded-Log-Analyzer" },
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
          "Scaling is close to linear up to roughly 8 workers and then flattens. Past that point the job is no longer parse-bound. It is bound by reading the file and by the coordination chatter of handing out and collecting ranges.",
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
    recruiter: {
      role:
        "Solo: designed and built",
      timeframe:
        "Feb 2026",
      timeframeSource:
        "repo created 2026-02-03",
      teamSize:
        "1",
      outcome:
        "A from-scratch Go gateway with an explicit middleware chain, two-layer rate limiting and Prometheus metrics, and a stated trade-off instead of a fake benchmark.",
      problem:
        "Understanding what a gateway actually has to do, rather than configuring one.",
      approach:
        "Request IDs, structured logging, JWT auth with RBAC, in-memory rate limiting that falls back to Redis for limits shared across replicas, round-robin balancing across healthy backends.",
      result:
        "Complete and on GitHub. No requests-per-second or p99 figures, because I have not load tested it on hardware I would quote.",
    },
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
          "A single entry point in front of multiple backend services. Requests pass through an explicit middleware chain (request ID, structured logging, authentication, rate limiting) before being routed to a backend by path prefix and balanced round-robin across healthy instances.",
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
    recruiter: {
      role:
        "Solo: design",
      timeframe:
        "May 2026",
      timeframeSource:
        "repo created 2026-05-23",
      teamSize:
        "1",
      outcome:
        "A design package (failure model, IP plan, placement map, failure-test catalogue, secrets policy) for three immutable Kubernetes clusters.",
      problem:
        "Talos has no shell, so configuration has to be right before a machine boots. That makes the plan the actual deliverable.",
      approach:
        "Write the architecture, the IP plan and the failure tests first, and keep generated secrets out of git by policy.",
      result:
        "Design only. The three environments I actually run today are RKE2 (see the three-environment platform page); the Talos design informed their IP plan and placement rules.",
    },
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
          "Three immutable Talos Kubernetes clusters (a management cluster and two workload clusters) planned across my vSphere estate, each on its own VLAN with its own API VIP.",
          "This project is in its design phase and the page says so. What exists today is the part most homelab writeups skip: an architecture doc with an explicit failure model and stated non-goals, a full IP plan covering VLANs, pod and service CIDRs and static addresses, a host-to-VM placement map with DRS rules, a bootstrap runbook, a failure-test catalogue, and a secrets policy that keeps generated Talos configs and secrets out of git.",
        ],
      },
      {
        heading: "Why design-first",
        body: [
          "Talos has no SSH and no shell. You cannot fix a node by logging into it, which means the config has to be right before the machine boots. That property turns 'write the IP plan first' from good hygiene into a hard requirement, and it is the main reason I picked Talos for this.",
          "Deciding the failure model on paper (what happens when a host dies, when a VLAN drops, when etcd loses quorum) is also considerably cheaper than discovering it with 18 VMs already running.",
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
    recruiter: {
      role:
        "Solo: building",
      timeframe:
        "Jan 2026 to present",
      timeframeSource:
        "repo created 2026-01-26",
      teamSize:
        "1",
      outcome:
        "A Kafka pipeline built in explicit tiers so the page can say exactly which reliability work is done.",
      problem:
        "Event pipelines are easy to describe as handling millions of events a day and hard to actually make reliable.",
      approach:
        "Four tiers: tracer bullet first, then dead letter queue, schema evolution and backpressure, then multi-source ingestion, then reliability drills and SLOs.",
      result:
        "Tier 0 works; tier 1 is partly built (producer, consumer, metrics). No throughput numbers until tier 3 produces them.",
    },
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
          "The project is structured as four tiers, and I am partway through the second. T0 (local stack plus an end-to-end tracer-bullet flow) works. T1 adds a dead letter queue, schema evolution, backpressure handling, and basic observability. The producer and consumer with metrics are committed, the rest is in progress.",
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
    recruiter: {
      role:
        "Solo: built",
      timeframe:
        "Jan 2026 to Sep 2026",
      timeframeSource:
        "repo created 2026-01-25, last push 2026-09-21",
      teamSize:
        "1",
      outcome:
        "Terraform modules for AWS environments with a CI workflow that plans and applies them.",
      problem:
        "Provisioning cloud environments reproducibly instead of from a laptop.",
      approach:
        "Terraform modules plus a GitHub Actions workflow that runs format, validate, plan and apply.",
      result:
        "A working early module set, listed at its real size. The apply path depends on an AWS account that is not currently active.",
    },
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
    github: "https://github.com/BetV3/Homelab_Scripts/tree/main/vsphere",
    title: "Homelab Infrastructure",
    tagline:
      "A 7-host vSphere cluster that runs everything else on this page, managed through the vCenter API rather than the web UI.",
    category: "Infrastructure",
    status: "live",
    accent: "pink",
    order: 10,
    recruiter: {
      role:
        "Solo: own and administer",
      timeframe:
        "Nov 2024 to present",
      timeframeSource:
        "Homelab_Scripts repo created 2024-11-16",
      teamSize:
        "1",
      outcome:
        "A seven-host vSphere cluster (132 cores, 607 GB RAM, 40 VMs powered on) that runs everything else on this site, operated through the API with a scoped service account.",
      problem:
        "Every project on this site needs somewhere to run, and I wanted to be the person who gets paged when it breaks.",
      approach:
        "vCenter 8 managed through govc and the API, a least-privilege automation account scoped to one folder, Cloudflare tunnels instead of port forwarding, and measured hardware limits instead of spec sheets.",
      result:
        "The substrate for three Kubernetes environments, the observability stack, the CI platform and the internal CA. Capacity figures on this page are read from the API, not estimated.",
    },
    tech: [
      { name: "VMware vSphere 8", category: "Hypervisor" },
      { name: "vCenter", category: "Management" },
      { name: "govc", category: "API tooling" },
      { name: "Cloudflare Tunnel", category: "Remote access" },
      { name: "Linux", category: "Guests" },
    ],
    metrics: [
      { label: "ESXi hosts", value: "7", subtext: "cluster Compute-01", source: "vCenter host inventory, read 7 Oct 2026", evidence: "https://github.com/BetV3/Homelab_Scripts/blob/main/vsphere/infra_metrics.py" },
      { label: "CPU cores", value: "132", subtext: "aggregate physical", source: "vCenter host inventory, read 7 Oct 2026", evidence: "https://github.com/BetV3/Homelab_Scripts/blob/main/vsphere/infra_metrics.py" },
      { label: "Memory", value: "607 GB", subtext: "273 GB in use (45%)", source: "vCenter quickStats, read 7 Oct 2026", evidence: "https://github.com/BetV3/Homelab_Scripts/blob/main/vsphere/infra_metrics.py" },
      { label: "VMs", value: "40", subtext: "powered on of 55 defined", source: "vCenter API, read 7 Oct 2026", evidence: "https://github.com/BetV3/Homelab_Scripts/blob/main/vsphere/full_inventory.py" },
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "A seven-host ESXi cluster under vCenter 8, totalling 132 physical cores and 607 GB of RAM, of which 273 GB is actually in use. It currently runs 40 powered-on VMs out of 55 defined. These figures were read from the vCenter API on 7 October 2026, not estimated, and the script that reads them is in the linked repository.",
          "It is the substrate for the Talos platform, the data pipeline, and the build and automation hosts behind my other projects.",
        ],
      },
      {
        heading: "Managed through the API, with a scoped service account",
        body: [
          "Day-to-day operations go through the vCenter API rather than the web client. Automation authenticates as a dedicated service account bound to a custom role, and its mutating permissions are scoped to a single VM folder, so an automation bug can damage a sandbox rather than the estate.",
          "Least privilege is easy to endorse and slightly annoying to implement, which is exactly why it is worth doing on your own infrastructure first. Getting the role definition wrong at home costs an afternoon.",
        ],
      },
      {
        heading: "Remote access with no inbound ports",
        body: [
          "Nothing in the lab is exposed by port forwarding. External access runs over Cloudflare tunnels, so the lab makes outbound connections and there is no inbound attack surface on my home IP.",
        ],
      },
      {
        heading: "What the hardware can and cannot do",
        body: [
          "Capacity planning on used enterprise hardware needs measurement, not spec sheets. Guests here report no AVX2, which looks like an EVC baseline masking it. It is not. The hosts are Sandy Bridge and Ivy Bridge, and AVX2 arrived with Haswell, so the instruction set is physically absent and no cluster setting can expose it.",
          "That distinction decides real questions. Measured memory bandwidth in a guest is about 6.7 GB/s, roughly 140 times slower than a discrete GPU, so local model inference on this fleet is not viable at any RAM size. The cluster is idle at around 8 percent CPU with 45 percent of memory in use, but idle capacity is only useful for work the silicon can actually do: I/O bound, parallel, latency tolerant.",
          "The scripts that produced those measurements are in the linked repository, so the claim is checkable rather than asserted.",
        ],
      },
      {
        heading: "The whole estate, drawn from the live APIs",
        body: [
          "This diagram is generated, not drawn. A script queries vCenter for hosts and virtual machines, the three Kubernetes clusters for node and pod counts, the metrics database for scrape target counts, and the watchdog for its signal inventory, then renders the result. Every number in it was read at render time.",
          "That matters because hand-drawn architecture diagrams rot within weeks. This one is re-runnable: if a cluster gains a node or a monitoring target disappears, regenerating the file shows it. Internal addresses are replaced with role names, which is the only edit made for publication.",
        ],
        image: "/infrastructure-map.ae158eda.svg",
        imageAlt:
          "Infrastructure map: seven ESXi hosts under vCenter, three Kubernetes clusters with virtual IPs, an observability host, shared NFS storage, and a Cloudflare tunnel to the public edge.",
        imageCaption:
          "Generated from vCenter, the Kubernetes APIs, VictoriaMetrics, and the watchdog inventory. Addresses replaced with role names.",
      },
    ],
  },
  {
    slug: "k8s-three-environments",
    github: "https://github.com/BetV3/Homelab_Scripts/blob/main/monitoring/watchdog_k8s_envs.py",
    title: "Three-Environment Kubernetes Platform",
    tagline:
      "dev, staging and production RKE2 clusters on bare vSphere, with VIP failover proved by forcing a leadership transfer rather than assuming one.",
    category: "Infrastructure",
    status: "live",
    accent: "emerald",
    order: 11,
    recruiter: {
      role:
        "Solo: designed, provisioned and operate",
      timeframe:
        "Sep 2026 to present",
      timeframeSource:
        "clusters built 20 Sep 2026",
      teamSize:
        "1",
      outcome:
        "Three RKE2 clusters (15 nodes) on bare vSphere with control-plane VIPs, provisioned from the API, with failover proven by forcing a leadership transfer.",
      problem:
        "A single cluster is not a platform. Dev, staging and production need to exist separately, be rebuildable, and survive losing a control-plane node.",
      approach:
        "Nodes created with govc and cloud-init through guestinfo, kube-vip for the API, Cilium, ingress on pinned NodePorts, restore-tested etcd and token backups, and a failover test that was redone after the first one proved nothing.",
      result:
        "15 of 15 nodes Ready, VIP moved in about 3 seconds under a real transfer, etcd fsync p99 inside budget and trended. One constraint stated plainly: the three share one VLAN.",
    },
    featured: true,
    tech: [
      { name: "RKE2 v1.36.4", category: "Kubernetes" },
      { name: "kube-vip", category: "Control-plane VIP" },
      { name: "Cilium", category: "CNI" },
      { name: "ingress-nginx", category: "Ingress" },
      { name: "etcd", category: "State" },
      { name: "govc / cloud-init", category: "Provisioning" },
    ],
    metrics: [
      { label: "Clusters", value: "3", subtext: "dev 6 nodes, staging 3, prod 6", source: "kubectl get nodes per cluster, read 7 Oct 2026", evidence: "https://github.com/BetV3/Homelab_Scripts/blob/main/monitoring/watchdog_k8s_envs.py" },
      { label: "Nodes Ready", value: "15/15", subtext: "across all three", source: "kubectl get nodes per cluster, read 7 Oct 2026", evidence: "https://github.com/BetV3/Homelab_Scripts/blob/main/monitoring/watchdog_k8s_envs.py" },
      { label: "etcd fsync p99", value: "12.8 ms", subtext: "prod, last hour, against a 25 ms budget", source: "histogram_quantile(0.99, rate(etcd_disk_wal_fsync_duration_seconds_bucket[1h])) in VictoriaMetrics, read 7 Oct 2026", evidence: "https://github.com/BetV3/Homelab_Scripts/blob/main/vsphere/full_inventory.py" },
      { label: "VIP failover", value: "~3 s", subtext: "measured during a forced transfer; the probe skipped cert verification, see the 8 Oct post", source: "timed by deleting the kube-vip pod on the holder, 20 Sep 2026", evidence: "/blog/monitor-that-never-used-the-vip" },
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "Three RKE2 clusters on the vSphere lab: development (6 nodes), staging (3), and production (6 nodes with a 3-member etcd quorum). Each has a kube-vip control-plane VIP and its own ingress controller. Nodes are provisioned from the vCenter API with cloud-init through guestinfo. No DHCP, no manual installs.",
          "Production runs behind a Cloudflare tunnel, so there are no inbound ports on the network at all.",
        ],
        image: "/diagram-k8s-environments.d945309a.svg",
        imageAlt:
          "Three Kubernetes clusters: dev with six nodes, staging with three and a single etcd member, production with six and three etcd members. Each has a kube-vip virtual IP in front of its API. All three share one VLAN.",
        imageCaption:
          "Node, pod and etcd fsync figures read from the clusters at render time.",
      },
      {
        heading: "The failover test that first gave a false pass",
        body: [
          "The obvious way to test a control-plane VIP is to stop the API server on whichever node holds it. I did that, the API recovered in about a second, and the test looked green.",
          "It was meaningless. kube-vip runs as a DaemonSet with its own leader election, so stopping the API server left the VIP exactly where it was. The address never moved and nothing about failover had been exercised. The same trap as deleting a pod that a DaemonSet recreates in seconds.",
          "Deleting the kube-vip pod on the holder forced a real leadership transfer: the VIP moved from control-plane node 1 to node 3 in roughly three seconds, the API stayed reachable through the VIP throughout, and exactly one node held the address afterwards. That last check matters in both directions: zero holders is an outage, two or more is a split brain.",
          "That test was also wrong, in a way I only found on 8 October. It polled the API with certificate verification switched off, so it could not see that node 3 was serving a certificate without the VIP in it. Nodes 2 and 3 had been joined without the tls-san block. When kube-vip moved the address to node 3 on its own on 29 September, every kubeconfig started failing x509 and stayed that way for 9 days, 8 hours and 43 minutes. Both control planes now carry the VIP in their certificates, the watchdog checks every control plane for it, and the failover probe verifies certificates. Full write-up in the blog post linked from the metric above.",
        ],
      },
      {
        heading: "Four provisioning traps, all of which looked like something else",
        body: [
          "The first staging VMs booted cleanly, reported healthy VMware Tools, and had no IP address. Four separate defects were hiding behind that one symptom.",
          "govc's vm.create defaults to an E1000 adapter, which enumerates as ens160 while the netplan targeted ens192. The -disk 0 form segfaults govc outright; the supported form is -disk <path> -link=false. datastore.cp will not create its target directory, and vm.destroy removes it, so a recreate fails on a missing path.",
          "The real one was firmware. The Ubuntu cloud image has no EFI system partition, so an EFI virtual machine boots to an empty device list and never reaches the disk. The working nodes were BIOS. vm.change has no firmware flag, so fixing it meant destroy and recreate.",
          "I found it by diffing a broken VM against a working one field by field, after a console screenshot showed Ubuntu booting fine with the hostname applied, which proved cloud-init had run and narrowed the fault to networking alone.",
        ],
      },
      {
        heading: "A constraint I could not engineer around",
        body: [
          "The design called for separate subnets per environment. Only one VLAN is trunked to the hosts, and new port groups would need physical switch and router changes I could not make remotely.",
          "So the three clusters share a single L2 segment with IP-range separation instead. That is worth stating plainly rather than hiding: dev, staging and production are not network-isolated from each other. It is documented as a known limitation to revisit before production carries anything sensitive.",
        ],
      },
    ],
  },
  {
    slug: "observability-stack",
    github: "https://github.com/BetV3/Homelab_Scripts/blob/main/monitoring/watchdog_obs.py",
    title: "Fleet Observability",
    tagline:
      "77 scrape targets feeding a metrics stack that is deliberately not allowed to page me, because alerting stays in one place.",
    category: "Infrastructure",
    status: "live",
    accent: "cyan",
    order: 12,
    recruiter: {
      role:
        "Solo: designed, built and operate",
      timeframe:
        "Sep 2026 to present",
      timeframeSource:
        "built 21 Sep 2026",
      teamSize:
        "1",
      outcome:
        "A VictoriaMetrics, vmagent and Grafana stack over 77 targets that is deliberately not an alerting path, with every dashboard panel verified to return data.",
      problem:
        "The watchdog says what is broken. Nothing said why, and the one number that mattered most (etcd disk latency) had only been spot checked.",
      approach:
        "A collector outside the clusters it watches, a least-privilege scraping ServiceAccount per cluster, etcd metrics exposed with a rolling control-plane restart, a persistent remote-write queue proven by stopping the database, and no Alertmanager.",
      result:
        "77 of 77 targets up, 23.6M rows an hour, 30 panels verified by executing their queries, and a label-join bug found by that verification. Zero samples lost across a 100 s backend outage.",
    },
    tech: [
      { name: "VictoriaMetrics", category: "TSDB" },
      { name: "vmagent", category: "Scraping" },
      { name: "Grafana", category: "Dashboards" },
      { name: "blackbox_exporter", category: "Synthetic probes" },
      { name: "node_exporter", category: "Host metrics" },
      { name: "vmware_exporter", category: "Hypervisor metrics" },
    ],
    metrics: [
      { label: "Scrape targets", value: "77", subtext: "77 up, read 7 Oct 2026", source: "vmagent /api/v1/targets on the collector host", evidence: "https://github.com/BetV3/Homelab_Scripts/blob/main/monitoring/watchdog_obs.py" },
      { label: "Ingest rate", value: "23.6M/hr", subtext: "rows into VictoriaMetrics", source: "sum(increase(vm_rows_inserted_total[1h])), read 7 Oct 2026", evidence: "https://github.com/BetV3/Homelab_Scripts/blob/main/vsphere/full_inventory.py" },
      { label: "Dashboard panels", value: "30", subtext: "across 4 dashboards, each verified to return real series", source: "panels counted in the provisioned dashboard JSON, 7 Oct 2026; verified by executing every query through the Grafana datasource proxy" },
      { label: "Alert signals", value: "115", subtext: "in the watchdog, not in Grafana", source: "the watchdog's signal registry on its own host, read 8 Oct 2026", evidence: "https://github.com/BetV3/Homelab_Scripts/tree/main/monitoring" },
    ],
    sections: [
      {
        heading: "The distinction the design is built around",
        body: [
          "A watchdog answers 'is it broken?'. Observability answers 'why, and what changed?'. Those are different jobs and I deliberately did not merge them.",
          "The existing watchdog stays the only alerting path: it runs outside the agent scheduler it monitors, fails closed, and carries stable signal IDs I can cite. The metrics stack installs no Alertmanager at all. If a metric deserves to page someone it becomes a watchdog signal instead. Two alerting systems means two places to miss an outage.",
        ],
      },
      {
        heading: "Hosted where it can survive what it watches",
        body: [
          "The collector does not run inside the clusters it observes. A production outage would take out the dashboard showing the outage, the same reasoning that keeps the watchdog outside the scheduler it monitors.",
          "It also did not go on the existing monitoring host, which had 25 GB free on a 40 GB disk and was already the single place everything was watched from.",
        ],
      },
      {
        heading: "A metric that changed what I believed about the storage",
        body: [
          "The most valuable series is etcd write-ahead-log fsync latency. Every virtual machine in the lab sits on one NFS datastore backed by a four-wide RAID0 array on a 2010-era server, and etcd is the most latency-sensitive thing running on it.",
          "A spot check with fsync() in a loop had suggested about 3.5 ms at the median, which looked comfortable. etcd's own histogram puts the 99th percentile over the last hour at 12.5 ms on dev and 12.8 ms on production (read 7 October 2026), against a 25 ms budget. Still inside the limit, but with much less headroom than the spot check implied, and now trended rather than guessed.",
          "Exposing it required a config change and a rolling control-plane restart, because RKE2 binds the etcd metrics port to localhost by default. I rolled one node at a time and waited for the API to report ready between each; production and dev held quorum throughout, and staging, which has a single etcd member, was briefly unavailable, which I planned for rather than discovered.",
        ],
      },
      {
        heading: "Verifying dashboards the way a browser does",
        body: [
          "A dashboard that loads with empty panels is the visual form of a green check that means nothing, so I verified by executing every panel's query through Grafana's own datasource proxy and asserting each returned a non-empty series.",
          "That caught a real bug. One panel rendered blank while both halves of its expression returned 23 series each. The left side carried environment and role labels that the aggregated right side did not, and a binary operation between them requires an exact label-set match, so the join produced nothing. My first guess at the cause was wrong and the redeploy proved it still empty; the fix only came from testing candidate expressions directly against the database.",
        ],
      },
      {
        heading: "Watching the watcher",
        body: [
          "An unmonitored monitoring system is the exact failure shape I built this to catch, so the collector has its own signals, including one that checks rows are actually being written, not merely that targets look healthy. A scraper can report every target up and still store nothing if its write path is broken.",
          "The remote-write buffer is on disk rather than in the container, and I proved it by stopping the database for one hundred seconds while scraping continued. The queue grew from 57 bytes to 7.7 MB and flushed on recovery with no gap in the series: every node had exactly twelve samples across the outage window, which is what a thirty-second scrape interval should produce.",
        ],
        image: "/diagram-observability.a64d432c.svg",
        imageAlt:
          "Scrape targets feed vmagent, which writes to VictoriaMetrics and is read by Grafana. The watchdog runs entirely separately and is the only path to an alert. No line connects the two systems.",
        imageCaption:
          "Target and signal counts read live. The gap between the two halves is the design.",
      },
    ],
  },
  {
    slug: "public-edge",
    github: "https://github.com/BetV3/Homelab_Scripts/blob/main/monitoring/watchdog_edge.py",
    title: "Public Edge Without Inbound Ports",
    tagline:
      "Exposing an on-premise Kubernetes cluster to the internet through a Cloudflare tunnel, while the existing production site keeps serving as the rollback.",
    category: "Infrastructure",
    status: "live",
    accent: "rose",
    order: 13,
    recruiter: {
      role:
        "Solo: designed, built and operate",
      timeframe:
        "Sep 2026 to present",
      timeframeSource:
        "tunnel created 20 Sep 2026",
      teamSize:
        "1",
      outcome:
        "An on-premise Kubernetes cluster reachable from the internet with zero inbound ports, staged so the live site stayed untouched as the rollback.",
      problem:
        "Serving from the home cluster without exposing a home IP, and without risking the site recruiters actually visit.",
      approach:
        "A separate Cloudflare tunnel with its own credentials, a connector on a control-plane node dialling out, ingress on a pinned NodePort, the apex record protected by the deploy script, and layered checks ending with the public hostname answering.",
      result:
        "Public traffic reaches my ingress through the tunnel (the first success was a 404 from my own nginx). 4 connections healthy, 22 synthetic probes, certificate expiry graphed for every endpoint.",
    },
    tech: [
      { name: "Cloudflare Tunnel", category: "Ingress" },
      { name: "cloudflared", category: "Connector" },
      { name: "ingress-nginx", category: "Origin" },
      { name: "step-ca", category: "Internal PKI" },
      { name: "PowerDNS", category: "Internal DNS" },
    ],
    metrics: [
      { label: "Inbound ports", value: "0", subtext: "no port forwarding anywhere", source: "design fact: the connector dials out; nothing listens publicly", evidence: "https://github.com/BetV3/Homelab_Scripts/blob/main/monitoring/watchdog_edge.py" },
      { label: "Tunnel connections", value: "4", subtext: "healthy, read 7 Oct 2026", source: "Cloudflare tunnel API, via the edge watchdog signal", evidence: "https://github.com/BetV3/Homelab_Scripts/blob/main/monitoring/watchdog_edge.py" },
      { label: "Probe coverage", value: "22", subtext: "ICMP 9, HTTP 6, TCP 4, DNS 3", source: "blackbox_exporter targets in vmagent, read 7 Oct 2026" },
    ],
    sections: [
      {
        heading: "Shape",
        body: [
          "Traffic reaches Cloudflare, travels down an outbound-only tunnel to a connector running on a production control-plane node, and lands on the cluster's ingress controller at a pinned node port. Nothing listens on the public internet and no router rule was changed.",
          "I created a separate tunnel rather than extending the existing one, so it has its own credentials and its own failure domain and can be deleted without touching anything already working.",
        ],
        image: "/diagram-public-edge.4e943747.svg",
        imageAlt:
          "A visitor reaches Cloudflare, which terminates TLS. Inside the cluster a cloudflared connector dials outward to Cloudflare over QUIC. Traffic then reaches ingress-nginx on a NodePort. The home firewall forwards no ports.",
        imageCaption:
          "The arrow out of the cluster is the whole point: nothing dials in.",
      },
      {
        heading: "Migrating a live job-hunt asset carefully",
        body: [
          "The site this would eventually serve is the one recruiters actually visit, so the cutover is staged rather than clever. The new path was proved on a subdomain first while the existing production hosting kept serving the apex untouched, and the deployment script refuses to modify the apex record at all.",
          "The first success was a 404, served by my own ingress controller, from the public internet, through the tunnel. That is exactly the right result when no application is deployed behind it yet, and it proves the whole path end to end.",
        ],
      },
      {
        heading: "Signals that test the path, not the parts",
        body: [
          "A tunnel reporting 'healthy' only means a connector attached. It says nothing about whether the hostname reaches a live origin, which is the same 'green at every step, producing nothing' shape as a pipeline that runs perfectly and emits no output.",
          "So the checks are layered: connections, connector process, and the one that matters most, the public hostname answering. That last check treats any 2xx through 4xx as success, because a 404 proves my nginx answered, while a 502 means the origin is dead. Certificate expiry is tracked as a graph for every endpoint, after an internal certificate expired unnoticed and broke continuous integration for several hours.",
        ],
      },
    ],
  },
  {
    slug: "sre-agent",
    title: "Alert-to-Runbook Responder",
    tagline:
      "A scheduled responder that turns a watchdog alert into a diagnosis and an allowlisted runbook, with the only auto-applied fix chosen because its failure mode was 970 silent skips.",
    category: "Infrastructure / Reliability",
    status: "live",
    accent: "amber",
    order: 14,
    featured: true,
    recruiter: {
      role: "Solo: designed, built and operate",
      timeframe: "Sep 2026 to present",
      timeframeSource: "first recorded tick 19 Sep 2026 (sre_runs table)",
      teamSize: "1",
      outcome:
        "2,658 recorded ticks and 189 incidents in 18 days, every one with a diagnosis attached, and a structural guarantee that the responder can only run commands from a short allowlist.",
      problem:
        "The watchdog raised alerts; the steps after that were a person hand-running commands, and when that person was a chat session the knowledge died with it.",
      approach:
        "A cron tick reads the watchdog's state, opens one incident per alert (enforced by a partial unique index), runs a read-only triage, and names a runbook from a registry. The registry validates arguments and builds argv; the responder never constructs a command. Rate limits live in SQL.",
      result:
        "One fix is auto-applied (re-pinning a drifted scheduler job: idempotent, reversible, and the failure it fixes is silent and indefinite). Everything else parks for approval or reports only. 15 of 15 guardrail tests pass, each negative case paired with a positive twin.",
    },
    tech: [
      { name: "Python", category: "Language" },
      { name: "PostgreSQL", category: "Incident and run state" },
      { name: "System cron", category: "Scheduling" },
      { name: "SSH", category: "Execution" },
    ],
    metrics: [
      {
        label: "Ticks recorded",
        value: "2,658",
        subtext: "every tick, including failures, since 19 Sep 2026",
        source: "SELECT count(*) FROM sre_runs, read 7 Oct 2026",
      },
      {
        label: "Incidents",
        value: "189",
        subtext: "179 closed; one open incident per alert, enforced by the schema",
        source: "SELECT count(*) FROM sre_incidents, read 7 Oct 2026",
      },
      {
        label: "Auto-applied fixes",
        value: "2",
        subtext: "the other 187 incidents reported a diagnosis and stopped",
        source: "SELECT runbook, count(*) FROM sre_incidents GROUP BY 1, read 7 Oct 2026",
      },
      {
        label: "Guardrail tests",
        value: "15/15",
        subtext: "refusals for shell metacharacters, non-allowlisted hosts, unknown runbooks",
        source: "python3 test_guardrails.py, run 7 Oct 2026",
      },
    ],
    sections: [
      {
        heading: "The structural control",
        body: [
          "The responder names a runbook. It never writes a command. A registry maps each name to an argument validator and an argv builder, and both run, in that order, before anything executes. Anything that deletes, drops, powers off, reboots, rotates credentials or edits network configuration is absent from the registry by design, and the invariant test asserts that nothing in it is both auto-applied and irreversible.",
          "Host access is a short allowlist with its own SSH key. The database host is deliberately excluded: no runbook needs it, so the responder holds no key there. I verified the key is refused rather than assuming it.",
          "Rate limits are rows, not memory. A cooldown of 120 minutes and a cap of three applications a day are answered by querying the incidents table, so a restarted process cannot forget that it already acted.",
        ],
      },
      {
        heading: "Why exactly one fix is automatic",
        body: [
          "A scheduler job in this fleet once failed 970 consecutive times over four days because its model configuration drifted and the job settled into a skipped state. The fix is re-pinning the job, which is idempotent (re-pinning a pinned job is a no-op) and reversible in one command. The cost of applying it wrongly is far below the cost of not applying it, so that one runbook is auto. Restarting a container is gated behind approval until the auto path has a track record.",
          "Against the live drift alert, the dry run proposed the exact command and did nothing. The live run applied it and recorded auto_applied. Then verification failed to parse, and the responder refused to close the incident and marked it failed. That refusal was the point: an exit code of zero never closes an incident on its own. The following run hit the cooldown and declined to re-apply.",
        ],
      },
      {
        heading: "Two bugs that only running it found",
        body: [
          "The database URL in the config used the postgres:// scheme, and a grep for postgresql:// returned nothing, so the responder tried a local socket and failed quietly. And the watchdog's state file is pretty-printed JSON, while the reader parsed only its last line. Both are the shape every failure on this infrastructure takes: a component that reports success while doing nothing.",
          "The runbook that restarts a container had never worked on any host. SSH joins its remote argv with spaces and the login shell re-parses the result, so a cd and a compose restart arrived as two separate commands and compose ran in the home directory. It had passed its validation tests for weeks, because validation checked the arguments and never ran anything. I fixed it by quoting the whole payload once, then proved it with a real restart and watched the probes go green afterwards.",
        ],
      },
      {
        heading: "Honest status",
        body: [
          "This responds to a personal fleet, and 187 of 189 incidents ended in report-only, which is the right outcome for alerts with no safe automated fix. I would not read the fix count as the result. The result is that every tick and every decision sits in a table I can query, so I can answer what it did and why.",
          "Still open: forced-command SSH keys so the server rejects anything off-list rather than only the Python layer, and an alert when the approval queue fills, because a full queue looks identical to an idle one.",
        ],
      },
    ],
  },
  {
    slug: "gitops-signed-supply-chain",
    github: "https://github.com/BetV3/k8s-gitops",
    title: "GitOps and a Signed-Image Gate on Three Clusters",
    tagline: "Flux reconciling dev, staging and production from one public repo, with Kyverno refusing any image not signed by a GitHub Actions workflow in my org. Every gate was proven able to fail before it was trusted.",
    category: "Infrastructure / Platform",
    status: "live",
    accent: "emerald",
    order: 18,
    featured: true,
    recruiter: {
      role: "Solo: designed, built and operate",
      timeframe: "Oct 2026 to present",
      timeframeSource: "repo created and all three clusters bootstrapped 8 Oct 2026",
      teamSize: "1",
      outcome: "Three RKE2 clusters reconciled by Flux from a single repository, every overlay schema-validated in CI, and a keyless cosign policy enforced at admission on all three, including production.",
      problem: "The clusters were built by hand and operated by kubectl. A certificate SAN that was typed into two control planes incorrectly went unnoticed for nine days. Nothing in the clusters had a source of truth, and nothing checked what was allowed to run.",
      approach: "Import the live workloads into git with a kubectl diff of zero, bootstrap Flux per cluster with read-only deploy keys, chain infra, policies and apps with health checks, vendor Kyverno and write one keyless verifyImages policy, and build a separate CI pipeline that signs an image with GitHub OIDC so the policy has something real to verify.",
      result: "Drift repaired in 3 to 4 seconds on an idle cluster. An unsigned image rejected at admission on dev and on production; a signed one admitted and rewritten to its digest. Eight validator red-run cases and nine watchdog red cases, all failing as required. Two Flux behaviours the design did not predict, found by the tests and written down."
    },
    tech: [
      {
        name: "Flux v2.9",
        category: "Reconciler"
      },
      {
        name: "Kustomize",
        category: "Overlays"
      },
      {
        name: "Kyverno v1.19",
        category: "Admission policy"
      },
      {
        name: "cosign (keyless)",
        category: "Signing"
      },
      {
        name: "Sigstore Fulcio and Rekor",
        category: "Identity and transparency log"
      },
      {
        name: "syft (SPDX)",
        category: "SBOM attestation"
      },
      {
        name: "kubeconform",
        category: "Schema validation"
      },
      {
        name: "GitHub Actions OIDC",
        category: "Workload identity"
      }
    ],
    metrics: [
      {
        label: "Clusters under Flux",
        value: "3/3",
        subtext: "dev, staging, production; 4 Kustomizations each, all Ready at one revision",
        source: "flux get kustomizations per cluster, 8 Oct 2026",
        evidence: "https://github.com/BetV3/k8s-gitops/tree/main/clusters"
      },
      {
        label: "Drift repaired",
        value: "3 s",
        subtext: "kubectl scale 1 to 3 reverted; deleted Service recreated in 4 s; git-removed object pruned in 63 s",
        source: "tests/drift_redgreen.sh on the dev cluster, idle, 8 Oct 2026",
        evidence: "https://github.com/BetV3/k8s-gitops/blob/main/tests/drift_redgreen.sh"
      },
      {
        label: "Unsigned image",
        value: "rejected",
        subtext: "at admission on dev and on production; signed image admitted and rewritten to its digest",
        source: "tests/admission_redgreen.sh against both clusters, 8 Oct 2026",
        evidence: "https://github.com/BetV3/k8s-gitops/blob/main/tests/admission_redgreen.sh"
      },
      {
        label: "Gates proven to fail",
        value: "8 + 9",
        subtext: "validator red-run cases in CI, watchdog red cases; each must fail or the suite fails",
        source: "tests/redrun_validate.sh (CI) and test_gitops_signal.py",
        evidence: "https://github.com/BetV3/k8s-gitops/blob/main/tests/redrun_validate.sh"
      },
      {
        label: "Rekor log index",
        value: "3150687989",
        subtext: "the signed image's entry in the public transparency log, verifiable with no credentials",
        source: "cosign verify from a machine with no registry access, 8 Oct 2026",
        evidence: "https://github.com/BetV3/hello-signed"
      }
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "One public repository holds the desired state for all three clusters. Each cluster has a directory of Flux Kustomizations that chain infra, then policies, then apps, each with prune and wait enabled, so a file deleted from git deletes the object and a Kustomization is only Ready when the rollout finished. Each cluster bootstrapped with its own read-only deploy key; Flux can pull and cannot push.",
          "The first commit imported what was already running. kube-state-metrics was exported from the live dev cluster, stripped of server-set fields, and committed only after kubectl diff reported no difference. From that commit on, Flux owns it, and the ownership labels on the live object say so.",
          "A separate repository builds a tiny image in GitHub Actions, signs it with cosign using the workflow's OIDC token (no key to leak), and attaches an SPDX SBOM as an attestation. The Kyverno policy on the clusters accepts only images whose certificate was issued to a workflow under my GitHub org, recorded in Rekor, and rewrites the tag to the verified digest so the thing that was verified is the thing that runs."
        ]
      },
      {
        heading: "Nothing was trusted until it had failed",
        body: [
          "The CI validator builds every overlay with kustomize and checks it against the Kubernetes 1.36 schema in strict mode, then enforces policy: no latest tags, production images pinned by digest, prune and wait on every Flux object. On its own that is a script that prints PASS. So the same pipeline runs a harness that breaks a copy of the tree eight different ways, an unknown field, broken YAML, a latest tag, an unpinned production image, prune switched off, wait removed, an em dash in prose, and asserts the validator fails each time. Two of the eight did not fail on the first run. Both were bugs in the validator, and the harness is why they were found before the validator was guarding anything.",
          "The admission policy got the same treatment on dev and then on production: a deliberately unsigned copy of the base image, published under the same registry path, is refused with no signatures found; the signed image is admitted and its pod spec comes back carrying the digest. The watchdog signals for all of this have nine red cases of their own, including the quiet one where every Kustomization is Ready but two of them are on different commits."
        ]
      },
      {
        heading: "Two things the tests found that I did not design for",
        body: [
          "With infra, policies and apps all reconciling every minute, the drift test failed: a deleted Service was not recreated inside two minutes. Reading the controller log, every infra reconcile flipped it to Unknown for about a second while 76 Kyverno objects were server-side applied, policies then saw its dependency not ready and backed off thirty seconds, and apps behind it waited again. A one-minute interval on a chain of three is not a one-minute repair time. Infra and policies now reconcile every ten minutes and apps every minute.",
          "The second one is a Flux behaviour worth knowing before relying on it. A deletion that lands while Flux is inside a health check is not repaired until that check times out. Flux waits on the inventory it just applied and does not re-apply mid-wait. The log says it plainly: health check failed after 3m0s, Service status NotFound, recreated on the following run. So the worst-case repair time is the health-check timeout plus the interval, not the interval. The drift test now waits for the Kustomization to be idle before each case, and the numbers it reports are the idle-cluster figures."
        ]
      },
      {
        heading: "Honest status",
        body: [
          "The policy covers two namespaces, not the whole cluster, because the clusters also run things I have not signed yet. Kyverno has deprecated the ClusterPolicy kind I used in favour of its CEL-based ImageValidatingPolicy; migrating is a known follow-up. The RKE2 node configuration, where the certificate bug that started all this actually lived, is still outside git. And this is one workload on a lab, not a fleet of services. What is real is that every claim on this page has a script that reproduces it and a log that recorded it."
        ]
      }
    ]
  },
  {
    slug: "dev-platform",
    title: "Self-Hosted Forge and CI",
    tagline:
      "Forgejo with branch protection and Kubernetes-hosted runners, where the first green CI run was a false positive and the pipeline was not trusted until it had failed for the right reason.",
    category: "Infrastructure / Developer Platform",
    status: "live",
    accent: "orange",
    order: 15,
    recruiter: {
      role: "Solo: designed, built and operate",
      timeframe: "Sep 2026 to present",
      timeframeSource: "forge built 19 Sep 2026, runners moved to Kubernetes 20 Sep 2026",
      teamSize: "1",
      outcome:
        "A git forge with server-side branch protection and six parallel CI slots on the dev cluster, validated red and green and watched by three output signals.",
      problem:
        "Code written by automation needs a place where it is judged before it is merged, and a pipeline that only ever passes proves nothing.",
      approach:
        "Forgejo on its own VM, a runner on a different physical host at first and then three runner pods on the dev Kubernetes cluster, required status checks on main, and a deliberate green, red, green cycle before trusting any of it.",
      result:
        "A direct push to main as an admin with a valid token is rejected by the pre-receive hook. The red run dies on a sentinel assertion inside the test file, not on a missing binary. Backups of the forge database and repositories are restore-verified.",
    },
    tech: [
      { name: "Forgejo", category: "Git forge" },
      { name: "Forgejo Actions", category: "CI" },
      { name: "Kubernetes (RKE2)", category: "Runner hosting" },
      { name: "Docker-in-Docker", category: "Job isolation" },
      { name: "PostgreSQL", category: "Forge state" },
      { name: "gitleaks", category: "Secret scanning" },
    ],
    metrics: [
      {
        label: "Parallel CI jobs",
        value: "6",
        subtext: "3 runner pods, capacity 2 each, spread across workers",
        source: "runner Deployment manifest; 3/3 pods Ready via the watchdog, read 7 Oct 2026",
      },
      {
        label: "Red/green cycle",
        value: "#11 / #14 / #15",
        subtext: "green, red on a sentinel assertion, green again on the same runners",
        source: "Forgejo Actions run history, 20 Sep 2026",
      },
      {
        label: "Admin push to main",
        value: "Rejected",
        subtext: "pre-receive hook declined, even with a valid admin token",
        source: "git push output, 19 Sep 2026",
      },
      {
        label: "Output signals",
        value: "3",
        subtext: "queue age, runner count, and zero runs in 48 h with a PR open",
        source: "the watchdog's signal registry, read 7 Oct 2026",
      },
    ],
    sections: [
      {
        heading: "The first green run was wrong",
        body: [
          "The first run with a deliberately failing test failed, which looked like success. The log showed it had never run the test at all: the checkout action is a Node action and the Go image had no node binary. Had I stopped there I would have shipped a pipeline that fails everything regardless of correctness and called it working.",
          "The proof came in two runs on the same pipeline: a correct tree passed, then the same tree with the test broken again failed. The fix was to clone with git directly. The lesson I kept is to read every red run, because a failure for the wrong reason looks identical to a failure for the right one.",
        ],
      },
      {
        heading: "Runners on Kubernetes, and four convincing false signals",
        body: [
          "Execution moved from a single VM to three runner pods on the dev cluster, each with a Docker-in-Docker sidecar and a capacity of two. The dev workers had been allocated 32 GB each while measuring one percent used, so right-sizing them to 12 GB freed 60 GB and made the staging and production clusters fit.",
          "Four things went wrong and each looked like something else. A readiness probe that ran docker info hung forever because the runner image has no docker CLI. The entrypoint shell had no /dev/tcp. A ConfigMap was created and never mounted. And cluster DNS could not resolve the internal zone because the node's stub resolver is unreachable from a pod, which registered two of three runners by racing a warm cache and read exactly like a flaky network.",
        ],
      },
      {
        heading: "The pipeline was not judging correctness",
        body: [
          "Registration is not proof. The green, red, green cycle found that CI reported success on a tree containing assert 2 + 2 == 5, because the only test step ran one hardcoded file and nothing under the tests directory was ever executed. Scoping pytest to the repo root then aborted collection on a module-scope sys.exit, which produced a red run that proved nothing.",
          "Only after both fixes did the red run die on the assertion itself, with the sentinel message in the log. A separate bug had been failing one pull request all along: on a pull_request event the ref name is the PR number, so checkout was cloning branch 3. The same commit showed green on its branch and red on the PR ref, which is indistinguishable from bad code unless you read the log.",
        ],
      },
      {
        heading: "Honest status",
        body: [
          "This is a single-user forge on a home network. What I am claiming is the controls and the tests that exercised them, not scale. The runner has full access to its Docker socket, which is root-equivalent on that VM. I accept that only because the VM holds nothing else, and I would rather say so here than leave it out.",
        ],
      },
    ],
  },
  {
    slug: "internal-pki",
    title: "Internal CA with Automated Renewal",
    tagline:
      "A step-ca certificate authority issuing 24-hour leaf certificates to four services, where the renewal path, not the CA, is the part that was built and tested.",
    category: "Infrastructure / Security",
    status: "live",
    accent: "violet",
    order: 16,
    recruiter: {
      role: "Solo: designed, built and operate",
      timeframe: "Sep 2026 to present",
      timeframeSource: "CA built 19 Sep 2026, renewal bugs fixed 21 Sep 2026",
      teamSize: "1",
      outcome:
        "Four internal services serve TLS from a private CA with password-free renewal every 15 minutes, monitored by eight watchdog signals including hours-to-expiry per certificate.",
      problem:
        "Internal services on a .dev domain cannot be reached over plain HTTP at all (the whole TLD is HSTS-preloaded) and a public CA cannot validate names that only resolve internally.",
      approach:
        "step-ca on its own VM placed away from the hosts it authenticates, a JWK provisioner, a systemd timer running step ca renew (which authenticates with the existing certificate, so no secret sits on disk), and a reload script that restarts a service only when the certificate hash changes.",
      result:
        "All four services validate without -k. Renewal proven by issuing a 10-minute certificate and watching the serial change. Two self-inflicted renewal bugs found by monitoring and written up below.",
    },
    tech: [
      { name: "step-ca", category: "Certificate authority" },
      { name: "systemd timers", category: "Renewal" },
      { name: "Caddy", category: "TLS termination" },
      { name: "Linux", category: "Hosts" },
    ],
    metrics: [
      {
        label: "Leaf lifetime",
        value: "24 h",
        subtext: "renewed every 15 min when under 8 h remain",
        source: "CA policy and the cert-renewer timer unit",
      },
      {
        label: "Services on the CA",
        value: "4",
        subtext: "all validate against the root without -k",
        source: "curl against each endpoint with the root installed, 21 Sep 2026",
      },
      {
        label: "Closest call",
        value: "6h52m",
        subtext: "remaining on a cert whose renewer had been failing silently for 17 h",
        source: "watchdog leaf-expiry signal, 21 Sep 2026",
      },
      {
        label: "Restart storm",
        value: "67/day",
        subtext: "a service bounced on every timer tick; correct is about 1 per 16 h",
        source: "container restart count over 24 h, 21 Sep 2026",
      },
    ],
    sections: [
      {
        heading: "Renewal is the whole point",
        body: [
          "A CA that issues 24-hour certificates without automated renewal is a fleet that breaks every day. The property that makes automation safe is that step ca renew authenticates with the certificate it is renewing: no password, no provisioner secret on disk. I verified it by issuing a 10-minute certificate, renewing it, and watching the serial change with no credential used.",
          "An expired certificate cannot renew itself, so a dead timer means every service loses TLS within 24 hours while the CA reports perfectly healthy. The watchdog therefore checks the timer on each host and the hours remaining on each leaf, which is the signal that actually matters.",
        ],
      },
      {
        heading: "Two bugs I caused, and what found them",
        body: [
          "Fixing an earlier outage, I chowned the certificate directory so the container could read the key. The renewer runs as a different user and rewrites the certificate in place, so every renewal since had failed with permission denied. It was silent for about 17 hours because the certificate was still valid, and it was found with 6 hours 52 minutes to spare. The fix is a shared group with the renewer owning and the container reading; either single-owner answer breaks one side.",
          "The renewer unit also restarted the service after every run. step ca renew exits zero when it decides nothing needs renewing, so an unconditional restart hook bounced the container every 15 minutes: 67 restarts in a day. Most fell between watchdog polls and the rest produced the random blips I had been seeing. Now a script hashes the certificate and restarts only when the hash changes, which I proved three times with an unchanged cert and once with a changed one. The thing I took away is that an exit code tells you a command succeeded, not that anything happened.",
        ],
      },
      {
        heading: "Why not the public CA I already pay for",
        body: [
          "The public zone is on Cloudflare and Universal SSL already covers every public hostname. A public CA can only issue for names it can validate, and every internal service resolves only on the internal DNS and is deliberately unreachable from the internet. Making it work would mean exposing admin interfaces or running DNS validation for names that intentionally do not exist publicly. So the internal names get step-ca and the public ones stay on Cloudflare. They are different problems and I stopped trying to solve them with one tool.",
        ],
      },
      {
        heading: "Honest status",
        body: [
          "The root key is on the same box as the issuing CA, which proper practice keeps offline. There is no CRL or OCSP; revocation relies on 24-hour lifetimes expiring. The CA state directory is in the nightly backup, because losing the root key means re-trusting the CA on every client by hand.",
        ],
      },
    ],
  },
  {
    slug: "task-queue",
    title: "Durable Postgres Task Queue",
    tagline:
      "A PostgreSQL queue that runs my long-running agent work, including a job-application pipeline that has submitted 27 applications with a human approving every one: SKIP LOCKED claims, leases with heartbeats, a reaper, approval gates and capped concurrency.",
    category: "Backend Services",
    status: "live",
    accent: "blue",
    order: 17,
    recruiter: {
      role: "Solo: designed, built and operate",
      timeframe: "Sep 2026 to present",
      timeframeSource: "earliest task row 12 Sep 2026; migrations dated 14 and 15 Sep 2026",
      teamSize: "1",
      outcome:
        "111 tasks across six workload types (job applications, VM operations, iOS and Roblox builds, code changes, briefings) have moved through claim, heartbeat, approval and completion. 130 human-approval gates, 0 submissions without a human decision, and a reaper bug found in production, fixed, and tested in both directions.",
      problem:
        "My automated workloads run for minutes to hours, die mid-task when a model call fails or a browser tab closes, and sometimes need a human decision before continuing: submit this job application, approve this VM change. A cron job per workload cannot express any of that.",
      approach:
        "One tasks table in PostgreSQL. Workers claim with SELECT ... FOR UPDATE SKIP LOCKED, hold a lease they extend by heartbeat, and can park a task as needs_approval with a question attached. An hourly reaper requeues tasks whose lease lapsed. Per-capability caps on running and parked tasks are enforced at claim time.",
      result:
        "Concurrent workers never double-claim. The job-application workload alone has run 69 tasks through drafting, form filling and a mandatory confirm-before-submit gate, resulting in 27 submitted applications and 0 submitted without a human decision. A task that lost its lease before its first heartbeat was invisible to the reaper for two days because NULL < now() is NULL; the fix matches a NULL lease on a stale row, with a test that a stale orphan is reaped and a fresh one is not.",
    },
    tech: [
      { name: "PostgreSQL", category: "Queue and state" },
      { name: "Python (asyncpg)", category: "Library and MCP server" },
      { name: "System cron", category: "Reaper" },
    ],
    metrics: [
      {
        label: "Tasks processed",
        value: "111",
        subtext: "66 done across 6 workload types since 12 Sep 2026; 69 are job applications",
        source: "SELECT capability, status, count(*) FROM tasks GROUP BY 1, 2, read 7 Oct 2026",
      },
      {
        label: "Reaper bug",
        value: "2 days",
        subtext: "a task sat invisible to the reaper because its lease was NULL",
        source: "incident record, 19 Sep 2026; fix in orchestrator/db.py",
      },
      {
        label: "Flapping signal",
        value: "369/816",
        subtext: "runs a queue-depth alert was red (45%) before it was split by owner",
        source: "watchdog state history, 21 Sep 2026",
      },
      {
        label: "Approval gates",
        value: "130",
        subtext: "times a worker parked and waited for a human; 0 job applications submitted without one",
        source: "SELECT count(*) FROM task_log WHERE event = 'needs_approval'; tasks.approved_by on every submitted application, read 7 Oct 2026",
      },
      {
        label: "Double claims",
        value: "0",
        subtext: "by construction: FOR UPDATE SKIP LOCKED inside one transaction",
        source: "claim SQL in orchestrator/db.py",
      },
    ],
    sections: [
      {
        heading: "What a claim is",
        body: [
          "A claim is one transaction: select the oldest approved-or-pending task for a capability with FOR UPDATE SKIP LOCKED, set it running, record the worker and a lease expiry, and return it. Many workers can poll at once and each row is handed out exactly once. Approved tasks (a human already answered) sort ahead of new ones so a resumed task is never starved by fresh work.",
          "Workers heartbeat to extend the lease. A worker can also release a task back to pending with its state intact, so a long job can be done one slice per tick without holding a lease across the gap.",
        ],
      },
      {
        heading: "The reaper bug, and testing it both ways",
        body: [
          "A task sat in running for two days. The reaper looked for status running and lease_expires_at earlier than now. The task's lease was NULL, because the worker died between claiming and its first heartbeat, and in SQL NULL compared to anything is NULL, not true. The task was permanently invisible to the one process meant to rescue it.",
          "The fix adds a second clause: a NULL lease on a row not updated for an hour is treated as expired. The test creates a stale orphan and a fresh one and asserts the first is requeued and the second is left alone. I wrote the second half because a fix tested only in the direction that was broken can quietly break the other direction, and a reaper that eats live tasks is worse than one that misses stuck ones.",
          "Nothing had been calling the reaper at all. It now runs hourly under system cron. The first wrapper captured its output and printed only when non-empty, which made a working reaper look broken; it now always logs its outcome.",
        ],
      },
      {
        heading: "A signal that mixed two owners",
        body: [
          "A queue-depth alert was red in 369 of 816 runs, 45 percent, and flapping. It was not wrong, it was ambiguous: it counted tasks older than six hours in both pending and approved, which merges nothing is claiming work (the system's fault, an incident) with the worker finished and is waiting on a human (my fault, a nudge).",
          "I split it into two signals with two thresholds: more than five tasks unclaimed for six hours is an incident, and more than five approvals ignored for a day is a nudge. A signal that mixes the system is broken with you have not replied yet trains you to ignore it, and I had started to.",
        ],
      },
      {
        heading: "What runs on it",
        body: [
          "Six workload types share the one table. The largest is a job-application pipeline: a nightly task scrapes postings from two boards, filters and ranks them, and enqueues the top 15. A worker tick every 5 minutes claims one, drafts a CV and cover letter tailored to the posting (compiled from LaTeX, 2 pages, checked), fills the application form in a headless browser, and parks the task with a screenshot for a human to approve. Only after that approval does the next tick click submit. 69 tasks have gone through it, 27 were submitted, 8 were skipped on hard requirements, and 12 expired unanswered.",
          "The others are smaller: VM lifecycle operations on the homelab (36 tasks, every one approved before it touched vCenter), iOS and Roblox build agents, code changes, and a daily briefing. Each has its own caps and its own approval rules, but the claim, lease, heartbeat and reaper code is shared.",
        ],
      },
      {
        heading: "Approval gates and caps",
        body: [
          "A worker can park a task as needs_approval with a structured request attached: the filled application form and a screenshot, or the exact VM change about to be made. Resolving it records who approved and when, and the task becomes claimable again with its state preserved. Parked tasks expire after 48 hours if nobody answers, and a count of expired tasks (12 so far) is itself a signal worth reading.",
          "Caps are enforced at claim time: a per-capability maximum on running tasks (2 for job applications), a maximum on parked tasks (8) that blocks new claims but never blocks resuming an approved one, and a daily ceiling on new work (15). So a workload that is waiting on a human cannot keep pulling new work until the backlog of questions is answered.",
        ],
      },
      {
        heading: "Honest status",
        body: [
          "This serves my own fleet of automated workloads, not a multi-tenant product. The numbers are small on purpose and are read from the database on the date shown. The job-application workload drafts a tailored CV and cover letter per posting and fills the form, but a human reads every one and clicks submit; nothing in the pipeline can submit on its own. There is no dead-letter table yet; failed tasks stay failed and are listed, which is adequate at this volume and would not be at a larger one.",
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

/** The one or two figures a card shows: the first metrics, trimmed. */
export function cardHighlights(p: Project): { label: string; value: string }[] {
  return (p.metrics ?? []).slice(0, 2).map((m) => ({ label: m.label, value: m.value }));
}

/** "Solo, Sep 2026 to present" style line for a card. */
export function cardMeta(p: Project): string | undefined {
  const r = p.recruiter;
  if (!r) return undefined;
  const role = r.role.split(":")[0].trim();
  return r.timeframe ? `${role}, ${r.timeframe}` : role;
}
