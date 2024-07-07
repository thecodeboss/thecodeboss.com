import { Link } from "react-router-dom";

import Project from "@/components/Project";
import {
  openSourceProjects,
  workProjects,
  iconAttributions,
} from "@/constants";
import "./Projects.css";

export default function Projects() {
  return (
    <main>
      <h2>Open-Source Projects</h2>
      <p>
        Below is a selection of open-source projects I've written. I've
        contributed to many more that aren't listed here, but you can find them
        on my{" "}
        <Link
          className="underline"
          target="_blank"
          to="https://github.com/thecodeboss"
        >
          GitHub
        </Link>
        .
      </p>
      <div className="project-container">
        {openSourceProjects.map(({ key, ...props }) => (
          <Project key={key} {...props} />
        ))}
      </div>
      <h2 className="mt-1">Work Projects</h2>
      <p>
        Below is a sample of meaningful projects I've worked on, some
        open-source and others private to their respective companies. If you're
        interested in more details about these projects or others not mentioned
        here, feel free to reach out.
      </p>
      <div className="project-container">
        {workProjects.map(({ key, ...props }) => (
          <Project key={key} {...props} />
        ))}
      </div>
      <h4 className="attributions-header">Icon Attributions</h4>
      <p className="small">
        Many of the icons used above were created by talented artists on
        Flaticon:
      </p>
      <div className="attributions">
        {iconAttributions.map(({ link, text }) => (
          <Link key={text} target="_blank" to={link}>
            {text}
          </Link>
        ))}
      </div>
    </main>
  );
}
