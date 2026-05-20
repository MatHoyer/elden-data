import { Layout, LayoutHeader } from "@/components/layout/Page";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation("armors");

  return (
    <Layout className="flex-1">
      <LayoutHeader>
        <h1>{t("alberichs_bracers")}</h1>
      </LayoutHeader>
    </Layout>
  );
};
