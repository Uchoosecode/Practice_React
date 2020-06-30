import React, { Component } from 'react'

export default class Button extends Component {
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
            Button.js<br/>{this.state.message}
            <button onClick={this.handleClick}>
              Click!
            </button>;
          </div>
        )
      }
    }
