import { LoadingButton } from "@/components/animated/LoadingButton";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import type React from "react";
import type { ComponentProps, PropsWithChildren } from "react";

/**
 * @description Global dialog footer component.
 * If you overwrite the default button, you must not provide props for him
 *
 *
 * @param defaultCancelButtonProps - Props for the default cancel button
 * @param defaultSubmitButtonProps - Props for the default submit button
 * @param submitButtonOverwrite - Overwrite for the default submit button
 * @param cancelButtonOverwrite - Overwrite for the default cancel button
 */
export const GlobalDialogFooter: React.FC<{
  defaultCancelButtonProps?: ComponentProps<typeof Button> & PropsWithChildren;
  defaultSubmitButtonProps?: ComponentProps<typeof LoadingButton> & PropsWithChildren;
  submitButtonOverwrite?: React.ReactNode;
  cancelButtonOverwrite?: React.ReactNode;
}> = ({ defaultCancelButtonProps, defaultSubmitButtonProps, submitButtonOverwrite, cancelButtonOverwrite }) => {
  return (
    <DialogFooter>
      {cancelButtonOverwrite ? (
        cancelButtonOverwrite
      ) : (
        <DialogClose asChild>
          <Button variant="outline" {...defaultCancelButtonProps}>
            Annuler
          </Button>
        </DialogClose>
      )}
      {submitButtonOverwrite ? (
        submitButtonOverwrite
      ) : (
        <LoadingButton {...defaultSubmitButtonProps}>Soumettre</LoadingButton>
      )}
    </DialogFooter>
  );
};
