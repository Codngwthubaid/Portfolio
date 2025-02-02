export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'NU - Halalify Nasheed Player',
      desc: 'Nasheed Player is a dynamic application that offers users an extensive collection of nasheeds and albums, accessible to both logged-in and non-logged-in members. With its intuitive interface, users can easily explore and enjoy uplifting melodies and spiritual messages.',
      subdesc:
        'In addition to music, Nasheed Player features a chat system that fosters community engagement, allowing users to connect and share their thoughts on their favorite nasheeds. This combination of music and social interaction makes Nasheed Player a unique platform for nasheed enthusiasts.',
      href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'NU - Elegant Landing Page For Headphones',
      desc: 'This project involves creating an eye-catching landing page for headphones, featuring a sleek dark interface that enhances user engagement through smooth scrolling animations. The modern design effectively showcases the product while appealing to contemporary aesthetic preferences.',
      subdesc:
        "The landing page improves user experience by being compatible across devices, making it easily accessible on smartphones and tablets. Its captivating design encourages exploration and increases conversion potential. Additionally, it can be optimized for search engines to boost visibility, while its flexible structure allows for future updates, ensuring ongoing relevance in a dynamic market.",
      href: 'https://headphones-project.vercel.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/headPhones.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'NU - Muslim Mingle Social Media',
      desc: 'Muslim Mingle is a dynamic social media platform designed to connect individuals within the Muslim community. With robust authentication features, users can create secure personal profiles, upload photos, and engage with others through likes and comments. This encourages meaningful interactions and fosters friendships based on shared interests and values.',
      subdesc:
        'The platform prioritizes user experience, allowing members to navigate their profiles easily while managing privacy settings. By providing a space for authentic expression, Muslim Mingle cultivates a sense of belonging, making it the perfect place for those looking to connect with like-minded individuals in a supportive community.',
      href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'IEEE',
      pos: 'Web Development Mentor',
      duration: '15th Sep - 15th Oct',
      title: "As a mentor in the IEEE program, I lead a 3-week Web Development course on HTML, CSS, and JavaScript, focusing on hands-on learning and teamwork.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Prodigy Infotech',
      pos: 'Web Developer Inter',
      duration: '1st April - 31st April',
      title: "At Prodigy I worked on multiple projects showcase proficiency in responsive web applications: a weather app with API data, a user-friendly stopwatch, and a tic-tac-toe game for two players, all emphasizing seamless user experience.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'CodSoft',
      pos: 'Web Developer Inter',
      duration: '15th May - 15th June',
      title: "At Codsoft I developed a responsive headphones website with animations for enhanced user experience, focusing on a user-friendly interface and accessibility across devices.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];