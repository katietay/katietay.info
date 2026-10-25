import { Link } from "react-router-dom";
import Deck from "../components/Deck.jsx";
import Consult from "../components/Consult.jsx";

export default function About() {
  return (
    <Deck tapeId="about" title="About">
      <p className="lede">
        I build accessible websites for schools, nonprofits, and small organizations. Before that, I
        spent eight years teaching in Montessori classrooms.
      </p>

      <div className="about-top">
        <figure className="photo" style={{ "--tilt": "-2deg" }}>
          <img
            src="/images/degrees.jpg"
            width="800"
            height="1000"
            alt="Katie standing on a lawn holding two bachelor's degrees and a Montessori teaching credential"
          />
          <figcaption>two bachelor's degrees and a teaching credential</figcaption>
        </figure>
        <section className="block first" aria-labelledby="s1-h">
          <h2 id="s1-h">Background</h2>
          <p>
            Katie Taylor Web Design is a one-person studio based in Redmond, Washington. I hold a B.S. in
            Computer Science from Colorado State University (2025) and a B.S. in Health Science, and I
            started the business in December 2022 while finishing my degree.
          </p>
          <p>
            My path into web work started in the classroom. Most of my clients are organizations like the
            ones I used to work in: small teams, limited budgets, and no in-house tech person.
          </p>
        </section>
      </div>

      <div className="about-top flip">
        <section className="block first" aria-labelledby="s2-h">
          <h2 id="s2-h">Eight years in education</h2>
          <p>
            From 2015 to 2022 I worked in Montessori schools in Texas and Colorado, first as an assistant
            and then as a lead guide for children in kindergarten through third grade. I hold an AMS
            Elementary I credential, earned in 2020 through the Montessori Education Center of the Rockies.
          </p>
          <p>
            In March 2020 my co-teacher and I moved a hands-on classroom online. We built a
            distance-learning program for more than 50 students, with handmade replicas of Montessori
            materials and virtual breakout rooms. That project is where I found out how much I enjoy
            building things that other people rely on.
          </p>
        </section>
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
      </div>

      <section className="block" aria-labelledby="s3-h">
        <h2 id="s3-h">Web design and development</h2>
        <p>
          I began studying computer science at Colorado State University in 2022 and graduated in August
          2025. During that time I worked as a web developer for Off-Campus Life while running my own
          client work. I build sites in WordPress, Wix, and custom code, and I choose the tool that fits
          the organization's budget and the person who will maintain the site.
        </p>
      </section>

      <section className="block" aria-labelledby="s4-h">
        <h2 id="s4-h">How I work</h2>
        <ul className="plain-list">
          <li>
            <strong>Accessible by default.</strong> I build to WCAG 2.1 AA and aim higher where I can.
            Keyboard navigation, readable contrast, real headings and honest alt text are part of the
            build, not extras.
          </li>
          <li>
            <strong>Clear communication.</strong> I check in early and often, explain what I am doing in
            plain language, and tell you about problems when I find them.
          </li>
          <li>
            <strong>Easy to hand off.</strong> I set a site up the way I used to set up a classroom, so a
            visitor can find what they need and your team can keep it running.
          </li>
          <li>
            <strong>Remote and flexible.</strong> I work with clients remotely and keep communication simple.
          </li>
        </ul>
        <p className="cta-row">
          <Consult>Book a free consult</Consult>
          <Link className="btn ghost" to="/services">See services and pricing</Link>
          <Link className="btn ghost" to="/resume">See my resume</Link>
        </p>
      </section>
    </Deck>
  );
}
