import "@fontsource/exo-2/400.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/kanit/400.css";
import { SiGithub } from "react-icons/si";
import { TerminalWrapper } from "../components/terminal/wrapper";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen bg-bg text-fg">
      <head />

      <body className="c flex h-full flex-col">
        <div className="pb-12">
          <div className="fixed inset-0 z-50 flex h-12 w-screen items-center border-b border-border px-3 backdrop-blur-lg sm:px-8">
            <div className="flex flex-1">
              <span className="h-fit select-none">DevMiner</span>
            </div>

            <div className="flex space-x-4">
              <TerminalWrapper />

              <a
                href="https://github.com/TheDevMinerTV"
                className="flex items-center gap-x-2 rounded-lg px-2 py-1 text-white transition-all hover:bg-white hover:bg-opacity-20"
                aria-label="My GitHub Profile"
              >
                <SiGithub className="inline-block" size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
