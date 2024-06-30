import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <Link to="https://github.com/thecodeboss">
        <i className="fa-brands fa-github fa-lg" />
        &nbsp; GitHub
      </Link>
      <Link to="https://linkedin.com/in/thecodeboss">
        <i className="fa-brands fa-linkedin fa-lg" />
        &nbsp; LinkedIn
      </Link>
      <Link to="https://www.instagram.com/mikethemo">
        <i className="fa-brands fa-instagram fa-lg" />
        &nbsp; Instagram
      </Link>
    </footer>
  );
}
