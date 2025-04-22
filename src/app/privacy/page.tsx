import React from "react";

export default function PrivacyPage() {
  return (
    <section className="px-32 py-16 dark:text-neutral-200">
      <h1 className="mb-6 text-4xl font-bold">Privacy Policy</h1>
      <p className="mb-4">
        {
          "This policy applies to all information collected or submitted on LookForward's apps for iOS and Android devices."
        }
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        Information we collect
      </h2>
      <p className="mb-4">
        {
          "New LookForward accounts are created with an email address and password. Email addresses are <strong>only</strong> used for logging in, password resets, responding to emails that you initiate, and sending notifications that you request. We don't send promotional emails."
        }
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Technical basics</h3>
      <p className="mb-2">
        If you enable notifications, we must store a token to send them. We{" "}
        <strong>never</strong> use notifications for marketing.
      </p>
      <p className="mb-2">
        If you add an item to your countdown list, we need to store it until you
        delete it.
      </p>
      <p className="mb-4">We use tokens in the app to keep you logged in.</p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">Information usage</h2>
      <p className="mb-4">
        We use the information we collect to operate and improve our app.
      </p>
      <p className="mb-4">
        {
          "We do not share personal information with outside parties except to the extent necessary to accomplish LookForward's functionality. We may share anonymous, aggregate statistics with outside parties, such as how many people have a particular media release in their countdown list."
        }
      </p>
      <p className="mb-4">
        We may disclose your information in response to subpoenas, court orders,
        or other legal requirements; to exercise our legal rights or defend
        against legal claims; to investigate, prevent, or take action regarding
        illegal activities, suspected fraud or abuse, violations of our
        policies; or to protect our rights and property.
      </p>
      <p className="mb-4">
        In the future, we may sell to, buy, merge with, or partner with other
        businesses. In such transactions, user information may be among the
        transferred assets.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">Security</h2>
      <p className="mb-4">
        We implement a variety of security measures to help keep your
        information secure. Passwords are{" "}
        <a
          href="http://en.wikipedia.org/wiki/Cryptographic_hash_function"
          className="text-indigo-700 hover:underline"
        >
          hashed
        </a>
        , not stored, using industry-standard methods (currently a modified
        version of{" "}
        <a
          href="https://en.wikipedia.org/wiki/Scrypt"
          className="text-indigo-700 hover:underline"
        >
          scrypt
        </a>
        ).
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        Accessing, changing, or deleting information
      </h2>
      <p className="mb-4">
        You may access or change your information or delete your account from
        the LookForward app.
      </p>
      <p className="mb-4">
        LookForward may delete your information at any time and for any reason,
        such as technical needs, legal concerns, abuse prevention, removal of
        idle accounts, data loss, or any other reason.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        Third-party links and content
      </h2>
      <p className="mb-4">
        LookForward displays content from third-party sites. These have their
        own independent privacy policies, and we have no responsibility or
        liability for their content or activities.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        California Online Privacy Protection Act Compliance
      </h2>
      <p className="mb-4">
        We comply with the California Online Privacy Protection Act. We
        therefore will not distribute your personal information to outside
        parties without your consent.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        {"Children's Online Privacy Protection Act Compliance"}
      </h2>
      <p className="mb-4">
        We never collect or maintain information in our app from those we
        actually know are under 13, and no part of our app is structured to
        attract anyone under 13.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        Information for European Union Customers
      </h2>
      <p className="mb-4">
        By using LookForward and providing your information, you authorize us to
        collect, use, and store your information outside of the European Union.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        International Transfers of Information
      </h2>
      <p className="mb-4">
        Information may be processed, stored, and used outside of the country in
        which you are located. Data privacy laws vary across jurisdictions, and
        different laws may be applicable to your data depending on where it is
        processed, stored, or used.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">Your Consent</h2>
      <p className="mb-4">
        By using our app, you consent to our privacy policy.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">
        Changes to this policy
      </h2>
      <p className="mb-4">
        If we decide to change our privacy policy, we will post those changes on
        this page.
      </p>
      <ul className="list-inside list-disc">
        <li>
          <strong>September 11, 2020:</strong> First published.
        </li>
        <li>
          <strong>December 11, 2022:</strong> Added provision for user to delete
          account.
        </li>
      </ul>
    </section>
  );
}
