import React, { Fragment } from "react";
import {
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { connect } from 'react-redux';

import { DESIGN } from '../../store/constants';
import { StoreType } from '../../store/types';

import Main from '../views/Main/Main';
import Page404 from '../views/Page404';

interface Props {
  isAcceptStorageMessage: boolean,
};

const initialState = {
  isAcceptStorageMessage: null,
};

type State = Readonly<typeof initialState>;

class App extends React.Component<Props, State> {

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    isAcceptStorageMessage: nextProps.isAcceptStorageMessage,
  });

  readonly state : State = initialState;

  public componentDidMount() {
    this.goodHeight();
    window.addEventListener('resize', () => {this.goodHeight()});
  };

  public componentWillUnmount() {
    window.removeEventListener('resize', () => {this.goodHeight()});
  };

  private goodHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  public render() {
    // const { isAcceptStorageMessage } = this.state;

    return (
      <Fragment>
        <div className="layout" id="layout">
          {/* <Resize /> */}
          {/* !isAcceptStorageMessage && <StorageMessage /> */}
            {/* <ScrollToTop /> */}
              {/* <Header /> */}
              <main role="main">
                <Switch>
                  <Redirect exact from='/' to='/main'/>
                  <Route path={ DESIGN.VIEWS[0].path } component={ Main } />
                  <Route component={ Page404 } />
                </Switch>
              </main>
        </div>
      </Fragment>
    );
  }
};

const mapStateToProps = (state : StoreType) : State => ({
  isAcceptStorageMessage: state.rootReducer.utils.isAcceptStorageMessage,
});

export default connect(mapStateToProps, null)(App);
