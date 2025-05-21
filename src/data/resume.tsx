import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ubaid",
  initials: "DV",
  url: "https://codngwthubaid.vercel.app/",
  location: "Rampur, UP - India ",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack Developer || Web Developer Tutor at Preply || BCA Student || 2nd year",
  summary:
    "Full Stack Developer and Web Developer Tutor at [Preply](https://preply.com/en/tutor/4418475), currently pursing BCA program, leverages their skills to teach and guide others while furthering their own education. This individual likely possesses a strong foundation in web development technologies and is actively expanding their knowledge in computer applications. They are passionate about coding and sharing their expertise with students, making complex programming concepts accessible and enjoyable. As a tutor on [Preply](https://preply.com/en/tutor/4418475), they assist aspiring developers in mastering languages and frameworks such as HTML, CSS, JavaScript, React, Node, Express , MongoDB, and more.",
  avatarUrl: "/me.jpg",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "React.js",
    "Redux",
    "Bootstrap",
    "React Native",
    "Next.js",
    "Typescript",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Mongoose",
    "NeonDB",
    "Prisma",
    "C++",
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
      start: "28th Dec 2023",
      end: "Present",
      description:
        "As a Preply web development tutor, share your skills in HTML, CSS, JavaScript, and more with students worldwide. Create personalized lessons, set your rates, and earn around $4/hour. Help students master front-end and back-end development and build real-world projects. Passion for teaching and strong web development knowledge are essential.",
    },
    {
      company: "DevTown",
      badges: [],
      href: "https://www.devtown.in/",
      location: "Remote",
      title: "Campus Ambassador",
      logoUrl: "/devTown.jpg",
      start: "1st Nov 2024",
      end: "31st Nov 2024",
      description:
        "As a devTown Campus Ambassador, I'm the face of devTown at my college. I promote devTown's programs and services, organize events, and connect students with opportunities in the devTown community. I build brand awareness, gather feedback, and serve as a key link between devTown and the student body.",
    },
    {
      company: "IEEE",
      href: "https://www.ieee.org/",
      badges: [],
      location: "College",
      title: "Student Mentor",
      logoUrl: "/IEEE.jpg",
      start: "2nd Sep 2024",
      end: "29th Sep 2024",
      description:
        "As a Student Mentor in the IEEE program, I guide junior college students through a 3-week web development course. I provide hands-on instruction, answer questions, and offer support to help them build their web development skills and confidence, fostering a positive learning environment.",
    },
    {
      company: "CodSoft",
      href: "https://www.codsoft.in/",
      badges: [],
      location: "Remote",
      title: "Web Developer Intern",
      logoUrl: "/codSoft.jpg",
      start: "15th June 2024",
      end: "15th July 2024",
      description:
        "As a Web Developer Intern at CodSoft, I contribute remotely for one month. I assist in designing, coding, and testing web applications, working closely with the development team. My responsibilities include writing clean code, troubleshooting bugs, and implementing responsive designs to enhance user experience.",
    },
    {
      company: "Prodigy Infotech",
      href: "https://prodigyinfotech.dev/",
      badges: [],
      location: "Remote",
      title: "Frontend Web Developer Intern",
      logoUrl: "/prodigy.jpg",
      start: "1st April 2024",
      end: "5th May 2024",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
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
  projects: [
    {
      title: "Halalify",
      href: "https://github.com/Codngwthubaid/Halalify",
      dates: "2 April 2025 - 18 May 2025",
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
      title: "Job-Searcher",
      href: "https://github.com/Codngwthubaid/Job-Searcher",
      dates: "1 May 2025 - 5 May 2025",
      active: true,
      description:
        "Job-Searcher is a web app that helps you quickly find jobs by aggregating listings and offering powerful search and filter options. Built with TypeScript and JavaScript, it provides a fast, user-friendly experience for job seekers.",
      technologies: [
        "React.Js",
        "Express.Js",
        "Javascript",
        "Typescript",
        "TailwindCSS",
        "MongoDB Atlas",
        "Shadcn UI",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://jobsearcher-mauve.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Codngwthubaid/Job-Searcher",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Job-Seacher.png",
    },
    {
      title: "Pdf Uploader Powered By RAG",
      href: "https://github.com/Codngwthubaid/PDF-Uploader",
      dates: "27 April 2025 - 30 April 2025",
      active: true,
      description:
        "Pdf Uploader powered by RAG(LangChain) lets you upload PDFs and ask questions about their content using AI- driven retrieval.Fast, easy, and perfect for extracting insights from documents..",
      technologies: [
        "React.Js",
        "Express.Js",
        "LangChain",
        "Vector - QdrantDB",
        "BullMQ",
        "Docker",
        "Javascript",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://pdf-uploader-jade.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Codngwthubaid/PDF-Uploader",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pdf-uploader.png",
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
      title: "Health Connect",
      href: "https://health-connect-dusky.vercel.app/",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Designed, developed and launched Health Connect is a unified platform for accessing and sharing health and fitness symptoms data.",
      technologies: [
        "Next.js",
        "Javascript",
        "Clerk",
        "TailwindCSS",
        "ShadCN",
        "MagicUI"
      ],
      links: [
        {
          type: "Website",
          href: "https://health-connect-dusky.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/HealthConnect.png",
    },
    {
      title: "Headphones Landing Page",
      href: "https://headphones-project.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "NUHP is an elegant landing page for headphones, built with HTML, CSS, SCSS and JS. It features a responsive design for all devices and uses JavaScript for interactive elements. Showcasing product highlights and user reviews, NUHP provides an engaging experience for audio enthusiasts.",
      technologies: [
        "HTML",
        "CSS",
        "SCSS",
        "JS",
      ],
      links: [
        {
          type: "Website",
          href: "https://headphones-project.vercel.app/",
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
