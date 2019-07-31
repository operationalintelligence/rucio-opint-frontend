import React from "react";
import { connect } from 'react-redux';
import { fetchIssueById } from '../creators/issues';
import IssueDetailAction from './IssueDetailAction'
import IssueDetailFeedback from './IssueDetailFeedback'

class IssueDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {issue: undefined, clicked:false}
    }

    componentDidMount() {
        const id = this.props.match.params.issue;
        this.props.dispatch(fetchIssueById(id));
        console.log(this.props);
    }


    handleClick = () => {this.setState(() => ({ clicked:true }))}

    render(){
        return(
            this.state.clicked ? 
                <IssueDetailFeedback issue={this.props.issue} />
                : 
                <IssueDetailAction issue={this.props.issue} handleClick={this.handleClick}/>
        )
    }
}

const mapStateToProps = (state) => (
    {issue: state.issues.issue,
     pending: state.issues.pending
    });

export default connect(mapStateToProps)(IssueDetail);
