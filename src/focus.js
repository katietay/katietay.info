import { useEffect } from "react";

// Called by each page when it mounts. On every page after the first,
// move keyboard and screen reader focus to the new <main> and scroll to top,
// so people hear that the page changed (WCAG 2.4.3, 4.1.3).
// Runs on mount rather than on the route change, because the old page is
// still animating out when the URL changes.
let firstLoad = true;

export function useRouteFocus() {
  useEffect(() => {
    if (firstLoad) {
      firstLoad = false;
      return;
    }
    window.scrollTo(0, 0);
    const main = document.getElementById("main");
    if (main) {
      main.setAttribute("tabindex", "-1");
      main.focus({ preventScroll: true });
    }
  }, []);
}
