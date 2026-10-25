import { Link } from "react-router-dom";
import Deck from "../components/Deck.jsx";
import Consult from "../components/Consult.jsx";

const SNAPS = [
  { src: "/images/seattle.jpg", h: 1067, cap: "Seattle, Rainier on a clear day", alt: "Seattle waterfront with a ferry at the dock, the stadiums behind it, and snow-covered Mount Rainier in the distance" },
  { src: "/images/peace.jpg", h: 1000, cap: "hi", alt: "Katie in a yellow beanie and glasses, squinting and flashing a peace sign" },
  { src: "/images/latte.jpg", h: 1067, cap: "good latte, good day", alt: "A latte in a white cup on a red saucer with a smiley face in the foam" },
  { src: "/images/needle.jpg", h: 1067, cap: "the Space Needle, through the trees", alt: "The Space Needle seen from below, framed by green trees and a blue sky" },
];

// One thread: teacher, then builder, then how the first shapes the second.
export default function About() {
  return (
    <Deck tapeId="about" title="About">
      <p className="lede">I spent eight years in classrooms before I built my first client site.</p>

      <div className="about-top">
        <figure className="photo" style={{ "--tilt": "2deg" }}>
          <img
            src="/images/desk.jpg"
            width="1000"
            height="750"
            alt="Katie working on a laptop in an armchair"
          />
          <figcaption>the desk</figcaption>
        </figure>
        <section className="block first" aria-labelledby="s1-h">
          <h2 id="s1-h">Where I started</h2>
          <p>From 2014 to 2022 I worked in Montessori schools in Texas and Colorado, first as an assistant and then as a lead guide for children in kindergarten through third grade. My first real look at Montessori was watching toddlers pour water into glass cups, set a table, and wash their own dishes. They were so little and so capable. I spent those years trying to honor that trust.</p>
        </section>
      </div>

      <div className="about-top flip">
        <section className="block first" aria-labelledby="s2-h">
          <h2 id="s2-h">How I got into websites</h2>
          <p>In March 2020 my co-teacher and I had to move a hands-on classroom onto a screen. We built a distance-learning program for more than 50 students, with handmade replicas of Montessori materials and virtual breakout rooms.</p>
          <p>What surprised me was how much I liked the building. I had edited MySpace HTML as a teenager, and friends who were software engineers told me I would be good at it. I started a computer science degree at Colorado State University in 2022, launched Katie Taylor Web Design that December, and graduated in August 2025.</p>
        </section>
        <figure className="photo" style={{ "--tilt": "-2.2deg" }}>
          <img
            src="/images/degrees.jpg"
            width="800"
            height="1000"
            alt="Katie standing on a lawn holding two bachelor's degrees and a Montessori teaching credential"
          />
          <figcaption>two bachelor's degrees and a teaching credential</figcaption>
        </figure>
      </div>

      <section className="block" aria-labelledby="s3-h">
        <h2 id="s3-h">What teaching taught me about building</h2>
        <ul className="plain-list">
          <li>I set a site up the way I used to set up a room, so a visitor can find what they need without asking anyone.</li>
          <li>I check in early and honestly, the way I did with families.</li>
          <li>I explain what I am doing in words anyone can follow.</li>
        </ul>
        <p>I live in Redmond, Washington, and work with clients remotely. Most are schools, nonprofits, and small organizations with small teams and no in-house tech person.</p>
        <p className="cta-row">
          <Consult>Book a free consult</Consult>
          <Link className="btn ghost" to="/resume">See my resume</Link>
        </p>
      </section>

      <section className="block" aria-labelledby="s4-h">
        <h2 id="s4-h">Snapshots</h2>
        <ul className="snaps">
          {SNAPS.map((s, i) => (
            <li key={s.src}>
              <figure className="photo" style={{ "--tilt": `${[-2, 1.8, 2.4, -1.6][i]}deg` }}>
                <img src={s.src} width="800" height={s.h} alt={s.alt} loading="lazy" />
                <figcaption>{s.cap}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </Deck>
  );
}
