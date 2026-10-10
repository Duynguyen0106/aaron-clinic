"use client";

import { useId, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white/90 shadow-sm">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-mist/60 md:px-6 md:py-5"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-base font-semibold text-forest md:text-lg">
                  {item.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-mist text-teal transition-transform duration-200 ${
                    isOpen ? "rotate-45 border-brass/40 bg-brass/15" : ""
                  }`}
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`faq-panel ${isOpen ? "faq-panel-open" : ""}`}
            >
              <div className="faq-panel-inner">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted md:px-6 md:pb-6 md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
