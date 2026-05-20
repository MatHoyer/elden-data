import { Dialog } from "@/components/ui/dialog";
import type { FC } from "react";
import { useDialogStore, type TDialogType } from "./global-dialog.store";

export type GlobalDialogRegistry = Record<TDialogType, FC>;

export const GlobalDialog = ({ dialogComponents }: { dialogComponents: GlobalDialogRegistry }) => {
  const { openDialog, close } = useDialogStore();

  const DialogComponent = openDialog ? dialogComponents[openDialog] : null;

  return (
    <Dialog open={!!openDialog} onOpenChange={close}>
      {DialogComponent ? <DialogComponent /> : null}
    </Dialog>
  );
};
