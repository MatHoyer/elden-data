import { useFieldContext } from "@/components/form/AppForm";
import { getFieldErrors } from "@/components/form/utils.form";
import { Field, FieldDescription, FieldError } from "@/components/ui/field";
import { FieldLabelWithAddon } from "@/components/ui/FieldLabelWithAddOn";
import React from "react";

export type DefaultFieldProps = {
  label?: string;
  labelTooltip?: string;
  renderLabelAddon?: () => React.ReactNode;
  description?: string;
} & React.PropsWithChildren;

export const DefaultField = <T,>({
  label,
  labelTooltip,
  renderLabelAddon,
  description,
  children,
}: DefaultFieldProps) => {
  const field = useFieldContext<T>();

  const error = getFieldErrors(field)[0];

  return (
    <Field>
      <FieldLabelWithAddon htmlFor={field.name} renderAddon={renderLabelAddon} tooltip={labelTooltip}>
        {label ?? null}
      </FieldLabelWithAddon>

      {children}

      {!!description && <FieldDescription>{description}</FieldDescription>}
      {!!error && <FieldError>{error.message}</FieldError>}
    </Field>
  );
};
