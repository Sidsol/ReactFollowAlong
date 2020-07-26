import React, { Component } from 'react'
import Coin from './Coin'
import {choice} from './helpers.js'

export class CoinFlipper extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg"} 
        ]
    };
    constructor(props) {
        super(props)
    
        this.state = {
             nFlips: 0,
             nHeads: 0,
             nTails: 0,
             coinFace: null
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return { 
                coinFace: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
            }
        })
    }
    handleClick(){
        this.flipCoin();
    }
    render() {
        return (
            <div className="CoinContainerd">
                <h2>Let's flip a coin!</h2>
                <div className="CoinFlipper-coin">
                    {this.state.coinFace && <Coin info={this.state.coinFace}/>}
                </div>
                <button onClick={this.handleClick}>Flip Meee</button>
                <p>Out of {this.state.nFlips}, there have been {this.state.nHeads} heads, and {this.state.nTails} tails.</p>
            </div>
        )
    }
}

export default CoinFlipper