import "./ExperienceItem.css";

import { formatDate, formatDuration } from "@/utils/date";

export interface ExperienceItemProps {
  company: string;
  description: React.ReactNode;
  end?: Date;
  image: {
    alt: string;
    url: string;
  };
  location: string;
  role?: string;
  start: Date;
}

export default function ExperienceItem(experience: ExperienceItemProps) {
  return (
    <div className="experience-item" key={experience.start.toISOString()}>
      <img alt={experience.image.alt} src={experience.image.url} />
      <div className="experience-content">
        <h3>
          {experience.role ? `${experience.role} - ` : null}
          {experience.company}
        </h3>
        <span className="experience-fade">
          {formatDate(experience.start)}
          {" - "}
          {experience.end ? formatDate(experience.end) : "Present"}
          {" • "}
          {formatDuration(experience.start, experience.end)}
        </span>
        <span className="experience-fade">{experience.location}</span>
        {typeof experience.description === "string" ? (
          <p>{experience.description}</p>
        ) : (
          experience.description
        )}
      </div>
    </div>
  );
}
