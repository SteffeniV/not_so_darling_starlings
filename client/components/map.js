import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import React, {Component} from 'react'
import {fetchStateCounts} from '../store/starlings'
import axios from 'axios'
import {Form, Button} from 'semantic-ui-react'
import Slider from 'react-rangeslider'
import USAMap from 'react-usa-map'

export class Map extends Component {
  constructor() {
    super()
    this.state = {
      year: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  mapHandler = event => {
    console.log(event.target.dataset.name)
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.fetchStateCount(2001)
    //console.log(data)
    // const NYCount = await axios.get(`/api/data/New York/${1999}`)
    // console.log(NYCount)
  }
  handleOnChange = value => {
    this.setState({
      year: value
    })
  }
  handleOnChangeComplete = e => {
    this.props.fetchStateCount(this.state.year)
  }

  render() {
    const yearOptions = []
    for (let i = 1900; i <= 2016; i++) {
      yearOptions.push({key: i, text: i, value: i})
    }
    let {year} = this.state
    return (
      <div>
        <USAMap onClick={this.mapHandler} />
        <Slider
          value={year}
          orientation="horizontal"
          onChange={this.handleOnChange}
          min={1900}
          max={2016}
          onChangeComplete={this.handleOnChangeComplete}
        />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    starlings: state.stateCounts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchStateCount: year => dispatch(fetchStateCounts(year))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Map)
