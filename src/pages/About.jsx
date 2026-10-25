import { Link } from "react-router-dom";
import Deck from "../components/Deck.jsx";
import Consult from "../components/Consult.jsx";

const SNAPS = [
  { src: "/images/canyon.jpg", h: 1067, cap: "sunset at the Grand Canyon", alt: "Sunset over the Grand Canyon, with pink and orange clouds above layered rock and dry shrubs in the foreground" },
  { src: "/images/peace.jpg", h: 1000, cap: "hi", alt: "Katie in a yellow beanie and glasses, squinting and flashing a peace sign" },
  { src: "/images/seattle.jpg", h: 1067, cap: "Seattle, Rainier on a clear day", alt: "Seattle waterfront with a ferry at the dock, the stadiums behind it, and snow-covered Mount Rainier in the distance" },
];

// One thread: where I come from, teaching, building, and how the first shapes the second.
export default function About() {
  return (
    <Deck tapeId="about" title="About">
      <p className="lede">I spent eight years in classrooms before I built my first client site.</p>

      <div className="about-top">
        <figure className="photo" style={{ "--tilt": "-2deg" }}>
          <img
            src="/images/couch.jpg"
            width="604"
            height="583"
            alt="Six children piled together on a brown couch in front of a Christmas tree, smiling, with arms around each other"
          />
          <figcaption>the couch</figcaption>
        </figure>
        <section className="block first" aria-labelledby="s1-h">
          <h2 id="s1-h">Where I started</h2>
          <p>I grew up in rural East Texas in a large, tight-knit family, connected to nature and to community. We went camping a lot, played in the creek, and played games together, and I was homeschooled until fifth grade. Looking after each other and paying attention to the people and places around us was part of everyday life. Those values stuck with me for the rest of my life.</p>
        </section>
      </div>

      <div className="about-top flip">
        <section className="block first" aria-labelledby="s2-h">
          <h2 id="s2-h">Eight years in the classroom</h2>
          <p>From 2015 to 2022 I worked in Montessori schools in Texas and Colorado, first as an assistant and then as a lead guide for children in kindergarten through third grade. I earned my AMS Elementary I credential in 2020 through the Montessori Education Center of the Rockies.</p>
          <p>My first real look at Montessori was watching toddlers pour water into glass cups, set a table, and wash their own dishes. They were so little and so capable. I spent those years trying to honor that trust.</p>
        </section>
        <div className="photo-stack">
          <figure className="photo" style={{ "--tilt": "1.8deg" }}>
            <img
              src="/images/classroom.jpg"
              width="1000"
              height="750"
              alt="Katie, in a black mask and brown glasses with green hair, taking a selfie in her Montessori classroom, with wooden shelves, plants, globes and a peach wall behind her"
              loading="lazy"
            />
            <figcaption>my classroom, my last year teaching</figcaption>
          </figure>
          <figure className="photo" style={{ "--tilt": "-1.4deg" }}>
            <img
              src="/images/cohort.jpg"
              width="1000"
              height="750"
              alt="My MECR training cohort, about twenty people in two rows, wearing colorful scarves and smiling in a classroom"
              loading="lazy"
            />
            <figcaption>my MECR training cohort</figcaption>
          </figure>
        </div>
      </div>

      <div className="about-top">
        <div className="photo-stack">
          <figure className="photo" style={{ "--tilt": "-2.2deg" }}>
            <img
              src="/images/degrees.jpg"
              width="800"
              height="1000"
              alt="Katie standing on a lawn holding two bachelor's degrees and a Montessori teaching credential"
              loading="lazy"
            />
            <figcaption>two bachelor's degrees and a teaching credential</figcaption>
          </figure>
          <figure className="photo" style={{ "--tilt": "1.6deg" }}>
            <img
              src="/images/whiteboard-steps.jpg"
              width="900"
              height="624"
              alt="Whiteboard reading: 3 steps to being a good programmer. 1) avoid recursion 2) repeat steps 1 and 2 3) always have an exit condition 4) beware of being off by one"
              loading="lazy"
            />
            <figcaption>a joke from my CS classes</figcaption>
          </figure>
        </div>
        <section className="block first" aria-labelledby="s3-h">
          <h2 id="s3-h">How I got into websites</h2>
          <p>In March 2020 my co-teacher and I had to move a hands-on classroom onto a screen. We built a distance-learning program for more than 50 students, with handmade replicas of Montessori materials and virtual breakout rooms.</p>
          <p>What surprised me was how much I liked the building. Friends who were software engineers told me I would be good at it. I started a computer science degree at Colorado State University in 2022, launched Katie Taylor Web Design that December, and graduated in August 2025.</p>
          <p>Those three years were full. I worked as a web developer for Off-Campus Life, coordinated food operations for RamRide, and ran my own business, all while taking classes.</p>
        </section>
      </div>

      <section className="block" aria-labelledby="s4-h">
        <h2 id="s4-h">How I work</h2>
        <ul className="plain-list">
          <li>I set a site up the way I used to set up a room, so a visitor can find what they need without asking anyone.</li>
          <li>I check in early and honestly, the way I did with families.</li>
          <li>I explain what I am doing in words anyone can follow.</li>
        </ul>
        <p>Accessibility is where that shows up most. I build to WCAG 2.1 AA and aim higher where I can, because a site that only works for some people is not finished.</p>
        <p>I live in Redmond, Washington, and work with clients remotely. Most are schools, nonprofits, and small organizations with small teams and no in-house tech person.</p>
        <p className="cta-row">
          <Consult>Book a free consult</Consult>
          <Link className="btn ghost" to="/resume">See my resume</Link>
        </p>
      </section>

      <div className="about-top flip">
        <section className="block first" aria-labelledby="s5-h">
          <h2 id="s5-h">Outside of work</h2>
          <p>I spend as much time outdoors as I can. I also read, play roller derby and dodgeball, spend time with friends, and make new things, from software like KnightOwlChess, an open-source chess app built around accessibility, to 3D models in Blender.</p>
        </section>
        <figure className="photo" style={{ "--tilt": "1.8deg" }}>
          <img
            src="/images/breckenridge.jpg"
            width="900"
            height="716"
            alt="A turquoise lake below snow-dusted mountains under big clouds, framed by pine trees"
            loading="lazy"
          />
          <figcaption>Breckenridge</figcaption>
        </figure>
      </div>

      <ul className="snaps scrap" aria-label="Snapshots">
        {SNAPS.map((s, i) => (
          <li key={s.src}>
            <figure className="photo" style={{ "--tilt": `${[-2, 1.8, 2.4][i]}deg` }}>
              <img src={s.src} width="800" height={s.h} alt={s.alt} loading="lazy" />
              <figcaption>{s.cap}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Deck>
  );
}
