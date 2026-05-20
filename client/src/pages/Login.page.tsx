import { LoginForm } from "@/components/auth/login.form";

export const LoginPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <LoginForm forDialog={false} />
      </div>
    </div>
  );
};
