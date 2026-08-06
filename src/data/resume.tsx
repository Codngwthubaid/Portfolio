import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ubaid",
  initials: "DV",
  url: "https://codngwthubaid.vercel.app/",
  location: "Rampur, UP - India ",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "AI Powered Data Analyst || Web Developer Tutor at Preply",
  summary:
    "I am an AI Powered Data Analyst and Web Development Tutor at [Preply](https://preply.com/en/tutor/4418475) with a strong foundation in data analytics, business intelligence, and software development. As a recent BCA graduate, I combine technical expertise in Python, SQL, Excel, Power BI, and AI-assisted analytics to transform complex datasets into actionable business insights. My experience includes data cleaning, exploratory data analysis (EDA), KPI reporting, dashboard development, and automation solutions that support data-driven decision-making. Alongside analytics, I mentor students in web development, helping them build practical skills in modern web technologies. I am passionate about leveraging data, AI, and technology to solve real-world business problems and create measurable impact.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "Excel",
    "SQL",
    "PowerBI",
    "Git",
    "GitHub",
    "MERN Stack",
    "Next.js",
    "Typescript",
    "MongoDB",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "codngwthubaid@gmail.com",
    tel: "+91-75350-05331",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Codngwthubaid",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/codngwthubaid/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/codngwthubaid",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@CodeWithUbaid",
        icon: Icons.youtube,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.youtube.com/@CodeWithUbaid",
        icon: Icons.instagram,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/7535005331",
        icon: Icons.whatsapp,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Preply",
      badges: [],
      href: "https://preply.com/",
      location: "Remote",
      title: "Web Developer Tutor",
      logoUrl: "/preply.jpg",
      start: "Dec 2024",
      end: "Present",
      description:
        "As a Preply web development tutor, I help students to learn full stack web development and specific niche as well like frontend development, backend development. Till now I teach more than 10+ international students with 165+ classes with 4.3/5 star of rating. My teaching style is simple learn the basic and do practice questions and build small projects and repeact the pattern",
    },
    {
      company: "Impresio Studio",
      badges: [],
      href: "https://www.theimpressio.in/",
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/impresio_studio_logo.jpeg",
      start: "Jan 2026",
      end: "Mar 2026",
      description:
        "Building full-stack features using MERN Stack. Designing schemas in MongoDB, integrating REST APIs, and optimizing backend services. Contributing to production-ready code, debugging, and performance optimization.",
    },
    {
      company: "Pixelwand Studio",
      badges: [],
      href: "https://www.pixelwand.live/",
      location: "Onsite",
      title: "Full Stack Developer Intern",
      logoUrl: "/pixelwand-image.webp",
      start: "July 2025",
      end: "Dec 2025",
      description:
        "Building full-stack features using ReactJS, React Native and HonoJS for backend API development. Designing schemas in MongoDB, integrating REST APIs, and optimizing backend services. Contributing to production-ready code, debugging, and performance optimization.",
    },
  ],
  education: [
    {
      school: "TMU",
      href: "https://www.tmu.ac.in/",
      degree: "Bachelor of Computer Application",
      logoUrl: "/tmu.jpg",
      start: "2023",
      end: "present",
    },
    {
      school: "Sunway Sr Sec School",
      href: "https://sunway.edupage.org/",
      degree: "12th - PCM",
      logoUrl: "/sunway.jpg",
      start: "2022",
      end: "2023",
    },
    {
      school: "Sunway Sr Sec School",
      href: "https://sunway.edupage.org/",
      degree: "10th",
      logoUrl: "/sunway.jpg",
      start: "2020",
      end: "2021",
    },
  ],
  dataAnalystProjects: [
    {
      title: "Vendor Performance Analysis",
      href: "https://github.com/Codngwthubaid/vendor-performance-data-analysis-SQL-Python-PowerBI",
      dates: "June 2026",
      active: true,
      description:
        "A comprehensive analysis of vendor purchasing patterns, sales performance, inventory turnover, and profitability insights. The project follows a complete data pipeline from raw CSV ingestion to interactive dashboards, covering ETL, exploratory data analysis, statistical hypothesis testing, and business recommendations.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "SQL",
        "PowerBI",
        "SciPy"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Codngwthubaid/vendor-performance-data-analysis-SQL-Python-PowerBI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vendor-performance-dashboard.png",
    },
    {
      title: "Customer Shopping Behavior Analysis",
      href: "https://github.com/Codngwthubaid/customer-trends-data-analysis-SQL-Python-PowerBI",
      dates: "June 2026",
      active: true,
      description:
        "This project analyzes customer shopping behavior using transactional data from 3,900 purchases across various product categories. The goal is to uncover insights into spending patterns, customer segments, product preferences, and subscription behavior to guide strategic business decisions.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "SQL",
        "PowerBI",
        "PyMySql",
        "SQLAlchemy",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Codngwthubaid/customer-trends-data-analysis-SQL-Python-PowerBI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/customer-behaviour-dashboard.png",
    },
    {
      title: "Supply Chain Analysis",
      href: "https://github.com/Codngwthubaid/supply-chain-analysis",
      dates: "June 2026",
      active: true,
      description:
        "A data-driven analysis of delivery operations for a global e-commerce platform, covering 172,765 orders across January 2015 – January 2018. The project identifies root causes of chronic late deliveries, quantifies their financial impact, and provides actionable recommendations.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Codngwthubaid/supply-chain-analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/supply-chain-analysis-ppt.png",
    },
  ],
  projects: [
    {
      title: "OP Support - AI Customer Care Chatbot Builder",
      href: "https://github.com/Codngwthubaid/OP-Support",
      dates: "Jan 2026 - March 2026",
      active: true,
      description:
        "OP Support is an AI-powered customer care chatbot builder that integrates with your docs, links, and text to answer customer queries instantly. It provides a dashboard for managing chatbots, knowledge sources, and conversations.",
      technologies: [
        "Next.Js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "NeonDB",
        "Scalekit",
        "JWT",
        "AI (Qwen 3.5 122B)"
      ],
      links: [
        {
          type: "Website",
          href: "https://op-support-khaki.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Codngwthubaid/op-support",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/op-support.png",
    },
    {
      title: "Halalify",
      href: "https://github.com/Codngwthubaid/Halalify",
      dates: "April 2025 - May 2025",
      active: true,
      description:
        "Halalify is a web application designed to provide users with a curated selection of halal music. Built with MERN Stack, it offers a responsive and user-friendly interface, ensuring smooth navigation and an enjoyable listening.",
      technologies: [
        "React.Js",
        "Express.Js",
        "Javascript",
        "Typescript",
        "TailwindCSS",
        "MongoDB Atlas",
        "Shadcn UI",
        "Clerk",
        "CLoudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://halalify-yakv.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Codngwthubaid/Halalify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Halalify.png",
    },
    {
      title: "Video Conferencng Application",
      href: "https://github.com/Codngwthubaid/Video-Calling-Application",
      dates: "Aug 2024 - Dec 2024",
      active: true,
      description:
        "Developed a video confererencing application built with Next.js and styled using Tailwind CSS. It leverages multiple packages for enhanced functionality, ensuring a seamless user experience. The app features real-time communication, user authentication, and a scalable architecture.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Stream",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://nuvca.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Codngwthubaid/nuvca/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/VideoCalling.png",
    },
    {
      title: "WebZaura Landing Page",
      href: "https://webzaura.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "WebZaura is an elegant landing page for Software Development Agency. It features a responsive design for all devices. Showcasing product highlights and user reviews, WebZaura provides an engaging experience for audio enthusiasts.",
      technologies: [
        "Nexjs",
        "TailwindCSS",
        "ShadCN",
        "MagicUI",
        "Axios",
        "Zod",
        "GSAP",
        "AceternityUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://webzaura.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Codngwthubaid/WebZaura",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/webzaura.png",
    },
    {
      title: "Headphones Landing Page",
      href: "https://webzaura.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "NUHP is an elegant landing page for headphones, built with HTML, CSS, SCSS and JS. It features a responsive design for all devices and uses JavaScript for interactive elements. Showcasing product highlights and user reviews, NUHP provides an engaging experience for audio enthusiasts.",
      technologies: ["HTML", "CSS", "SCSS", "JS"],
      links: [
        {
          type: "Website",
          href: "https://webzaura.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Codngwthubaid/Headphones-Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Headphones.png",
    },
  ],
  freelanceProjects: [
    {
      title: "Lionyard - Discover Premium Offplan & Resale Properties",
      href: "https://lionyard.ae/",
      dates: "01 Feb 2026 - 01 Aug 2026",
      active: true,
      description:
        "A full-stack real estate platform built for a Dubai-based property company Lionyard, featuring three integrated applications: a public marketing website for property seekers, a role-based admin & agent dashboard, and a Node.js REST API backend. The platform covers the complete property lifecycle from listing management to lead generation, consultation booking, and agent assignment",
      technologies: [
        "React.Js",
        "Express.Js",
        "Javascript",
        "Typescript",
        "TailwindCSS",
        "MongoDB Atlas",
        "Shadcn UI",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://lionyard.ae/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/lionyard.png",
    },
    {
      title: "BillRest - A Modern Billing & Inventory Management Software",
      href: "https://billrest.com/",
      dates: "01 July 2025 - 01 Nov 2025",
      active: true,
      description:
        "Billrest is a modern billing software which is designed for maintaining the billing, invoice, appointments, inventory managment in multiple field.Billrest have 2 segments right now - Billrest General and Billrest Health. Built with MERN Stack, it offers a responsive and user-friendly interface, ensuring smooth navigation.",
      technologies: [
        "React.Js",
        "Express.Js",
        "Javascript",
        "Typescript",
        "TailwindCSS",
        "MongoDB Atlas",
        "Shadcn UI",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://billrest.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/BillRest.png",
    },
    {
      title: "NoLimitBikers",
      href: "http://nolimitbikers.nl/",
      dates: "15 September 2024 - 27 Dec 2024",
      active: true,
      description:
        "NoLimiBikers is an web application for selling courses for bike learner in netherland. Entire application is built with Nextjs, it offers a responsive and user-friendly interface, ensuring smooth navigation.",
      technologies: ["Nextjs", "Javascript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "http://nolimitbikers.nl/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Nolimitbikers.png",
    },
  ],
  hackathons: [
    {
      title: "HackWithUttarakhand",
      dates: "October 16, 2024",
      location: "Tehri, Uttrakhand",
      description:
        "The experience was not just a competition but a platform to innovate, collaborate, and push boundaries alongside some of the brightest minds in the region. The challenges we tackled during this hackathon reaffirmed the value of teamwork, creativity, and resilience in solving real-world problems. 💡🚀",
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQEwPilQTQmB4A/feedshare-shrink_800/feedshare-shrink_800/0/1732784851603?e=1742428800&v=beta&t=MJ4ERV9jOCpcHEHoNmWJzkyk9NxBjxtctDOjDm6gJE0",
      links: [
        {
          title: "Linkedin",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/codngwthubaid_hackathon-achievement-innovation-activity-7267826438194499584-tdF1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEh6Ki0BZGs-1vnyHL1faaE303QicNyj508",
        },
      ],
    },
  ],
} as const;
