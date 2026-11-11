"use client";

import { styleChoices } from "@/lib/content";
import { useStyle } from "@/components/style-provider";

export function StyleSwitcher({ className = "" }: { className?: string }) {
  const { style, setStyle } = useStyle();

  return (
    <div className={`style-switch ${className}`}>
      <p className="style-switch-label">Stijlselector</p>
      <div className="style-switch-options" role="radiogroup" aria-label="Stijlselector">
        {styleChoices.map((item) => (
          <button
            key={item.id}
            type="button"
            role="radio"
            aria-checked={style === item.id}
            data-style-option={item.id}
            onClick={() => setStyle(item.id)}
            className="style-option"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
