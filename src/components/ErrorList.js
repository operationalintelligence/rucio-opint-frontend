import React from "react";
import ErrorListItem from './ErrorListItem'

const ErrorList = (props) => {

    return (
        <div>
            <h1>List of recent errors</h1>
                {[1,2,3,4].map((info) => (
                    <ErrorListItem />
                ))}
        </div>
    );
}

export default ErrorList;