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
  /** WCAG AA-safe variants of themeColor for small text on light/dark backgrounds. */
  textColor: { light: string; dark: string };
  features: ProductFeature[];
}

export const PRODUCTS: Product[] = [
  {
    id: "sims",
    name: "MindSync SIMS",
    tagline: "Institutional Foundation",
    description:
      "An AI-powered School Information Management System designed to handle every operational facet from student data to financial auditing.",
    longDescription:
      "MindSync SIMS (School Information Management System) is an institutional-grade, AI-powered ecosystem designed to handle the complex operational requirements of modern educational structures. From AI-driven timetabling to automated financial ledgers, it provides the intelligent digital backbone for schools of any scale.",
    link: "https://sims.mindsync.solutions",
    themeColor: "#4f46e5",
    textColor: { light: "#4338ca", dark: "#818cf8" },
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
    tagline: "Advanced Digital Learning",
    description:
      "An AI-enhanced Learning Management System designed for digital coursework, interactive forums, and secure assessment.",
    longDescription:
      "Our AI-enhanced LMS empowers educators to create immersive digital learning experiences. Fully Canvas-compatible (supporting IMSCC standard packages), it features a built-in quiz builder, secure lockdown browser for exam integrity, and native support for AR/VR and AI tools.",
    link: "https://lms.mindsync.solutions",
    themeColor: "#8b5cf6",
    textColor: { light: "#6d28d9", dark: "#a78bfa" },
    features: [
      {
        title: "Canvas Compatible",
        description:
          "Seamless integration with existing educational standards (IMSCC package imports).",
        iconName: "Layout",
      },
      {
        title: "Lockdown Browser",
        description:
          "Enforce fullscreen mode and block copy-paste during sensitive exams.",
        iconName: "ShieldCheck",
      },
      {
        title: "Quiz & Assessment Builder",
        description: "Advanced progress tracking, auto-grading, and submission management.",
        iconName: "CheckSquare",
      },
      {
        title: "Role-Based Logic",
        description:
          "Dedicated interfaces and permissions for Teachers, Students, and Admins.",
        iconName: "Layers",
      },
      {
        title: "Interactive Forums",
        description:
          "Support for rich multimedia discussions, video, and announcements.",
        iconName: "Video",
      },
    ],
  },
  {
    id: "tutorsmart",
    name: "TutorSmart",
    tagline: "Expert Tutors",
    description:
      "A trusted one-to-one tutoring platform, powered by registered teachers.",
    longDescription:
      "TutorSmart connects students with the highest caliber of educators across Australia. Every tutor is a verified, registered professional subject to rigorous background checks, providing one-to-one instruction with no lock-in contracts.",
    link: "https://tutorsmart.mindsync.solutions",
    themeColor: "#ec4899",
    textColor: { light: "#be185d", dark: "#f472b6" },
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
    tagline: "AI Course Converter",
    description:
      "Convert PDFs, documents, videos, and raw text into interactive, LMS-compatible courses instantly using AI.",
    longDescription:
      "Coursify leverages advanced AI to rebrand and repurpose existing educational materials. Whether it's a PDF document, raw text, or a YouTube video, Coursify splits it into modules, summarizes key notes, creates quizzes, and exports it into major LMS formats (such as IMSCC or SCORM) in minutes.",
    link: "https://coursify.mindsync.solutions",
    themeColor: "#10b981",
    textColor: { light: "#047857", dark: "#34d399" },
    features: [
      {
        title: "Smart Ingestion",
        description:
          "Convert static documents and lecture notes into interactive lessons via AI.",
        iconName: "Zap",
      },
      {
        title: "Video to Course",
        description: "Segment video playlists and generate structured course content and notes.",
        iconName: "Video",
      },
      {
        title: "SCORM & IMSCC Export",
        description: "Generate standard course packages ready for Canvas, Moodle, or other major LMS platforms.",
        iconName: "FileText",
      },
      {
        title: "AI Quiz Generator",
        description: "Create misconception-aware assessments and quizzes automatically.",
        iconName: "Bot",
      },
    ],
  },
  {
    id: "magazine",
    name: "MindSync Magazine",
    tagline: "Newsletter & Event Portal",
    description:
      "An integrated portal providing parents with a unified view of school events, announcements, and digital newsletters.",
    longDescription:
      "MindSync Magazine bridges the communication gap between schools and families. Fully integrated with the SIMS student database, it automates the creation of beautiful, mobile-responsive newsletters and synchronized event notifications.",
    themeColor: "#f59e0b",
    textColor: { light: "#b45309", dark: "#fbbf24" },
    features: [
      {
        title: "Parent Sync",
        description: "Directly feeds off the SIMS database for secure, zero-friction audience sync.",
        iconName: "Users",
      },
      {
        title: "Responsive Newsletters",
        description:
          "Premium communication templates for announcements, school news, and digital magazines.",
        iconName: "Image",
      },
      {
        title: "Integrated Calendar",
        description: "Unified, school-wide events calendar synced directly to parent portals.",
        iconName: "Calendar",
      },
      {
        title: "Multi-Channel Delivery",
        description: "Broadcast updates via email, web dashboards, and mobile notifications.",
        iconName: "Send",
      },
    ],
  },
  {
    id: "jobs",
    name: "MindSync Jobs",
    tagline: "Teacher Staffing Platform",
    description:
      "An AI-powered recruitment engine designed for high-speed teacher staffing for schools that need them.",
    longDescription:
      "Our recruitment engine utilizes advanced matching algorithms to find the best-suited relief teachers for urgent institutional openings. Average match time of 4 hours across 2,300+ verified teachers, with 100+ placed in educational institutions.",
    link: "https://jobs.mindsync.solutions",
    themeColor: "#3b82f6",
    textColor: { light: "#1d4ed8", dark: "#60a5fa" },
    features: [
      {
        title: "AI-Powered Matching",
        description:
          "Intelligent staffing matches based on subject expertise and availability.",
        iconName: "Bot",
      },
      {
        title: "Global Network",
        description:
          "Access to 2,300+ verified teachers, 100+ already placed in schools.",
        iconName: "MapPin",
      },
      {
        title: "Compliance Automator",
        description:
          "Instant background clearances, identity checks, and credential verification.",
        iconName: "ShieldCheck",
      },
      {
        title: "Rapid Placement",
        description:
          "Average match time of under 4 hours for urgent relief and substitute needs.",
        iconName: "Clock",
      },
    ],
  },
  {
    id: "coach",
    name: "MindSync Coach",
    tagline: "AI Classroom Suite",
    description:
      "AI-native tools for lesson planning, grading rubrics, Socratic tutoring, and homework help.",
    longDescription:
      "Coach is an AI-native classroom suite designed to streamline educational workflows. It provides lesson planning, smart grading, and custom subject bots for teachers, paired with a 24/7 Socratic AI tutor, study notebooks, and gamified achievements for students.",
    link: "https://coach.mindsync.solutions",
    themeColor: "#f43f5e",
    textColor: { light: "#be123c", dark: "#fb7185" },
    features: [
      {
        title: "Socratic AI Tutor",
        description:
          "24/7 guided questioning that builds real student understanding instead of giving shortcuts.",
        iconName: "Brain",
      },
      {
        title: "AI Lesson Planner",
        description:
          "Curriculum-aligned lesson plans, worksheets, and bell ringers generated in seconds.",
        iconName: "BookOpen",
      },
      {
        title: "Rubric Grading",
        description:
          "Automated assessment scoring, personalized feedback drafts, and IEP generation.",
        iconName: "CheckSquare",
      },
      {
        title: "Scan & Grade",
        description:
          "Photograph handwritten student worksheets for instant AI feedback and grading.",
        iconName: "ScanLine",
      },
      {
        title: "Voice Cloning",
        description:
          "Clone teacher voices for personalized audio read-aloud content that students can replay.",
        iconName: "Mic",
      },
      {
        title: "Custom AI Bots",
        description:
          "Configure specialized, subject-focused AI assistants for classroom engagement.",
        iconName: "Bot",
      },
    ],
  },
  {
    id: "sport",
    name: "MindSync Sport",
    tagline: "K-12 Athletic Management",
    description:
      "An athletic operations hub for organizing meets, tracking leaderboards, and managing equipment booking.",
    longDescription:
      "MindSync Sport is a comprehensive athletic management system. It coordinates school carnivals, schedules match brackets, records live event scores, tracks house standings, and manages sports equipment logistics.",
    link: "https://sport.mindsync.solutions",
    themeColor: "#06b6d4",
    textColor: { light: "#0e7490", dark: "#22d3ee" },
    features: [
      {
        title: "Meet Manager",
        description:
          "Configure athletic or swimming meets, seed heats, and assign marshal stations.",
        iconName: "Trophy",
      },
      {
        title: "Live Scoreboards",
        description:
          "Real-time scoring, live standings, and public leaderboards for spectators.",
        iconName: "ClipboardList",
      },
      {
        title: "Consent & Nominations",
        description:
          "Streamline parent permission forms and athlete event nomination entries.",
        iconName: "ShieldCheck",
      },
      {
        title: "Equipment Booking",
        description:
          "Track sports gear inventory, reservations, and maintenance logs.",
        iconName: "BaggageClaim",
      },
      {
        title: "SIMS Integration",
        description:
          "Synchronize school rosters, house groupings, and parent details directly from SIMS.",
        iconName: "Users",
      },
    ],
  },
];
