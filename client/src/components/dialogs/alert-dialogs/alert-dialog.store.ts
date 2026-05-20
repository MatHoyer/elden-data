import { create } from "zustand";

export interface AlertDialogOptions {
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmTextToType?: string;
  doubleConfirm?: boolean;
}

interface AlertDialogStore {
  isOpen: boolean;
  /** Bumps on each `open` so dialog fields remount with fresh local state. */
  instanceId: number;
  cb: (() => void) | null;
  options: AlertDialogOptions | null;
  open: (cb: () => void, options?: AlertDialogOptions) => void;
  /** Sets `isOpen` false only; keep `options`/`cb` until exit animation finishes (see `resetContent`). */
  close: () => void;
  /** Clears `cb` and `options` after the dialog is fully closed. */
  resetContent: () => void;
}

export const useAlertDialogStore = create<AlertDialogStore>((set) => ({
  isOpen: false,
  instanceId: 0,
  cb: null,
  options: null,
  open: (cb, options) =>
    set((s) => ({
      isOpen: true,
      cb,
      options,
      instanceId: s.instanceId + 1,
    })),
  close: () => set({ isOpen: false }),
  resetContent: () => set({ cb: null, options: null }),
}));

export const openAlertDialog = (
  cb: () => void,
  options?: AlertDialogOptions
) => {
  useAlertDialogStore.getState().open(cb, options);
};

export const closeAlertDialog = () => {
  useAlertDialogStore.getState().close();
};
