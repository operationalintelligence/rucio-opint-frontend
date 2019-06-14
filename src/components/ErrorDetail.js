import React from "react";

class ErrorDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state={...props}
    }
    
    render(){
        return(
            <p>Details of error: </p>
        )
    }
}


export default ErrorDetail;
