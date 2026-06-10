
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { SEO } from "@/components/SEO";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      <SEO
        title="Privacy Policy | MindSync Solutions"
        description="Read MindSync Solutions' privacy policy. We are committed to protecting your personal data and ensuring transparency in how we handle information."
        canonicalUrl="https://mindsync.solutions/privacy"
      />
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto prose dark:prose-invert prose-a:text-indigo-600 dark:prose-a:text-indigo-400 max-w-none">

          <h1>Privacy Policy</h1>
          <p className="text-lg font-semibold not-italic">MindSync Solutions</p>
          <p><strong>Effective Date:</strong> 9 June 2025 &nbsp;|&nbsp; <strong>Last Updated:</strong> 9 June 2025</p>

          <table>
            <tbody>
              <tr><td className="font-semibold w-48">Operator</td><td>MindSync Solutions</td></tr>
              <tr><td className="font-semibold">Website</td><td><a href="https://www.mindsync.solutions">https://www.mindsync.solutions</a></td></tr>
              <tr><td className="font-semibold">Phone</td><td>+1 (585) 212-0163</td></tr>
              <tr><td className="font-semibold">Privacy Contact</td><td><a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a></td></tr>
              <tr><td className="font-semibold">Registered In</td><td>Ghana · Nigeria · Australia</td></tr>
              <tr><td className="font-semibold">Primary Governing Law</td><td>Laws of the Commonwealth of Australia</td></tr>
            </tbody>
          </table>

          <p>This Privacy Policy explains how MindSync Solutions collects, uses, stores, shares, and protects your personal information. By accessing or using the Platform you agree to the practices described herein. If you do not agree, please discontinue use immediately.</p>

          <h2>1. Introduction and Scope</h2>
          <p>MindSync Solutions ("MindSync", "we", "us", "our") operates an integrated educational technology ecosystem comprising a School Information Management System (SIMS), a Learning Management System (LMS), AI-powered course creation tools, AI tutoring services, a parent portal, and associated web and mobile applications (collectively, the "Platform").</p>
          <p>This Privacy Policy applies to all users of the Platform worldwide, including school administrators, teachers, students, parents, tutors, and institutional partners. It covers all personal data processed in connection with the Platform, regardless of the country in which you are located.</p>
          <p>Where you access the Platform on behalf of an educational institution, the institution is responsible for ensuring this Policy is communicated to all relevant users, including obtaining parental or guardian consent for minor students where required by applicable law.</p>

          <h2>2. Who We Are — Our Legal Entities</h2>
          <p>MindSync Solutions operates through entities registered in multiple jurisdictions. Depending on your location, the relevant data controller or operator is:</p>
          <table>
            <tbody>
              <tr><td className="font-semibold w-32">Ghana</td><td>MindSync Solutions Ghana Ltd — Accra, Ghana</td></tr>
              <tr><td className="font-semibold">Nigeria</td><td>MindSync Solutions Nigeria Ltd — Lagos, Nigeria</td></tr>
              <tr><td className="font-semibold">Australia</td><td>MindSync Solutions Pty Ltd — New South Wales, Australia (Primary Entity)</td></tr>
            </tbody>
          </table>
          <p>For all privacy enquiries, data subject requests, or complaints, contact us at:</p>
          <table>
            <tbody>
              <tr><td className="font-semibold w-24">Email</td><td><a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a></td></tr>
              <tr><td className="font-semibold">Phone</td><td>+1 (585) 212-0163</td></tr>
              <tr><td className="font-semibold">Address</td><td>MindSync Solutions Pty Ltd, New South Wales, Australia</td></tr>
            </tbody>
          </table>

          <h2>3. Applicable Privacy Laws and Compliance Framework</h2>
          <p>MindSync Solutions is committed to complying with all applicable privacy and data protection laws in the jurisdictions in which it operates. Our compliance framework encompasses:</p>
          <table>
            <tbody>
              <tr><td className="font-semibold align-top w-36">Australia</td><td>Privacy Act 1988 (Cth); Australian Privacy Principles (APPs); Notifiable Data Breaches (NDB) Scheme; Children's Online Privacy Protection considerations</td></tr>
              <tr><td className="font-semibold align-top">Ghana</td><td>Data Protection Act, 2012 (Act 843); Data Protection Commission requirements; registration obligations for data controllers</td></tr>
              <tr><td className="font-semibold align-top">Nigeria</td><td>Nigeria Data Protection Regulation 2019 (NDPR); Nigeria Data Protection Act 2023 (NDPA); National Information Technology Development Agency (NITDA) guidelines</td></tr>
              <tr><td className="font-semibold align-top">EU / UK</td><td>General Data Protection Regulation (EU) 2016/679 (GDPR); UK GDPR; Data Protection Act 2018 (UK) — applicable once EU/UK services are launched</td></tr>
              <tr><td className="font-semibold align-top">USA (FERPA)</td><td>Family Educational Rights and Privacy Act (FERPA) — where MindSync processes education records on behalf of US-connected institutions</td></tr>
              <tr><td className="font-semibold align-top">USA (COPPA)</td><td>Children's Online Privacy Protection Act (COPPA) — applicable where services are directed to children under 13 in the United States or with actual knowledge of such users</td></tr>
              <tr><td className="font-semibold align-top">General</td><td>ISO/IEC 27001 information security principles observed as a baseline across all jurisdictions</td></tr>
            </tbody>
          </table>
          <p>Where the laws of multiple jurisdictions apply, we apply the standard that affords the greatest protection to users, unless doing so would conflict with a directly applicable mandatory legal obligation.</p>

          <h2>4. Information We Collect</h2>

          <h3>4.1 Account and Registration Information</h3>
          <ul>
            <li>Full name, email address, phone number, and date of birth</li>
            <li>Role (administrator, teacher, student, parent/guardian, tutor)</li>
            <li>Institution name, address, and contact details</li>
            <li>Username and hashed password; profile photograph (optional)</li>
            <li>Proof of institutional affiliation where required for verification</li>
          </ul>

          <h3>4.2 Educational and Academic Records</h3>
          <p>This category is subject to heightened protection under FERPA, NDPR, Ghana DPA, and equivalent laws:</p>
          <ul>
            <li>Enrolment records, timetables, class rosters, and attendance logs</li>
            <li>Academic grades, assessment scores, progress reports, and learning outcomes</li>
            <li>Course materials, assignments, quizzes, and submissions uploaded by educators or students</li>
            <li>AI-generated learning recommendations, personalised feedback, and adaptive learning pathways</li>
            <li>Behavioural engagement data (time-on-task, completion rates, interaction frequency)</li>
          </ul>

          <h3>4.3 Children's Data (Under 18)</h3>
          <p>The Platform is deployed in school environments serving students of all ages. We apply the following graduated protections:</p>
          <table>
            <tbody>
              <tr>
                <td className="font-semibold align-top w-44">Under 13 (COPPA)</td>
                <td>No direct collection without verifiable parental/guardian consent obtained by the institution. No behavioural advertising. Data used solely for educational purposes.</td>
              </tr>
              <tr>
                <td className="font-semibold align-top">13–15 (GDPR Art. 8)</td>
                <td>Parental consent required for EU/UK users under 16 for consent-based processing. Institutions are responsible for obtaining this consent.</td>
              </tr>
              <tr>
                <td className="font-semibold align-top">Under 18 (General)</td>
                <td>Data not used for profiling, advertising, or any purpose unrelated to educational services. Institutions act as the responsible data controller for student data.</td>
              </tr>
            </tbody>
          </table>

          <h3>4.4 Communication Data</h3>
          <ul>
            <li>In-platform messages, announcements, and notifications</li>
            <li>Support tickets and customer service correspondence</li>
            <li>Feedback, surveys, and responses to service communications</li>
          </ul>

          <h3>4.5 Technical and Usage Data</h3>
          <ul>
            <li>IP address, browser type, operating system, device identifiers</li>
            <li>Log data, clickstream data, pages visited, and features accessed</li>
            <li>Session duration, error logs, and crash reports</li>
            <li>Cookie and similar tracking technology data (see Section 8)</li>
          </ul>

          <h3>4.6 Payment and Billing Data</h3>
          <ul>
            <li>Billing name, address, and invoice records</li>
            <li>Payment card data is processed exclusively by PCI-DSS compliant third-party payment processors; MindSync does not store card numbers on its servers</li>
          </ul>

          <h3>4.7 Sensitive Information</h3>
          <p>MindSync does not intentionally collect sensitive personal information (e.g., health data, racial or ethnic origin, religious beliefs, biometric data) except where explicitly required to deliver a specific service, in which case separate consent will be obtained. If you believe such data has been inadvertently submitted, contact <a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a> immediately.</p>

          <h2>5. How We Use Your Information</h2>

          <h3>5.1 Platform Operations</h3>
          <ul>
            <li>Creating and managing user and institutional accounts</li>
            <li>Delivering all Platform services including SIMS, LMS, AI tools, and the parent portal</li>
            <li>Facilitating communication between students, educators, parents, and administrators</li>
            <li>Processing payments and managing subscriptions</li>
          </ul>

          <h3>5.2 AI and Personalisation</h3>
          <ul>
            <li>Powering AI-driven course creation, personalised tutoring, and adaptive learning recommendations</li>
            <li>Generating educator analytics on student engagement, performance, and learning outcomes</li>
            <li>Improving AI model accuracy using aggregated, anonymised data — student-identifiable data is never used to train general commercial AI models without explicit institutional consent</li>
          </ul>

          <h3>5.3 Safety, Security, and Compliance</h3>
          <ul>
            <li>Identity verification, fraud prevention, and unauthorised access detection</li>
            <li>Enforcement of our Terms and Conditions</li>
            <li>Compliance with applicable laws, court orders, and regulatory requirements</li>
            <li>Protecting the vital interests of users, particularly minors, in emergency situations</li>
          </ul>

          <h3>5.4 Service Improvement</h3>
          <ul>
            <li>Internal analytics and product development using aggregated or anonymised data</li>
            <li>Diagnosing technical issues and improving Platform performance and reliability</li>
          </ul>

          <h3>5.5 Marketing and Communications</h3>
          <ul>
            <li>Sending product updates, feature announcements, and promotional materials — only where you or your institution has opted in</li>
            <li>Notifying you of material changes to our services or these policies</li>
          </ul>
          <p>You may withdraw consent for marketing at any time by clicking 'unsubscribe' in any email or writing to <a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a>. Withdrawal does not affect the lawfulness of prior processing.</p>

          <h2>6. Legal Basis for Processing</h2>
          <p>Where the GDPR or equivalent laws require a lawful basis, we rely on the following:</p>
          <table>
            <tbody>
              <tr><td className="font-semibold align-top w-52">Contract Performance</td><td>Processing necessary to provide Platform services to you or your institution</td></tr>
              <tr><td className="font-semibold align-top">Legitimate Interests</td><td>Security monitoring, fraud prevention, Platform analytics, and service improvement — always balanced against your rights</td></tr>
              <tr><td className="font-semibold align-top">Legal Obligation</td><td>Compliance with laws of Australia, Ghana, Nigeria, the EU/UK, and other applicable jurisdictions</td></tr>
              <tr><td className="font-semibold align-top">Consent</td><td>Marketing communications; certain AI personalisation features; cookie use beyond strictly necessary cookies; processing of children's data where required</td></tr>
              <tr><td className="font-semibold align-top">Vital Interests</td><td>Emergency situations involving a risk to life, particularly for minor users</td></tr>
              <tr><td className="font-semibold align-top">Public Task / FERPA</td><td>Processing of education records where MindSync acts as a 'school official' with a legitimate educational interest under FERPA</td></tr>
            </tbody>
          </table>

          <h2>7. How We Share Your Information</h2>
          <p>MindSync does not sell, rent, or trade personal data. We share information only in the circumstances described below.</p>

          <h3>7.1 With Educational Institutions</h3>
          <p>Administrators and authorised staff of your institution may access data relating to users within their institutional account. The scope of access is governed by the institution's own access controls and its agreement with MindSync.</p>

          <h3>7.2 With Service Providers (Data Processors)</h3>
          <p>We engage trusted third-party processors to support Platform operations, including:</p>
          <ul>
            <li>Cloud hosting and infrastructure providers (data stored in Australian and/or internationally recognised data centres with appropriate safeguards)</li>
            <li>AI and machine learning service partners operating under strict data processing agreements</li>
            <li>Payment processors (PCI-DSS compliant)</li>
            <li>Email, SMS, and push notification service providers</li>
            <li>Analytics and monitoring tool providers</li>
          </ul>
          <p>All processors are bound by contractual obligations to process data only on our instructions and to maintain security measures meeting at minimum the standards required by applicable law.</p>

          <h3>7.3 Cross-Border Transfers</h3>
          <p>Where personal data is transferred outside the country in which it was collected, we ensure adequate safeguards are in place:</p>
          <table>
            <tbody>
              <tr><td className="font-semibold align-top w-48">Australia → Overseas</td><td>Transfers comply with Australian Privacy Principle 8; we take reasonable steps to ensure overseas recipients handle data consistently with the APPs</td></tr>
              <tr><td className="font-semibold align-top">Ghana → Overseas</td><td>Transfers comply with Section 43 of Ghana's Data Protection Act 2012; recipient countries must have adequate data protection or consent is obtained</td></tr>
              <tr><td className="font-semibold align-top">Nigeria → Overseas</td><td>Transfers comply with Article 2.11 of the NDPR 2019 and NDPA 2023; we ensure equivalent protection in the receiving jurisdiction</td></tr>
              <tr><td className="font-semibold align-top">EU/UK → Third Countries</td><td>Transfers will use Standard Contractual Clauses (SCCs) or adequacy decisions; an Article 46 GDPR mechanism will be in place prior to active EU/UK launch</td></tr>
            </tbody>
          </table>

          <h3>7.4 FERPA Disclosures</h3>
          <p>Where MindSync processes education records subject to FERPA on behalf of a US-connected institution, we act as a 'school official' with a legitimate educational interest. We will not re-disclose such records except as permitted by FERPA and will not use them for any purpose other than providing the contracted educational services.</p>

          <h3>7.5 Legal and Regulatory Disclosures</h3>
          <p>We may disclose information where required by law, court order, or regulatory authority in Ghana, Nigeria, Australia, or any other applicable jurisdiction, or where necessary to protect the rights, safety, or property of MindSync, our users, or the public.</p>

          <h3>7.6 Business Transfers</h3>
          <p>In the event of a merger, acquisition, restructure, or sale of assets, personal data may be disclosed to or transferred to the relevant parties, subject to equivalent privacy protections. Users will be notified in advance of any material transfer of their data.</p>

          <h2>8. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar technologies on our Platform. These are categorised as follows:</p>
          <table>
            <tbody>
              <tr>
                <td className="font-semibold align-top w-56">Essential / Strictly Necessary</td>
                <td>Required for Platform functionality (authentication sessions, security tokens, load balancing). Cannot be disabled without breaking core functionality.</td>
              </tr>
              <tr>
                <td className="font-semibold align-top">Analytics / Performance</td>
                <td>Help us understand how users navigate the Platform (e.g., page views, error rates). Used in anonymised or aggregated form where possible.</td>
              </tr>
              <tr>
                <td className="font-semibold align-top">Functionality / Preference</td>
                <td>Remember your settings, language preferences, and personalisation choices.</td>
              </tr>
              <tr>
                <td className="font-semibold align-top">Marketing / Targeting</td>
                <td>Used only with your prior consent to deliver relevant service promotions. Not used in relation to students under 18.</td>
              </tr>
            </tbody>
          </table>
          <p>You may manage cookie preferences through your browser settings or our in-Platform cookie consent manager. Withdrawing consent for non-essential cookies will not affect your ability to use core Platform features but may affect personalisation and analytics functionality.</p>
          <p>We do not use cookies or tracking technologies to build advertising profiles for students or to share student behavioural data with advertising networks.</p>

          <h2>9. Data Retention</h2>
          <p>We retain personal data for the minimum period necessary for the purposes for which it was collected, subject to any legal obligations requiring longer retention.</p>
          <table>
            <tbody>
              <tr><td className="font-semibold align-top w-52">Account Data</td><td>Duration of active account plus 3 years post-termination, or as required by applicable law</td></tr>
              <tr><td className="font-semibold align-top">Academic / FERPA Records</td><td>As directed by the educational institution (typically 5–7 years); institutions may request earlier deletion subject to legal constraints</td></tr>
              <tr><td className="font-semibold align-top">Payment Records</td><td>7 years from the date of transaction (financial and tax compliance — Australia, Ghana, Nigeria)</td></tr>
              <tr><td className="font-semibold align-top">Technical / Log Data</td><td>90 days, unless required longer for active security investigations</td></tr>
              <tr><td className="font-semibold align-top">AI Interaction Data</td><td>12 months in identifiable form; thereafter aggregated and anonymised indefinitely</td></tr>
              <tr><td className="font-semibold align-top">Marketing Preferences</td><td>Until consent is withdrawn or 2 years of account inactivity</td></tr>
              <tr><td className="font-semibold align-top">CCTV / Biometric (if any)</td><td>Not collected by MindSync; any physical security data is managed solely by the institution</td></tr>
            </tbody>
          </table>
          <p>Upon expiry of a retention period, data is securely deleted or anonymised in accordance with our data destruction procedures.</p>

          <h2>10. Data Security</h2>
          <p>MindSync implements technical and organisational security measures proportionate to the risks involved in processing personal data:</p>
          <ul>
            <li>Encryption of all data in transit using TLS 1.2 or higher</li>
            <li>Encryption of sensitive data at rest using AES-256 or equivalent</li>
            <li>Role-based access controls (RBAC) limiting data access to authorised personnel with a demonstrated need</li>
            <li>Multi-factor authentication (MFA) available for administrator accounts</li>
            <li>Regular vulnerability assessments and penetration testing</li>
            <li>Staff training on data protection and security awareness</li>
            <li>Incident response and business continuity plans</li>
          </ul>
          <p>Despite these measures, no system is completely immune from security threats. In the event of a personal data breach that is likely to result in a risk to rights and freedoms:</p>
          <table>
            <tbody>
              <tr><td className="font-semibold align-top w-52">Australia (NDB Scheme)</td><td>We will notify the Australian Information Commissioner and affected individuals within 30 days of becoming aware of an eligible data breach</td></tr>
              <tr><td className="font-semibold align-top">Nigeria (NDPR/NDPA)</td><td>We will notify NITDA within 72 hours and affected data subjects without undue delay</td></tr>
              <tr><td className="font-semibold align-top">Ghana (DPA 2012)</td><td>We will notify the Data Protection Commission and affected individuals in accordance with Commission guidelines</td></tr>
              <tr><td className="font-semibold align-top">EU/UK (GDPR)</td><td>We will notify the relevant Supervisory Authority within 72 hours and affected individuals without undue delay where there is a high risk</td></tr>
            </tbody>
          </table>

          <h2>11. Artificial Intelligence and Automated Decision-Making</h2>
          <p>The Platform incorporates AI features including personalised learning pathways, AI-powered course generation, and intelligent tutoring. The following principles govern our use of AI:</p>
          <ul>
            <li>AI features analyse learning behaviour, performance data, and engagement patterns to generate personalised recommendations and content suggestions</li>
            <li>No automated decision will produce legal or similarly significant effects on a student (e.g., academic qualification, grade, or exclusion) without review and confirmation by a qualified human educator</li>
            <li>Under GDPR Article 22 (applicable to EU/UK users), you have the right not to be subject to solely automated decisions with significant effects. To invoke this right, contact <a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a></li>
            <li>Student-identifiable data will not be used to train AI models for purposes outside the Platform without explicit institutional consent</li>
            <li>AI-generated content is advisory. MindSync does not warrant its accuracy, completeness, or fitness for any particular educational context</li>
            <li>Institutions may request that AI personalisation features be disabled for their account at any time</li>
          </ul>

          <h2>12. Children's Privacy — Detailed Protections</h2>
          <p>Given that our Platform is used in K–12 and higher education environments, MindSync applies comprehensive protections for users under 18:</p>

          <h3>12.1 COPPA Compliance (Children Under 13)</h3>
          <ul>
            <li>MindSync does not market or direct the Platform to children under 13 independently of their educational institution</li>
            <li>We do not knowingly collect personal data from children under 13 without verifiable parental or guardian consent obtained by the educational institution</li>
            <li>Personal data of children under 13 is used solely to provide educational services and is never used for advertising, profiling, or disclosed to third parties for non-educational purposes</li>
            <li>Parents may request access to, correction of, or deletion of their child's data through their educational institution or by contacting <a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a></li>
          </ul>

          <h3>12.2 GDPR Article 8 (Children Under 16 in the EU/UK)</h3>
          <p>Where services are directed at children under 16 in the EU/UK, processing based on consent requires parental or guardian authorisation, to be obtained by the institution.</p>

          <h3>12.3 General Protections for All Minors (Under 18)</h3>
          <ul>
            <li>No behavioural advertising targeting any user under 18</li>
            <li>No sale or disclosure of student data for commercial purposes</li>
            <li>Minimum data collection principles strictly applied to student accounts</li>
            <li>Institutions retain primary responsibility as data controllers for their students' data within the Platform</li>
          </ul>

          <h2>13. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, wish to exercise a data subject right, or want to raise a privacy concern, please contact:</p>
          <table>
            <tbody>
              <tr><td className="font-semibold w-36">Privacy Enquiries</td><td><a href="mailto:privacy@mindsync.solutions">privacy@mindsync.solutions</a></td></tr>
              <tr><td className="font-semibold">General</td><td><a href="mailto:hello@mindsync.solutions">hello@mindsync.solutions</a></td></tr>
              <tr><td className="font-semibold">Phone</td><td>+1 (585) 212-0163</td></tr>
              <tr><td className="font-semibold">Address</td><td>MindSync Solutions Pty Ltd, New South Wales, Australia</td></tr>
            </tbody>
          </table>
          <p>We aim to respond to all privacy requests within 30 days. For data subject requests under GDPR, NDPR, or the Ghana DPA, we will acknowledge receipt within 72 hours and provide a substantive response within the timeframe required by the applicable law.</p>

        </div>
      </div>
      <Footer />
    </div>
  );
}
