import { ReactNode } from "react";

export const ProjectCard = ({
  title,
  children,
  tech,
  links,
}: {
  title: string;
  children: ReactNode;
  tech?: string[];
  links?: { icon: ReactNode; link: string }[];
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">{title}</span>
        <div className="card-content">{children}</div>

        <div className="card-tech">
          {tech?.map((tech, i) => (
            <span key={i} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="card-links">
          {links?.map((link, i) => (
            <a
              key={i}
              href={link.link}
              className="transition-all hover:black-text"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
