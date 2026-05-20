import { useFormContext } from "./AppForm";

type FormWrapperProps = React.PropsWithChildren;

export const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
  const form = useFormContext();

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      {children}
    </form>
  );
};
