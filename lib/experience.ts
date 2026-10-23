export type Role = {
  company: string;
  url?: string;
  role: string;
  location?: string;
  start: string;
  end?: string;
  summary: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: "Vercel",
    url: "https://vercel.com",
    role: "Developer Success Engineer",
    location: "Remote, Berlin",
    start: "2026",
    summary: "Helping teams build, ship and scale on the platform.",
    highlights: [],
  },
  {
    company: "CommerceTools",
    url: "https://www.commercetools.com",
    role: "Senior Full Stack Software Engineer",
    location: "Berlin, Germany",
    start: "Nov 2022",
    end: "2026",
    summary: "APIs and B2B enterprise starter kits for headless commerce.",
    highlights: [
      "Created and integrated APIs for different commerce solutions",
      "Delivered B2B enterprise starter kits for shopping lists and checkout",
      "Improved API Hub, the internal central hub for APIs",
    ],
  },
  {
    company: "ScalingFunds",
    url: "https://www.scalingfunds.com",
    role: "Senior Full Stack Software Engineer",
    location: "Berlin, Germany",
    start: "Jan 2022",
    end: "Oct 2022",
    summary: "GraphQL APIs and React front-ends for fintech.",
    highlights: [
      "Implemented APIs in GraphQL",
      "Built new front-end applications in React",
      "Directly responsible individual for multiple features and sprints",
      "Led deployments and tech demos for the business team",
    ],
  },
  {
    company: "AKTEK",
    url: "https://www.aktek.io",
    role: "Full Stack Software Engineer",
    location: "London, United Kingdom",
    start: "Oct 2021",
    end: "Nov 2021",
    summary: "APIs for flagship security products, with Mapbox-based mapping.",
    highlights: [
      "Integrated and developed APIs for flagship security products in Node.js",
      "Used Mapbox and map frameworks to improve security product UX",
    ],
  },
  {
    company: "CollabWorks",
    url: "https://www.collabworks.com",
    role: "Full Stack Web Developer",
    location: "Redwood City, California",
    start: "Aug 2020",
    end: "Aug 2021",
    summary: "Node.js APIs, React front-ends and CI/CD.",
    highlights: [
      "Built back-end APIs in Node.js",
      "Database infrastructure on MongoDB Atlas",
      "Front-end application in React and Redux Toolkit",
      "CI/CD with GitHub Actions to Heroku and Netlify",
    ],
  },
  {
    company: "Changing Directions",
    role: "Full Stack Web Developer",
    location: "Richmond, California",
    start: "Feb 2019",
    end: "Jun 2021",
    summary: "An in-house client management system.",
    highlights: [
      "Developed an in-house client management system",
      "Backend APIs in PHP with MySQL",
      "Web server management and support",
    ],
  },
  {
    company: "Raised for A Purpose",
    url: "https://www.rfpmam.com",
    role: "Full Stack Software Engineer",
    start: "Jan 2018",
    end: "Jul 2019",
    summary: "Web and mobile apps, including music streaming.",
    highlights: [
      "Developed, deployed and managed web and mobile applications",
      "Music streaming web application in PHP, MySQL and JavaScript",
      "Android application in Java with a PHP backend",
    ],
  },
  {
    company: "English Language Institute",
    url: "https://eli.edu",
    role: "Full Stack Software Engineer",
    location: "San Francisco, California",
    start: "2017",
    end: "2018",
    summary: "A student information system and teacher portal.",
    highlights: [
      "Student information system in React and Node.js",
      "Teacher portal for grades, vacation and attendance tracking",
    ],
  },
  {
    company: "Fountain of Victory",
    role: "Full Stack Software Engineer",
    start: "Feb 2017",
    end: "Oct 2018",
    summary: "An Android app and web services for church media.",
    highlights: [
      "Android app for church services, sermons and media",
      "Web services in Node.js and PHP",
    ],
  },
];

export const stack =
  "TypeScript, Node.js, React and Next.js every day. Go and Rust when it needs to be fast. Flutter and React Native for mobile. Kubernetes and Postgres underneath.";

export function yearRange(role: Role) {
  const start = role.start.slice(-4);
  const end = role.end ? role.end.slice(-4) : "now";
  return start === end ? start : `${start} – ${end}`;
}
