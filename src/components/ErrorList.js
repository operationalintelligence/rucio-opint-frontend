import React from "react";
import ErrorListItem from './ErrorListItem'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchErrors } from '../actions/fetchErrors';

class ErrorList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleSelection  = (id) => {
        this.props.history.push('/errors/'+id);
    }

    componentDidMount(){
        const {fetchErrors} = this.props;
        fetchErrors();
      }

    render(){
        return (
            <div className='error-list'>
                <h1 className='error-list-title'>List of recent errors</h1>
                    {
                        Object.values(this.props.errors.errors).map((error) => (
                        <ErrorListItem key={error.message} handleSelection={this.handleSelection} {...error}/>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
  });

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchErrors: fetchErrors
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ErrorList);
