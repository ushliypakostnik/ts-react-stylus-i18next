import React from "react";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { DESIGN } from '../../store/constants';

const Menu : React.FunctionComponent = () => {
  const { t } = useTranslation();
  const views = DESIGN.VIEWS;

  return (
    <nav role="navigation" className="menu">
      <ul role="menu">
        {views.map((view, index) => {
          return (
            <li role="presentation" key={index}>
              <NavLink
                to={view.path}
                role="menuitem"
              >
                {t(`views.${view.name}.name`)}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
