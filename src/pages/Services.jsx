import Deck from "../components/Deck.jsx";
import Consult from "../components/Consult.jsx";

// Reading order follows a client's questions: what do you do, have you done it,
// how does it work, what does it cost, what do you work in.
const DO = [
  ["Build", "A new site from the first conversation to launch: structure, design, the build, testing, and going live. I also set up hosting, your domain, and business email."],
  ["Rebuild", "Already have a site? I go through it page by page, tell you what is broken or confusing, and give you a written, priced plan before anything changes."],
  ["Maintain", "Updates, fixes, new pages, forms, and the everyday requests from your team. Small updates are usually done in two to five business days. I also write guides and train your staff so you can handle simple edits yourself."],
  ["Make it accessible", "Everything I build meets WCAG 2.1 AA and aims for AAA where the content allows. I can also bring an existing site up to standard: alt text, heading order, color contrast, keyboard navigation, and screen reader testing."],
];

const WORK = [
  ["Teacher training center", "WordPress, since 2022", "Ongoing care for a site with member logins and paid class registration. I built the registration page, fixed password emails that never arrived, and made accessibility fixes."],
  ["International education nonprofit", "Wix, 2026", "Audited the whole site and proposed a fixed-price cleanup followed by hourly upkeep."],
  ["Two university student-services sites", "2022 to 2025", "Brought both to WCAG 2.1, raised their accessibility scores 70%, and wrote guides so staff could update the sites themselves."],
  ["Plumbing company app", "HTML, CSS, React, 2025", "Built the front end for a 25-screen job management app, working with the backend engineer on the API."],
];

const ASKS = [
  "Are you looking for a rebrand, a new site from scratch, or updates to the site you have?",
  "Do you need your current site brought up to ADA and WCAG accessibility standards?",
  "What date do you need it finished by?",
  "Who will keep it up to date after launch?",
];

const FAQ = [
  ["Can you work on the site I already have?", "Yes. I work inside WordPress, Wix, Squarespace, and Shopify sites all the time, and I will tell you honestly whether a cleanup or a rebuild makes more sense."],
  ["What if I don't see my hosting platform or website builder on your list?", "The lists above are what I have used most, not the limit of what I can work in. If your site runs on something else, tell me during the free consult. With some advance notice I am glad to learn a new system before the work starts, and I will tell you up front how that affects the timeline."],
  ["What do you need from me?", "Access to your site and accounts, one person who can answer questions and approve work, and your content and feedback on time. You do not need to know anything technical."],
  ["What happens after launch?", "You can update the site yourself with the guides I write, hire me hourly when you need help, or use the monthly care plan."],
];

export default function Services() {
  return (
    <Deck tapeId="services" title="Services and pricing">
      <p className="lede">
        I build new sites, rebuild old ones, and keep them running. Everything I make is accessible
        from the start.
      </p>
      <p className="cta-row"><Consult>Book a free consult</Consult></p>

      <section className="block" aria-labelledby="do-h">
        <h2 id="do-h">What I do</h2>
        <dl className="defs">
          {DO.map(([t, d]) => (
            <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
          ))}
        </dl>
        <p className="note">Also available: SEO and analytics, online payments and donation forms, and custom web apps.</p>
      </section>

      <section className="block" aria-labelledby="work-h">
        <h2 id="work-h">Recent work</h2>
        <ul className="ledger">
          {WORK.map(([who, tag, p]) => (
            <li key={who}>
              <div className="who"><h3>{who}</h3><span className="tag">{tag}</span></div>
              <p>{p}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="block" aria-labelledby="how-h">
        <h2 id="how-h">How a project runs</h2>
        <ol className="steps">
          <li>
            <h3>Free consult</h3>
            <p>Thirty minutes. You tell me about your mission and what you want from the site, and I mostly listen. I will ask:</p>
            <ul className="asks">
              {ASKS.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </li>
          <li>
            <h3>Proposal</h3>
            <p>If you have a site, I audit it first. Then you get a written proposal with scope, price, and a timeline.</p>
          </li>
          <li>
            <h3>Build</h3>
            <p>A short agreement covers scope, price, and two rounds of revisions. You see mockups and working demos along the way, and I test on mobile, with a keyboard, and with screen readers such as NVDA, JAWS, and VoiceOver.</p>
          </li>
          <li>
            <h3>Launch and support</h3>
            <p>I launch the site, hand over guides, and stay available. You own what I build once the project is paid.</p>
          </li>
        </ol>
        <p className="note">A cleanup of a mid-sized site usually takes three to four weeks. For new builds, the proposal has a date.</p>
      </section>

      <section className="block" aria-labelledby="price-h">
        <h2 id="price-h">What it costs</h2>
        <div className="price">
          <div>
            <h3>Hourly</h3>
            <p className="amount">$55 <small>per hour</small></p>
            <p>Billed in 15 minute increments, no minimum. Best for maintenance and small changes.</p>
          </div>
          <div>
            <h3>Project bid</h3>
            <p className="amount">One price</p>
            <p>A fixed quote for a defined project. It may differ from what the hours would add up to. Hourly with a not-to-exceed cap is also an option.</p>
          </div>
          <div>
            <h3>Care plan</h3>
            <p className="amount">$165 <small>per month</small></p>
            <p>Up to three hours of fixes, edits, and small changes. Extra hours are billed hourly after you approve them.</p>
          </div>
        </div>
        <p className="note">The first consult is free.</p>
      </section>

      <section className="block" aria-labelledby="tools-h">
        <h2 id="tools-h">What I work in</h2>
        <dl className="defs">
          <div>
            <dt>Platforms</dt>
            <dd>WordPress, Wix, Squarespace, and Shopify. Already on one? I work inside it, so your team keeps the tools it knows.</dd>
          </div>
          <div>
            <dt>Built by hand</dt>
            <dd>
              <ul className="chips">
                {["HTML", "CSS", "JavaScript", "React", "Java", "Python", "PHP", "SQL", "C", "C++", "C#", "Ruby", "Angular", "Bootstrap", ".NET", "Node.js", "Flask"].map((s) => <li key={s}>{s}</li>)}
              </ul>
            </dd>
          </div>
          <div>
            <dt>Hosting</dt>
            <dd>I have set up IONOS, DreamHost, Bluehost, and Hostinger.</dd>
          </div>
        </dl>
      </section>

      <section className="block" aria-labelledby="faq-h">
        <h2 id="faq-h">Questions</h2>
        <dl className="defs">
          {FAQ.map(([q, a]) => (
            <div key={q}><dt>{q}</dt><dd>{a}</dd></div>
          ))}
        </dl>
      </section>

      <section className="block cta" aria-labelledby="go-h">
        <h2 id="go-h">Start with a free consult</h2>
        <p>Thirty minutes to talk through your site, your goals, and your vision.</p>
        <p className="cta-row"><Consult>Book a free consult</Consult></p>
      </section>
    </Deck>
  );
}
