import React, { Component } from 'react'
import "./WinClick.css"

class WinClick extends Component {
    state = { clicked: false }
    handleClick = e => {
        this.setState({ clicked: true })
    }
    randomNumber = () => (Math.floor(Math.random() * 10 + 1))
    render() {
        const rand = this.randomNumber()
        let title;
        if (rand === 7) {
            title = <div className='Click'>
                <h1>{`Your number is ${rand}`}</h1>
                <h2>You Win!</h2>
            </div>
        } else {
            title = <div className='Click'>
                <h1>{this.state.clicked ? `Your number is ${rand}` : 'Number is 1'}</h1>
                <button onClick={this.handleClick}>Random Number</button>
            </div>
        }
        return (
            <div>
                {title}
            </div>
        )
    }
}

export default WinClick