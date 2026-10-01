import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strings Tuner | Privacy Policy",
  description:
    "Privacy policy for Strings Tuner, an iOS tuner and intonation trainer. The app collects no data.",
};

const EFFECTIVE = "September 30, 2026";
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

export default function StringsTunerPrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Strings Tuner Privacy Policy
        </h1>
        <p className="mt-2 text-muted-foreground">Effective {EFFECTIVE}</p>
      </div>

      <Section title="Summary">
        <p>
          Strings Tuner is an iOS tuner and intonation trainer for violin, viola, cello and
          bass, made by Elvis Ramirez. This policy covers the app and its TestFlight beta.
        </p>
        <p className="text-foreground">
          The app collects no data. Nothing you do in it is sent to me or to anyone else.
        </p>
      </Section>

      <Section title="Microphone">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            The app uses the microphone only to detect the pitch of the note you play, while
            the tuner or drone screen is open.
          </li>
          <li>
            Audio is processed on your device. It is never recorded, saved, or sent anywhere.
            The app contains no networking code.
          </li>
          <li>
            You can turn microphone access off at any time in Settings &gt; Strings Tuner.
          </li>
        </ul>
      </Section>

      <Section title="What stays on your device">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Practice log (Pro): the date, instrument, mode and length of each session. It is
            stored only on your device and is deleted when you delete the app.
          </li>
          <li>
            Purchase status: handled by Apple through the App Store. I never see your payment
            details or your Apple Account.
          </li>
        </ul>
      </Section>

      <Section title="What I collect">
        <p>
          Nothing. The app has no accounts, analytics, advertising, tracking, or third-party
          code.
        </p>
      </Section>

      <Section title="Purchases">
        <p>
          The Pro unlock is sold through the App Store. Apple processes the payment under{" "}
          <a
            href="https://www.apple.com/legal/privacy/"
            className="text-accent underline underline-offset-4"
          >
            Apple&apos;s privacy policy
          </a>
          .
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
          for exactly what is included. If you joined through a public link, your name and
          email address are not visible to me. I use this information only to improve the app
          and do not share it with anyone.
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
