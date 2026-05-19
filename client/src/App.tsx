import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation("armors");

  return <div>{t("alberichs_bracers")}</div>;
}

export default App;
