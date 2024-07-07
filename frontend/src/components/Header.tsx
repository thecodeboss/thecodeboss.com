import Nav from "@/components/Nav";

import "./Header.css";

export default function Header() {
  return (
    <header>
      <h3>thecodeboss</h3>
      <Nav />
      <div className="light-dark-toggle"></div>
    </header>
  );
}
