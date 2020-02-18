import * as React from "react";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
// eslint disable @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { acceptStorageMessage } from '../../store/modules/utils/actions';

const STORAGE_MESSAGE_CLASS = 'storage-message';

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

  public render() : React.ReactNode {
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
            onClick={() : void => this.props.acceptStorageMessage()}
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
