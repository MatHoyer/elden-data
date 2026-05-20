import { LoginForm } from "@/components/auth/login.form";

export const LoginPage = () => {
  return (
    <div className="flex flex-1 w-full items-center justify-center p-4">
      <div className="w-full max-w-md">
        <LoginForm forDialog={false} />
      </div>
    </div>
  );
};
