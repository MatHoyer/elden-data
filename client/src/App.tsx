import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation("armors");

  return <div>{t("alberichs_bracers")}</div>;
};

export default App;
