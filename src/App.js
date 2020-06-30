import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Parent from './Parent';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Hello"
    }
  }

  handleClick = () => {
    this.setState({
      message: "Good-bye"

    })
  }
  
  render() {
    return (
      <div>
        Practice<br/>
        <Button />
        <Parent />
      </div>
    )
  }
}

