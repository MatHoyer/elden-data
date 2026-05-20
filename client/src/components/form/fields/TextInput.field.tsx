import { useFieldContext } from "@/components/form/AppForm";
import { Input } from "@/components/ui/input";
import { DefaultField, type DefaultFieldProps } from "./default.field";

type TextInputFieldProps = {
  inputProps?: React.ComponentProps<typeof Input>;
} & DefaultFieldProps;

export const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  renderLabelAddon,
  labelTooltip,
  description,
  inputProps,
}) => {
  const field = useFieldContext<string>();

  return (
    <DefaultField
      label={label}
      renderLabelAddon={renderLabelAddon}
      labelTooltip={labelTooltip}
      description={description}
    >
      <Input
        id={field.name}
        {...inputProps}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
    </DefaultField>
  );
};
