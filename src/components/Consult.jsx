import { CALENDLY } from "../tapes.js";

// The one booking link used across the site. Opens Calendly in a new tab.
export default function Consult({ children = "Book a free consult", className = "btn" }) {
  return (
    <a className={className} href={CALENDLY} target="_blank" rel="noreferrer">
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
