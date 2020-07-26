import React, { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'

export class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: [
            "purple",
            "violet",
            "pink",
            "magenta"
        ]
    }
    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(
            () => (<Box allColors= {this.props.allColors}/>
        ));
        return (
            <div className="BoxContainer">
                {boxes}
            </div>
        )
    }
}

export default BoxContainer
