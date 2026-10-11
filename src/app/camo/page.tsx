import type { Metadata } from "next";
import camo from "../../../public/camo.json";

export const metadata: Metadata = {
  title: "Camo | Elvis Ramirez",
  description:
    "Public progression board. Tiered goals across building, training and business, with counters pulled automatically from the systems that produce the data.",
};

type Tier = {
  id: string;
  tier: number;
  name: string;
  target: number;
  value: number | null;
  unlocked_at: string | null;
};

type Weapon = { tiers: Tier[] };

const ORDER = ["build", "body", "business"] as const;
const LABEL: Record<string, string> = {
  build: "Build (Rack Rank)",
  body: "Body",
  business: "Business (CheckPulse)",
};
const SOURCE: Record<string, string> = {
  build: "App Store Connect, confirmed by hand until the API collector lands",
  body: "Rack Rank workout exports, every set",
  business: "CheckPulse CRM on postgres-01",
};

function fmt(n: number) {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

function TierRow({ t, active }: { t: Tier; active: boolean }) {
  const done = t.unlocked_at !== null;
  const pct =
    done ? 100 : t.value === null ? 0 : Math.min(100, Math.round((t.value / t.target) * 100));
  return (
    <li
      className={`rounded-lg border px-4 py-3 ${
        done
          ? "border-accent/60 bg-accent/10"
          : active
            ? "border-border bg-card"
            : "border-border/40 bg-background opacity-60"
      }`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-muted-foreground">{t.id}</span>
          <span className={`text-sm ${done ? "text-foreground font-semibold" : "text-foreground"}`}>
            {t.name}
          </span>
        </div>
        <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
          {done
            ? `unlocked ${t.unlocked_at!.slice(0, 10)}`
            : t.value === null
              ? "no data"
              : `${fmt(t.value)} / ${fmt(t.target)}`}
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full rounded-full bg-border/60 overflow-hidden">
        <div
          className={`h-full rounded-full ${done ? "bg-accent" : "bg-accent-muted"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </li>
  );
}

export default function CamoPage() {
  const weapons = camo.weapons as Record<string, Weapon>;
  const generated = camo.generated_at.slice(0, 16).replace("T", " ");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Camo</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A progression board, the way a shooter tracks weapon camos. Each track has five tiers.
          Tier one is effort; tiers two to five are outcomes. The counters are not typed in: a
          collector reads them hourly from the systems that produce the data, so a bar only moves
          when the underlying thing actually happened.
        </p>
        <p className="mt-2 text-sm text-muted-foreground font-mono">updated {generated}</p>
      </div>

      <div className="space-y-12">
        {ORDER.filter((w) => weapons[w]).map((w) => {
          const tiers = [...weapons[w].tiers].sort((a, b) => a.tier - b.tier);
          const unlocked = tiers.filter((t) => t.unlocked_at).length;
          const activeId = tiers.find((t) => !t.unlocked_at)?.id;
          return (
            <section key={w}>
              <div className="mb-4 flex items-baseline justify-between">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {LABEL[w]}
                </h2>
                <span className="font-mono text-sm text-muted-foreground">
                  tier {unlocked}/{tiers.length}
                  {unlocked === tiers.length ? " mastered" : ""}
                </span>
              </div>
              <ul className="space-y-2">
                {tiers.map((t) => (
                  <TierRow key={t.id} t={t} active={t.id === activeId} />
                ))}
              </ul>
              <p className="mt-2 text-xs text-muted-foreground">source: {SOURCE[w]}</p>
            </section>
          );
        })}
      </div>

      <section className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground space-y-3">
        <p>
          Why this exists: I grind best when progress is a counter I can see and cannot fake.
          This page is that counter, in public. Tracks I keep private (job search, people) run on
          the same system but are not shown here.
        </p>
        <p>
          How it works: a Python collector on my homelab reads the Rack Rank export log, the
          CheckPulse CRM and the project forge, appends readings to a Postgres schema, and writes
          an unlock row the first time a tier target is met. This page is a static snapshot of
          that table, rebuilt on deploy.
        </p>
      </section>
    </div>
  );
}
