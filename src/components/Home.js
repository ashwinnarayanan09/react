import React, { Component } from 'react';

class Home extends Component {

 constructor(value){
   super(value);
   this.state = {name:"hello"};
 }

  render() {
    return (
        <div className="jumbotron">
          <h2>Spectac Rekrytering och Bemanning</h2>
          <h3>{this.state.name}</h3>
        </div>
    );
  }
}

export default Home;
