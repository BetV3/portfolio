import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "gym-01 | Privacy Policy",
  description:
    "Privacy policy for gym-01, an iOS workout tracker with per-gym leaderboards. What is shared with other members, what stays on your phone, and how to delete it.",
};

const EFFECTIVE = "October 1, 2026";
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

export default function Gym01PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          gym-01 Privacy Policy
        </h1>
        <p className="mt-2 text-muted-foreground">Effective {EFFECTIVE}</p>
      </div>

      <Section title="Summary">
        <p>
          gym-01 (working title) is an iOS workout tracker with a leaderboard for each gym, made
          by Elvis Ramirez. This policy covers the app and its TestFlight beta.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-foreground">
          <li>Your workouts, sets and body measurements stay on your phone.</li>
          <li>
            Only your username, your gym, the days you checked in, and your best bench, squat and
            deadlift are shared, and only with other members of the same gym.
          </li>
          <li>Your location never leaves your phone.</li>
          <li>You can hide yourself from the boards or delete everything at any time.</li>
        </ul>
      </Section>

      <Section title="What stays on your phone">
        <p>
          Workouts, sets, reps, routines, personal records, notes, bodyweight and waist
          measurements, and the exact times you checked in. None of this is sent to me or to
          anyone else. It is deleted when you delete the app or use Delete All My Data.
        </p>
      </Section>

      <Section title="What other members of your gym can see">
        <p>
          The leaderboards are stored in the app&apos;s public iCloud database (Apple CloudKit).
          Anyone using the app can read these records. They contain:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="text-foreground">Your profile:</span> your username, the gym you
            picked, whether you are hidden from the boards, and the date you joined.
          </li>
          <li>
            <span className="text-foreground">Check-in days:</span> the calendar days you checked
            in at your gym. Not the time of day.
          </li>
          <li>
            <span className="text-foreground">Lift records:</span> your best barbell bench press,
            squat and deadlift from checked-in workouts: the weight, reps, estimated one-rep max
            and the date and time of the set. These are published only after your workout ends.
          </li>
          <li>
            <span className="text-foreground">Witness confirmations:</span> when you tap &quot;I
            saw it&quot; for someone&apos;s lift, your username and the time you confirmed it.
          </li>
        </ul>
        <p>
          The app does not publish your real name, email, Apple Account, photos, contacts or
          location. Records are linked to an anonymous identifier that Apple creates for this app;
          it is not your Apple Account and I cannot use it to find out who you are.
        </p>
      </Section>

      <Section title="Location">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            When you start a workout, the app reads your location once, only while the app is
            open, to check that you are within about 150 meters of your gym. If that check fails
            you can tap Check In to try again during the first 30 minutes.
          </li>
          <li>
            The comparison happens on your phone. Your coordinates and your gym&apos;s coordinates
            are never uploaded. Only &quot;checked in today&quot; is shared.
          </li>
          <li>The app never uses background location and never shows anyone where you are now.</li>
          <li>You can turn location off in Settings &gt; gym-01. Workout logging still works.</li>
        </ul>
      </Section>

      <Section title="Reports">
        <p>
          If you report a username or a lift, the report records your username, the username or
          lift reported, the reason you picked, any details you type, and the time. Only I can
          see reports. I use them to remove abusive usernames and fake lifts, and keep them only
          as long as needed to handle the report.
        </p>
      </Section>

      <Section title="Hiding and deleting your data">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="text-foreground">Hide me from boards</span> (Settings) deletes your
            published check-in days, lift records and witness confirmations, and stops publishing
            new ones. Your username stays reserved. Your workout history on your phone is not
            affected.
          </li>
          <li>
            <span className="text-foreground">Delete All My Data</span> (Settings) deletes every
            public record you created, frees your username, and erases the app&apos;s data on your
            phone.
          </li>
          <li>
            If you no longer have the app, email me from the address below and I will delete your
            public records.
          </li>
        </ul>
      </Section>

      <Section title="What I collect">
        <p>
          Nothing beyond the public leaderboard records above. The app has no analytics,
          advertising, tracking or third-party code, and does not sell or share data with anyone.
        </p>
      </Section>

      <Section title="Beta testing with TestFlight">
        <p>
          If you test the app through TestFlight, Apple collects crash logs, usage information
          and any feedback you choose to send, and shares them with me so I can fix problems.
          See <A href="https://www.apple.com/legal/privacy/data/en/test-flight/">TestFlight and
          Privacy</A> for exactly what is included. If you joined through a public link, your
          name and email address are not visible to me.
        </p>
      </Section>

      <Section title="Apple">
        <p>
          The public leaderboard records are stored by Apple in iCloud under{" "}
          <A href="https://www.apple.com/legal/privacy/">Apple&apos;s privacy policy</A>.
        </p>
      </Section>

      <Section title="Children">
        <p>
          The app is not directed to children under 13, and TestFlight is only available to
          people 13 and older. If you believe a child under 13 has created a username, email me
          and I will delete it.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          If this policy changes, I will update this page and the effective date at the top. If
          the app ever starts sharing anything not listed here, the app will ask you first.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions or deletion requests: <A href={`mailto:${CONTACT}`}>{CONTACT}</A>
        </p>
      </Section>
    </div>
  );
}
