import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like Javascript and React.js, as well as back-end technologies like Node, MySQL, PostgreSQL, Python and Flask. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including Reactjs, Node, MySQL, PostgreSQL, Python and Flask. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Movie-Box",
    image: project1,
    description:
      "Movie Box is an interactive platform designed for movie enthusiasts to watch trailers, discover upcoming releases, and stay updated on popular films. Users can create personal accounts to save favorites, rate trailers, and engage with a community of fellow movie lovers.",
    technologies: ["Reactjs"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Flask", "Firebase"],
  },
  {
    title: "Travel Journal",
    image: project3,
    description:
      "A collaborative project focused on creating a personal travel diary platform. Users can document travel experiences, share photos, and keep track of visited locations in an organized, interactive format",
    technologies: ["HTML", "CSS", "Reactjs", "Flask", "postrgesql"],
  },
  {
    title: "Learning Management system",
    image: project4,
    description:
      "A collaborative project aimed at developing a comprehensive platform for managing and delivering educational content. This system allows educators to upload resources, track student progress, and provide an interactive learning environment.",
    technologies: ["HTML", "Reactjs", "postgresql", "Flask"],
  },
];

export const CONTACT = {
  address: "00100, NAIROBI ",
  phoneNo: "+257 262 092 52",
  email: "ronowilligers@gmail.com",
};
