import Deck from "../components/Deck.jsx";

// Dates follow LinkedIn. Edit entries here; the page renders from these lists.
const TECH = [
  {
    role: "Web Developer, Katie Taylor Web Design",
    when: "Dec 2022 to Present",
    org: "Freelance, remote",
    bullets: [
      "Design, build, and maintain more than 5 websites for health, education, and nonprofit clients on WordPress, Wix, Squarespace, Shopify, and hand-built stacks.",
      "Run the full project lifecycle: audits, proposals, Figma mockups, demos, deployment, and ongoing support, plus hosting, domains, and business email.",
      "Raised one client's organic traffic 30% in three months through SEO work: metadata, keyword strategy, and site structure.",
      "Write client guides and train staff so teams can manage their own sites.",
      "Test ADA and WCAG 2.1 compliance with screen readers (NVDA, JAWS, and VoiceOver) and contrast tools, and add security hardening to client sites.",
    ],
  },
  {
    role: "Subcontract Web Developer, Ulrich Analytica LLC",
    when: "2025 to Present",
    org: "Subcontract engagement, remote",
    bullets: [
      "Built the complete front end for a roughly 25-page internal job management web application for a plumbing company client: dashboard, job list, calendar, map, reports, estimates, invoices, search, messaging, and settings.",
      "Wrote the interface in HTML and CSS, with React and JavaScript where the app needed them.",
      "Worked directly with the backend engineer to connect the front end to the API, which runs on a Flask and AWS stack: API Gateway, Lambda, DynamoDB, S3, Cognito, and SES, with Twilio for SMS.",
    ],
  },
  {
    role: "Web Developer, Off-Campus Life, Colorado State University",
    when: "Nov 2022 to Oct 2025",
    org: "Fort Collins, Colorado",
    bullets: [
      "Implemented WCAG 2.1 across two university-affiliated websites, improving semantic structure, keyboard navigation, alt text, and color contrast, and raised accessibility scores 70% as measured by Siteimprove.",
      "Delivered hands-on accessibility training to the marketing team and wrote step-by-step guides that staff kept using afterward, serving as the office's primary technical point of contact.",
      "Improved the usability of the apartment search students use to find off-campus housing.",
      "Aligned site updates with university branding and ADA requirements.",
      "Awarded Outstanding Student Employee, Fall 2023, for reliability and quality of support work.",
    ],
  },
  {
    role: "Founder and Developer, KnightOwlChess",
    when: "2026 to Present",
    org: "Independent open-source project",
    bullets: [
      "Building an open-source chess application with the goal of being the most accessible chess game available, using the Stockfish engine, Supabase, and Vercel under the GPL-3.0 license.",
      "Designing color contrast options for all types of color vision impairment, scaffolded difficulty levels with a handicap system, and screen reader compatibility tests, and developing ways to play with alternative input such as adaptive switch controllers.",
    ],
  },
];

const OPS = [
  {
    role: "Food Operations Coordinator, RamRide, Colorado State University",
    when: "Jan 2023 to Aug 2025",
    org: "Promoted from Nightly Operations Coordinator in Aug 2023",
    bullets: [
      "Planned food deliveries totaling more than 20,000 lbs that fed 700+ students, staff, and faculty, and cut average wait times 20% by rebuilding scheduling and route planning.",
      "Trained more than 1,000 volunteers in safe ride practices and supervised hundreds across daytime and nightly operations.",
    ],
  },
];

const EDU_CAREER = [
  {
    role: "Lead Montessori Guide, St. Vrain Community Montessori School",
    when: "Aug 2019 to Jul 2022",
    org: "Longmont, Colorado",
    bullets: [
      "Co-led a multi-age lower elementary classroom (grades 1 through 3) and supervised assistant guides.",
      "Built a distance-learning program for 50+ students across two online school years, with lesson videos, handmade material replicas, and virtual breakout rooms.",
    ],
  },
  {
    role: "Lead Montessori Guide, The Leadership Academy",
    when: "Jul 2017 to Jun 2019",
    org: "Tyler, Texas",
    bullets: [
      "Promoted from assistant guide to lead guide after one year. Guided K through 3 students across all subjects, held weekly communication with families, and mentored two new hires.",
    ],
  },
  {
    role: "Pre-K 3 Lead Teacher, Tanglewood Academy",
    when: "Jul 2015 to Jun 2017",
    org: "Nacogdoches, Texas",
    bullets: [
      "Started as a Montessori assistant guide in a toddler room, then promoted to Pre-K 3 lead teacher in January 2017. Wrote lesson plans and kept 30+ families informed.",
    ],
  },
  {
    role: "Tobacco Grant Intern, Nacogdoches Memorial Health",
    when: "May 2016 to Aug 2016",
    org: "Healthy Nacogdoches Coalition",
    bullets: [
      "Co-produced 5 bilingual radio PSAs reaching 10,000+ listeners and led tobacco education workshops in English and Spanish.",
    ],
  },
  {
    role: "Runner and Floater, Excel Preschool",
    when: "Mar 2014 to Mar 2015",
    org: "Henderson, Texas",
    bullets: [
      "Cared for children from infants to school age and filled in for absent teachers and aides.",
    ],
  },
];

const PROJECTS = [
  ["KnightOwlChess", "In development. An open-source chess app built to be as accessible as possible: color contrast options for every type of color vision impairment, scaffolded difficulty with handicaps, screen reader tests, and adaptive switch controller support in progress."],
  ["Autonomous Terrain Navigation System", "NASA/USDA/CSU Hackathon 2025. Python rover simulation for search and rescue in forest and lunar terrain, with a custom A* pathfinder that weighs elevation."],
  ["Meat Grading Convolutional Neural Network", "USDA/CSU Hackathon 2024. Beef quality grading from images with PyTorch and DeepLab."],
  ["Color Coordinate Generator", "CS 312 team project, Spring 2025. Angular and MySQL. A print-friendly web app for vision therapy activity sheets with accessibility compliance."],
  ["Project Management System", "Class team project. Java, React, and JavaScript, with unit testing and mutation analysis."],
];

const LANGS = ["JavaScript", "HTML", "CSS", "PHP", "Python", "Java", "SQL", "C", "C++", "C#", "Ruby"];
const TOOLS = ["React", "Angular", "Bootstrap", ".NET", "Node.js", "Flask", "PyTorch", "MySQL", "AWS", "WordPress", "Wix", "Squarespace", "Shopify", "Figma", "Git and GitHub", "Google Analytics", "Siteimprove", "Webpack", "Linux", "macOS", "Windows"];

function Jobs({ list }) {
  return list.map((j) => (
    <article className="entry" key={j.role}>
      <header>
        <h3>{j.role}</h3>
        <p className="meta">{j.when}{j.org ? ` · ${j.org}` : ""}</p>
      </header>
      <ul>
        {j.bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </article>
  ));
}

const chips = (list) => (
  <ul className="chips">
    {list.map((s) => <li key={s}>{s}</li>)}
  </ul>
);

export default function Resume() {
  return (
    <Deck tapeId="resume" title="Resume">
      <p className="lede">
        Web developer and AMS-credentialed Montessori guide with two B.S. degrees, in Computer
        Science and Health Science, and eight years in the classroom. I build accessible websites for schools, nonprofits, and small
        businesses the way I prepared a classroom: clear, orderly, and open to everyone who walks
        in. Then I show your team how to take care of it.
      </p>
      <ul className="contact">
        <li>Redmond, Washington</li>
        <li>katie@katietaylor.info</li>
        <li><a href="https://www.linkedin.com/in/katherinetaylor24/" target="_blank" rel="noreferrer">LinkedIn<span className="visually-hidden"> (opens in a new tab)</span></a></li>
        <li><a href="https://github.com/katietay/" target="_blank" rel="noreferrer">GitHub<span className="visually-hidden"> (opens in a new tab)</span></a></li>
      </ul>

      <section className="block" aria-labelledby="skills-h">
        <h2 id="skills-h">Skills</h2>
        <h3 className="grp">Languages</h3>
        {chips(LANGS)}
        <h3 className="grp">Frameworks, platforms, and tools</h3>
        {chips(TOOLS)}
        <h3 className="grp">Hosting and email</h3>
        <p>IONOS, DreamHost, Bluehost, Hostinger. Domain, hosting, and business email setup.</p>
      </section>

      <section className="block" aria-labelledby="tech-h">
        <h2 id="tech-h">Web and software experience</h2>
        <Jobs list={TECH} />
      </section>

      <section className="block" aria-labelledby="ops-h">
        <h2 id="ops-h">Operations and leadership</h2>
        <Jobs list={OPS} />
      </section>

      <section className="block" aria-labelledby="edc-h">
        <h2 id="edc-h">Education career, 2014 to 2022</h2>
        <Jobs list={EDU_CAREER} />
        <p className="note">Earlier work in food service and hospitality, 2010 to 2016, included shift leader and trainer roles.</p>
      </section>

      <section className="block" aria-labelledby="proj-h">
        <h2 id="proj-h">Selected projects</h2>
        <ul className="plain-list">
          {PROJECTS.map(([t, d]) => (
            <li key={t}><strong>{t}.</strong> {d}</li>
          ))}
        </ul>
      </section>

      <section className="block" aria-labelledby="edu-h">
        <h2 id="edu-h">Education</h2>
        <dl className="pairs">
          <div><dt>B.S., Computer Science</dt><dd>Colorado State University, Aug 2025. GPA 3.23. Peer mentor 2024 to 2025.</dd></div>
          <div><dt>AMS Elementary I Credential</dt><dd>Montessori Education Center of the Rockies, 2020</dd></div>
          <div><dt>B.S., Health Science</dt><dd>Stephen F. Austin State University, Dec 2016. Community Health, minor in Psychology. Magna Cum Laude.</dd></div>
        </dl>
      </section>

      <section className="block" aria-labelledby="train-h">
        <h2 id="train-h">Training and honors</h2>
        <ul className="plain-list">
          <li>Grace Hopper Celebration scholarships, 2023 and 2024</li>
          <li>Outstanding Student Employee, Colorado State University, Fall 2023</li>
          <li>President's List, Fall 2015 and Fall 2016. Dean's List, Spring 2016.</li>
          <li>Who's Who Among Students in American Universities and Colleges, 2016</li>
        </ul>
      </section>
    </Deck>
  );
}
