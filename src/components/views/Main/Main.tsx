import React from "react";
import { useTranslation } from 'react-i18next';

const Main : React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <section className="page--main">
      <div className="container">
        <h2>{t('views.main.title')}</h2>
      </div>
    </section>
  );
};

export default Main;
