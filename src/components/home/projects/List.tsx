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
            </a>
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
            <ProjectCard
              title="Color generator"
              links={[
                {
                  icon: <HiLink size={20} />,
                  link: "https://c.devminer.xyz",
                  alt: "Color generator",
                },
              ]}
              tech={["Golang", "go-fiber", "image/png"]}
            >
              <p>
                Simple color generator written in{" "}
                <a href="https://go.dev/" className="link">
                  Golang
                </a>{" "}
                and powered by{" "}
                <a href="https://github.com/gofiber/fiber" className="link">
                  go-fiber
                </a>{" "}
                . which outputs the files in the PNG format.
              </p>
            </ProjectCard>

            <ProjectCard
              title="SlimeVR Hardware Tester"
              links={[
                {
                  icon: <SiGithub size={20} />,
                  link: "https://github.com/SlimeVR/Nighty-Hardware-Tester",
                  alt: "SlimeVR Hardware Tester on GitHub",
                },
              ]}
              tech={[
                "TypeScript",
                "Next.js",
                "tRPC",
                "TailwindCSS",
                "Prisma",
                "zod",
              ]}
            >
              <p>
                This is the tool we're using at{" "}
                <a href="https://slimevr.dev">SlimeVR</a> to test the boards
                that we've soldered. It checks the voltage rails, flashes the
                firmware and checks if the IMU is detected and working. It
                uploads it's reports into a web application for easy monitoring.
              </p>
            </ProjectCard>

            <ProjectCard
              title="QR Code generator"
              links={[
                {
                  icon: <HiLink size={20} />,
                  link: "https://qr.devminer.xyz",
                  alt: "QR Code generator",
                },
              ]}
              tech={["TypeScript", "React", "next-qrcode"]}
            >
              <p>
                A simple QR code generator because I'm annoyed by all other QR
                code generators wanting accounts to download the generated QR
                codes.
              </p>
            </ProjectCard>

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
