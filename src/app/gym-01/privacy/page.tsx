import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rack Rank | Privacy Policy",
  description:
    "Privacy policy for Rack Rank, an iOS workout tracker with per-gym leaderboards. What is public, what stays on your phone, and how to delete it.",
};

const EFFECTIVE = "October 2, 2026";
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
          Rack Rank Privacy Policy
        </h1>
        <p className="mt-2 text-muted-foreground">Effective {EFFECTIVE}</p>
      </div>

      <Section title="Summary">
        <p>
          Rack Rank is an iOS workout tracker with a leaderboard for each gym, made by Elvis
          Ramirez. This policy covers the app and its TestFlight beta.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-foreground">
          <li>Your workouts, sets and body measurements stay on your phone.</li>
          <li>
            If you join a gym&apos;s boards, your username, your gym, the days you checked in, your
            bench, squat and deadlift bests, and any lifts you confirm for others are stored in a
            public database that anyone using the app can read.
          </li>
          <li>
            Your location is used on your phone to check you in. It is only sent to Apple Maps when
            you search for gyms near you, and it is never stored or published.
          </li>
          <li>You can hide yourself from the boards or delete everything at any time.</li>
        </ul>
      </Section>

      <Section title="What stays on your phone">
        <p>
          Workouts, sets, reps, routines, personal records, notes, bodyweight and waist
          measurements, and the exact times you checked in. None of this is sent to me or to
          anyone else. It is deleted when you delete the app or use Delete all my data.
        </p>
      </Section>

      <Section title="What is public">
        <p>
          The leaderboards are stored in the app&apos;s public iCloud database (Apple CloudKit).
          Anyone using the app can read these records. They contain:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="text-foreground">Your profile:</span> your username, the gym you
            picked, whether you are hidden from the boards, and the date and time you joined. A
            separate record reserves your username at that gym.
          </li>
          <li>
            <span className="text-foreground">Check-in days:</span> the calendar days you checked
            in at your gym. The record has no time field, but it is saved when your workout ends,
            and iCloud stamps every record with the time it was saved, so that stamp shows when
            your first checked-in workout of the day ended.
          </li>
          <li>
            <span className="text-foreground">Lift records:</span> each time a checked-in workout
            beats your best bench press, squat or deadlift already published at this gym, a new
            record with the weight, reps, estimated one-rep max and the day (not the time) of the
            set. They are saved when your workout ends. Earlier records stay until you hide or
            delete your data.
          </li>
          <li>
            <span className="text-foreground">Witness confirmations:</span> when you tap &quot;I
            saw it&quot; for someone&apos;s lift, which lift you confirmed, your gym, and the exact
            time you tapped, linked to your username. The app only offers this to members who
            checked in at that gym that day, so it shows you were there that day.
          </li>
        </ul>
        <p>
          The app does not publish your real name, email, Apple Account, photos, contacts or
          coordinates. Records are linked to an anonymous identifier that Apple creates for this
          app; it is not your Apple Account and I cannot use it to find out who you are.
        </p>
      </Section>

      <Section title="Location">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            The app reads your location only while it is open, and only when you start a workout,
            tap Check In, or tap Find gyms near me. Check-in needs Precise Location on; with it
            off, check-in says so and workout logging still works.
          </li>
          <li>
            The check-in comparison happens on your phone, and your coordinates are never stored
            or published. Find gyms near me sends your location to Apple Maps to list gyms within
            about 5 km, and gym name searches go to Apple Maps too. Your gym is identified by its
            Apple Maps ID. If Apple Maps has no ID for it, the app uses the gym&apos;s coordinates
            rounded to about 100 meters, and that rounded location is part of your public records.
          </li>
          <li>The app never uses background location and never shows anyone where you are now.</li>
          <li>You can turn location off in Settings &gt; Rack Rank. Workout logging still works.</li>
        </ul>
      </Section>

      <Section title="Reports">
        <p>
          If you report a username, a lift or a problem, or block someone, the app sends me a
          report with your anonymous identifier, your gym, the member or lift reported, the reason
          (blocking counts as a report), any details you type, and the time. Only I can see
          reports. I use them to remove abusive usernames and fake lifts.
        </p>
      </Section>

      <Section title="Hiding and deleting your data">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="text-foreground">Hide me from boards</span> (Settings) deletes your
            published check-in days, lift records and witness confirmations, and stops publishing
            new ones. Your profile record (username, gym and join date) stays in the public
            database marked as hidden, and your username stays reserved. Your workout history on
            your phone is not affected.
          </li>
          <li>
            <span className="text-foreground">Delete all my data</span> (Settings) deletes your
            profile, username reservation, check-in days, lift records and witness confirmations,
            frees your username, and erases the app&apos;s data on your phone. Reports you filed,
            including those sent when you blocked someone, are kept until I have handled them.
          </li>
          <li>
            If you no longer have the app, email me from the address below and I will delete your
            public records.
          </li>
        </ul>
      </Section>

      <Section title="What I collect">
        <p>
          Nothing beyond the leaderboard records and reports above. Gym searches go to Apple Maps
          under Apple&apos;s privacy policy. The app has no analytics, advertising, tracking or
          third-party code, and does not sell or share data with anyone.
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
          The public leaderboard records are stored by Apple in iCloud, and gym searches are
          handled by Apple Maps, under{" "}
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
