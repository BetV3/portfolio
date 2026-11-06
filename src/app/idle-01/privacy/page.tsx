import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rack to Region | Privacy Policy",
  description:
    "Privacy policy for Rack to Region, an offline idle tycoon game for iPhone. The app collects no data.",
};

const EFFECTIVE = "November 6, 2026";
const CONTACT = "elvisramirez999@gmail.com";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {title}
      </h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

export default function RackToRegionPrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Rack to Region Privacy Policy
        </h1>
        <p className="mt-2 text-muted-foreground">Effective {EFFECTIVE}</p>
      </div>

      <Section title="Summary">
        <p>
          Rack to Region is an idle tycoon game for iPhone about growing a garage server into a
          cloud region, made by Elvis Ramirez. This policy covers the app and its TestFlight beta.
        </p>
        <p className="text-foreground">
          The app collects no data. It makes no network connections, so nothing you do in it is
          sent to me or to anyone else.
        </p>
      </Section>

      <Section title="What stays on your device">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Your game: one save file and a backup copy in the app&apos;s own storage, holding your
            cash, servers, managers, upgrades, region, stats and the time of your last save (used
            to work out offline earnings).
          </li>
          <li>One setting: whether haptics are on.</li>
          <li>
            Settings &gt; Reset game deletes the save and its backup. Deleting the app deletes
            everything it stored.
          </li>
        </ul>
      </Section>

      <Section title="What I collect">
        <p>
          Nothing. The app has no accounts, cloud save, analytics, advertising, tracking,
          purchases, or third-party code. The Privacy policy link in Settings opens this page in
          Safari; the app itself does not connect to anything.
        </p>
      </Section>

      <Section title="Beta testing with TestFlight">
        <p>
          If you test the app through TestFlight, Apple collects crash logs, usage information
          and any feedback you choose to send, and shares them with me so I can fix problems.
          See{" "}
          <a
            href="https://www.apple.com/legal/privacy/data/en/test-flight/"
            className="text-accent underline underline-offset-4"
          >
            TestFlight and Privacy
          </a>{" "}
          for exactly what is included. I use this information only to improve the app and do not
          share it with anyone.
        </p>
      </Section>

      <Section title="Crash reports after release">
        <p>
          If you turn on Share With App Developers in Settings &gt; Privacy &amp; Security &gt;
          Analytics &amp; Improvements, Apple may share crash reports and usage statistics with
          me. You can turn this off at any time in the same place.
        </p>
      </Section>

      <Section title="Children">
        <p>
          The app does not collect personal information from anyone, including children.
          TestFlight itself is only available to people 13 and older.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          If this policy changes, I will update this page and the effective date at the top.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about this policy:{" "}
          <a href={`mailto:${CONTACT}`} className="text-accent underline underline-offset-4">
            {CONTACT}
          </a>
        </p>
      </Section>
    </div>
  );
}
