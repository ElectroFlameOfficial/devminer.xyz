"use client";

import { useState } from "react";
import { HiLink } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { ProjectCard } from "./Card";

export const ProjectList = () => {
  const [showingAllProjects, setShowingAllProjects] = useState(false);

  return (
    <div>
      <div className="content px-4 sm:px-8">
        <ProjectCard
          title="MyDemonList"
          links={[
            {
              icon: <HiLink size={20} />,
              link: "https://mydemonlist.com",
              alt: "MyDemonList",
            },
          ]}
          tech={[
            "TypeScript",
            "TailwindCSS",
            "Node.js",
          ]}
        >
          <p>
            MyDemonList is a level rating website for{" "}
            <a href="https://store.steampowered.com/app/322170/Geometry_Dash?" className="link">
              Geometry Dash
            </a>{" "}
            run by players and members of the community{" "}
            .
          </p>
        </ProjectCard>

        <ProjectCard
          title="GD.RS"
          links={[
            {
              icon: <HiLink size={20} />,
              link: "https://github.com/electroflameofficial/gd.rs",
              alt: "GDRS",
            },
          ]}
          tech={[
            "Rust",
            "Actix",
            "Diesel",
            "PostgreSQL",
          ]}
        >
          <p>
            Advanced Geometry Dash Private Server stack built on{" "}
            <a href="https://rustup.rs" className="link">
              Rust
            </a>{" "}
            and runs on{" "}
            <a href="https://www.postgresql.org/" className="link">
              PostgreSQL
            </a>{" "}
            and{" "}
            <a href="https://actix.rs/" className="link">
              Actix
            </a>{" "}
            with privacy and security in mind.
          </p>
        </ProjectCard>

        <ProjectCard
          title="GDOpenList"
          links={[
            {
              icon: <SiGithub size={20} />,
              link: "https://github.com/electroflameofficial/GDOpenList",
              alt: "GDOpenList on GitHub",
            },
          ]}
          tech={["TypeScript", "Svelte"]}
        >
          <p>
            A simple and pretty list stack for{" "}
            <a href="https://store.steampowered.com/app/322170/Geometry_Dash" className="link">
              Geometry Dash
            </a>{""}
            .
          </p>
        </ProjectCard>

        {showingAllProjects && (
          <>
            <div className="card has-no-anim">
              <div className="card-content">
                <span className="card-title">
                  More stuff coming soon (probably)
                </span>
                <div className="card-content"></div>
                <div className="card-tech"></div>
                <div className="card-links"></div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="flex items-center mt-4 px-8 space-x-2">
        <hr className="flex-1 border-border" />
        <button
          className="w-fit px-3 py-2 border border-border rounded-lg transition-all duration-300 bg-transparent text-white hover:bg-white hover:border-white hover:text-black outline-none font-bold"
          onClick={() => setShowingAllProjects(!showingAllProjects)}
        >
          {showingAllProjects ? "Show Less" : "Show More"}
        </button>
        <hr className="flex-1 border-border" />
      </div>
    </div>
  );
};
