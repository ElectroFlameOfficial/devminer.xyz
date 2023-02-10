"use client";

import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { TbTerminal } from "react-icons/tb";
import { Terminal } from "./view";

export const TerminalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="flex items-center rounded-lg px-2 py-1 text-white transition-all hover:bg-white hover:bg-opacity-20"
        aria-label="Toggle terminal"
        onClick={(e) => setIsOpen(!isOpen)}
      >
        <TbTerminal className="inline-block" size={20} />
      </button>

      <Dialog as="div" open={isOpen} onClose={() => {}}>
        <div className="fixed inset-0 top-12 bg-black bg-opacity-30" />

        <div className="fixed top-12 left-0 right-0 h-[calc(100vh_-_3rem)] overflow-y-auto">
          <Dialog.Panel className="h-full w-full overflow-hidden backdrop-blur-xl">
            <Terminal />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
