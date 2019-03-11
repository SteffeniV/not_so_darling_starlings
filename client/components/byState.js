import ReactDOM from "react-dom"
import {connect} from "react-redux"
import React, {Component} from "react"
import {fetchStateCounts, fetchSelectedStates} from "../store/starlings"
import axios from "axios"
import {Form, Button} from "semantic-ui-react"
import Slider from "react-rangeslider"
import USAMap from "react-usa-map"
import {
  VictoryContainer,
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryStack
} from "victory"
import {stateDict, oppStateDict} from "../stateDict"

export class ByState extends Component {
  constructor() {
    super()
    this.state = {
      byStateYear: 0,
      selectedStates: [],
      stateFill: {}
    }
  }

  mapHandler = event => {
    this.setState({
      selectedStates: this.state.selectedStates.concat(
        stateDict[event.target.dataset.name]
      ),
      stateFill: {
        ...this.state.stateFill,
        [event.target.dataset.name]: {fill: "#000000"}
      }
    })
  }

  statesCustomConfig = () => {
    return this.state.stateFill
  }

  handleOnChange = value => {
    this.setState({
      byStateYear: value
    })
  }
  handleOnChangeComplete = e => {
    this.props.fetchSelectedStates(
      this.state.byStateYear,
      this.state.selectedStates
    )
  }

  render() {
    const yearOptions = []
    for (let i = 1900; i <= 2016; i++) {
      yearOptions.push({key: i, text: i, value: i})
    }
    let {year} = this.state.byStateYear

    const dataForChart = this.props.starlingsByState.length
      ? this.props.starlingsByState.map(starling => {
          return {
            x: oppStateDict[Object.keys(starling)],
            y: starling[Object.keys(starling)]
          }
        })
      : null
    return (
      <div className="body">
        <h1 className="year">NOT SO DARLING STARLINGS</h1>
        <div className="mapContainer">
          <USAMap
            onClick={this.mapHandler}
            className="map"
            customize={this.statesCustomConfig()}
            width={500}
            height={500}
          />

          {this.props.starlingsByState.length ? (
            <div className="chart">
              {/* <Button
                value="Refresh Page"
                onClick={() => window.location.reload()}
              >
                Reset
              </Button> */}
              <img src="animal-1295607.svg" />
              <VictoryChart
                domainPadding={20}
                animate={{duration: 500, easing: "bounce"}}
              >
                <VictoryStack>
                  <VictoryBar data={dataForChart} />
                </VictoryStack>
              </VictoryChart>
              <h1 className="year">{year}</h1>
            </div>
          ) : (
            <div className="chart">
              <img src="animal-1295607.svg" />
              <h4>Slide to see how many starlings were spotted each year!</h4>
            </div>
          )}
        </div>
        <div>
          <h3>Slide to choose a year</h3>
          <Slider
            value={this.state.byStateYear}
            orientation="horizontal"
            onChange={this.handleOnChange}
            min={1950}
            max={2015}
            onChangeComplete={this.handleOnChangeComplete}
          />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    starlingsByState: state.stateCounts.byState
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchStateCount: year => dispatch(fetchStateCounts(year)),
    fetchSelectedStates: (year, stateArr) =>
      dispatch(fetchSelectedStates(year, stateArr))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ByState)
