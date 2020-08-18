import React from 'react';
import './board.component.css';
import Square from '../square/square.component';

class Board extends React.Component<{}, SquareStateData> {
    constructor(props: any) {
        super(props);
        this.state = {
            squareValue: Array(9).fill(null),
            xIsNext: true
        };

    }
    render() {
        const board = {
            row1: [1,2,3],
            row2: [1,2,3],
            row3: [1,2,3],
        }
        return (
            <div>
                <div className="board">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>

                <div className="fun-board">
                    {this.renderFuntionCompSquare(10)}
                    {this.renderFuntionCompSquare(11)}
                    {this.renderFuntionCompSquare(12)}
                </div>
            </div>
        )
    }

    handleClick(clickIndex: any) {
        const squares = this.state.squareValue.slice();
        console.log(squares[clickIndex]);
        if (!squares[clickIndex]) {
            squares[clickIndex] = this.state.xIsNext ? 'X' : 'O';
            this.setState(
                {
                    squareValue: squares,
                    xIsNext: !this.state.xIsNext
                }
            );
        }
    }

    renderSquare(i: any) {
        return <Square values={this.state.squareValue[i]} onClick={() => this.handleClick(i)} />;
    }

    renderFuntionCompSquare(i: any) {
        return <FunctionComponentSquare
            values={this.state.squareValue[i]}
            onClick={() => this.handleClick(i)} />
    }
}

export default Board;

export interface SquareStateData {
    squareValue: Array<any>;
    xIsNext: boolean,
}


function FunctionComponentSquare(newProps: any) {
    return (
        <button className="square square--red" onClick={() => newProps.onClick()}> {newProps.values}
        </button>
    );
}