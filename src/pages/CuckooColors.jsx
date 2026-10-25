import Deck from "../components/Deck.jsx";

const NewTab = () => <span className="visually-hidden"> (opens in a new tab)</span>;

const REPO = "https://github.com/katietay/cuckoo-colors";
// The app is uploaded to this same site, in its own folder.
const APP = "/colors/";

const TEAM = [
  { name: "Sophia Lopez", url: "https://github.com/elsophia04", handle: "@elsophia04" },
  { name: "Katie Taylor", url: "https://github.com/katietay", handle: "@katietay" },
  { name: "Adam", url: "https://github.com/AdoApplescider", handle: "@AdoApplescider" },
  { name: "Torria", url: "https://github.com/torriac", handle: "@torriac" },
];

export default function CuckooColors() {
  return (
    <Deck tapeId="portfolio" title="Cuckoo Colors" kicker="Project demo">
      <p className="lede">
        Cuckoo Colors makes color coordinate activities: a printable grid that students paint cell
        by cell with a chosen set of colors. It has keyboard support, labelled controls, high
        contrast and a print layout.
      </p>

      <p className="proj-actions">
        <a className="btn" href={APP} target="_blank" rel="noreferrer">
          <span aria-hidden="true">Launch the app</span>
          <span className="visually-hidden">Launch Cuckoo Colors</span>
          <NewTab />
        </a>
        <a className="btn ghost" href={REPO} target="_blank" rel="noreferrer">
          <span aria-hidden="true">View on GitHub</span>
          <span className="visually-hidden">View Cuckoo Colors on GitHub</span>
          <NewTab />
        </a>
      </p>

      <h2>Built with</h2>
      <ul className="chips" aria-label="Built with">
        <li>Angular 20</li>
        <li>TypeScript</li>
        <li>PHP</li>
        <li>MySQL</li>
        <li>Karma and Jasmine</li>
        <li>GitHub Actions</li>
      </ul>

      <h2>What changed since the course</h2>
      <p>
        This started as a four-person project for CS 312, Modern Web Development, at Colorado State
        University (Spring 2025). I have since moved it to its own database, added server-side
        validation, rate limiting and a content security policy, fixed several bugs, and added
        automated tests.
      </p>

      <h2>Credits</h2>
      <p>CS 312 Team 28:</p>
      <ul>
        {TEAM.map((m) => (
          <li key={m.handle}>
            {m.name} (<a href={m.url} target="_blank" rel="noreferrer">{m.handle}<NewTab /></a>)
          </li>
        ))}
      </ul>
      <p>
        <small>
          Shared for portfolio reference only. Please do not reuse this code for coursework.
        </small>
      </p>
    </Deck>
  );
}
