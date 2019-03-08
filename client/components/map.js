import ReactDOM from "react-dom"
import {connect} from "react-redux"
import React, {Component} from "react"
import {fetchStateCounts} from "../store/starlings"
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
// const data = [
//   {quarter: 1, earnings: 13000},
//   {quarter: 2, earnings: 16500},
//   {quarter: 3, earnings: 14250},
//   {quarter: 4, earnings: 19000}
// ]

export class Map extends Component {
  constructor() {
    super()
    this.state = {
      year: 0,
      prevData: []
    }
    //this.handleSubmit = this.handleSubmit.bind(this)
  }
  mapHandler = event => {
    console.log(event.target.dataset.name)
  }

  statesCustomConfig = () => {
    return {
      NY: {
        fill: "#5a98ce"
      },
      IL: {
        fill: "#73a84d"
      },
      FL: {
        fill: "#db6da9"
      },
      TX: {
        fill: "#204360"
      },
      CA: {
        fill: "#aa75d6"
      },
      WY: {
        fill: "#efe77c"
      },
      WA: {
        fill: "#db8936"
      },
      AK: {
        fill: "#8e4f52"
      },
      NC: {
        fill: "#c60505"
      }
    }
  }
  handleOnChange = value => {
    this.setState({
      year: value
    })
  }
  handleOnChangeComplete = e => {
    this.setState({
      prevData: this.props.starlings
    })
    this.props.fetchStateCount(this.state.year)
  }

  render() {
    const prevYear = this.state.prevData.length
      ? this.state.prevData
      : [
          {data: null},
          {data: null},
          {data: null},
          {data: null},
          {data: null},
          {data: null},
          {data: null},
          {data: null},
          {data: null}
        ]
    const yearOptions = []
    for (let i = 1900; i <= 2016; i++) {
      yearOptions.push({key: i, text: i, value: i})
    }
    let {year} = this.state
    const dataForChart = this.props.starlings.length
      ? [
          {x: "NY", y: this.props.starlings[0].data},
          {x: "IL", y: this.props.starlings[1].data},
          {x: "FL", y: this.props.starlings[2].data},
          {x: "TX", y: this.props.starlings[3].data},
          {x: "CA", y: this.props.starlings[4].data},
          {x: "WY", y: this.props.starlings[5].data},
          {x: "WA", y: this.props.starlings[6].data},
          {x: "AK", y: this.props.starlings[7].data},
          {x: "NC", y: this.props.starlings[8].data}
        ]
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
          />
          {this.props.starlings.length ? (
            <div className="chart">
              <img src="animal-1295607.svg" />
              <VictoryChart
                domainPadding={20}
                animate={{duration: 500, easing: "bounce"}}
              >
                <VictoryStack>
                  <VictoryBar
                    style={{
                      data: {
                        // eslint-disable-next-line complexity
                        fill: d => {
                          switch (d.x) {
                            case "NY":
                              return "#5a98ce"
                            case "IL":
                              return "#73a84d"
                            case "FL":
                              return "#db6da9"
                            case "TX":
                              return "#204360"
                            case "CA":
                              return "#aa75d6"
                            case "WY":
                              return "#efe77c"
                            case "WA":
                              return "#db8936"
                            case "AK":
                              return "#8e4f52"
                            default:
                              return "#c60505"
                          }
                        }
                        // eslint-disable-next-line complexity
                        // opacity: d => {
                        //   if(d.y < 100) {
                        //     return
                        //   }
                        // }
                      }
                    }}
                    // domain={{y: [0, 60000]}}
                    data={dataForChart}
                  />
                </VictoryStack>
              </VictoryChart>
              <h1 className="year">{this.state.year}</h1>
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
            value={year}
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
    starlings: state.stateCounts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchStateCount: year => dispatch(fetchStateCounts(year))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Map)
