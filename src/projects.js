// Code projects shown on /portfolio. No client work is listed here.
//
// repo:        GitHub URL, or null if there is no public repo yet
// repoPrivate: true shows "private for now" instead of a link. Flip to false
//              (or delete it) once the repo is public.
// launch:      URL that opens the running project, or null until it exists.
//              Add the link here and the "Launch" button turns on.
// TODO markers are details only Katie can fill in.
export const PROJECTS = [
  {
    slug: "knightowlchess",
    title: "KnightOwlChess",
    kind: "Open-source app, in development",
    year: "2026 to present",
    summary:
      "An open-source chess app with the goal of being the most accessible chess game available. It has color contrast options for every type of color vision impairment, scaffolded difficulty levels with a handicap system, and screen reader compatibility tests. Support for adaptive switch controllers is in progress.",
    stack: ["Stockfish", "Supabase", "Vercel", "GPL-3.0"],
    repo: "https://github.com/katietay/Knight-Owl-Chess",
    repoPrivate: true, // not ready yet: set to false when the repo goes public
    launch: null,
  },
  {
    slug: "color-coordinate-generator",
    title: "Color Coordinate Generator",
    kind: "CS 312 team project",
    year: "Spring 2025",
    summary:
      "A print-friendly web app for making vision therapy activity sheets, built for accessibility compliance. Created by a four-person team for CSU's Modern Web Development course.",
    stack: ["Angular", "MySQL"],
    repo: "https://github.com/katietay/cuckoo-colors",
    launch: "/cuckoo-colors",
  },
  {
    slug: "project-management-system",
    title: "Project Management System",
    kind: "Class team project",
    year: "CSU",
    summary:
      "A project management web app with a Java back end and a React front end, covered by unit testing and mutation analysis.",
    stack: ["Java", "React", "JavaScript"],
    repo: "https://github.com/katietay/company-management",
    launch: null, // TODO: demo page on this site
  },
  {
    slug: "autonomous-terrain-navigation",
    title: "Autonomous Terrain Navigation System",
    kind: "NASA/USDA/CSU Hackathon",
    year: "2025",
    summary:
      "A rover simulation for search and rescue in forest and lunar terrain. It finds routes with a custom A* pathfinder that treats higher elevation as higher resistance, and trees and rocks can be added or removed while it runs.",
    stack: ["Python", "Pygame", "NumPy", "Pillow"],
    repo: "https://github.com/katietay/Autonomous-Terrain-Navigation-System",
    repoPrivate: true, // set to false once the repo is public
    launch: false, // hackathon code, GitHub only
  },
  {
    slug: "meat-grading-cnn",
    title: "Meat Grading Convolutional Neural Network",
    kind: "USDA/CSU Hackathon",
    year: "2024",
    summary:
      "A convolutional neural network that grades beef quality from images. It uses stratified k-fold cross-validation and exports results to CSV.",
    stack: ["Python", "PyTorch", "DeepLab"],
    repo: "https://github.com/katietay/Meat-Grading-Convolutional-Neural-Network",
    launch: false, // hackathon code, GitHub only
  },
  {
    slug: "mobile-first-tour-optimizer",
    title: "Mobile First Tour Optimizer",
    kind: "Project",
    year: "", // TODO
    summary: "A mobile-first tour optimizer.", // TODO: one or two sentences
    stack: [], // TODO
    repo: "https://github.com/katietay/Mobile-First-Tour-Optimizer",
    launch: null,
  },
  {
    slug: "text-rpg-simulator",
    title: "Text-Based RPG Store and Inventory Simulator",
    kind: "Project",
    year: "", // TODO
    summary: "A text-based RPG store and inventory simulator.", // TODO: one or two sentences
    stack: [], // TODO
    repo: "https://github.com/katietay/Text-Based-RPG-Store-and-Inventory-Simulator",
    launch: null,
  },
];
