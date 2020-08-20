import React from 'react';
import Axios from 'axios';

import './component-one.css';
import '../board/board.component';
import { JsonSampleResponse, ResponseState } from './component-one.interface';
class ComponentOne extends React.Component<{}, ResponseState> {
    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/todos";
        Axios.get(url).then((response: any) => {

            this.fetchResponse(response)
        });
    }

    fetchResponse(data: any) {
        const jsonResponse: Array<JsonSampleResponse> = data.data;
        jsonResponse.map( (values:JsonSampleResponse) => {
            return (<ShowToDoListStatus title={values.title} completed={values.completed}/>)
        })
    }

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

function ShowToDoListStatus(showList: any) {
    return (
        <ul>
            <li><b> {showList.title}</b> | {showList.completed}</li>
        </ul>
    )
}
