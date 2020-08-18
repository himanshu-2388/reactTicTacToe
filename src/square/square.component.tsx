import React from 'react';
import './square.component.css';
import { SquareProps, SquareState } from './square.interface';

class Square extends React.Component<SquareProps, SquareState> {
    render() {
        return (
                <button className="square" onClick={() => this.props.onClick()}> {this.props.values}
                </button>

        );
    }
}

export default Square;
