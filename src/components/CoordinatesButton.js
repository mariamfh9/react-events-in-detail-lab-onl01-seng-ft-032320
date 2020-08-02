// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    callCallback = (event) => {
        let arr =([event.clientX, event.clientY])
        this.props.onReceiveCoordinates(arr)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.callCallback}>Button</button>
            </div>
        )
    }
}