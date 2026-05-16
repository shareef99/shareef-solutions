import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/legal-page";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="16 May 2026">
      <section>
        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using the services provided by Shareef Solutions
          (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), located at Talab Katta, Bhavani Nagar, Hyderabad,
          Telangana, India, you agree to be bound by these Terms of Service. If
          you do not agree with any part of these terms, you may not use our
          services.
        </p>
      </section>

      <section>
        <h2>2. Services</h2>
        <p>
          Shareef Solutions provides software development services including but
          not limited to web development, mobile application development, UI/UX
          design, and custom software solutions. All services are delivered on a
          project basis as agreed upon in individual project proposals or
          contracts.
        </p>
      </section>

      <section>
        <h2>3. Payment Terms</h2>
        <p>
          Payment terms are defined in individual project agreements. Unless
          otherwise stated:
        </p>
        <ul>
          <li>All prices are quoted in Indian Rupees (INR) unless specified otherwise.</li>
          <li>Payment is due as per the milestones agreed upon in the project proposal.</li>
          <li>Late payments may attract interest at the rate of 1.5% per month.</li>
          <li>All applicable taxes, including GST, will be added to the quoted price.</li>
        </ul>
      </section>

      <section>
        <h2>4. Refund Policy</h2>
        <p>
          We offer a <strong>full refund within 7 days</strong> of the payment
          date, subject to the following conditions:
        </p>
        <ul>
          <li>
            The refund request must be submitted within 7 calendar days from the
            date of payment.
          </li>
          <li>
            If work on the project has not substantially commenced, a full refund
            will be issued.
          </li>
          <li>
            If significant work has already been delivered or commenced, a
            partial refund may be offered proportional to the work not yet
            completed, at the sole discretion of Shareef Solutions.
          </li>
          <li>
            Refunds will be processed within 5–10 business days to the original
            payment method.
          </li>
        </ul>
        <p>
          For detailed information, please refer to our{" "}
          <a href="/refund-policy">Cancellation & Refund Policy</a>.
        </p>
      </section>

      <section>
        <h2>5. Cancellation Policy</h2>
        <p>
          Either party may cancel a project engagement by providing written
          notice. Upon cancellation:
        </p>
        <ul>
          <li>
            The client shall pay for all work completed up to the date of
            cancellation.
          </li>
          <li>
            Any advance payments for uncompleted work will be refunded in
            accordance with the Refund Policy above.
          </li>
          <li>
            All deliverables completed up to the date of cancellation will be
            handed over to the client upon settlement of all dues.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Intellectual Property</h2>
        <p>
          Upon full payment, all intellectual property rights for custom-built
          software and deliverables are transferred to the client, unless
          otherwise specified in the project agreement. Shareef Solutions retains
          the right to use general knowledge, skills, and experience gained
          during the project, and to showcase non-confidential aspects in its
          portfolio.
        </p>
      </section>

      <section>
        <h2>7. Confidentiality</h2>
        <p>
          Both parties agree to keep confidential all proprietary information
          received from the other party during the course of the engagement.
          This obligation survives the termination of the agreement.
        </p>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable Indian law, Shareef
          Solutions shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, including loss of profits, data,
          or business opportunities, arising out of or related to the use of our
          services.
        </p>
      </section>

      <section>
        <h2>9. Governing Law & Dispute Resolution</h2>
        <p>
          These terms shall be governed by and construed in accordance with the
          laws of India. Any disputes arising out of these terms shall be subject
          to the exclusive jurisdiction of the courts in Hyderabad, Telangana,
          India.
        </p>
      </section>

      <section>
        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will be
          effective immediately upon posting to our website. Continued use of our
          services after changes constitutes acceptance of the modified terms.
        </p>
      </section>

      <section>
        <h2>11. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:nadeemshareef934@gmail.com">
              nadeemshareef934@gmail.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href="tel:+917815837564">+91 7815837564</a>
          </li>
          <li>
            Address: Talab Katta, Bhavani Nagar, Hyderabad, Telangana, India
          </li>
        </ul>
      </section>
    </LegalPage>
  );
}
