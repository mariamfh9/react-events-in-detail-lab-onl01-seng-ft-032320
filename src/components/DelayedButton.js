// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    doStuff = (event) => {
        event.persist()
         setTimeout(() => {
            // let arr = [event.clientX, event.clientY] 
            this.props.onDelayedClick(event)}, this.props.delay)
    }
    
    
    render() {
        return (
            <div>
                <button onClick={this.doStuff}>Delayed Button</button>
            </div>
        )
    }
}