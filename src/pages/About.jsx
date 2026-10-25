import { Link } from "react-router-dom";
import Deck from "../components/Deck.jsx";
import Consult from "../components/Consult.jsx";

const SNAPS = [
  { src: "/images/desk.jpg", h: 600, cap: "the desk", alt: "Katie working on a laptop in an armchair" },
  { src: "/images/seattle.jpg", h: 1067, cap: "Seattle, Rainier on a clear day", alt: "Seattle waterfront with a ferry at the dock, the stadiums behind it, and snow-covered Mount Rainier in the distance" },
  { src: "/images/peace.jpg", h: 1000, cap: "hi", alt: "Katie in a yellow beanie and glasses, squinting and flashing a peace sign" },
  { src: "/images/latte.jpg", h: 1067, cap: "good latte, good day", alt: "A latte in a white cup on a red saucer with a smiley face in the foam" },
  { src: "/images/needle.jpg", h: 1067, cap: "the Space Needle, through the trees", alt: "The Space Needle seen from below, framed by green trees and a blue sky" },
];

const BOARDS = [
  { src: "/images/whiteboard-trees.jpg", h: 460, cap: "expression trees: prefix, infix and postfix", alt: "Whiteboard with a hand-drawn expression tree for (a+b)*c+7, and the same expression written three ways: prefix, infix and postfix" },
  { src: "/images/whiteboard-grid.jpg", h: 556, cap: "walking a grid with nested loops", alt: "Whiteboard with a grid of rows and columns, a nested for loop that checks array cells, and notes on checking cells in a line" },
  { src: "/images/whiteboard-steps.jpg", h: 624, cap: "a classroom joke I kept", alt: "Whiteboard reading: 3 steps to being a good programmer. 1) avoid recursion 2) repeat steps 1 and 2 3) always have an exit condition 4) beware of being off by one" },
];

// One thread: teacher, then builder, then how the first shapes the second.
export default function About() {
  return (
    <Deck tapeId="about" title="About">
      <p className="lede">I spent eight years in classrooms before I built my first client site.</p>

      <section className="block first" aria-labelledby="s0-h">
        <h2 id="s0-h">Where I grew up</h2>
        <p>I grew up in rural East Texas in a large family, connected to nature and to community. Looking after each other and paying attention to the people and places around us was part of everyday life, not something we had to be taught. Those values stuck with me for the rest of my life.</p>
        <p>They are a big part of why Montessori made sense to me when I found it, and why I still like working with small organizations, where the people are close and the work is for someone they can name.</p>
      </section>

      <div className="about-top">
        <figure className="photo" style={{ "--tilt": "2deg" }}>
          <img
            src="/images/bridge.jpg"
            width="800"
            height="1000"
            alt="A wooden footbridge with rust-red railings curving through trees with green and early autumn leaves, fallen leaves on the boards and shadows across the deck"
          />
          <figcaption>a walk worth taking</figcaption>
        </figure>
        <section className="block first" aria-labelledby="s1-h">
          <h2 id="s1-h">Where I started</h2>
          <p>From 2015 to 2022 I worked in Montessori schools in Texas and Colorado, first as an assistant and then as a lead guide for children in kindergarten through third grade. My first real look at Montessori was watching toddlers pour water into glass cups, set a table, and wash their own dishes. They were so little and so capable. I spent those years trying to honor that trust.</p>
        </section>
      </div>

      <div className="about-top flip">
        <section className="block first" aria-labelledby="s1b-h">
          <h2 id="s1b-h">Training at MECR</h2>
          <p>I earned my AMS Elementary I credential in 2020 through the Montessori Education Center of the Rockies (MECR). Training meant learning every material by hand: practicing each lesson, building the sequences, and understanding why each one is shaped the way it is. These towers are from that time.</p>
        </section>
        <figure className="photo" style={{ "--tilt": "-1.6deg" }}>
          <img
            src="/images/towers.jpg"
            width="800"
            height="1067"
            alt="A pink wooden tower of graduated cubes standing next to a tower of stacked, colored bead cubes on a woven mat on a low wooden table"
            loading="lazy"
          />
          <figcaption>towers from training</figcaption>
        </figure>
      </div>

      <figure className="photo group" style={{ "--tilt": "1.2deg" }}>
        <img
          src="/images/cohort.jpg"
          width="1000"
          height="750"
          alt="My MECR training cohort, about twenty people in two rows, wearing colorful scarves and smiling in a classroom"
          loading="lazy"
        />
        <figcaption>my MECR training cohort</figcaption>
      </figure>

      <div className="about-top">
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
        <section className="block first" aria-labelledby="s2b-h">
          <h2 id="s2b-h">The classroom I left</h2>
          <p>This is my classroom from my last year of teaching, with hands-on materials on low shelves, plants, and a globe within reach. Every shelf was set up so a child could choose work, carry it to a table and put it back without asking for help.</p>
          <p>I took that way of working with me. Watch what people actually do, remove what gets in the way, and build the space so they can do it themselves.</p>
        </section>
      </div>

      <div className="about-top flip">
        <section className="block first" aria-labelledby="s2-h">
          <h2 id="s2-h">How I got into websites</h2>
          <p>In March 2020 my co-teacher and I had to move a hands-on classroom onto a screen. We built a distance-learning program for more than 50 students, with handmade replicas of Montessori materials and virtual breakout rooms.</p>
          <p>What surprised me was how much I liked the building. Friends who were software engineers told me I would be good at it. I started a computer science degree at Colorado State University in 2022, launched Katie Taylor Web Design that December, and graduated in August 2025.</p>
          <p>Those three years were full. I worked as a web developer for Off-Campus Life, coordinated food operations for RamRide, and ran my own business, all while taking classes. It taught me to scope work honestly and to keep every project moving without letting anything drop.</p>
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

      <section className="block" aria-labelledby="s2c-h">
        <h2 id="s2c-h">Back in school, on the other side of the desk</h2>
        <p>Studying computer science at Colorado State meant being a beginner again after years of being the one with the answers. These are a few of the whiteboards from that time: expression trees, grids and nested loops, and a joke about recursion that stuck with me.</p>
        <ul className="snaps boards scrap">
          {BOARDS.map((b, i) => (
            <li key={b.src}>
              <figure className="photo" style={{ "--tilt": `${[-1.8, 1.5, -1.2][i]}deg` }}>
                <img src={b.src} width="1000" height={b.h} alt={b.alt} loading="lazy" />
                <figcaption>{b.cap}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section className="block" aria-labelledby="s3-h">
        <h2 id="s3-h">What teaching taught me about building</h2>
        <ul className="plain-list">
          <li>I set a site up the way I used to set up a room, so a visitor can find what they need without asking anyone.</li>
          <li>I check in early and honestly, the way I did with families.</li>
          <li>I explain what I am doing in words anyone can follow.</li>
        </ul>
        <p>Accessibility is where that shows up most. I build to WCAG 2.1 AA and aim higher where I can, because a site that only works for some people is not finished. Keyboard navigation, readable contrast, real headings and honest alt text are part of how I build, not extras I add at the end.</p>
        <p>I live in Redmond, Washington, and work with clients remotely. Most are schools, nonprofits, and small organizations with small teams and no in-house tech person.</p>
        <p className="cta-row">
          <Consult>Book a free consult</Consult>
          <Link className="btn ghost" to="/resume">See my resume</Link>
        </p>
      </section>

      <section className="block" aria-labelledby="s5-h">
        <h2 id="s5-h">What I build for fun</h2>
        <p>Outside client work I build things I wish existed. KnightOwlChess is an open-source chess app designed around accessibility. I am also learning Blender for 3D modeling, and when I need a break from screens I cook.</p>
        <p>If you have a project you are not sure how to start, I am happy to talk it through.</p>
      </section>

      <section className="block" aria-labelledby="s4-h">
        <h2 id="s4-h">Snapshots</h2>
        <ul className="snaps scrap">
          {SNAPS.map((s, i) => (
            <li key={s.src}>
              <figure className="photo" style={{ "--tilt": `${[-2, 1.8, 2.4, -1.6, 1.4][i]}deg` }}>
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
