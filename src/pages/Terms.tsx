
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { SEO } from "@/components/SEO";

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      <SEO
        title="Terms and Conditions | MindSync Solutions"
        description="Read MindSync Solutions' terms and conditions. Understand your rights and obligations when using our educational technology platform."
        canonicalUrl="https://mindsync.solutions/terms"
      />
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto prose dark:prose-invert prose-a:text-indigo-600 dark:prose-a:text-indigo-400 max-w-none">

          <h1>Terms and Conditions</h1>
          <p className="text-lg font-semibold not-italic">MindSync Solutions</p>
          <p><strong>Effective Date:</strong> 9 June 2025 &nbsp;|&nbsp; <strong>Last Updated:</strong> 9 June 2025</p>

          <table>
            <tbody>
              <tr><td className="font-semibold w-48">Operator</td><td>MindSync Solutions</td></tr>
              <tr><td className="font-semibold">Platform</td><td><a href="https://www.mindsync.solutions">https://www.mindsync.solutions</a> and associated apps</td></tr>
              <tr><td className="font-semibold">Phone</td><td>+1 (585) 212-0163</td></tr>
              <tr><td className="font-semibold">Legal Contact</td><td><a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a></td></tr>
              <tr><td className="font-semibold">Registered In</td><td>Ghana · Nigeria · Australia</td></tr>
              <tr><td className="font-semibold">Governing Law</td><td>Laws of the Commonwealth of Australia</td></tr>
              <tr><td className="font-semibold">Dispute Resolution</td><td>Tiered: Negotiation → Mediation → ACICA Arbitration (Sydney)</td></tr>
            </tbody>
          </table>

          <div className="not-prose bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700 rounded-xl p-6 my-8">
            <p className="font-bold text-amber-900 dark:text-amber-200 mb-2 text-sm uppercase tracking-wide">Important — Please Read Carefully</p>
            <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
              These Terms and Conditions ("Terms") form a legally binding agreement between you and MindSync Solutions. By registering for, accessing, or using any part of the Platform, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must immediately cease use of the Platform.
            </p>
          </div>

          <h2>1. Definitions</h2>
          <p>In these Terms, the following definitions apply:</p>
          <table>
            <tbody>
              <tr><td className="font-semibold align-top w-52">"Platform"</td><td>The MindSync Solutions website (www.mindsync.solutions), mobile applications, SIMS, LMS, AI Course Creator, AI Tutoring, Parent Portal, Communication Tools, Analytics, and all related services</td></tr>
              <tr><td className="font-semibold align-top">"MindSync" / "we"</td><td>MindSync Solutions, including its entities registered in Australia, Ghana, and Nigeria</td></tr>
              <tr><td className="font-semibold align-top">"User"</td><td>Any individual or entity that accesses or uses the Platform, including Institution Admins, Teachers, Students, Tutors, Parents/Guardians, and Guest Users</td></tr>
              <tr><td className="font-semibold align-top">"Institution"</td><td>A school, college, training centre, university, or other educational body that has entered a commercial agreement with MindSync to deploy the Platform</td></tr>
              <tr><td className="font-semibold align-top">"Student"</td><td>An individual enrolled under an Institution account for the purpose of learning, regardless of age</td></tr>
              <tr><td className="font-semibold align-top">"Minor"</td><td>A Student or User under the age of 18, or such higher age as is defined by the law of the applicable jurisdiction</td></tr>
              <tr><td className="font-semibold align-top">"Content"</td><td>Any material uploaded, created, submitted, or shared on the Platform, including course materials, assessments, messages, files, and AI-generated output</td></tr>
              <tr><td className="font-semibold align-top">"Subscription"</td><td>A paid plan granting access to specified Platform features for a defined period, as set out in an Order Form or on our website</td></tr>
              <tr><td className="font-semibold align-top">"Education Records"</td><td>Records directly related to a student maintained by an institution or MindSync acting on its behalf, as defined by FERPA and equivalent laws</td></tr>
              <tr><td className="font-semibold align-top">"AI Features"</td><td>Artificial intelligence and machine learning tools embedded in the Platform including personalised recommendations, automated course generation, and intelligent tutoring</td></tr>
              <tr><td className="font-semibold align-top">"Intellectual Property"</td><td>All patents, trademarks, service marks, copyrights, moral rights, trade secrets, software, databases, source code, algorithms, designs, and related rights</td></tr>
              <tr><td className="font-semibold align-top">"Confidential Information"</td><td>Any non-public technical, commercial, financial, or operational information disclosed by one party to the other in connection with the Platform</td></tr>
              <tr><td className="font-semibold align-top">"Force Majeure Event"</td><td>Any event beyond a party's reasonable control including natural disaster, pandemic, governmental action, cyberattack, power failure, or internet outage</td></tr>
            </tbody>
          </table>

          <h2>2. Acceptance and Eligibility</h2>

          <h3>2.1 Acceptance</h3>
          <p>These Terms take effect when you: (a) click 'I agree' or equivalent during registration; (b) first access the Platform; or (c) execute an Order Form or institutional agreement that references these Terms. All three constitute binding acceptance.</p>

          <h3>2.2 Individual Eligibility</h3>
          <p>To use the Platform in your own right, you must:</p>
          <ul>
            <li>Be at least 18 years of age; or if under 18, access the Platform solely within the context of an enrolled Institution under appropriate supervision</li>
            <li>Have full legal capacity to enter into binding agreements in your jurisdiction</li>
            <li>Not be subject to any prohibition on using the Platform under applicable law</li>
          </ul>

          <h3>2.3 Institutional Responsibility</h3>
          <p>By deploying the Platform, each Institution warrants and undertakes that it:</p>
          <ul>
            <li>Has full authority to enter into the agreement on behalf of its staff, students, and other users</li>
            <li>Has obtained, and will maintain, all consents required by applicable law — including FERPA, COPPA, Ghana DPA, NDPR/NDPA, and GDPR — for the processing of student and staff data</li>
            <li>Has obtained verifiable parental or guardian consent for any student under 13 (or such higher age threshold as is required by applicable law) prior to activating their account</li>
            <li>Will ensure that all users within its account comply with these Terms</li>
            <li>Will promptly notify MindSync of any actual or suspected breach of these Terms or applicable law involving its account</li>
          </ul>
          <p>Institutions are the data controllers for their students' Education Records; MindSync acts as a data processor and/or school official as applicable.</p>

          <h3>2.4 Account Security</h3>
          <ul>
            <li>You are solely responsible for maintaining the confidentiality of your login credentials</li>
            <li>You must not share credentials with any other person</li>
            <li>You must notify MindSync immediately at <a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a> upon becoming aware of any unauthorised access or suspected compromise</li>
            <li>MindSync may suspend any account it reasonably suspects has been compromised, without prior notice, to protect the integrity of the Platform</li>
          </ul>

          <h2>3. Description of Platform Services</h2>
          <p>MindSync Solutions provides the following integrated services as part of the Platform. The specific modules available to you depend on your Subscription plan:</p>
          <table>
            <tbody>
              <tr>
                <td className="font-semibold align-top w-52">MindSync SIMS</td>
                <td>An institutional-grade School Information Management System that forms the operational backbone of the Platform. Covers AI-powered timetable scheduling, academic records and grade management, automated fee collection and financial ledgers, full HR lifecycle and staff payroll, biometric and mobile attendance tracking, and multi-format administrative reporting. Designed to scale from single-campus schools to multi-site institutions.</td>
              </tr>
              <tr>
                <td className="font-semibold align-top">MindSync LMS</td>
                <td>A world-class Learning Management System built for seamless digital coursework delivery. Compatible with global standards including Canvas and IMSCC. Provides interactive course creation with multimedia support, a digital gradebook with advanced submission management, role-based access for teachers and students, an enrolment engine for class assignment, and discussion-based collaborative learning tools.</td>
              </tr>
              <tr>
                <td className="font-semibold align-top">Coursify (AI Course Creator)</td>
                <td>An AI-powered content transformation engine that converts static documents, PDFs, rich text, and video into fully interactive, SCORM 1.2/2004-compliant courseware deployable on any major LMS. Features include smart AI-driven document transformation, SCORM package export, rapid turnaround (professional course creation in under 24 hours), and engagement-optimised multimedia output designed for maximum learner retention.</td>
              </tr>
              <tr>
                <td className="font-semibold align-top">MindSync Coach (AI Classroom Suite)</td>
                <td>An AI-native classroom toolbox for educators. Includes a visual lesson planner for curriculum mapping and assignment organisation, Classroom Pulse for real-time interactive student comprehension checks, a student dashboard for task tracking and resource access, direct feedback tools for text and audio annotations, and lightweight progress insights to identify students needing support.</td>
              </tr>
              <tr>
                <td className="font-semibold align-top">TutorSmart (Tutoring Platform)</td>
                <td>A secure one-to-one tutoring marketplace connecting students with verified, registered professional educators. All tutors are ClassCover Verified and Working with Children (WWC) Checked. Covers all ages and subjects with nationwide reach, zero lock-in contracts, and a free initial consultation. Operates as a standalone platform and as an integrated service within the MindSync ecosystem.</td>
              </tr>
              <tr>
                <td className="font-semibold align-top">School Staffing (Recruitment Engine)</td>
                <td>An AI-powered relief teacher recruitment platform with a network of 4,200+ verified professionals across 32+ countries. Uses intelligent matching algorithms based on subject expertise and availability to achieve an average placement time of under 4 hours. Includes automated compliance clearances, credential verification, and background check management for urgent institutional staffing needs.</td>
              </tr>
              <tr>
                <td className="font-semibold align-top">MindSync Magazine</td>
                <td>A school communication and events platform that bridges the gap between institutions and families. Provides premium digital newsletter templates, unified school-wide event tracking with parent calendar sync, multi-channel distribution via web and mobile portals, and deep integration within the SIMS ecosystem for consistent institutional communication.</td>
              </tr>
              <tr>
                <td className="font-semibold align-top">MindSync Sport</td>
                <td>A comprehensive athletic operations suite for schools. Manages tournament brackets, fixture scheduling, and game coordination; provides high-level board dashboards for compliance reporting and budget tracking; coordinates team travel, equipment inventory, and venue reservations; facilitates onboarding of external convenors, coaches, and sports boards; and automates medical waivers, coaching credentials, and safety document management.</td>
              </tr>
            </tbody>
          </table>
          <p>MindSync reserves the right to add, modify, suspend, or discontinue any feature or module of the Platform at any time. For Institutions under active Subscriptions, material adverse changes will be communicated at least 30 days in advance, during which time the Institution may elect to terminate and receive a pro-rata refund of prepaid fees for the affected period.</p>

          <h2>4. Subscriptions, Fees, and Payments</h2>

          <h3>4.1 Subscription Plans</h3>
          <p>Access to full Platform functionality requires a paid Subscription. Plan details, pricing, included features, and user limits are set out on the MindSync website or in a separately executed Order Form. MindSync reserves the right to revise pricing with 30 days' written notice; revised pricing applies at the next renewal.</p>

          <h3>4.2 Payment Terms</h3>
          <ul>
            <li>Fees are due in accordance with the billing schedule agreed at Subscription commencement (monthly, annual, or as otherwise agreed)</li>
            <li>Invoices unpaid within 14 days of the due date may attract a late payment charge of 1.5% per month or the maximum rate permitted by law, whichever is lower</li>
            <li>MindSync reserves the right to suspend Platform access for accounts with fees overdue by more than 30 days, without prejudice to its right to recover outstanding amounts</li>
            <li>All fees are exclusive of applicable taxes (GST in Australia, VAT in Nigeria, VAT in Ghana, or equivalent); the Institution/User is responsible for all applicable taxes unless expressly stated otherwise on the invoice</li>
          </ul>

          <h3>4.3 Auto-Renewal</h3>
          <p>Subscriptions renew automatically at the end of each billing period unless cancelled in writing at least 14 days before the renewal date. Notice of cancellation must be sent to <a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a>. If cancelled after the renewal date, the subscription will run to the end of the current paid period; no partial refunds are given for mid-period cancellations.</p>

          <h3>4.4 Disputed Charges</h3>
          <p>Any billing dispute must be raised in writing to <a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a> within 30 days of the invoice date, setting out the nature of the dispute. MindSync will investigate and provide a written response within 14 business days. Undisputed amounts remain payable pending resolution.</p>

          <h3>4.5 Refunds</h3>
          <p>Fees are non-refundable except in the following circumstances:</p>
          <ul>
            <li>A verified technical failure attributable solely to MindSync causing Platform unavailability exceeding 72 consecutive hours, where MindSync has been notified and failed to restore service — entitlement to a pro-rata credit or refund for the affected period</li>
            <li>Material adverse changes to the Platform as described in Section 3 where the Institution elects to terminate</li>
            <li>Billing errors resulting in overcharging — refund of the overcharged amount</li>
          </ul>
          <p>No refund is available for non-use, partial use, or dissatisfaction with AI-generated output.</p>

          <h2>5. Acceptable Use Policy</h2>

          <h3>5.1 Permitted Use</h3>
          <p>The Platform is licensed for lawful educational purposes only, including teaching, learning, academic administration, and parental engagement in connection with a registered Institution. Any other use requires MindSync's prior written consent.</p>

          <h3>5.2 Prohibited Conduct</h3>
          <p>Users must not use the Platform to:</p>
          <ul>
            <li>Upload, share, or transmit content that is unlawful, defamatory, harassing, threatening, obscene, discriminatory, or otherwise objectionable</li>
            <li>Infringe any intellectual property rights of MindSync or any third party, including reproducing, distributing, or modifying Platform software or content without authorisation</li>
            <li>Introduce malware, viruses, Trojan horses, ransomware, or any other malicious or disruptive code</li>
            <li>Attempt to gain unauthorised access to any account, system, database, or network component of the Platform</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive source code, algorithms, or trade secrets from the Platform</li>
            <li>Scrape, harvest, or systematically extract data from the Platform without prior written authorisation</li>
            <li>Use automated bots, scripts, or crawlers to interact with the Platform in a manner that places excessive load on infrastructure or violates these Terms</li>
            <li>Engage in academic fraud, impersonation, or misrepresentation of academic performance</li>
            <li>Use the Platform to conduct or facilitate any illegal activity, including but not limited to fraud, money laundering, or child exploitation</li>
            <li>Attempt to undermine the security, integrity, or availability of the Platform or any user's data</li>
            <li>Use student data accessed through the Platform for any purpose other than the delivery of educational services</li>
          </ul>

          <h3>5.3 Content Standards</h3>
          <p>All content uploaded to the Platform must:</p>
          <ul>
            <li>Be accurate and not misleading in any educational context</li>
            <li>Comply with applicable copyright and licensing requirements</li>
            <li>Not contain material unsuitable for the relevant educational audience (taking into account the age and vulnerability of students)</li>
            <li>Not violate the dignity or privacy of any individual</li>
          </ul>

          <h3>5.4 Institutional Oversight</h3>
          <p>Institutions are responsible for establishing and enforcing internal acceptable use policies for their staff and students that are consistent with these Terms. MindSync is not liable for user conduct that violates these Terms where the Institution has failed to implement adequate oversight.</p>

          <h3>5.5 Enforcement</h3>
          <p>MindSync may, without prior notice:</p>
          <ul>
            <li>Remove or disable any content that violates these Terms or applicable law</li>
            <li>Suspend or permanently terminate the account of any User or Institution found to be in material breach</li>
            <li>Cooperate with law enforcement and regulatory authorities in investigating serious breaches, including breaches involving child safety, fraud, or cybercrime</li>
          </ul>

          <h2>6. Intellectual Property</h2>

          <h3>6.1 MindSync Intellectual Property</h3>
          <p>All rights, title, and interest in and to the Platform — including its software, source code, databases, algorithms, AI models, trademarks, brand assets, user interface designs, and documentation — are and remain the exclusive property of MindSync Solutions and its licensors. These Terms do not transfer any ownership rights to you. You are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the Platform solely as permitted by these Terms and your Subscription.</p>

          <h3>6.2 Institution and User Content</h3>
          <p>You (and your Institution, as applicable) retain all ownership rights in Content you upload to the Platform ("Your Content"). By uploading Content, you grant MindSync a non-exclusive, worldwide, royalty-free licence to host, store, reproduce, process, display, and transmit Your Content solely to the extent necessary to provide the Platform services and fulfil our obligations under these Terms. This licence terminates when Your Content is deleted from the Platform.</p>
          <p>You warrant that: (a) you have all rights, licences, and permissions necessary to upload Your Content; (b) Your Content does not infringe any third-party intellectual property rights; and (c) Your Content complies with all applicable laws.</p>

          <h3>6.3 AI-Generated Output</h3>
          <ul>
            <li>Content generated by the Platform's AI features based on your inputs is provided for your educational use within the Platform</li>
            <li>MindSync does not assert ownership over AI-generated output that you have created using the Platform's tools in the course of legitimate educational activities</li>
            <li>You are solely responsible for reviewing the accuracy, appropriateness, and legality of AI-generated content before publishing, distributing, or relying upon it</li>
            <li>AI-generated output must not be represented to third parties as original human-authored work without appropriate disclosure where required by institutional or professional standards</li>
          </ul>

          <h3>6.4 Feedback and Suggestions</h3>
          <p>If you provide MindSync with feedback, suggestions, or ideas regarding the Platform ("Feedback"), you grant MindSync an irrevocable, perpetual, worldwide, royalty-free licence to use, modify, and commercialise that Feedback without restriction or compensation. MindSync has no obligation to keep Feedback confidential.</p>

          <h3>6.5 Open Source Components</h3>
          <p>The Platform may incorporate open source software components. Where required by open source licences, relevant notices and licence terms are available on request at <a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a>.</p>

          <h2>7. Privacy and Data Protection</h2>
          <p>The collection, use, and processing of personal data is governed by the MindSync Solutions Privacy Policy, available at <a href="/privacy">www.mindsync.solutions/privacy</a>, which is incorporated into these Terms by reference. By using the Platform, you acknowledge and agree to the data practices described in the Privacy Policy.</p>
          <p>MindSync complies with the Privacy Act 1988 (Cth) and Australian Privacy Principles, the Ghana Data Protection Act 2012, the Nigeria Data Protection Regulation 2019 and Nigeria Data Protection Act 2023, FERPA (where applicable), COPPA (where applicable), and the GDPR and UK GDPR (in preparation for EU/UK service launch).</p>

          <h3>7.1 Data Processing Agreement</h3>
          <p>Where MindSync processes personal data on behalf of an Institution (acting as a data processor), the parties will execute a Data Processing Agreement (DPA) that sets out the respective controller and processor obligations. A standard DPA is available on request at <a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a>.</p>

          <h3>7.2 FERPA Compliance</h3>
          <p>Where MindSync processes Education Records subject to FERPA, MindSync agrees to: (a) use Education Records solely for the purpose of providing contracted educational services; (b) not re-disclose Education Records without the prior written consent of the eligible student or parent/guardian, except as FERPA permits; and (c) allow the Institution to review, correct, and manage Education Records in accordance with FERPA.</p>

          <h2>8. Artificial Intelligence Features — Specific Terms</h2>
          <p>The following terms apply specifically to your use of AI-powered features within the Platform:</p>
          <ul>
            <li>AI features are designed to assist educators and students and do not replace professional educational judgment or qualified teaching</li>
            <li>MindSync does not guarantee the accuracy, completeness, suitability, or currency of any AI-generated recommendation, assessment, or content</li>
            <li>No AI feature will produce decisions with significant legal or academic consequences for a student without a qualified human educator's review and confirmation — this includes grading, promotion, and academic eligibility decisions</li>
            <li>Student-identifiable data will not be used to train general commercial AI models without explicit written consent from the Institution and, where required, from the student or parent/guardian</li>
            <li>AI interaction logs are retained for 12 months in identifiable form, then anonymised. Institutions may request earlier deletion</li>
            <li>MindSync will provide reasonable transparency regarding how AI recommendations are generated upon request</li>
            <li>Institutions may disable specific AI features for their account at any time by contacting <a href="mailto:support@mindsync.solutions">support@mindsync.solutions</a></li>
          </ul>

          <h2>9. Service Levels, Availability, and Maintenance</h2>

          <h3>9.1 Target Availability</h3>
          <p>MindSync targets 99.5% Platform uptime measured on a monthly basis, excluding scheduled maintenance windows and Force Majeure Events. In the event of unplanned downtime exceeding this threshold, Institutions may be eligible for service credits as set out in the applicable Order Form or SLA addendum.</p>

          <h3>9.2 Scheduled Maintenance</h3>
          <p>MindSync will provide at least 48 hours' advance notice of scheduled maintenance that may cause Platform downtime, communicated via in-Platform notice or email to the Institution administrator. Emergency maintenance may be performed without advance notice where necessary to address critical security vulnerabilities.</p>

          <h3>9.3 No Guarantee</h3>
          <p>Notwithstanding Section 9.1, MindSync does not warrant uninterrupted, error-free access to the Platform. Temporary service interruptions may occur due to technical issues, internet connectivity, third-party service failures, or circumstances beyond our control.</p>

          <h2>10. Third-Party Services and Integrations</h2>
          <p>The Platform may connect with or link to third-party services, applications, or content providers ("Third-Party Services"). MindSync:</p>
          <ul>
            <li>Does not control, endorse, or assume responsibility for Third-Party Services</li>
            <li>Does not warrant the security, privacy practices, accuracy, or availability of Third-Party Services</li>
            <li>Is not liable for any loss or damage arising from your access to or use of Third-Party Services</li>
          </ul>
          <p>Your use of any Third-Party Service is subject to that provider's own terms of service and privacy policy. Integrations may be modified or discontinued by the third-party provider at any time, and MindSync is not responsible for any resulting disruption to Platform functionality.</p>

          <h2>11. Confidentiality</h2>
          <p>Each party agrees to: (a) hold the other's Confidential Information in strict confidence; (b) not disclose it to any third party without prior written consent except to employees, contractors, or advisers on a need-to-know basis under binding confidentiality obligations; and (c) use Confidential Information solely to exercise rights and perform obligations under these Terms.</p>
          <p>Confidentiality obligations do not apply to information that: (i) is or becomes publicly known through no fault of the receiving party; (ii) was rightfully known to the receiving party before disclosure; (iii) is independently developed without use of the Confidential Information; or (iv) is required to be disclosed by law, court order, or regulatory authority, provided the disclosing party gives the other reasonable prior notice where legally permitted.</p>
          <p>Confidentiality obligations survive termination of these Terms for a period of five (5) years.</p>

          <h2>12. Disclaimers</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
          <ul>
            <li>THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT</li>
            <li>MINDSYNC DOES NOT WARRANT THAT THE PLATFORM WILL MEET YOUR SPECIFIC EDUCATIONAL REQUIREMENTS OR THAT AI-GENERATED CONTENT WILL BE ACCURATE, COMPLETE, OR APPROPRIATE FOR YOUR CONTEXT</li>
            <li>MINDSYNC DOES NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, SECURE, OR FREE FROM ERRORS OR VIRUSES</li>
          </ul>
          <p>Nothing in this Section limits any rights you may have under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010), the Nigerian Consumer Protection Council Act, the Ghana Consumer Protection Act, or equivalent mandatory consumer protection legislation in your jurisdiction, which cannot lawfully be excluded.</p>

          <h2>13. Limitation of Liability</h2>

          <h3>13.1 Cap on Liability</h3>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MINDSYNC'S TOTAL AGGREGATE LIABILITY TO YOU UNDER OR IN CONNECTION WITH THESE TERMS OR THE PLATFORM — WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR OTHERWISE — IS LIMITED TO THE GREATER OF: (A) THE TOTAL FEES PAID BY YOU TO MINDSYNC IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE CLAIM; OR (B) ONE THOUSAND AUSTRALIAN DOLLARS (AUD 1,000).</p>

          <h3>13.2 Exclusion of Consequential Loss</h3>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, MINDSYNC IS NOT LIABLE FOR ANY: (A) LOSS OF PROFITS OR REVENUE; (B) LOSS OF DATA OR EDUCATION RECORDS (BEYOND THE OBLIGATION TO RESTORE FROM BACKUP WHERE TECHNICALLY POSSIBLE); (C) LOSS OF GOODWILL OR REPUTATION; (D) BUSINESS INTERRUPTION; (E) INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL LOSS — EVEN IF MINDSYNC HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSSES.</p>

          <h3>13.3 Exceptions</h3>
          <p>The limitations and exclusions in this Section do not apply to: (a) death or personal injury caused by MindSync's negligence; (b) fraud or fraudulent misrepresentation; (c) liability that cannot lawfully be excluded under the Australian Consumer Law or equivalent mandatory law; or (d) any obligation under the Privacy Act, GDPR, NDPA, or Ghana DPA that cannot lawfully be limited.</p>

          <h3>13.4 Mitigation</h3>
          <p>You are obliged to take all reasonable steps to mitigate any loss or damage arising from a breach of these Terms or failure of the Platform.</p>

          <h2>14. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless MindSync Solutions and its officers, directors, employees, agents, and licensors from and against any claims, demands, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from or relating to:</p>
          <ul>
            <li>Your use of the Platform in breach of these Terms or applicable law</li>
            <li>Your Content, including any claim that it infringes a third party's intellectual property rights</li>
            <li>Your Institution's failure to obtain required consents for the processing of student or staff data</li>
            <li>Any misrepresentation made by you in connection with the Platform</li>
            <li>Any claim by a student, parent, or regulator arising from your Institution's data governance failures</li>
          </ul>
          <p>MindSync reserves the right to assume exclusive control of the defence of any matter subject to indemnification by you, at your expense, in which case you agree to cooperate with MindSync's defence of that claim.</p>

          <h2>15. Term and Termination</h2>

          <h3>15.1 Term</h3>
          <p>These Terms apply for the duration of your active account or Subscription and continue in effect until terminated by either party in accordance with this Section.</p>

          <h3>15.2 Termination by You</h3>
          <p>You may terminate your account or Subscription at any time by providing written notice to <a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a>. Termination takes effect at the end of the current billing period (no mid-period refunds). Prior to account closure, you should export any data you wish to retain.</p>

          <h3>15.3 Termination by MindSync for Cause</h3>
          <p>MindSync may terminate these Terms or suspend your access immediately upon written notice if:</p>
          <ul>
            <li>You commit a material breach of these Terms and fail to remedy it within 14 days of receiving written notice specifying the breach</li>
            <li>Fees are overdue by more than 30 days and not remedied within 7 days of a payment notice</li>
            <li>MindSync has reasonable grounds to believe your account is being used for fraudulent, abusive, or unlawful purposes</li>
            <li>A court or regulatory authority requires termination or suspension</li>
            <li>You become insolvent, enter administration or liquidation, or make an assignment for the benefit of creditors</li>
          </ul>

          <h3>15.4 Termination for Convenience by MindSync</h3>
          <p>MindSync may terminate these Terms without cause upon 60 days' written notice to an Institution, in which case MindSync will provide a pro-rata refund of any prepaid fees covering the terminated period.</p>

          <h3>15.5 Effect of Termination</h3>
          <p>Upon termination: (a) your right to access and use the Platform ceases immediately (or at the end of the notice period, as applicable); (b) MindSync will retain and then delete data in accordance with the Privacy Policy and any applicable Data Processing Agreement; (c) Institutions will have 30 days post-termination to request export of their data before deletion; (d) all accrued fees remain payable; (e) Sections 6, 7, 11, 12, 13, 14, and 16 survive termination indefinitely; other Sections survive to the extent necessary to give effect to the surviving provisions.</p>

          <h2>16. Governing Law and Dispute Resolution</h2>

          <h3>16.1 Governing Law</h3>
          <p>These Terms are governed by and construed in accordance with the laws of the Commonwealth of Australia, without reference to its conflict of law rules. Where mandatory consumer or educational protection laws of Nigeria, Ghana, the European Union, or the United Kingdom confer non-excludable rights on users in those jurisdictions, those rights are preserved.</p>

          <h3>16.2 Tiered Dispute Resolution</h3>
          <p>The parties agree to resolve disputes through the following tiered process before resorting to arbitration:</p>
          <table>
            <tbody>
              <tr>
                <td className="font-semibold align-top w-56">Step 1 — Negotiation (Days 1–30)</td>
                <td>The aggrieved party sends a written Dispute Notice to the other party describing the nature of the dispute and the outcome sought. Senior representatives of both parties will meet (in person, by video, or by telephone) within 14 days to attempt in good faith to resolve the dispute.</td>
              </tr>
              <tr>
                <td className="font-semibold align-top">Step 2 — Mediation (Days 31–60)</td>
                <td>If unresolved after 30 days of Negotiation, either party may refer the dispute to non-binding mediation administered by the Australian Disputes Centre (ADC) or a mutually agreed mediator. Costs are shared equally. The parties will participate in good faith for up to 30 days.</td>
              </tr>
              <tr>
                <td className="font-semibold align-top">Step 3 — Arbitration (After Day 60)</td>
                <td>If mediation fails or is refused, the dispute will be finally resolved by binding arbitration administered by the Australian Centre for International Commercial Arbitration (ACICA) under the ACICA Arbitration Rules current at the date of referral. The seat of arbitration is Sydney, Australia. The language of arbitration is English. The number of arbitrators is one (1) for disputes under AUD 500,000 and three (3) for disputes of AUD 500,000 or more.</td>
              </tr>
            </tbody>
          </table>

          <h3>16.3 Interim Relief</h3>
          <p>Nothing in Section 16.2 prevents either party from seeking urgent injunctive or other interim relief from a court of competent jurisdiction where necessary to protect intellectual property, confidential information, or to prevent irreparable harm.</p>

          <h3>16.4 Local Regulatory Matters</h3>
          <p>Disputes with Nigerian users or Institutions relating to data protection obligations may also be submitted to NITDA in accordance with the NDPR/NDPA without prejudice to the arbitration process above. Disputes with Ghanaian users relating to data protection may be referred to the Data Protection Commission of Ghana.</p>

          <h3>16.5 Class Action Waiver</h3>
          <p>To the fullest extent permitted by applicable law, all claims must be brought in the parties' individual capacity. Neither party may bring or participate in a class action, consolidated action, or representative action against the other in connection with the Platform.</p>

          <h3>16.6 Consumer Rights</h3>
          <p>Nothing in this Section limits any statutory right you may have to bring proceedings before a court or tribunal under mandatory consumer protection laws (including the Australian Consumer Law, the Federal Competition and Consumer Protection Act of Nigeria, or Ghana's Consumer Protection Act).</p>

          <h2>17. General Provisions</h2>

          <h3>17.1 Entire Agreement</h3>
          <p>These Terms, the Privacy Policy, any executed Order Form, and any Data Processing Agreement together constitute the entire agreement between the parties with respect to the Platform and supersede all prior negotiations, representations, warranties, and agreements relating to their subject matter.</p>

          <h3>17.2 Order of Precedence</h3>
          <p>In the event of conflict between documents: (1) any executed Order Form or institutional agreement; (2) these Terms; (3) the Privacy Policy; (4) any other guidelines posted on the Platform. The document ranked higher in this order prevails to the extent of the conflict.</p>

          <h3>17.3 Severability</h3>
          <p>If any provision of these Terms is held invalid, unlawful, or unenforceable by a court or arbitral tribunal of competent jurisdiction, that provision will be modified to the minimum extent necessary to make it enforceable, or severed if modification is not possible. The remaining provisions continue in full force and effect.</p>

          <h3>17.4 Waiver</h3>
          <p>No failure or delay by MindSync in exercising any right, power, or remedy under these Terms operates as a waiver of that right. A waiver is only effective if given in writing and signed by MindSync's authorised representative.</p>

          <h3>17.5 Assignment</h3>
          <p>You may not assign, transfer, novate, or sub-licence any rights or obligations under these Terms without MindSync's prior written consent. MindSync may freely assign these Terms or any rights hereunder in connection with a corporate restructuring, merger, acquisition, or sale of all or substantially all of its business assets, provided that: (a) MindSync gives you reasonable prior notice; and (b) the assignee assumes all of MindSync's obligations under these Terms.</p>

          <h3>17.6 Force Majeure</h3>
          <p>Neither party is liable for any failure or delay in performing its obligations under these Terms to the extent caused by a Force Majeure Event, provided the affected party: (a) promptly notifies the other in writing; (b) takes reasonable steps to mitigate the impact; and (c) resumes performance as soon as reasonably practicable. If a Force Majeure Event affecting MindSync's ability to provide the Platform continues for more than 60 consecutive days, either party may terminate the affected Subscription with a pro-rata refund.</p>

          <h3>17.7 Notices</h3>
          <p>All legal notices under these Terms must be in writing. Notices to MindSync should be sent to <a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a> (with a copy to the registered address). Notices to you will be sent to the email address registered on your account. Notices are deemed received: on the day of sending by email (if no delivery failure notification is received within 24 hours), or three business days after posting by prepaid post to the registered address.</p>

          <h3>17.8 Relationship of the Parties</h3>
          <p>The parties are independent contractors. Nothing in these Terms creates any employment, partnership, agency, joint venture, or fiduciary relationship between the parties.</p>

          <h3>17.9 Language</h3>
          <p>These Terms are executed in the English language. If translated into any other language for convenience, the English version prevails in the event of any inconsistency.</p>

          <h3>17.10 Amendments</h3>
          <p>MindSync may amend these Terms at any time by posting the revised version on the Platform. For material changes, MindSync will provide at least 30 days' written notice to registered account holders and institutional administrators. Continued use of the Platform after the effective date of any amendment constitutes acceptance of the revised Terms. If you do not agree to an amendment, you must notify MindSync in writing and discontinue use; upon request, MindSync will provide a pro-rata refund for any prepaid fees covering the post-amendment period.</p>

          <h2>18. Contact Information</h2>
          <p>For all contractual, legal, and compliance matters, please contact:</p>
          <table>
            <tbody>
              <tr><td className="font-semibold">Legal &amp; Contracts</td><td><a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a></td></tr>
              <tr><td className="font-semibold">Technical Support</td><td><a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a></td></tr>
              <tr><td className="font-semibold">Billing &amp; Accounts</td><td><a href="mailto:billing@mindsync.solutions">billing@mindsync.solutions</a></td></tr>
              <tr><td className="font-semibold">Privacy &amp; Data Rights</td><td><a href="mailto:privacy@mindsync.solutions">privacy@mindsync.solutions</a></td></tr>
              <tr><td className="font-semibold">Phone</td><td>+1 (585) 212-0163</td></tr>
              <tr><td className="font-semibold">Australia (Primary)</td><td>MindSync Solutions Pty Ltd — New South Wales, Australia</td></tr>
              <tr><td className="font-semibold">Ghana Office</td><td>MindSync Solutions Ghana Ltd — Accra, Ghana</td></tr>
              <tr><td className="font-semibold">Nigeria Office</td><td>MindSync Solutions Nigeria Ltd — Lagos, Nigeria</td></tr>
            </tbody>
          </table>

        </div>
      </div>
      <Footer />
    </div>
  );
}
