import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component{

  state = {
    search: ''
  };

  inputChanged = e =>
  {
    //console.log(e.target.value);

    this.setState({
      search:e.target.value

    });

  }

  searchImage = () =>
  {
    //console.log("Basarili");
    this.props.onSearchImage(this.state.search);
  }

  

  render()
  {

    return (
      <div className="search-bar-container ui input">
              <input type="text" onKeyPress={(e) => {
                if(e.key === 'Enter') /* onKeyPress metodu Search içerisinde Enter tuşu ile input girilmesini sağlıyor */
                {
                  this.searchImage();
                }
              }} onChange={this.inputChanged.bind(this)} placeholder="Search..."/>
                <button className="ui icon button" onClick={this.searchImage}>
                    <i className="search icon"></i>
                </button>
      </div>
  
    )

  }
  
}

export default SearchBar;
