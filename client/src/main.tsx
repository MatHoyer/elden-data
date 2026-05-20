import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "@/components/user/UserProvider.tsx";
import { InnerApp } from "./InnerApp";
import "./i18n";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <InnerApp />
    </UserProvider>
  </StrictMode>,
);
