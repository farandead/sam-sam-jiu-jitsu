import React from 'react';

import PageLayout from '../PageLayout';
const TermsAndConditions = () => {
  return (
    <PageLayout className='pt-10 mt-6'>
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>

        <p className="mb-4">
          Welcome to <strong>Sam Sam Jiu Jitsu Academy</strong>. By signing up for classes, using our website, or participating in any of our services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By enrolling in any class, using our website, or participating in any event or program at <strong>Sam Sam Jiu Jitsu Academy</strong>, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions, as well as any additional guidelines, rules, or disclaimers posted on our website or communicated to you.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Membership and Class Bookings</h2>
        <p className="mb-4">
          - All memberships and class bookings must be made in advance through our website, app, or in person.
          <br />- Memberships are non-transferable and may be canceled at any time, with at least [specify] days' notice required for cancellation.
          <br />- Class bookings are subject to availability and can be modified or canceled up to [specify] hours before the class start time. Late cancellations or no-shows may be subject to a fee.
          <br />- You are responsible for updating your personal information if it changes.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Payment and Refunds</h2>
        <p className="mb-4">
          - Payment for memberships, classes, or events must be made in advance. We accept payments through [payment methods].
          <br />- All payments are non-refundable except in exceptional circumstances, which will be evaluated on a case-by-case basis.
          <br />- If a class is canceled by <strong>Sam Sam Jiu Jitsu Academy</strong>, you will be offered a rescheduled class or a refund for that session.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Health and Safety</h2>
        <p className="mb-4">
          - By participating in any class or event, you acknowledge that Jiu-Jitsu is a physically demanding activity and carries inherent risks of injury. You are responsible for assessing your own fitness and health before engaging in any activities.
          <br />- You agree to inform your instructor of any medical conditions, injuries, or concerns that may affect your ability to safely participate.
          <br />- <strong>Sam Sam Jiu Jitsu Academy</strong> is not liable for any injuries or health issues that may arise during training or events.
          <br />- You must follow all safety instructions given by instructors at all times.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Conduct</h2>
        <p className="mb-4">
          - Participants are expected to behave respectfully towards instructors, staff, and other members. Any form of harassment, bullying, or disruptive behavior will not be tolerated and may result in suspension or termination of membership without a refund.
          <br />- You must wear appropriate attire (e.g., gi or rash guard) and follow the academy's hygiene policies to ensure the safety and comfort of all participants.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Privacy Policy</h2>
        <p className="mb-4">
          - We collect personal information such as your name, contact information, and payment details to manage your membership and bookings. We take your privacy seriously and will not share your information with third parties without your consent, except where required by law.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
        <p className="mb-4">
          - All content, including but not limited to text, images, videos, logos, and designs available on our website and in our academy, are the property of <strong>Sam Sam Jiu Jitsu Academy</strong> and are protected by copyright and other intellectual property laws.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
        <p className="mb-4">
          - <strong>Sam Sam Jiu Jitsu Academy</strong>, its instructors, and staff are not liable for any direct, indirect, incidental, or consequential damages resulting from your use of our services, participation in classes, or use of our website.
          <br />- You assume all responsibility and risk associated with participation in physical activities.
        </p>

        <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
        <p className="mb-4">
          - <strong>Sam Sam Jiu Jitsu Academy</strong> reserves the right to modify these terms and conditions at any time. Any changes will be posted on our website, and it is your responsibility to review the terms regularly.
          <br />- Continued use of our services or website after any changes to the terms constitutes acceptance of those changes.
        </p>

        <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
        <p className="mb-4">
          - These terms and conditions are governed by and construed in accordance with the laws of [your region or country], and you agree to submit to the exclusive jurisdiction of the courts in [your region or country].
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about these terms, please contact us at:
        </p>

        <p className="mb-4">
          <strong>Sam Sam Jiu Jitsu Academy</strong>
          <br /> Email: [insert email address]
          <br /> Phone: [insert phone number]
          <br /> Address: [insert address]
        </p>
      </div>
    </PageLayout>
  );
};

export default TermsAndConditions;
