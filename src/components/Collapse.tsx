import { useState } from "react";

import "./Collapse.css";

interface CollapseProps {
  children: React.ReactNode;
  label: React.ReactNode;
}

export default function Collapse({ children, label }: CollapseProps) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div className={`collapse ${expanded ? "collapse-expanded" : ""}`}>
      <div className="collapse-header" onClick={toggleExpanded}>
        <div className="collapse-icon">&rsaquo;</div>
        <span className="collapse-header-text">{label}</span>
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  );
}
