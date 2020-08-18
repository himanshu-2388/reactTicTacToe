import React from 'react';
import './component-one.css';
import '../board/board.component';
class ComponentOne extends React.Component {
    render() {
        return (
            <div className="block">
                BLOCK
                <div className="block block__element">
                    ELEMENT
            </div>
                <div className="block block__element--modifer">
                    MODIFER
            </div>
        </div>

        );
    }
}
export default ComponentOne;
