import React, { Component } from 'react'
import App from './App.js'

class BaseApp extends Component {
  newInformation(){
    console.log("Context");
  }

  render() {
    const number = 2;
    const title = "Show property for app component!. ";
    
    console.log(this.props);
    return (
      //class attribute name change className
      <div className="App-header">
        Hello Word!!
        {/* label for instead htmlFor */}
        <label htmlFor=""> bla bla..</label>
        {/* Used with js code {} in jsx format. */}
        <h1>{number}</h1> 
       
        {/* call component */}
        <App title={title} information={this.newInformation} />;
      </div>
    )
  }
}

export default BaseApp