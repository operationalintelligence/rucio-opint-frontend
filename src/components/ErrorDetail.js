import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getErrorById } from '../actions/fetchErrors';
import ErrorDetailAction from './ErrorDetailAction'

class ErrorDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: undefined}
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentDidMount() {
        const {getErrorById} = this.props;
        const id = this.props.match.params.error;
        getErrorById(id);
    }

    shouldComponentRender() {
        const {pending} = this.props.pending;
        if(pending === false) return false;
        return true;
    }
        
    render(){
        if(!this.shouldComponentRender()) return (<div></div>)
        const ret = (  
            <div>
                Possible Reason<br/>
                Proposed actions<br/>
                Source =>
                Destination<br/>
                Took Actions Button<br/>
                <br/>
                Share/Ticket buttons (?)<br/>
            </div>
    );
        return(
            <ErrorDetailAction error={this.props.error}></ErrorDetailAction>
        )
    }
}

const mapStateToProps = (state) => (
    {error: state.errors.cerror,
     pending: state.errors.pending
    });

const mapDispatchToProps = dispatch => bindActionCreators({
    getErrorById: getErrorById
}, dispatch)
  
export default connect(mapStateToProps, mapDispatchToProps)(ErrorDetail);
