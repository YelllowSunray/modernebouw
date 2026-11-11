"use client";

import { useCallback, useSyncExternalStore } from "react";
import { DEFAULT_STYLE, isStyleId, STYLE_STORAGE_KEY, type StyleId } from "@/lib/style";

const STYLE_EVENT = "mb-style-change";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(STYLE_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(STYLE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getSnapshot(): StyleId {
  const fromDom = document.documentElement.dataset.style;
  return isStyleId(fromDom) ? fromDom : DEFAULT_STYLE;
}

function getServerSnapshot(): StyleId {
  return DEFAULT_STYLE;
}

export function useStyle() {
  const style = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setStyle = useCallback((next: StyleId) => {
    document.documentElement.dataset.style = next;
    try {
      localStorage.setItem(STYLE_STORAGE_KEY, next);
    } catch {
      /* Private mode or blocked storage. The choice still applies this visit. */
    }
    window.dispatchEvent(new Event(STYLE_EVENT));
  }, []);

  return { style, setStyle };
}
