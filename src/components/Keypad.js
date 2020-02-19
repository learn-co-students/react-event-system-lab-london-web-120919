// Code Keypad Component Here
import React, { Component } from 'react'
export default class Keypad extends Component {
    keypUpEventHandler = () => {
        console.log('Entering password...')
    }
    render(){
        return(
            <div>
                <h1>HI</h1>
                <input type="password" onKeyUp={this.keypUpEventHandler}></input>
            </div>
        )
    }

}