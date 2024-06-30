import { Link } from "react-router-dom";

import "./Project.css";

export interface ProjectProps {
  description: string;
  imageAlt?: string;
  image?: {
    alt: string;
    url: string;
  };
  link?: string;
  title: string;
}

export default function Project({
  description,
  image,
  link,
  title,
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
      {link ? (
        <Link to={link} target="_blank">
          <i className="fa-solid fa-arrow-up-right-from-square" />
          &nbsp;
          {new URL(link).hostname}
        </Link>
      ) : (
        <span>(Private)</span>
      )}
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
