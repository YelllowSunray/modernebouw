export const STYLE_STORAGE_KEY = "mb-style:v3";

export const STYLE_IDS = ["modern", "klassiek", "landelijk"] as const;

export type StyleId = (typeof STYLE_IDS)[number];

export const DEFAULT_STYLE: StyleId = "modern";

export function isStyleId(value: string | undefined | null): value is StyleId {
  return value === "modern" || value === "klassiek" || value === "landelijk";
}

export const styleBootScript = `(() => { try { var s = localStorage.getItem(${JSON.stringify(STYLE_STORAGE_KEY)}); document.documentElement.setAttribute("data-style", s === "modern" || s === "landelijk" || s === "klassiek" ? s : ${JSON.stringify(DEFAULT_STYLE)}); } catch (e) { document.documentElement.setAttribute("data-style", ${JSON.stringify(DEFAULT_STYLE)}); } })();`;
