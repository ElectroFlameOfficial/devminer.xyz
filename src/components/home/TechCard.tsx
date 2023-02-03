import { ReactNode } from "react";

type SingleTechnology = {
  name: string;
  link?: string;
};

type Technology = SingleTechnology | SingleTechnology[];

const renderTech = (tech: Technology): ReactNode => {
  if (Array.isArray(tech)) {
    return tech
      .map((t, i) => <span key={i}>{renderTech(t)}</span>)
      .reduce((prev, curr) => (
        <>
          {prev} & {curr}
        </>
      ));
  } else {
    if ("link" in tech) {
      return (
        <a href={tech.link} className="link">
          {tech.name}
        </a>
      );
    }

    return <span>{tech.name}</span>;
  }
};

export const TechCard = ({
  title,
  technologies,
}: {
  title: string;
  technologies: Technology[];
}) => {
  return (
    <div className="tech-card">
      <h3 className="font-bold text-xl">{title}</h3>
      <ul>
        {technologies.map((tech, i) => (
          <li key={i}>{renderTech(tech)}</li>
        ))}
      </ul>
    </div>
  );
};
