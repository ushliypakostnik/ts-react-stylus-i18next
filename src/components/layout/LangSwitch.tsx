import * as React from "react";
import { AnyAction, compose } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { WithLanguage } from '../hoc/withLanguage';

import { LANGUAGES } from '../../store/constants';
import { setLanguage } from '../../store/modules/utils/actions';

import withLanguage from '../hoc/withLanguage';

const LANG_SWITCH = 'language-switch';

interface DispatchProps {
  setLanguage : (language: string) => void;
};

interface StateToProps {
};

interface Props extends StateToProps, WithLanguage, DispatchProps {};

const initialState = {
};

type State = Readonly<typeof initialState>;

class LangSwitch extends React.PureComponent<Props, State> {
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
  };

  public render() : React.ReactNode {
    const buttonClasses = classNames(
      LANG_SWITCH,
      { [`${LANG_SWITCH}--active`]: this.getButtonState() },
    );

    return (
      <button
        id={LANG_SWITCH}
        type="button"
        className={buttonClasses}
        onClick={() : void => this.toogleButtonState()}
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

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
  setLanguage: (language : string) => dispatch(setLanguage(language)),
});

const Composed = compose<any>(
  withLanguage,
  connect(null, mapDispatchToProps),
);

export default Composed(LangSwitch);
