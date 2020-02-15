import React from "react";
import classNames from 'classnames';

import Loader from './Loader';

type LoadingProps = {
  size: number,
  className: string,
};

const Loading : React.FunctionComponent<LoadingProps> = (props) => {
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
