import { ProjectList } from "../components/home/projects/List";
import { TechCard } from "../components/home/TechCard";

export default function Home() {
  return (
    <div className="flex-1 pt-8 sm:pt-12 c content-wrapper flex flex-col gap-8">
      <div className="max-w-7xl w-full self-center px-3 sm:px-8 space-y-2">
        <h1 className="font-bold text-7xl sm:text-8xl md:text-9xl text-gradient w-fit select-none tracking-tight py-4">
          Hi, I'm Lia
        </h1>
        <p>
          I'm a 16 year old developer from New York. I'm currently working on{" "}
          <a
            href="https://mydemonlist.com"
            className="link"
            aria-label="MyDemonList"
          >
            MyDemonList
          </a>{" "}
          and some other project. I also like to make websites, web
          apps, game mods and various other small tools.
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
              { name: "VSCode", link: "https://code.visualstudio.com" },
              { name: "Docker", link: "https://docker.com" },
              { name: "Cloudflare", link: "https://cloudflare.com" },
              { name: "Vercel", link: "https://vercel.com" },
              {
                name: "GitHub Actions",
                link: "https://github.com/features/actions",
              },
              { name: "CircleCI", link: "https://circleci.com/" },
              { name: "Statuspage", link: "https://www.atlassian.com/software/statuspage" },
              { name: "Google Cloud", link: "https://cloud.google.com" },
            ]}
          />

          <TechCard
            title="Languages"
            technologies={[
              { name: "TypeScript (barely)", link: "https://typescriptlang.org" },
              { name: "Golang", link: "https://go.dev" },
              { name: "Python", link: "https://www.python.org" },
              { name: "Rust (a lot)", link: "https://rustlang.org" },
              { name: "PHP", link: "https://www.php.net" },
            ]}
          />

          <TechCard
            title="Frameworks"
            technologies={
              [
                { name: "React", link: "https://reactjs.org" },
                { name: "Next.js", link: "https://nextjs.org" },
              ],
              [
                { name: "Vue", link: "https://vuejs.org" },
                { name: "Nuxt.js", link: "https://nuxtjs.org" },
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
              { name: "MariaDB", link: "https://mariadb.org" },
              { name: "SQLite", link: "https://sqlite.org" },
              { name: "Firebase", link: "https://firebase.google.com" },
              { name: "pocketbase", link: "https://pocketbase.io" },
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
            technologies={[
              { name: "Vite", link: "https://vitejs.dev" },
              { name: "Cargo", link: "https://rustup.rs" },
              ]}
          />
        </div>
      </div>

      <div className="w-full text-center font-bold text-md sm:text-xl select-none py-4">
        Contact:{" "}
        <a
          href="mailto:lia@vshade.strangled.net"
          className="link select-text"
          aria-label="My Email Address"
        >
          lia@vshade.strangled.net
        </a>
      </div>
    </div>
  );
}
