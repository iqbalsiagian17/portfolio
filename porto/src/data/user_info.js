const info = {
  // ============ MAIN DETAILS ============
  main: {
    name: "Iqbal Siagian",
    description:
      "I am a software engineer with expertise in full-stack web development. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards.",
    role: "Full-Stack Developer",
    photo: "../me.jpg",
    email: "iqbalsiagian2018@gmail.com",
  },

  // ============ SOCIAL LINKS ============
  socials: {
    github: "https://github.com/iqbalsiagian17",
    linkedin: "https://www.linkedin.com/in/iqbal-siagian",
    instagram: "https://www.instagram.com/nyiooss",
  },

  // ============ PROJECTS ============
  projects: [
    {
      title: "Chicken Disease Classification from Droppings",
      description:
        "Chicken Disease Classifier is a web-based application that uses a CNN model to identify chicken diseases from droppings images, offering a simple interface for quick and accessible diagnosis.",
      technologies: "JavaScript, Flask, Python, TensorFlow",
      github:
        "https://github.com/iqbalsiagian17/chicken-disease-classification-", // ganti jika belum ada
      images: [
        "/project/classification/classification1.png",
        "/project/classification/classification2.png",
        "/project/classification/classification3.png",
        "/project/classification/classification4.png",
      ],
    },
    {
      title: "Balige Bersih",
      description:
        "Balige Bersih is a reporting platform that allows citizens to submit and monitor environmental issues in Balige, while enabling the local government to manage and respond to reports efficiently through both web and mobile interfaces.",
      technologies: "React, Flutter, Express.js, MySQL",
      github: "https://github.com/iqbalsiagian17/sistem-pelaporan-lingkungan",
      images: [
        "/project/baligerbersih/bb-1.jpg",
        "/project/baligerbersih/bb-2.jpg",
        "/project/baligerbersih/bb-3.jpg",
        "/project/baligerbersih/bb-4.jpg",
      ],
    },

    {
      title:
        "Sistem Informasi Administrasi Yayasan Pendidikan Anak Rumah Damai",
      description:
        "A web-based information system developed to manage administrative data for the Rumah Damai Foundation, including student records, financial tracking, and academic reports.",
      technologies: "Laravel, MySQL",
      github: "https://github.com/ImmanuelPartogi/PA2-Kelompok-8-SIAD",
      images: [
        "/project/ypa/pa2-1.jpg",
        "/project/ypa/pa2-2.jpg",
        "/project/ypa/pa2-3.jpg",
        "/project/ypa/pa2-4.jpg",
        "/project/ypa/pa2-5.jpg",
        "/project/ypa/pa2-6.jpg",
        "/project/ypa/pa2-7.jpg",
      ],
    },

    {
      title: "Ternak Sepatu",
      description:
        "A web-based e-commerce platform for shoe sales, built using ASP.NET MVC and C#. Features include product catalog, shopping cart, checkout, order management, and user authentication with Razor View and JavaScript.",
      technologies: " Asp.NET, C#, JavaScript",
      github: "https://github.com/iqbalsiagian17/TernakSepatu",
      images: [
        "/project/ternaksepatu/ternak1.png",
        "/project/ternaksepatu/ternak2.png",
        "/project/ternaksepatu/ternak3.png",
        "/project/ternaksepatu/ternak4.png",
        "/project/ternaksepatu/ternak5.png",
        "/project/ternaksepatu/ternak6.png",
        "/project/ternaksepatu/ternak7.png",
        "/project/ternaksepatu/ternak8.png",
        "/project/ternaksepatu/ternak9.png",
        "/project/ternaksepatu/ternak10.png",
      ],
    },

    {
      title: "Desa Balige II – Website Informasi dan Administrasi Desa",
      description:
        "A village website for Desa Balige II with CRUD features for news, events, citizen data, and services. Built using Laravel and MySQL to help staff manage and share information efficiently, with extra features like gallery and announcements.",
      technologies: "Laravel, MySQL, JavaScript",
      github: "https://github.com/iqbalsiagian17/DesaBalige2",
      images: [
        "/project/balige2/balige1.png",
        "/project/balige2/balige2.png",
        "/project/balige2/balige3.png",
        "/project/balige2/balige4.png",
      ],
    },

    {
      title: "Campus Information System",
      description:
        "A mobile application that replicates key academic features of IT Del’s CIS system. Built using Flutter for the frontend and Laravel with MySQL for the backend, integrated via REST API to support academic activities for students.",
      technologies: "Flutter, Laravel, MySQL",
      github: "https://github.com/iqbalsiagian17/CIS-Mobile",
      images: [
        "/project/cis/pam1.jpg",
        "/project/cis/pam2.jpg",
        "/project/cis/pam3.jpg",
        "/project/cis/pam4.jpg",
        "/project/cis/pam5.jpg",
        "/project/cis/pam6.jpg",
        "/project/cis/pam7.jpg",
      ],
    },

    {
      title: "Rivaldo Florist",
      description:
        "A dynamic website for a local florist business showcasing product catalogs, services, and contact options. Built with Laravel and MySQL, featuring WhatsApp-integrated ordering, flower detail pages, and admin content management.",
      technologies: "Laravel, MySQL, JavaScript",
      github: "https://github.com/iqbalsiagian17/rivaldo-florist",
      images: [
        "/project/rivaldo/rivaldo1.png",
        "/project/rivaldo/rivaldo2.png",
        "/project/rivaldo/rivaldo3.png",
        "/project/rivaldo/rivaldo4.png",
        "/project/rivaldo/rivaldo5.png",
        "/project/rivaldo/rivaldo6.png",
        "/project/rivaldo/rivaldo7.png",
      ],
    },
  ],

  // ============ EDUCATION ============
  education: [
    {
      school: "Institut Teknologi Del",
      degree: "DIII Teknologi Informasi",
      duration: "2022 - 2025",
      image: "itdelnobg.png",
    },
  ],

  // ============ EXPERIENCE ============
  experience: [
    {
      position: "Software Engineer",
      company: "PT Umalo Sedia Tekno - Depok, West Java",
      duration: "Sept 2025 - Feb 2026",
      image: "umalo.png",
      descriptions: [
        "Led full-stack development for multiple production web applications, including CRM systems, e-commerce platforms, and internal company tools.",
        "Acted as developer lead within the team, coordinating task distribution, reviewing code, and ensuring project delivery aligned with business requirements.",
        "Mentored and supervised software developer interns, providing technical guidance, code reviews, and best-practice recommendations.",
        "Developed scalable applications using React.js for frontend and Express.js (Node.js) for backend services.",
        "Designed and optimized relational databases using MySQL and PostgreSQL, ensuring data integrity and performance.",
        "Implemented real-time and multimedia features using WebRTC and Electron for desktop-based applications.",
        "Managed application deployment and server environments on VPS using Linux, PM2, and Nginx for process management and reverse proxy configuration.",
        "Maintained clean, modular, and maintainable codebases using JavaScript and Git version control.",
      ],
    },
    {
      position: "Software Engineer Intern",
      company: "PT Umalo Sedia Tekno - Depok, West Java",
      duration: "Aug 2024 - Jan 2025",
      image: "umalo.png",
      descriptions: [
        "Contributed to the development of several company projects, including a CRM website, e-commerce platform, and company profile website.",
        "Involved in full-stack development processes, from designing MySQL databases to implementing user interfaces.",
        "Worked collaboratively within the development team and adhered to the company’s software development standards.",
        "Applied clean code practices and version control (Git) throughout the project development lifecycle.",
      ],
    },
  ],

  // ============ CERTIFICATES ============
  certificates: [
    {
      title: "Google Advanced Data Analytics",
      description: "Provided by Coursera & Authorized by Google",
      icon: "google",
      link: "/sertifikasi/11322009_IqbalSiagian_Coursea.pdf",
    },
    {
      title: "Oracle Certified Foundations Associate",
      description: "Provided by Oracle",
      icon: "oracle",
      link: "/sertifikasi/11322009_IqbalSiagian_Oracle.pdf",
    },
    {
      title: "elevAlte Indonesia",
      description: "Provided by Dicoding & Authorized by Microsoft",
      icon: "microsoft",
      link: "/sertifikasi/11322009_IqbalPancaRahmatSiagian_Elevate.pdf",
    },
    {
      title: "Ultimate AWS Certified Developer Associate 2025 DVA - C02",
      description: "Provided by Udemy & Authorized by AWS",
      icon: "amazon",
      link: "/sertifikasi/11322009_IqbalSiagian_AWS.pdf",
    },
  ],

  // ============ CONTACT ============
  contact: {
    title: "Let's Get in Touch: Ways to Connect with Me",
    description:
      "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at iqbalsiagian2018@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.",
  },

  // ============ FOOTER ============
  footer: "© 2025 Iqbal Siagian. All Rights Reserved",
};

export default info;
