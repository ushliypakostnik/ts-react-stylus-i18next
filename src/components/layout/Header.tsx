import React from "react";
// import { Link } from 'react-router-dom';

import LangSwitch from './LangSwitch';
import Menu from './Menu';
// import Burger from './Burger';
// import Panel from './Panel';

const HEADER_CLASS = 'header';

const Header : React.FunctionComponent = () => (
  <header
    className={`${HEADER_CLASS}`}
    id={`${HEADER_CLASS}`}
    role="banner"
  >
    <div className="container">
      {/* <Link to="/" className={`${HEADER_CLASS}__logo`} /> */}
      <div className={`${HEADER_CLASS}__right`}>
        <Menu />
        <LangSwitch />
        {/* <Burger />
        <Panel />*/}
      </div>
    </div>
  </header>
);

export default Header;
