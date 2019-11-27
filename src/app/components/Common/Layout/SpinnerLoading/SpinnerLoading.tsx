import * as React from 'react';
import './spinnerLoading.scss';

type SpinnerLoadingProps = {
  isLoading: boolean;
};

export default class SpinnerLoading extends React.Component<SpinnerLoadingProps> {
  render() {
    return (
      <div className="overlay">
        <div className="wrapBall">
          <div className="wBall" id="wBall_1"><div className="wInnerBall" /></div>
          <div className="wBall" id="wBall_2"><div className="wInnerBall" /></div>
          <div className="wBall" id="wBall_3"><div className="wInnerBall" /></div>
          <div className="wBall" id="wBall_4"><div className="wInnerBall" /></div>
          <div className="wBall" id="wBall_5"><div className="wInnerBall" /></div>
        </div>
      </div>
    );
  }
}