import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rack Rank | Support",
  description:
    "Support for Rack Rank, an iOS workout tracker with per-gym leaderboards: contact, reporting abuse, and deleting your data.",
};

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

export default function Gym01SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Rack Rank Support
        </h1>
        <p className="mt-2 text-muted-foreground">
          Rack Rank is an iOS workout tracker with a leaderboard for each gym, made by Elvis
          Ramirez. It is in TestFlight beta.
        </p>
      </div>

      <Section title="Contact">
        <p>
          Email <A href={`mailto:${CONTACT}`}>{CONTACT}</A> with questions, bugs or feedback. I
          reply as soon as I can, and to abuse reports within 24 hours.
        </p>
      </Section>

      <Section title="Report a user or a lift">
        <ul className="list-disc pl-5 space-y-2">
          <li>In the app, tap another member&apos;s row on a board and choose Report.</li>
          <li>For anything else, use Settings &gt; Safety &gt; Report a user or problem.</li>
          <li>If you cannot use the app, email me the gym and the username.</li>
        </ul>
      </Section>

      <Section title="Hide or delete your data">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Settings &gt; Hide me from boards (or the menu on the Boards screen) removes your public
            check-ins, lifts and witness confirmations. Your username stays reserved.
          </li>
          <li>
            Settings &gt; Delete all my data removes your public records and everything the app
            stores on your phone. Reports you sent are kept until I have handled them.
          </li>
          <li>
            Fix a typo in a finished workout: open it in History and tap Edit. If the best set of a
            lift changes, its old board record is removed and the corrected one is published if it is
            still the same day at your gym.
          </li>
          <li>
            Deleted the app already? Email me and I will delete your public records.
          </li>
        </ul>
      </Section>

      <Section title="Policies">
        <p>
          <A href="/gym-01/privacy/">Privacy Policy</A> and{" "}
          <A href="/gym-01/terms/">Terms of Use</A>.
        </p>
      </Section>
    </div>
  );
}
