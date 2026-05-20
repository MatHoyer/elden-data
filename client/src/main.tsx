import { UserProvider } from "@/components/user/UserProvider.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { InnerApp } from "@/InnerApp";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./i18n";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <UserProvider>
        <InnerApp />
      </UserProvider>
    </ThemeProvider>
  </StrictMode>,
);
