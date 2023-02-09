import clsx from "clsx";
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { TerminalHistoryItem, useTerminal } from "../../hooks/useTerminal";

// eslint-disable-next-line react/display-name
const T = forwardRef(
  (
    {
      history,
      commands,
      unknownCommand,
      emptyLine,
    }: {
      history: TerminalHistoryItem[];
      commands: Record<string, (args: string[]) => Promise<void>>;
      unknownCommand: (command: string, args: string[]) => Promise<void>;
      emptyLine: () => Promise<void>;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [input, setInput] = useState("");

    useEffect(() => {
      focusInput();
    }, []);

    // useEffect(() => {
    // focusInput();
    // });

    const focusInput = () => {
      inputRef.current?.focus();
    };

    return (
      <div
        onClick={focusInput}
        className="scrollbar h-full overflow-y-scroll whitespace-pre-wrap p-2 font-mono"
        ref={ref}
      >
        {history.map((line, index) => (
          <div className="flex flex-col" key={`${index}-${line.command}`}>
            <div className="space-x-[1ch]">
              <span
                className={clsx(
                  (history[index - 1]?.exitCode ?? 0) === 0
                    ? "text-green-500"
                    : "text-amber-700"
                )}
              >
                {history[index - 1]?.exitCode ?? 0}
              </span>
              <span
                className={clsx(
                  (history[index - 1]?.exitCode ?? 0) === 0
                    ? "text-green-500"
                    : "text-amber-700"
                )}
              >
                $
              </span>
              <span className="text-white">{line.command}</span>
            </div>
            <div>{line.output}</div>
          </div>
        ))}

        <div className="flex space-x-[1ch]">
          <span
            className={clsx(
              (history[history.length - 1]?.exitCode ?? 0) === 0
                ? "text-green-500"
                : "text-amber-700"
            )}
          >
            {history[history.length - 1]?.exitCode ?? 0}
          </span>

          <span
            className={clsx(
              (history[history.length - 1]?.exitCode ?? 0) === 0
                ? "text-green-500"
                : "text-amber-700"
            )}
          >
            $
          </span>

          <input
            className="inline-block flex-1 border-none bg-transparent text-white outline-none"
            type="text"
            value={input}
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const [command, ...args] = input.split(" ");

                const cmd = commands[command];

                if (cmd) {
                  cmd(args);
                } else if (command !== "") {
                  unknownCommand(command, args);
                } else {
                  emptyLine();
                }

                setInput("");
              }
            }}
          />
        </div>
      </div>
    );
  }
);

export const Terminal = () => {
  const { history, pushToHistory, reset, setRef } = useTerminal();

  const commands = useMemo(
    () => ({
      help: async () => {
        pushToHistory({
          command: "help",
          exitCode: 0,
          output: (
            <div>
              <p>Available commands:</p>
              <ul>
                <li className="ml-2">
                  - <span className="text-yellow-500">github</span>: Opens my
                  GitHub profile
                </li>
              </ul>
            </div>
          ),
        });
      },
      github: async () => {
        pushToHistory({
          command: "github",
          exitCode: 0,
          output: (
            <a href="https://github.com/TheDevMinerTV" className="underline">
              Click here to go to my GitHub profile
            </a>
          ),
        });
      },
      rick: async () => {
        pushToHistory({
          command: "rick",
          exitCode: 0,
          output: (
            <iframe
              width="560"
              height="315"
              src="https://youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1"
              frameBorder={0}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          ),
        });
      },
    }),
    [pushToHistory]
  );

  const unknownCommand = useMemo(
    () => (command: string, args: string[]) => {
      pushToHistory({
        command: `${command} ${args.join(" ")}`,
        exitCode: 2,
        output: (
          <span className="flex gap-1 text-red-600">
            <span>Unknown command:</span>
            <div className="flex flex-col">
              <span>
                {command} {args.join(" ")}
              </span>
              <span>^</span>
            </div>
          </span>
        ),
      });

      return Promise.resolve();
    },
    [pushToHistory]
  );

  const emptyLine = useMemo(
    () => () => {
      pushToHistory({
        command: "",
        exitCode: 0,
        output: "",
      });

      return Promise.resolve();
    },
    [pushToHistory]
  );

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <T
      ref={setRef}
      history={history}
      commands={commands}
      unknownCommand={unknownCommand}
      emptyLine={emptyLine}
    />
  );
};
