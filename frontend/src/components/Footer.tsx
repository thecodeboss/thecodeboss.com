import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <Link target="_blank" to="https://github.com/thecodeboss">
        <i className="fa-brands fa-github fa-lg" />
        &nbsp; GitHub
      </Link>
      <Link target="_blank" to="https://linkedin.com/in/thecodeboss">
        <i className="fa-brands fa-linkedin fa-lg" />
        &nbsp; LinkedIn
      </Link>
      <Link
        target="_blank"
        to="https://stackoverflow.com/users/1935971/michael-oliver"
      >
        <i className="fa-brands fa-stack-overflow" />
        &nbsp; Stack Overflow
      </Link>
    </footer>
  );
}
