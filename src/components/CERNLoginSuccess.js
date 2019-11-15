import React from "react";
import queryString from 'query-string';
import API from '../config/api';
import { connect } from 'react-redux';
import { doCERNLogin } from "../creators/auth";

class CERNLoginSuccess extends React.Component {

    componentDidMount() {
        const params = queryString.parse(this.props.location.search)
        API.post('auth/rest-auth/cern/', {
            code: params.code,
            access_token: ''
          })
          .then(res => {
                console.log('Success ', res);
                this.props.dispatch(doCERNLogin(res.data));
                if (! this.props.error){
                    this.props.history.push('/');
                }

          })
          .catch(error => {
                console.log('Error ', error);
                this.props.error = error;
          })
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
