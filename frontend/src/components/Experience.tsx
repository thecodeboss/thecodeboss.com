import ExperienceItem, { type ExperienceItemProps } from "./ExperienceItem";
import "./Experience.css";

interface ExperienceProps {
  experiences: ExperienceItemProps[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <div className="experience">
      {experiences.map((experience) => (
        <ExperienceItem key={experience.start.toISOString()} {...experience} />
      ))}
    </div>
  );
}
