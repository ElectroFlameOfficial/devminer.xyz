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
          title="DangerousTool"
          links={[
            {
              icon: <HiLink size={20} />,
              link: "https://dangeroustool.devminer.xyz",
            },
          ]}
          tech={[
            "TypeScript",
            "Next.js",
            "TailwindCSS",
            "Node.js",
            "uWebSockets.js",
          ]}
        >
          <p>
            DangerousTool is a utility for{" "}
            <a href="https://www.elitedangerous.com/" className="link">
              Elite: Dangerous
            </a>{" "}
            players that shows the current position and status in{" "}
            <a href="https://discord.com" className="link">
              Discord
            </a>
            .
          </p>
          <p>
            I made this when playing{" "}
            <a href="https://www.elitedangerous.com/" className="link">
              Elite: Dangerous
            </a>{" "}
            and my friend mentioned that they have a semi-stable event stream on
            the filesystem.
          </p>
        </ProjectCard>

        <ProjectCard
          title="t3odo"
          links={[
            {
              icon: <HiLink size={20} />,
              link: "https://todo.devminer.xyz",
            },
          ]}
          tech={[
            "TypeScript",
            "Next.js",
            "tRPC",
            "TailwindCSS",
            "NextAuth",
            "Prisma",
          ]}
        >
          <p>
            Simple todo app based on the{" "}
            <a href="https://create.t3.gg/" className="link">
              t3 stack
            </a>{" "}
            popularized by the YouTuber and{" "}
            <a href="https://ping.gg" className="link">
              ping.gg
            </a>{" "}
            CEO{" "}
            <a href="https://t3.gg/" className="link">
              Theo Browne
            </a>
            .
          </p>
        </ProjectCard>

        <ProjectCard
          title="SlimeVR Firmware Protocol Debugger"
          links={[
            {
              icon: <SiGithub size={20} />,
              link: "https://github.com/SlimeVR/SlimeVR-Node/tree/master/apps",
            },
          ]}
          tech={["TypeScript", "React", "Electron", "Node.js", "TailwindCSS"]}
        >
          <p>
            Reimplementation of the{" "}
            <a href="https://slimevr.dev" className="link">
              SlimeVR
            </a>{" "}
            tracker protocol and server in TypeScript to debug trackers without
            having to start{" "}
            <a
              href="https://store.steampowered.com/app/250820/SteamVR/"
              className="link"
            >
              SteamVR
            </a>
            . Also includes an optional GUI which also visualizes the trackers
            rotation.
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
                that we've soldered. It checks the voltage rails, flashes
                the firmware and checks if the IMU is detected and working. It
                uploads it's reports into a web application for easy
                monitoring.
              </p>
            </ProjectCard>

            <ProjectCard
              title="QR Code generator"
              links={[
                { icon: <HiLink size={20} />, link: "https://qr.devminer.xyz" },
              ]}
              tech={["TypeScript", "React", "next-qrcode"]}
            >
              <p>
                A simple QR code generator because I'm annoyed by all other
                QR code generators wanting accounts to download the generated QR
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
