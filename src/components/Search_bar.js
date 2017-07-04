import React, { Component } from 'react';

class SearchBar extends Component{

  constructor(props){
      super(props);
      this.state = {
        term : ''
      }
  }

  onInputSearchChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render(){
    return(
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputSearchChange(event.target.value)}/>
      </div>
    );
  }
}

export default SearchBar;
