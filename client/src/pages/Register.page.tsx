import { RegisterForm } from "@/components/auth/register.form";

export const RegisterPage = () => {
  return (
    <div className="flex flex-1 w-full items-center justify-center p-4">
      <div className="w-full max-w-md">
        <RegisterForm forDialog={false} />
      </div>
    </div>
  );
};
