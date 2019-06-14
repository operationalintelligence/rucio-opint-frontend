import React from "react";

class ErrorDetail extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(this.props);
    }
    render(){
        return(
            <p>Details of error: {this.props.match.params.error}</p>
        )
    }
}


export default ErrorDetail;
