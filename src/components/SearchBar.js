import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };
  inputOnChange = (event)=>{
    this.setState ({term : event.target.value});
  }

  onFormSubmit =(e)=>{
    e.preventDefault();
    this.props.onFormSubmit(this.state.term)
  }
  render() {
    return (
      <div className=" ui segment search-bar">
        <form  onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video search</label>
            <input 
            type="text" 
            value={this.state.term}
            onChange={this.inputOnChange}
            >

            </input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
