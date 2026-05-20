import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation("armors");

  return <div>{t("alberichs_bracers")}</div>;
};
