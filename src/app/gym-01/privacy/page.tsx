import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rack Rank | Privacy Policy",
  description:
    "Privacy policy for Rack Rank, an iOS workout tracker with per-gym leaderboards. What is public, what stays on your phone, and how to delete it.",
};

const EFFECTIVE = "October 9, 2026";
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
          <li>
            Your workout history and body measurements stay on your phone, except the leaderboard
            records described below and anything you choose to copy or share yourself.
          </li>
          <li>
            If you join a gym&apos;s boards, your username, your gym, the days you checked in, your
            bench, squat and deadlift records, and any lifts you confirm for others are stored in a
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
          Workouts, sets, reps, routines, personal records, bodyweight and waist measurements, your
          gym&apos;s map coordinates, the members you blocked, and the exact times you checked in.
          None of this is sent to me or to anyone else, except the check-in days and the bench,
          squat and deadlift sets listed under What is public, and anything you copy or share
          yourself (see Copy for AI and exports). It is deleted when you delete the app or use
          Delete all my data. If iCloud is signed out when you use Delete all my data, your
          username, your gym and its map coordinates stay on the phone until you run it again.
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
            picked, whether you are hidden from the boards, and the date and time you joined that
            gym. iCloud also stamps it with the time it was last changed, for example when you rename
            yourself or hide. A separate record reserves your username at that gym.
          </li>
          <li>
            <span className="text-foreground">Check-in days:</span> the calendar days you checked
            in at your gym. The record has no time field, but it is saved when your workout ends (or
            the next time you open the app, if the phone was offline), and iCloud stamps every record
            with the time it was saved, so that stamp shows roughly when your first checked-in workout
            of the day ended. If the day at your gym is already over by then, nothing is published
            for that workout.
          </li>
          <li>
            <span className="text-foreground">Lift records:</span> when a checked-in workout
            includes a barbell bench press, squat or deadlift, the app publishes your best set of
            that lift (only ticked sets count, and warm-ups and sets over 12 reps do not) with its
            weight, reps, estimated one-rep max and the day (not the time). It is published only if
            it beats your best record of that lift already published at this gym, or equals it on a
            different day. Records are saved when your workout ends, or the next time you open the
            app if the phone was offline. Earlier records stay until you delete that workout in
            History, edit it so the best set of that lift changes, hide from the boards, change gyms,
            or delete your data.
          </li>
          <li>
            <span className="text-foreground">Witness confirmations:</span> when you tap &quot;I
            saw it&quot; for someone&apos;s lift, which lift you confirmed, your gym, and the exact
            time you tapped, linked to your username. The app only offers this to members who
            checked in at that gym that day before the lift was saved, so it shows you were there
            that day. If the lifter later changes that lift, your confirmation does not carry over to
            the changed lift.
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
            The app reads your location only while it is open, and only when you start a workout or
            reopen one that is not checked in yet (up to 30 minutes after it started), tap Check in,
            or tap Find gyms near me. If you have not picked a gym, workouts never read your
            location. Check-in needs Precise Location on; with it off, check-in says so and workout
            logging still works.
          </li>
          <li>
            The check-in comparison happens on your phone, and your coordinates are never stored
            or published. Find gyms near me sends your location to Apple Maps to list gyms within
            about 5 km, and gym name searches go to Apple Maps too. Your gym is identified by its
            Apple Maps ID. A gym that Apple Maps has no ID for cannot be picked, so no coordinates
            are ever part of your public records.
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
            <span className="text-foreground">Hide me from boards</span> (in Settings, or in the
            menu on the Boards screen) deletes your
            published check-in days, lift records and witness confirmations, and stops publishing
            new ones. Your profile record (username, gym and join date) stays in the public
            database marked as hidden, and your username stays reserved. Your workout history on
            your phone is not affected. Turning it off again does not bring back deleted records.
            After that, new workouts publish as usual, and a lift you correct in History on the same
            day as its workout can be published again together with that day&apos;s check-in.
          </li>
          <li>
            <span className="text-foreground">Deleting a workout</span> in History removes the
            lift records it published; the check-in day stays.{" "}
            <span className="text-foreground">Editing a finished workout</span> changes its lift
            records only if the best set of a lift changed: when you tap Done, the old record is
            removed, and the corrected one is published if you made the edit on the same day at your
            gym and it passes the rule above. If the phone is offline, the corrected record is saved
            the next time you open the app, even if that day has ended by then, as long as the
            workout was already on the boards. If the workout was still waiting to publish, or you
            hid from the boards after it, the check-in rule above applies instead: once the day at
            your gym is over, nothing from that workout is published.
          </li>
          <li>
            <span className="text-foreground">Changing your gym</span> (Settings &gt; Gym) deletes
            your check-in days, lift records, witness confirmations and profile at the old gym, and
            frees your username there. If part of that cleanup fails, the app retries it each time
            you open it.
          </li>
          <li>
            <span className="text-foreground">Delete all my data</span> (Settings) deletes your
            profile, username reservation, check-in days, lift records and witness confirmations,
            frees your username, and erases the app&apos;s data on your phone. If a public record at
            your gym cannot be removed, nothing is erased and the app asks you to try again. If
            iCloud is signed out or unavailable, it erases your workouts and other data on your
            phone but keeps your username and gym, so you can sign back in and run it again to
            remove your public records. If records at a gym you left earlier cannot be removed yet,
            your phone&apos;s data is still erased and the app keeps retrying that cleanup each time
            you open it. Reports you filed, including those sent when you blocked someone, are kept
            until I have handled them.
          </li>
          <li>
            If you no longer have the app, changed gyms and the app said it could not clean up your
            old gym, or switched this phone to a different Apple Account, email me from the address
            below and I will delete the public records left behind.
          </li>
        </ul>
      </Section>

      <Section title="Copy for AI and exports">
        <p>
          Copy for AI (on the workout summary, on a workout in History, and for the last 4 weeks in
          History &gt; Insights or History &gt; Progress Charts) builds a plain-text summary of your
          workouts that you can paste into ChatGPT, Claude or another AI app. You see the full text
          first, and nothing leaves your phone until you tap Copy or Share. The text contains
          workout dates (not times), routine names, how long each workout took, each exercise with
          its ticked sets (weight and reps), warm-ups and personal records, your best sets with
          estimated one-rep maxes, working sets per muscle per week, and workouts per week. It
          leaves out your gym, your username, your check-ins, other members, and your bodyweight and
          waist measurements. The Copy button puts the text on this phone&apos;s clipboard only, not
          on your other Apple devices, and it is cleared after 10 minutes. Once you paste or share
          it, the app you chose handles it under its own privacy policy. I never receive it.
        </p>
      </Section>

      <Section title="What I collect">
        <p>
          Nothing beyond the leaderboard records and reports above. Gym searches go to Apple Maps
          under Apple&apos;s privacy policy. The app has no analytics, advertising, tracking or
          third-party code, and does not sell or share data with anyone. Copy for AI and exports
          only hand your text to the app you pick, when you tap; I never receive it.
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
