import React from "react";
import classNames from 'classnames';

import '../../stylus/components/utils/loader.styl';

import Loader from './Loader';

const Loading : React.SFC<any> = (props) => {

  const loagingClasses = classNames(
    'loading',
    props.className,
  );

  return (
    <div
      className={loagingClasses}
    >
      <Loader size={props.size} />
    </div>
  );
};

export default Loading;
