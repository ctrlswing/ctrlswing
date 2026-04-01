"use client";

import { useState } from "react";

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

  function handleClick(value: string) {
    setActive(value);
    onChange(value);
  }

  return (
    <div className="flex gap-1 border-b border-charcoal/10" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          role="tab"
          aria-selected={active === tab.value}
          onClick={() => handleClick(tab.value)}
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
