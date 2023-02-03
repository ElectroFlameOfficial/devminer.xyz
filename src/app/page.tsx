import { ProjectList } from "../components/home/projects/List";
import { TechCard } from "../components/home/TechCard";

export default function Home() {
  return (
    <div className="flex-1 pt-8 c content-wrapper flex flex-col gap-8">
      <div className="max-w-7xl w-full self-center px-3 sm:px-8 space-y-2">
        <h1 className="font-bold text-8xl sm:text-9xl text-gradient w-fit select-none tracking-tight">
          Hi, I'm Anna!
        </h1>
        <p>
          I'm a 19 year old developer from Germany. I'm currently working on{" "}
          <a href="https://slimevr.dev" className="link">
            SlimeVR
          </a>{" "}
          and some other Minecraft projects. I also like to make websites, web
          apps, Discord bots and various other small tools.
        </p>
      </div>

      <div className="max-w-7xl space-y-2 sm:space-y-4 self-center">
        <h2 className="font-bold text-2xl sm:text-4xl px-4 sm:px-8 font-subtitle">
          My Projects
        </h2>

        <ProjectList />
      </div>

      <div className="max-w-7xl w-full self-center space-y-2 sm:space-y-4">
        <h2 className="font-bold text-2xl sm:text-4xl px-4 sm:px-8 font-subtitle">
          Tech I know and use
        </h2>

        <div className="px-3 sm:px-8 flex flex-wrap gap-2 sm:gap-4 justify-between">
          <TechCard
            title="Technologies"
            technologies={[
              { name: "Git", link: "https://git-scm.com" },
              { name: "GitHub", link: "https://github.com" },
              { name: "GitLab", link: "https://gitlab.com" },
              { name: "Docker", link: "https://docker.com" },
              { name: "Cloudflare", link: "https://cloudflare.com" },
              { name: "Vercel", link: "https://vercel.com" },
              {
                name: "GitHub Actions",
                link: "https://github.com/features/actions",
              },
              { name: "Concourse CI", link: "https://concourse-ci.org/" },
              { name: "Jira", link: "https://www.atlassian.com/software/jira" },
              { name: "AWS S3", link: "https://aws.amazon.com/s3/" },
            ]}
          />

          <TechCard
            title="Languages"
            technologies={[
              { name: "TypeScript", link: "https://typescriptlang.org" },
              { name: "Golang", link: "https://go.dev" },
              { name: "Python", link: "https://www.python.org" },
              { name: "Rust (a bit)", link: "https://rustlang.org" },
              { name: "PHP (a bit)", link: "https://www.php.net" },
            ]}
          />

          <TechCard
            title="Frameworks"
            technologies={[
              [
                { name: "React", link: "https://reactjs.org" },
                { name: "Next.js", link: "https://nextjs.org" },
              ],
              [
                { name: "Vue", link: "https://vuejs.org" },
                { name: "Nuxt.js", link: "https://nuxtjs.org" },
              ],
              { name: "go-fiber", link: "https://gofiber.io" },
              { name: "Astro", link: "https://astro.build" },
            ]}
          />

          <TechCard
            title="Libraries"
            technologies={[
              { name: "Prisma", link: "https://prisma.io" },
              { name: "tRPC", link: "https://trpc.io" },
              { name: "React Query", link: "https://tanstack.com/query" },
              { name: "TailwindCSS", link: "https://tailwindcss.com" },
              { name: "Discord.js", link: "https://discord.js.org" },
              { name: "NextAuth", link: "https://next-auth.js.org" },
              {
                name: "uWebSockets.js",
                link: "https://github.com/uNetworking/uWebSockets.js",
              },
              { name: "zod", link: "https://github.com/colinhacks/zod" },
            ]}
          />

          <TechCard
            title="Databases"
            technologies={[
              { name: "PostgreSQL", link: "https://postgresql.org" },
              { name: "MongoDB", link: "https://mongodb.com" },
              { name: "Redis", link: "https://redis.io" },
            ]}
          />

          <TechCard
            title="Runtimes"
            technologies={[
              { name: "Node.js", link: "https://nodejs.org" },
              {
                name: "Cloudflare Workers",
                link: "https://workers.cloudflare.com",
              },
            ]}
          />

          <TechCard
            title="Tools"
            technologies={[{ name: "Vite", link: "https://vitejs.dev" }]}
          />
        </div>
      </div>

      <div className="w-full text-center font-bold text-md sm:text-xl select-none py-4">
        Contact:{" "}
        <a href="mailto:devminer@devminer.xyz" className="link select-text">
          devminer@devminer.xyz
        </a>
      </div>
    </div>
  );
}
