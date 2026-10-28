import { Link } from "react-router-dom";
import Deck from "../components/Deck.jsx";
import Consult from "../components/Consult.jsx";

export default function About() {
  return (
    <Deck tapeId="about" title="About">
      <p className="lede">
        I design, build, and look after websites for schools, nonprofits, and small businesses. I
        spent eight years teaching before I wrote code for a living, and it still shapes how I work.
      </p>

      <div className="about-top">
        <figure className="photo" style={{ "--tilt": "-2deg" }}>
          <img
            src="/images/desk.jpg"
            width="800"
            height="1067"
            alt="Katie in glasses and an orange top, leaning back in a gray armchair with a laptop on her lap, taking a selfie"
          />
          <figcaption>working from home in Redmond, WA</figcaption>
        </figure>
        <section className="block first" aria-labelledby="s1-h">
          <h2 id="s1-h">Hi, I'm Katie</h2>
          <p>
            I run Katie Taylor Web Design from Redmond, Washington. I started it in December 2022,
            and I graduated from Colorado State University in August 2025 with a B.S. in Computer
            Science. I also hold a B.S. in Health Science.
          </p>
          <p>
            Most of my clients are organizations with small teams and no in-house tech person. I
            work in WordPress, Wix, and custom code, and I pick whichever fits your budget and the
            person who will maintain the site after I hand it over.
          </p>
        </section>
      </div>

      <div className="about-top flip">
        <section className="block first" aria-labelledby="s2-h">
          <h2 id="s2-h">Before websites, classrooms</h2>
          <p>
            From 2015 to 2022 I worked in Montessori schools in Texas and Colorado, first as an
            assistant and then as a lead guide for children in kindergarten through third grade. I
            hold an AMS Elementary I credential.
          </p>
          <p>
            When schools closed in March 2020, my co-teacher and I moved a hands-on classroom online
            for more than 50 students. Building that program is when I realized I liked building
            more than I expected.
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
        <h2 id="s3-h">What working together looks like</h2>
        <ul className="plain-list">
          <li><strong>Accessible from the start.</strong> I build to WCAG 2.1 AA. Keyboard use, contrast, headings and alt text are part of the build, not a patch at the end.</li>
          <li><strong>Plain language.</strong> I explain what I am doing and why, and I tell you early if something is going to take longer or cost more.</li>
          <li><strong>A first conversation, not a pitch.</strong> We start with a 30-minute call about your mission and what you want the site to do.</li>
        </ul>
        <p className="cta-row">
          <Consult>Book a free consult</Consult>
          <Link className="btn ghost" to="/services">Services and pricing</Link>
          <Link className="btn ghost" to="/resume">See my resume</Link>
        </p>
        <p>
          Follow along on{" "}
          <a href="https://www.instagram.com/katietaylorwebdesign/" target="_blank" rel="noreferrer">
            Instagram @katietaylorwebdesign<span className="visually-hidden"> (opens in a new tab)</span>
          </a>.
        </p>
      </section>
    </Deck>
  );
}
