import type { AnyFieldApi } from "@tanstack/react-form";

export type FormError = {
  message: string;
};

export const isFormError = (error: unknown): error is FormError => {
  return typeof error === "object" && error !== null && "message" in error;
};

export function getFieldErrors(field: AnyFieldApi): FormError[] {
  return field.state.meta.errors.filter(isFormError);
}
