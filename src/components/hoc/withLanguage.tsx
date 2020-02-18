import * as React from "react";
import { compose } from "redux";
import { connect } from 'react-redux';

import { StoreType } from '../../store/types';

interface DispatchProps {
};

interface StateToProps {
  language: string;
}

export interface WithLanguage extends StateToProps, DispatchProps {};

const initialState = {
  language: null,
};

type State = Readonly<typeof initialState>;

const withLanguage = <P extends WithLanguage>(Component: React.ComponentType<P>) => {
  return class extends React.PureComponent<WithLanguage, State> {
    public static getDerivedStateFromProps = (nextProps : WithLanguage, prevState : State) => ({
      language: nextProps.language,
    });

    readonly state : State = initialState;

    public render() {
      const { language } = this.state;

      return <Component language={language} {...this.props as P} />;
    };
  };
}

const mapStateToProps = (state : StoreType) : StateToProps => ({
  language: state.rootReducer.utils.language,
});

const Composed = compose<any>(
  connect(mapStateToProps, null),
  withLanguage,
);

export default Composed;

