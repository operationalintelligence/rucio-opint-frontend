import React from "react";
import { Input } from 'antd';

const { Search } = Input;

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Search
                placeholder="Search issues"
                enterButton="Search"
                size="large"
                onSearch={this.props.handleSearch}
                className='search-bar'
            />
        )
    }
}

export default SearchBar;
