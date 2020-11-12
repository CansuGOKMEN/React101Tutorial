import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Form from './Form.js'

class App extends Component {
  //data type definition use prop-types library.
  static propTypes ={
    title : PropTypes.string
  }

  render() {
    console.log(this.props); //show property for app component. app is inherit for component.
    const { title } = this.props; //title property defined.
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Form information={this.props.information}/>
          <p>
            {title}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>

    );
  }
}
// Can also be defined outside of class.
// App.propTypes ={
//   title : PropTypes.string
// }

export default App
