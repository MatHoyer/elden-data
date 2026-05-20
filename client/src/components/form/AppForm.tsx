import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { SubmitButtonForm } from "./SubmitButton.form";
import { FormWrapper } from "./Wrapper.form";
import { PasswordInputField } from "./fields/PasswordInput.field";
import { TextInputField } from "./fields/TextInput.field";

export const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts();

const formHook = createFormHook({
  fieldComponents: {
    TextInput: TextInputField,
    PasswordInput: PasswordInputField,
  },
  formComponents: {
    FormWrapper: FormWrapper,
    SubmitButton: SubmitButtonForm,
  },
  fieldContext,
  formContext,
});

export const { useAppForm } = formHook;
/** @deprecated Prefer `useAppForm` — kept for `form.AppForm` / `form.SubmitButton` on the returned instance */
export const AppForm = formHook;
