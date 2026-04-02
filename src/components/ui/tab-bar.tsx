"use client";

import { useState, useRef } from "react";

type Tab = {
  label: string;
  value: string;
};

export function TabBar({
  tabs,
  defaultValue,
  onChange,
}: {
  tabs: Tab[];
  defaultValue: string;
  onChange: (value: string) => void;
}) {
  const [active, setActive] = useState(defaultValue);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleClick(value: string) {
    setActive(value);
    onChange(value);
  }

  function focusTab(index: number) {
    const tab = tabRefs.current[index];
    if (tab) {
      tab.focus();
      handleClick(tabs[index].value);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        focusTab((index + 1) % tabs.length);
        break;
      case "ArrowLeft":
        e.preventDefault();
        focusTab((index - 1 + tabs.length) % tabs.length);
        break;
      case "Home":
        e.preventDefault();
        focusTab(0);
        break;
      case "End":
        e.preventDefault();
        focusTab(tabs.length - 1);
        break;
    }
  }

  return (
    <div
      className="flex gap-1 border-b border-charcoal/10"
      role="tablist"
      aria-label="Filter by resource type"
    >
      {tabs.map((tab, i) => (
        <button
          key={tab.value}
          ref={(el) => { tabRefs.current[i] = el; }}
          role="tab"
          aria-selected={active === tab.value}
          tabIndex={active === tab.value ? 0 : -1}
          onClick={() => handleClick(tab.value)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className={`px-5 py-3 font-satoshi text-sm font-medium uppercase tracking-wider transition-colors duration-200 border-b-2 -mb-px ${
            active === tab.value
              ? "border-yellow text-charcoal"
              : "border-transparent text-charcoal/60 hover:text-charcoal hover:border-charcoal/20"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
