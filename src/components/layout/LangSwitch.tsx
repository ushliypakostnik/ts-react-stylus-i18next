import React, { PureComponent } from "react";
import { AnyAction, compose } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { WithTranslation, withTranslation } from 'react-i18next';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { StoreType } from '../../store/types';

import { rememberLanguage } from '../../utils/storage';
import { LANGUAGES } from '../../store/constants';
import { setLanguage } from '../../store/modules/utils/actions';

// import withLanguage from '../hoc/withLanguage';

const LANG_SWITCH = 'language-switch';

interface DispatchProps {
  setLanguage : (language: string) => void;
};

interface StateToProps {
  language : string;
};

interface Props extends StateToProps, DispatchProps {};

const initialState = {
};

type State = Readonly<typeof initialState>;

class LangSwitch extends PureComponent<Props, State> {
  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    language: nextProps.language,
  });

  readonly state : State = initialState;

  public componentDidMount() {
    window.addEventListener('keypress', this.onKeyPress);
  };

  public componentWillUnmount() {
    window.removeEventListener('keypress', this.onKeyPress);
  };

  private onKeyPress = (e) => {
    if (e.keyCode === 13 && e.target.classList.contains(LANG_SWITCH)) {
      e.preventDefault();
      this.toogleButtonState();
    }
  };

  private getButtonState = () => {
    const { language } = this.props;

    if (language === LANGUAGES[0].name) return false;
    return true;
  };

  private toogleButtonState = () => {
    const language = this.getButtonState() ? LANGUAGES[0].name : LANGUAGES[1].name;

    this.props.setLanguage(language);
    rememberLanguage(language);
  };

  render() {
    const buttonClasses = classNames(
      LANG_SWITCH,
      { [`${LANG_SWITCH}--active`]: this.getButtonState() },
    );

    return (
      <button
        id={LANG_SWITCH}
        type="button"
        className={buttonClasses}
        onClick={() => this.toogleButtonState()}
      >
        <div className={`${LANG_SWITCH}__active`} />
        <ul>
          <li>{LANGUAGES[0].name}</li>
          <li>{LANGUAGES[1].name}</li>
        </ul>
      </button>
    );
  };
};

const mapStateToProps = (state : StoreType) : StateToProps => ({
  language: state.rootReducer.utils.language,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
  setLanguage: (language : string) => dispatch(setLanguage(language)),
});

/*
const Composed = compose(
  connect(null, mapDispatchToProps),
  withLanguage,
);
*/

export default connect(mapStateToProps, mapDispatchToProps)(LangSwitch);
