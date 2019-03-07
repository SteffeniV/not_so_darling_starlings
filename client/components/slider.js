import React, {Component} from 'react'
import Slider from 'react-rangeslider'

class YearSlider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      year: 0
    }
  }

  handleOnChange = value => {
    this.setState({
      year: value
    })
  }

  render() {
    let {year} = this.state
    return (
      <Slider
        value={year}
        orientation="horizontal"
        onChange={this.handleOnChange}
        min={1900}
        max={2016}
      />
    )
  }
}

export default YearSlider
