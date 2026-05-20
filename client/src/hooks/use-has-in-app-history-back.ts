import { useLocation } from "@tanstack/react-router";

function readNavigationApiIndex(): number | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }
  const nav = (
    window as unknown as {
      navigation?: { currentEntry?: { index?: number } };
    }
  ).navigation;
  const index = nav?.currentEntry?.index;
  return typeof index === "number" ? index : undefined;
}

function readHistoryStateIdx(): number | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }
  const s = window.history.state;
  if (!s || typeof s !== "object") {
    return undefined;
  }
  const idx = (s as Record<string, unknown>).idx;
  return typeof idx === "number" ? idx : undefined;
}

/**
 * True when the tab has a prior same-document history entry, so `navigate(-1)` is expected
 * to stay inside the SPA (not the first loaded route in this session).
 *
 * Uses the Navigation API when available, otherwise `history.state.idx` when React Router sets it.
 */
export function useHasInAppHistoryBack(): boolean {
  useLocation();

  const navIndex = readNavigationApiIndex();
  if (navIndex !== undefined) {
    return navIndex > 0;
  }

  const rrIdx = readHistoryStateIdx();
  if (rrIdx !== undefined) {
    return rrIdx > 0;
  }

  return false;
}
