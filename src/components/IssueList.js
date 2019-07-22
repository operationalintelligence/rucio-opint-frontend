import React from "react";
import IssueListItem from './IssueListItem'
import { connect } from 'react-redux';
import { fetchIssues } from '../creators/issues';

class IssueList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleSelection  = (id) => {
        this.props.history.push('/issues/'+id);
    }

    componentDidMount(){
        this.props.dispatch(fetchIssues());
      }

    render(){
        return (
            <div className='issue-list'>
                <h1 className='issue-list-title'>List of recent issues</h1>
                    {
                        Object.values(this.props.issues.issues).map((issue) => (
                        <IssueListItem key={issue.message} handleSelection={this.handleSelection} {...issue}/>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    issues: state.issues
  });

export default connect(mapStateToProps)(IssueList);
