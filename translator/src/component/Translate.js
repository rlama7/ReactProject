import React from "react";
import { useTranslation } from "react-i18next";

function Translate() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t("Greetings! Welcome to America!!")}</h1>
    </div>
  );
}

export default Translate;
