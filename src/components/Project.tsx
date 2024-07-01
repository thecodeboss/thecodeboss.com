import { Link } from "react-router-dom";

import "./Project.css";

export interface ProjectProps {
  description: React.ReactNode;
  imageAlt?: string;
  image?: {
    alt: string;
    url: string;
  };
  link?: string;
  title: string;
  year: number;
}

export default function Project({
  description,
  image,
  link,
  title,
  year,
}: ProjectProps) {
  const content = (
    <>
      <div className="project-header">
        <img
          alt={image?.alt ?? "Project image"}
          src={image?.url ?? "https://placehold.co/50x50/000/FFF"}
        />
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
