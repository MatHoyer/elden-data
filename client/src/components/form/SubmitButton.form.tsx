import { LoadingButton } from "@/components/animated/LoadingButton";

type SubmitButtonFormProps = React.ComponentProps<typeof LoadingButton>;

export const SubmitButtonForm: React.FC<SubmitButtonFormProps> = (props) => {
  return (
    <LoadingButton type="submit" {...props}>
      {props.children}
    </LoadingButton>
  );
};
