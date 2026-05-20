import { RegisterForm } from "@/components/auth/register.form";

export const RegisterPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <RegisterForm forDialog={false} />
      </div>
    </div>
  );
};
