import { Link } from "react-router-dom";

import "./Project.css";

export interface ProjectProps {
  description: React.ReactNode;
  faIcon?: string;
  imageAlt?: string;
  image?: {
    alt: string;
    round?: boolean;
    url: string;
  };
  link?: string;
  title: string;
  year: number;
}

export default function Project({
  description,
  faIcon,
  image,
  link,
  title,
  year,
}: ProjectProps) {
  const content = (
    <>
      <div className="project-header">
        <div className="project-image-container">
          {faIcon ? (
            <i className={`fa-solid fa-${faIcon}`} />
          ) : (
            <img
              alt={image?.alt ?? "Project image"}
              className={image?.round ? "round" : undefined}
              src={image?.url ?? "https://placehold.co/50x50/000/FFF"}
            />
          )}
        </div>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
      <div className="project-footer">
        {link ? (
          <span className="link">
            <i className="fa-solid fa-arrow-up-right-from-square" />
            &nbsp;
            {new URL(link).hostname}
          </span>
        ) : (
          <span>(Private)</span>
        )}
        <span>{year}</span>
      </div>
    </>
  );

  return link ? (
    <Link className="project" to={link} target="_blank">
      {content}
    </Link>
  ) : (
    <div className="project">{content}</div>
  );
}
