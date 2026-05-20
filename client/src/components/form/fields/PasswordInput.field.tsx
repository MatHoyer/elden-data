import { useFieldContext } from "@/components/form/AppForm";
import { InputPassword } from "@/components/ui/InputPassword";
import { DefaultField, type DefaultFieldProps } from "./default.field";

type PasswordInputFieldProps = {
  inputPasswordProps?: React.ComponentProps<typeof InputPassword>;
} & DefaultFieldProps;

export const PasswordInputField: React.FC<PasswordInputFieldProps> = ({
  label,
  renderLabelAddon,
  labelTooltip,
  description,
  inputPasswordProps,
}) => {
  const field = useFieldContext<string>();

  return (
    <DefaultField
      label={label}
      renderLabelAddon={renderLabelAddon}
      labelTooltip={labelTooltip}
      description={description}
    >
      <InputPassword
        id={field.name}
        {...inputPasswordProps}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
    </DefaultField>
  );
};
