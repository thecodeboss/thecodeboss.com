import { Link } from "react-router-dom";

import "./Contact.css";

export default function Contact() {
  return (
    <main>
      <h1>Places you can reach me</h1>
      <ul className="contact">
        <li>
          <i className="fa-solid fa-envelope"></i> Email: michael @ this domain
        </li>
        <li>
          <Link
            className="underline"
            target="_blank"
            to="https://github.com/thecodeboss"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            target="_blank"
            to="https://linkedin.com/in/thecodeboss"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            target="_blank"
            to="https://stackoverflow.com/users/1935971/michael-oliver"
          >
            Stack Overflow
          </Link>
        </li>
      </ul>
    </main>
  );
}
