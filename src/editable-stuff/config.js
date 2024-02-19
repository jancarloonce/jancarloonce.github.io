// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jan Carlo",
  middleName: "",
  lastName: "Once",
  message: " Changing the world with technology one step at a time. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jancarloonce/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/jancarlo.once/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/jancarlo.once/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jan-carlo-once-468a8915b/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/iamge.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.jpg"),
  imageSize: 375,
  message:
    "I'm a seasoned Software Engineer with a passion for crafting inventive and scalable solutions that cater to the diverse needs of clients and industries. With a rich background in cloud computing, machine learning, data engineering, and web development, I bring a wealth of expertise to every project I undertake. From designing robust data pipelines to developing cutting-edge machine learning models and building user-friendly web applications, I thrive on tackling complex challenges and delivering impactful solutions. Let's connect and explore how my skills and experience can contribute to your organization's success.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "jancarloonce", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
  excludeRepos: []
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profile.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profile.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

const skills = {
  show: true,
  heading: "Skills",
  technicalSkills: [
    {
      category: "Languages",
      skills: [
        { name: "Python", value: 92 },
        { name: "Java", value: 88 },
        { name: "JavaScript", value: 90 },
        { name: "C#", value: 87 },
        { name: "Bash", value: 88 },
        { name: "Powershell", value: 87 },
        // ... other programming languages
      ],
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", value: 84 },
        { name: "Flask", value: 86 },
        { name: "Django", value: 86 },
        { name: "Angular", value: 86 },
        { name: "Vue", value: 86 },
        // ... other web development technologies
      ],
    },
    {
      category: "Big Data Technologies",
      skills: [
        { name: "Airflow", value: 92 },
        { name: "Domino", value: 89 },
        { name: "Tenserflow", value: 88 },
        { name: "Nifi", value: 88 },
        { name: "Hadoop", value: 88 },
        { name: "Kibana", value: 88 },
        { name: "Cloudera", value: 90 },
        { name: "Spark", value: 88 },
        { name: "Kafka", value: 88 },
        { name: "SKlear", value: 86 },
        { name: "Splunk", value: 88 },
        // ... other big data technologies
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "Postgres", value: 91 },
        { name: "MySQL", value: 90 },
        { name: "MSSQL", value: 86 },
        { name: "Hive", value: 92 },
        { name: "Elasticsearch", value: 93 },
        // ... other databases
      ],
    },
    {
      category: "DevOps",
      skills: [
        { name: "Git", value: 95 },
        { name: "Docker", value: 87 },
        { name: "Kubernetes", value: 82 },
        { name: "Openshift", value: 89},
        // ... other DevOps technologies
      ],
    },
    {
      category: "Agile Methodologies",
      skills: [
        { name: "Scrum", value: 80 },
        { name: "Kanban", value: 82 },
        // ... other agile methodologies
      ],
    },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 85 },
    { name: "Collaboration", value: 88 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 83 },
    { name: "Problem Solving", value: 82 },
    { name: "Empathy", value: 89 },
    { name: "Organization", value: 87 },
    { name: "Creativity", value: 84 },
  ],
};


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get in Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "jancarloonce11@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Senior Python Developer',// Here Add Company Name
      companylogo: require('../assets/img/adaca.png'),
      date: 'January 2024 – Present',
      company: 'Adaca'
      
    },
    {
      role: 'Machine Learning Data Engineer',
      companylogo: require('../assets/img/odyssey.png'),
      date: 'November 2023 – December 2023',
      company: 'Odyssey'
    },
    {
      role: 'Application Developer',
      companylogo: require('../assets/img/ibm.png'),
      date: 'February 2019 – August 2023',
      company: 'IBM'
    },
    {
      role: 'Associate Software Engineer',
      companylogo: require('../assets/img/accenture.png'),
      date: 'May 2017 – January 2019',
      company: 'Accenture'
    },
  ]
}

const certificationsData = [
  '116132fc-231b-409e-99b9-11087f2fdcee',
  'e6e35cba-4c30-49c2-9ab6-2bae8a79c5a0',
  '9fc7b3d1-d15f-4f50-8c32-20b41f953789',
  '6bc303e2-7829-4549-946b-382ba204988d',
  '5f780eae-7505-4766-96ae-39f2532bd24a',
];



const timelineElements = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Senior Python Developer',// Here Add Company Name
      companylogo: require('../assets/img/adaca.png'),
      date: 'January 2024 – Present',
      company: 'Adaca',
      location: 'Sydney, Australia'
      
    },
    {
      role: 'Machine Learning Data Engineer',
      companylogo: require('../assets/img/odyssey.png'),
      date: 'November 2023 – December 2023',
      company: 'Odyssey',
      location: 'California, USA'
    },
    {
      role: 'Application Developer',
      companylogo: require('../assets/img/ibm.png'),
      date: 'February 2019 – August 2023',
      company: 'IBM',
      location: 'Quezon City, Philippines'
    },
    {
      role: 'Associate Software Engineer',
      companylogo: require('../assets/img/accenture.png'),
      date: 'May 2017 – January 2019',
      company: 'Accenture',
      location: 'Mandaluyong City, Philippines'
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, timelineElements, certificationsData };
