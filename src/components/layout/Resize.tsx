import * as React from "react";
import { connect } from 'react-redux';

import ReactResizeDetector from 'react-resize-detector';

import { DESIGN } from '../../store/constants';
import { resize } from '../../store/modules/utils/actions';
import ScreenHelper from '../../utils/_screen-helper';

interface DispatchProps {
  resize : (deviceType: string) => void;
};

interface StateToProps {
};

interface Props extends StateToProps, DispatchProps {};

type State = Readonly<typeof initialState>;

const initialState = {
};

class Resize extends React.PureComponent<Props, State> {
  readonly state : State = initialState;

  private getDeviceType = () => {
    if (ScreenHelper.isDesktop()) {
      return DESIGN.DEVICES_TYPES[0];
    } else if (ScreenHelper.isSM()) {
      return DESIGN.DEVICES_TYPES[1];
    } else {
      return DESIGN.DEVICES_TYPES[2];
    }
  }

  private onResize = () => {
    this.props.resize(this.getDeviceType());
  };

  public render() : React.ReactNode {
    return (
      <div className="resize">
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  resize: (deviceType) => dispatch(resize(deviceType)),
});

export default connect(null, mapDispatchToProps)(Resize);
