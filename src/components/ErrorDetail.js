import React from "react";

class ErrorDetail extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render(){
        return(
            <p>Details of error: {this.props}</p>
        )
    }
}


export default ErrorDetail;
