import { pb } from "@/lib/pocketbase";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import z from "zod";
import { useAppForm } from "../form/AppForm";
import { DefaultForm, type TDefaultDialogFormPublicProps } from "../form/Default.form";
import { FieldGroup, FieldSet } from "../ui/field";

const RegisterSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8),
    passwordConfirm: z.string().min(8),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

type RegisterFormProps = TDefaultDialogFormPublicProps;

export const RegisterForm: React.FC<RegisterFormProps> = ({ forDialog = false }) => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validators: {
      onSubmit: RegisterSchema,
    },
    onSubmit: async ({ value }) => {
      setIsPending(true);
      setIsSuccess(false);
      await pb.collection("users").create({
        email: value.email,
        password: value.password,
        passwordConfirm: value.passwordConfirm,
      });
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
      title={"Register"}
      isPending={isPending}
      isSuccess={isSuccess}
      footerSubmitButtonLabel="Register"
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
                <field.PasswordInput label="Password" inputPasswordProps={{ autoComplete: "new-password" }} />
              )}
            </form.AppField>
          </FieldSet>

          <FieldSet>
            <form.AppField name="passwordConfirm">
              {(field) => (
                <field.PasswordInput label="Confirm Password" inputPasswordProps={{ autoComplete: "new-password" }} />
              )}
            </form.AppField>
          </FieldSet>

          {!forDialog && (
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-foreground underline underline-offset-4 hover:text-primary">
                Login
              </Link>
            </p>
          )}
        </FieldGroup>
      )}
    />
  );
};
