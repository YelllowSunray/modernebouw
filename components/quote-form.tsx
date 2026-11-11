"use client";

import { useId, useState, type FormEvent } from "react";
import { useStyle } from "@/components/style-provider";
import { services, styleChoices, whatsappHref } from "@/lib/content";
import type { StyleId } from "@/lib/style";

const dienstOptions = [
  { value: "", label: "Kies een dienst" },
  ...services.map((service) => ({ value: service.slug, label: service.title })),
  { value: "meerdere", label: "Meerdere klussen" },
  { value: "onbekend", label: "Weet ik nog niet" },
];

export function QuoteForm({ defaultDienst = "" }: { defaultDienst?: string }) {
  const { style } = useStyle();
  const baseId = useId();
  const [override, setOverride] = useState<StyleId | null>(null);
  const sfeer = override ?? style;
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const naam = String(data.get("naam") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    const plaats = String(data.get("plaats") ?? "").trim() || "Emmen";
    const dienst = String(data.get("dienst") ?? "");
    const bericht = String(data.get("bericht") ?? "").trim();

    if (!naam || !telefoon || !bericht) {
      setError("Vul uw naam, telefoonnummer en een korte omschrijving in.");
      return;
    }

    const dienstLabel =
      dienstOptions.find((option) => option.value === dienst)?.label || "Nog niet gekozen";
    const sfeerLabel = styleChoices.find((item) => item.id === sfeer)?.label ?? "Modern";
    const text = [
      `Hallo Hussein, ik ben ${naam}.`,
      `Telefoon: ${telefoon}`,
      `Plaats: ${plaats}`,
      `Klus: ${dienstLabel}`,
      `Sfeer: ${sfeerLabel}`,
      "",
      bericht,
    ].join("\n");

    setError("");
    window.location.assign(whatsappHref(text));
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field" htmlFor={`${baseId}-naam`}>
          <span>Naam</span>
          <input id={`${baseId}-naam`} name="naam" autoComplete="name" required />
        </label>
        <label className="field" htmlFor={`${baseId}-telefoon`}>
          <span>Telefoon</span>
          <input
            id={`${baseId}-telefoon`}
            name="telefoon"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field" htmlFor={`${baseId}-plaats`}>
          <span>Plaats</span>
          <input
            id={`${baseId}-plaats`}
            name="plaats"
            defaultValue="Emmen"
            autoComplete="address-level2"
          />
        </label>
        <label className="field" htmlFor={`${baseId}-dienst`}>
          <span>Klus</span>
          <select id={`${baseId}-dienst`} name="dienst" defaultValue={defaultDienst}>
            {dienstOptions.map((option) => (
              <option key={option.value || "empty"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="field" htmlFor={`${baseId}-sfeer`}>
        <span>Sfeer van de woning</span>
        <select
          id={`${baseId}-sfeer`}
          name="sfeer"
          value={sfeer}
          onChange={(event) => setOverride(event.target.value as StyleId)}
        >
          {styleChoices.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="field" htmlFor={`${baseId}-bericht`}>
        <span>Wat moet er gebeuren?</span>
        <textarea
          id={`${baseId}-bericht`}
          name="bericht"
          required
          placeholder="Bijvoorbeeld: badkamer op de eerste verdieping, inclusief kit en afvoer."
        />
      </label>
      {error ? (
        <p role="alert" className="text-sm text-accent">
          {error}
        </p>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button className="btn" type="submit">
          Stuur via WhatsApp
        </button>
        <p className="text-sm text-muted">
          Uw bericht opent in WhatsApp. Er wordt niets opgeslagen op deze site.
        </p>
      </div>
    </form>
  );
}
