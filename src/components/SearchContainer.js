import React, { Component } from 'react';
import Search from './Search';

class SearchContainer extends Component {
  render() {
    return (
      <div>
        <h4>Welcome!</h4>
        <Search searchType="Title" />
        <Search searchType="Content" />
      </div>
    );
  }
}

export default SearchContainer;
