import React from "react";
import TransferIssueListItem from './TransferIssueListItem'
import SearchBar from './SearchBar'
import { connect } from 'react-redux';
import { fetchIssues } from '../creators/issues';
import { updateSearchText } from '../actions/issues';

class TransferIssueList extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    handleSelection  = (id) => {
        this.props.history.push('/issues/'+id);
    }

    componentDidMount(){
        this.props.dispatch(fetchIssues('transfer'));
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
                        <TransferIssueListItem key={issue.message + issue.src_site + issue.dst_site} handleSelection={this.handleSelection} {...issue}/>
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    let issues = state.issues.issues;
    const searchText = state.issues.searchText;
    if (issues){
        issues = issues.filter((issue) => (issue.message.toLowerCase() + ' ' + issue.src_site.toLowerCase() + ' ' + issue.dst_site.toLowerCase())
                                            .includes(searchText.toLowerCase()));
    }
    return {
        issues: issues
    };
    
}

export default connect(mapStateToProps)(TransferIssueList);
