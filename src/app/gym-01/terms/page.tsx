import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rack Rank | Terms of Use",
  description:
    "Terms of use for Rack Rank, an iOS workout tracker with per-gym leaderboards. Zero tolerance for objectionable content or abusive users.",
};

const EFFECTIVE = "October 7, 2026";
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

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-accent underline underline-offset-4">
      {children}
    </a>
  );
}

export default function Gym01TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Rack Rank Terms of Use
        </h1>
        <p className="mt-2 text-muted-foreground">Effective {EFFECTIVE}</p>
      </div>

      <Section title="Agreement">
        <p>
          Rack Rank is an iOS workout tracker with a leaderboard for each gym, made by Elvis
          Ramirez. By tapping Agree in the app, you accept these terms and Apple&apos;s{" "}
          <A href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            Licensed Application End User License Agreement
          </A>
          . If you do not agree, tap Not now and do not create a username. You can still log
          workouts privately.
        </p>
      </Section>

      <Section title="Zero tolerance">
        <p className="text-foreground">
          There is no tolerance for objectionable content or abusive users.
        </p>
        <p>You may not:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Pick a username that is offensive, hateful, sexual, threatening, or that impersonates
            another person or a gym.
          </li>
          <li>Post lifts you did not do, or confirm lifts you did not see.</li>
          <li>Harass, stalk or threaten other members, in the app or because of it.</li>
          <li>Use the leaderboards to track when another member is at the gym.</li>
          <li>Fake your location or tamper with the app to get onto a board.</li>
        </ul>
      </Section>

      <Section title="Reports and enforcement">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            You can report any other member&apos;s username or lift: tap their row on a board and
            choose Report. You can also use Settings &gt; Safety &gt; Report a user or problem.
          </li>
          <li>
            I review reports and act within 24 hours: offending usernames, lift records and
            confirmations are removed, and the user who posted them is removed from the boards.
          </li>
          <li>
            Repeat offenders have everything they post removed each time, and I may reserve their
            usernames so no one can use them again.
          </li>
          <li>
            You can also block any member yourself: tap their row on a board and choose Block, or use
            Settings &gt; Safety &gt; Block a member. Blocking hides them from your boards (pull down
            on Boards to refresh) and also sends me a report. You can unblock someone in Settings &gt;
            Privacy &gt; Blocked users.
          </li>
        </ul>
      </Section>

      <Section title="Lift safely">
        <p>
          The app tracks what you log. It is not medical, training or nutrition advice, and
          neither are suggestions from an AI app you paste your workouts into. Heavy
          lifting can cause injury: use a spotter and safety equipment, and never attempt a lift
          for a leaderboard spot that you are not ready for. You are responsible for your own
          training.
        </p>
      </Section>

      <Section title="Leaderboards">
        <p>
          Boards are self-reported. Check-ins only show that a phone was within about 150 meters of
          the gym around the start of a workout, and witness confirmations come from other members. Rankings are for
          fun, are not verified records, and may be reset or corrected at any time.
        </p>
      </Section>

      <Section title="Your data">
        <p>
          What is shared and how to hide or delete it is explained in the{" "}
          <A href="/gym-01/privacy/">Privacy Policy</A>.
        </p>
      </Section>

      <Section title="Beta">
        <p>
          While the app is in TestFlight it is a test version. Features, boards and data may
          change or be reset, and the app is provided as is.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          If these terms change, I will update this page and the effective date at the top.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions, reports or appeals: <A href={`mailto:${CONTACT}`}>{CONTACT}</A>
        </p>
      </Section>
    </div>
  );
}
