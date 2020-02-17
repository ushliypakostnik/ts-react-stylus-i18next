import * as React from "react";
import { AnyAction, compose } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { acceptStorageMessage } from '../../store/modules/utils/actions';

import { StoreType } from '../../store/types';

const STORAGE_MESSAGE_CLASS = 'storage-message';

const LANG_SWITCH = 'language-switch';

interface DispatchProps {
  acceptStorageMessage : () => void;
};

interface StateToProps {
};

interface Props extends StateToProps, DispatchProps, WithTranslation {};

const initialState = {
};

type State = Readonly<typeof initialState>;

class StorageMessage extends React.PureComponent<Props, State> {
  readonly state : State = initialState;

  render() {
    const { t } = this.props;

    return (
      <div
        className={STORAGE_MESSAGE_CLASS}
        id={STORAGE_MESSAGE_CLASS}
        role="dialog"
        >
        <div className="container">
          <div className={`${STORAGE_MESSAGE_CLASS}__text`}>
            {t('layout.storage-message.text')}
          </div>
          <button
            type="button"
            className="btn btn--transparent"
            onClick={() => this.props.acceptStorageMessage()}
          >{t('layout.storage-message.button')}</button>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
  acceptStorageMessage: () => dispatch(acceptStorageMessage()),
});

export default withTranslation()(connect(null, mapDispatchToProps)(StorageMessage));
