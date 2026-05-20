import { pb } from "@/lib/pocketbase";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import z from "zod";
import { useAppForm } from "../form/AppForm";
import { DefaultForm, type TDefaultDialogFormPublicProps } from "../form/Default.form";
import { FieldGroup, FieldSet } from "../ui/field";

const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

type LoginFormProps = TDefaultDialogFormPublicProps;

export const LoginForm: React.FC<LoginFormProps> = ({ forDialog = false }) => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: LoginSchema,
    },
    onSubmit: async ({ value }) => {
      setIsPending(true);
      setIsSuccess(false);
      await pb.collection("users").authWithPassword(value.email, value.password);
      setIsSuccess(true);
      setIsPending(false);
      await navigate({ to: "/" });
    },
  });

  return (
    <DefaultForm
      form={form}
      forDialog={forDialog}
      title={"Login"}
      isPending={isPending}
      isSuccess={isSuccess}
      footerSubmitButtonLabel="Login"
      renderContent={() => (
        <FieldGroup>
          <FieldSet>
            <form.AppField name="email">
              {(field) => (
                <field.TextInput
                  label="Email"
                  inputProps={{
                    type: "email",
                    autoComplete: "email",
                    placeholder: "m@example.com",
                  }}
                />
              )}
            </form.AppField>
          </FieldSet>

          <FieldSet>
            <form.AppField name="password">
              {(field) => (
                <field.PasswordInput label="Password" inputPasswordProps={{ autoComplete: "current-password" }} />
              )}
            </form.AppField>
          </FieldSet>

          {!forDialog && (
            <p className="text-center text-sm text-muted-foreground">
              No account?{" "}
              <Link
                to="/register"
                className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
              >
                Register
              </Link>
            </p>
          )}
        </FieldGroup>
      )}
    />
  );
};
