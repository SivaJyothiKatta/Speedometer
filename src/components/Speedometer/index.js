// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    this.setState(prevCount =>
      prevCount.count < 200 ? {count: prevCount.count + 10} : {count: 200},
    )
  }

  onDecrement = () => {
    const {count} = this.state
    this.setState(prevCount =>
      prevCount.count > 0 ? {count: prevCount.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="speedometer-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-image"
        />
        <h3 className="speedometer-sub-heading">
          Speed is Speed is {count}mph
        </h3>
        <p className="speedometer-description">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div className="speedometer-button-container">
          <button
            type="button"
            className="speedometer-accelerate"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="speedometer-apply-brake"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
