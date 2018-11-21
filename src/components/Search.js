import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        {this.props.searchType}: <input type="text" />
        <button>Search</button>
      </div>
    );
  }
}

export default Search;
