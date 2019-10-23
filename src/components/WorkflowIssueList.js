import React from "react";
import WorkflowIssueListItem from './WorkflowIssueListItem'
import SearchBar from './SearchBar'
import { connect } from 'react-redux';
import { fetchWorkflowIssues } from '../creators/workflowIssues';
import { updateSearchText } from '../actions/workflowIssues';

class IssueList extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    handleSelection  = (id) => {
        this.props.history.push('/issues/'+id);
    }

    componentDidMount(){
        this.props.dispatch(fetchWorkflowIssues());
    }
    
    handleSearch(e){
        this.props.dispatch(updateSearchText(e));
    }

    render(){
        return (
            <div className='issue-list'>
                <h1 className='issue-list-title'>List of recent issues</h1>
                <SearchBar handleSearch={this.handleSearch}/>
                    {
                        Object.values(this.props.issues).map((issue) => (
                        <WorkflowIssueListItem key={issue.message + issue.src_site + issue.dst_site} handleSelection={this.handleSelection} {...issue}/>
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    let issues = state.workflowIssues.issues;
    const searchText = state.workflowIssues.searchText;
    if (issues){
        issues = issues.filter((issue) => (issue.message.toLowerCase() + ' ' + issue.workflow.toLowerCase())
                                            .includes(searchText.toLowerCase()));
    }
    return {
        issues: issues
    };
    
}

export default connect(mapStateToProps)(IssueList);
