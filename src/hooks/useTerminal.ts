import { ReactNode, useCallback, useEffect, useState } from "react";

export type TerminalHistoryItem = {
  command: string;
  exitCode: number;
  output: string | ReactNode;
};

export const useTerminal = () => {
  const [ref, setDomNode] = useState<HTMLDivElement>();
  const setRef = useCallback((node: HTMLDivElement) => setDomNode(node), []);

  const [history, setHistory] = useState<TerminalHistoryItem[]>([]);

  useEffect(() => {
    const windowResizeHandler = () => {
      ref?.scrollTo({
        top: ref.scrollHeight ?? 99999999,
        behavior: "smooth",
      });
    };

    window.addEventListener("resize", windowResizeHandler);

    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, [ref]);

  useEffect(() => {
    ref?.scrollTo({
      top: ref.scrollHeight ?? 99999999,
      behavior: "smooth",
    });
  }, [ref, history]);

  const pushToHistory = useCallback((item: TerminalHistoryItem) => {
    setHistory((prev) => [...prev, item]);
  }, []);

  const reset = useCallback(() => {
    setHistory([]);
  }, []);

  return {
    ref,
    setRef,

    history,
    pushToHistory,

    reset,
  };
};
