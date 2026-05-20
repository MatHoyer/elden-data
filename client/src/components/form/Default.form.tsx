import { closeDialog } from "@/components/dialogs/global-dialogs/global-dialog.store";
import { CardTitle } from "@/components/ui/card";
import { CardContainer } from "@/components/ui/CardContainer";

export type TDefaultDialogFormPublicProps = {
  forDialog?: boolean;
};

type DefaultFormProps<TForDialog extends boolean> = {
  // eslint-disable-next-line
  form: any; // Tanstack form types are boring...
  isPending?: boolean;
  isSuccess?: boolean;
  forDialog?: TForDialog;
  title?: TForDialog extends true ? never : string;
  renderHeader?: TForDialog extends true ? never : () => React.ReactNode;
  renderContent: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
  footerSubmitButtonLabel?: string | null;
};

/**
 * Default success ending for forms.
 * @param form - The TANSTACK form (typed as any because tanstack form types are boring...)
 */
// eslint-disable-next-line
export const defaultSuccessEnding = (form: any) => {
  closeDialog();
  form.reset();
};

export const DefaultForm = <TForDialog extends boolean>({
  form,
  isPending = false,
  isSuccess = false,
  forDialog = false as TForDialog,
  title,
  renderHeader,
  renderContent,
  renderFooter,
  footerSubmitButtonLabel = "Créer",
}: DefaultFormProps<TForDialog>) => {
  const defaultRenderHeader = () => {
    return <CardTitle>{title}</CardTitle>;
  };

  const defaultRenderFooter = footerSubmitButtonLabel
    ? () => {
        return (
          <form.SubmitButton loading={isPending} success={isSuccess} className="w-fit">
            {footerSubmitButtonLabel}
          </form.SubmitButton>
        );
      }
    : null;

  return (
    <form.AppForm>
      <form.FormWrapper>
        {forDialog ? (
          <div className="flex flex-col gap-4">
            {renderContent()}
            {renderFooter ? renderFooter() : defaultRenderFooter?.()}
          </div>
        ) : (
          <CardContainer
            renderHeader={renderHeader ?? defaultRenderHeader}
            renderContent={renderContent}
            renderFooter={renderFooter ?? defaultRenderFooter ?? undefined}
          />
        )}
      </form.FormWrapper>
    </form.AppForm>
  );
};
