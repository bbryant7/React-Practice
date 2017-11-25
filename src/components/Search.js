import React, { Component } from 'react';


class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: "",
      name: "guest"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleInputChange(e){
    this.setState({term:e.target.value});
    console.log(this.state.term);

  }

  handleClickEvent(e){
    this.setState({name:e.target.value})
  }
  render() {
    return (
      <div className="Seach">
        <input value={this.state.term} placeholder="I &hearts; Unicorns" onChange={this.handleInputChange} />
        <button> Search </button>
        <p> The Value is: {this.state.term}</p>

        <input placeholder="enter your unicorn name &hearts;"/>
        <button onClick={this.handleClickEvent} value={this.state.name} > submit </button>

        <h1> Hey {this.state.name}</h1>
      </div>
    );
  }


}

export default Search;
