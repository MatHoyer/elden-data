import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialog as StyledAlertDialog,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import type { AlertDialogOptions } from "./alert-dialog.store";
import { useAlertDialogStore } from "./alert-dialog.store";

type AlertDialogInteractiveBodyProps = {
  options: AlertDialogOptions;
  cb: (() => void) | null;
  close: () => void;
};

const AlertDialogInteractiveBody = ({ options, cb, close }: AlertDialogInteractiveBodyProps) => {
  const [confirmTextToType, setConfirmTextToType] = useState("");
  const [doubleConfirm, setDoubleConfirm] = useState(false);

  return (
    <>
      {(!!options.confirmTextToType || !!options.doubleConfirm) && (
        <div className="flex flex-col gap-4 py-4">
          {!!options.confirmTextToType && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="confirmTextToType">
                Pour confirmer, tapez: <code>{options.confirmTextToType}</code>
              </Label>
              <Input
                id="confirmTextToType"
                value={confirmTextToType}
                onChange={(e) => setConfirmTextToType(e.target.value)}
              />
            </div>
          )}
          {!!options.doubleConfirm && (
            <div className="flex items-center justify-start gap-2">
              <Checkbox
                id="doubleConfirm"
                checked={doubleConfirm}
                onCheckedChange={(checked) => setDoubleConfirm(checked as boolean)}
              />
              <Label htmlFor="doubleConfirm">Double confirmation</Label>
            </div>
          )}
        </div>
      )}
      <AlertDialogFooter>
        <AlertDialogCancel onClick={close}>{options.cancelLabel ?? "Annuler"}</AlertDialogCancel>
        <AlertDialogAction
          variant="destructive"
          disabled={
            (!!options.confirmTextToType && confirmTextToType !== options.confirmTextToType) ||
            (!!options.doubleConfirm && !doubleConfirm)
          }
          onClick={() => {
            cb?.();
            close();
          }}
        >
          {options.confirmLabel ?? "Continuer"}
        </AlertDialogAction>
      </AlertDialogFooter>
    </>
  );
};

export const AppAlertDialog = () => {
  const { isOpen, instanceId, cb, close, options, resetContent } = useAlertDialogStore();

  useEffect(() => {
    return () => {
      resetContent();
    };
  }, [resetContent]);

  return (
    <StyledAlertDialog open={isOpen} onOpenChange={close}>
      <AlertDialogPortal>
        <AlertDialogOverlay className="z-60" />
        <AlertDialogContent className="z-60">
          <AlertDialogHeader>
            <AlertDialogTitle>{options?.title ?? "Êtes-vous absolument sûr ?"}</AlertDialogTitle>
            <AlertDialogDescription>
              {options?.description ??
                "Cette action ne peut pas être annulée. Cela supprimera définitivement les données de nos serveurs."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          {options ? (
            <AlertDialogInteractiveBody key={instanceId} options={options} cb={cb} close={close} />
          ) : (
            <AlertDialogFooter>
              <AlertDialogCancel onClick={close}>Annuler</AlertDialogCancel>
              <AlertDialogAction
                variant="destructive"
                onClick={() => {
                  cb?.();
                  close();
                }}
              >
                Continuer
              </AlertDialogAction>
            </AlertDialogFooter>
          )}
        </AlertDialogContent>
      </AlertDialogPortal>
    </StyledAlertDialog>
  );
};
