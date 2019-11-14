import React from "react";
import queryString from 'query-string'
import { connect } from 'react-redux';

class CERNLoginSuccess extends React.Component {

    componentDidMount() {
        const params = queryString.parse(this.props.location.search)
        console.log(params.code);
    }

    render(){
        return null; 
    }
}

const mapStateToProps = (state) => (
    {
        token: state.auth.token,
        username: state.auth.username,
        error: state.auth.error
    });

export default connect(mapStateToProps)(CERNLoginSuccess);
