import "@fontsource/inter/400.css";
import { SiGithub } from "react-icons/si";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-bg text-fg min-h-screen">
      <head />

      <body className="h-full flex flex-col c">
        <div className="pb-8">
          <nav className="h-12 backdrop-blur-lg w-screen flex fixed inset-0 items-center z-50 px-3 sm:px-8 border-b border-border">
            <div className="flex-1 flex">
              <span className="h-fit select-none">DevMiner</span>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/TheDevMinerTV"
                className="github-link"
              >
                <SiGithub size={20} />
              </a>
            </div>
          </nav>
        </div>

        {children}
      </body>
    </html>
  );
}