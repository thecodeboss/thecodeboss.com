import "./ExperienceItem.css";

import { formatDate, formatDuration } from "@/utils/date";

export interface ExperienceItemProps {
  company: string;
  description: React.ReactNode;
  end?: Date;
  image: {
    alt: string;
    round?: boolean;
    url: string;
  };
  location: React.ReactNode;
  role?: string;
  start?: Date;
}

export default function ExperienceItem(experience: ExperienceItemProps) {
  return (
    <div
      className="experience-item"
      key={
        experience.start?.toISOString() || experience.description?.toString()
      }
    >
      <img
        alt={experience.image.alt}
        className={experience.image?.round ? "round" : undefined}
        src={experience.image.url}
      />
      <div className="experience-content">
        <h3>
          {experience.role ? `${experience.role} - ` : null}
          {experience.company}
        </h3>
        {experience.start && (
          <span className="experience-fade">
            {formatDate(experience.start)}
            {" - "}
            {experience.end ? formatDate(experience.end) : "Present"}
            {" • "}
            {formatDuration(experience.start, experience.end)}
          </span>
        )}
        {typeof experience.location === "string" ? (
          <span className="experience-fade">{experience.location}</span>
        ) : (
          experience.location
        )}
        {typeof experience.description === "string" ? (
          <p>{experience.description}</p>
        ) : (
          experience.description
        )}
      </div>
    </div>
  );
}
