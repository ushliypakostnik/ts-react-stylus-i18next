import * as React from "react";
import { useTranslation } from 'react-i18next';

const Page404 : React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <section className="page--404">
      <div className="container">
        <div className="text">
          <div className="text__wrapper">
            <h1>404</h1>
            <h2>{t('views.page404.title')}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page404;
