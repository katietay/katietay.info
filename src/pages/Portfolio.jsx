import { Link } from "react-router-dom";
import Deck from "../components/Deck.jsx";
import { PROJECTS } from "../projects.js";

const NewTab = () => <span className="visually-hidden"> (opens in a new tab)</span>;

function Actions({ p }) {
  return (
    <div className="proj-actions">
      {p.repo && !p.repoPrivate && (
        <a className="btn ghost" href={p.repo} target="_blank" rel="noreferrer">
          <span aria-hidden="true">View on GitHub</span>
          <span className="visually-hidden">View {p.title} on GitHub</span>
          <NewTab />
        </a>
      )}
      {p.repo && p.repoPrivate && <span className="btn-note">Repository is private for now</span>}
      {!p.repo && <span className="btn-note">Repository coming soon</span>}
      {p.launch && p.launch.startsWith("/") ? (
        <Link className="btn" to={p.launch}>
          <span aria-hidden="true">Launch project</span>
          <span className="visually-hidden">Launch {p.title}</span>
        </Link>
      ) : p.launch ? (
        <a className="btn" href={p.launch} target="_blank" rel="noreferrer">
          <span aria-hidden="true">Launch project</span>
          <span className="visually-hidden">Launch {p.title}</span>
          <NewTab />
        </a>
      ) : p.launch === false ? null : (
        <span className="btn-note">Launch coming soon</span>
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <Deck tapeId="portfolio">
      <p className="lede">
        Projects from classes, hackathons, and my own time. Each one links to its code, and the ones
        that run in a browser launch from here.
      </p>
      <ul className="projects">
        {PROJECTS.map((p) => (
          <li key={p.slug}>
            <article className="project" aria-labelledby={`p-${p.slug}`}>
              <h2 id={`p-${p.slug}`}>{p.title}</h2>
              <p className="meta">{[p.kind, p.year].filter(Boolean).join(" · ")}</p>
              <p>{p.summary}</p>
              {p.stack.length > 0 && (
                <ul className="chips small" aria-label="Built with">
                  {p.stack.map((s) => <li key={s}>{s}</li>)}
                </ul>
              )}
              <Actions p={p} />
            </article>
          </li>
        ))}
      </ul>
    </Deck>
  );
}
