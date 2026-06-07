export interface ProductFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  link?: string;
  tagline: string;
  themeColor: string;
  features: ProductFeature[];
}

export const PRODUCTS: Product[] = [
  {
    id: "sims",
    name: "MindSync SIMS",
    tagline: "The Architectural Foundation of Your Institution.",
    description:
      "A comprehensive School Information Management System designed to handle every operational facet from student data to financial auditing.",
    longDescription:
      "MindSync SIMS (School Information Management System) is an institutional-grade ecosystem designed to handle the complex operational requirements of modern educational structures. From precision scheduling to automated financial ledgers, it provides the digital backbone for schools of any scale.",
    link: "https://sims.mindsync.solutions",
    themeColor: "#4f46e5",
    features: [
      {
        title: "Timetable AI",
        description:
          "High-performance constraint-based scheduling engine for teachers and spaces.",
        iconName: "Calendar",
      },
      {
        title: "Academic Suite",
        description:
          "Comprehensive management of grades, reporting, and curriculum standards.",
        iconName: "GraduationCap",
      },
      {
        title: "Finance & Ledgers",
        description:
          "Automated fee collection, invoicing, and real-time financial reporting.",
        iconName: "CreditCard",
      },
      {
        title: "Staff Roster",
        description:
          "Complete HR lifecycle management from deployment to payroll processing.",
        iconName: "Users",
      },
      {
        title: "Attendance Tracking",
        description:
          "Biometric and mobile integration for real-time institutional monitoring.",
        iconName: "Fingerprint",
      },
    ],
  },
  {
    id: "lms",
    name: "MindSync LMS",
    tagline: "The LMS Built for Modern Educators.",
    description:
      "A world-class Learning Management System designed for seamless digital coursework and interactive learning.",
    longDescription:
      "Our LMS empowers educators to create immersive digital learning experiences. Compatible with global standards like Canvas and IMSCC, it provides a high-performance environment for Coursework delivery and digital grade monitoring.",
    link: "https://lms.mindsync.solutions",
    themeColor: "#8b5cf6",
    features: [
      {
        title: "Canvas Compatible",
        description:
          "Seamless integration with existing educational standards (IMSCC).",
        iconName: "Layout",
      },
      {
        title: "Digital Gradebook",
        description: "Advanced progress tracking and submission management.",
        iconName: "CheckSquare",
      },
      {
        title: "Interactive Courses",
        description:
          "Support for rich multimedia and discussion-based learning.",
        iconName: "Video",
      },
      {
        title: "Role-Based Logic",
        description:
          "Dedicated interfaces and permissions for Teachers and Students.",
        iconName: "Layers",
      },
      {
        title: "Enrolment Engine",
        description:
          "Streamlined student list and class assignment management.",
        iconName: "Users",
      },
    ],
  },
  {
    id: "tutorsmart",
    name: "TutorSmart",
    tagline: "Expert Tutors. Real Results.",
    description:
      "The world's most secure one-to-one tutoring platform, powered by registered teachers.",
    longDescription:
      "TutorSmart connects students with the highest caliber of educators across Australia. Every tutor is a verified, registered professional subject to rigorous background checks, providing one-to-one instruction with no lock-in contracts.",
    link: "https://tutorsmart.mindsync.solutions",
    themeColor: "#ec4899",
    features: [
      {
        title: "Qualified Teachers",
        description: "Direct access to registered and professional educators.",
        iconName: "GraduationCap",
      },
      {
        title: "Verified & Checked",
        description: "All tutors are ClassCover Verified and WWC Checked.",
        iconName: "ShieldCheck",
      },
      {
        title: "Broad Coverage",
        description: "Support for all ages and subjects across the nation.",
        iconName: "Globe",
      },
      {
        title: "Flexible Learning",
        description: "Zero-commitment engagement with a free initial consult.",
        iconName: "Zap",
      },
    ],
  },
  {
    id: "coursify",
    name: "Coursify",
    tagline: "AI-based Rich Text & PDF to LMS Converter.",
    description:
      "Convert AI based rich text, pdf etc to lms ready format converted for any lms.",
    longDescription:
      "Coursify leverages proprietary AI to rebrand and repurpose existing educational materials. Whether it's a PDF, raw text, or a YouTube video, Coursify converts it into high-fidelity, interactive courseware ready for deployment (SCORM 1.2/2004) on any LMS platform.",
    link: "https://coursify.mindsync.solutions",
    themeColor: "#10b981",
    features: [
      {
        title: "Smart Transformation",
        description:
          "Convert static documents into interactive courses via AI.",
        iconName: "Zap",
      },
      {
        title: "SCORM Export",
        description: "Generate standard SCORM files ready for any major LMS.",
        iconName: "FileText",
      },
      {
        title: "Rapid Turnaround",
        description: "Professional course creation in under 24 hours.",
        iconName: "Clock",
      },
      {
        title: "Engagement Optimized",
        description: "Multimedia-rich content designed to maximize retention.",
        iconName: "Bot",
      },
    ],
  },
  {
    id: "magazine",
    name: "MindSync Magazine",
    tagline: "School Newsletter & Events Platform.",
    description:
      "A specialized platform providing parents with an integrated view of events and communications.",
    longDescription:
      "MindSync Magazine bridges the gap between school and home. As a specialized module within the SIMS ecosystem, it streamlines the distribution of digital newsletters and provides a synchronized view of institutional events.",
    themeColor: "#f59e0b",
    features: [
      {
        title: "Integrated Events",
        description: "Unified school-wide event tracking and parental sync.",
        iconName: "Calendar",
      },
      {
        title: "Digital Newsletters",
        description:
          "Premium, responsive communication templates for institutions.",
        iconName: "Image",
      },
      {
        title: "SIMS Integration",
        description:
          "Operates as a specialized deep-dive module within the SIMS.",
        iconName: "Share2",
      },
      {
        title: "Institutional Reach",
        description: "Multi-channel distribution via Web and Mobile portal.",
        iconName: "Send",
      },
    ],
  },
  {
    id: "jobs",
    name: "School Staffing",
    tagline: "School Staffing Solutions.",
    description:
      "An AI-powered recruitment engine designed for high-speed teacher staffing for schools that need them.",
    longDescription:
      "Our recruitment engine utilize advanced matching algorithms to find the best-suited relief teachers for urgent institutional openings. Average match time of 4 hours across 4,200+ verified professionals globally.",
    link: "https://jobs.mindsync.solutions",
    themeColor: "#3b82f6",
    features: [
      {
        title: "AI-Powered Matching",
        description:
          "Intelligent staffing based on subject expertise and availability.",
        iconName: "Bot",
      },
      {
        title: "Global Network",
        description:
          "Access to 4,200+ verified professionals in 32+ countries.",
        iconName: "MapPin",
      },
      {
        title: "Compliance Automator",
        description:
          "Instant background clearances and credential verification.",
        iconName: "ShieldCheck",
      },
      {
        title: "Rapid Response",
        description:
          "Avg. placement match time under 4 hours for urgent needs.",
        iconName: "Clock",
      },
    ],
  },
  {
    id: "coach",
    name: "MindSync Coach",
    tagline: "Workday efficiency for teachers and students.",
    description:
      "A classroom workflow tool tailored specifically for day-to-day teacher and student routines.",
    longDescription:
      "MindSync Coach focuses entirely on day-to-day learning routines. Tailored for teachers and students rather than school-wide administration, it simplifies lesson planning, student engagement, and feedback.",
    link: "https://coach.mindsync.solutions",
    themeColor: "#f43f5e",
    features: [
      {
        title: "Lesson Planner",
        description:
          "Visual tools to outline courses, map assignments, and organize curriculum materials.",
        iconName: "BookOpen",
      },
      {
        title: "Classroom Pulse",
        description:
          "Quick polls and interactive checks to measure student comprehension in real time.",
        iconName: "Activity",
      },
      {
        title: "Student Dashboard",
        description:
          "A clean portal where students track their tasks, view feedback, and access resources.",
        iconName: "Layout",
      },
      {
        title: "Direct Feedback",
        description:
          "Quick text and audio notes for personalized teacher-to-student guidance.",
        iconName: "MessageSquare",
      },
      {
        title: "Progress Insights",
        description:
          "Lightweight tracking to see academic growth and identify students needing support.",
        iconName: "PieChart",
      },
    ],
  },
  {
    id: "sport",
    name: "MindSync Sport",
    tagline: "The central hub for school athletic operations.",
    description:
      "An all-inclusive operations suite for schools to manage athletic programs and bring all collaborators onboard.",
    longDescription:
      "MindSync Sport consolidates school athletic operations into a single platform. Schools buy in to handle sports programs and onboard their entire network of sports convenors, boards, and local coordinators.",
    link: "https://sport.mindsync.solutions",
    themeColor: "#06b6d4",
    features: [
      {
        title: "Fixture Scheduler",
        description:
          "Organize tournament brackets, coordinate matches, and schedule games automatically.",
        iconName: "Trophy",
      },
      {
        title: "Board Oversight",
        description:
          "High-level dashboards for compliance reporting, budget tracking, and program auditing.",
        iconName: "ClipboardList",
      },
      {
        title: "Logistics Hub",
        description:
          "Coordinate team travel, manage equipment inventory, and reserve sporting venues.",
        iconName: "MapPin",
      },
      {
        title: "Onboarding Portal",
        description:
          "Invite external convenors, coaches, and boards into your school’s secure environment.",
        iconName: "Users",
      },
      {
        title: "Compliance Sentinel",
        description:
          "Automate medical waivers, check coaching credentials, and manage safety documents.",
        iconName: "ShieldCheck",
      },
    ],
  },
];
