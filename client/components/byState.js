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

export class ByState extends Component {
  constructor() {
    super()
    this.state = {
      year: 0,
      selectedStates: [],
      stateFill: {}
    }
    //this.handleSubmit = this.handleSubmit.bind(this)
  }

  stateDict = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming"
  }

  mapHandler = event => {
    this.setState({
      selectedStates: this.state.selectedStates.concat(
        this.stateDict[event.target.dataset.name]
      ),
      stateFill: {
        ...this.state.stateFill,
        [event.target.dataset.name]: {fill: "#4071c4"}
      }
    })
  }

  statesCustomConfig = () => {
    return this.state.stateFill
  }

  handleOnChange = value => {
    this.setState({
      year: value
    })
  }
  handleOnChangeComplete = e => {
    this.props.fetchSelectedStates(this.state.year, this.state.selectedStates)
  }

  render() {
    const yearOptions = []
    for (let i = 1900; i <= 2016; i++) {
      yearOptions.push({key: i, text: i, value: i})
    }
    let {year} = this.state
    const dataForChart = this.props.starlingsByState.length
      ? this.props.starlingsByState.map(starling => {
          return {
            x: this.stateDict[Object.keys(starling)],
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
              <Button
                value="Refresh Page"
                onClick={() => window.location.reload()}
              >
                Reset
              </Button>
              <img src="animal-1295607.svg" />
              <VictoryChart
                domainPadding={20}
                animate={{duration: 500, easing: "bounce"}}
              >
                <VictoryStack>
                  <VictoryBar
                    // style={{
                    //   data: {
                    //     // eslint-disable-next-line complexity
                    //     fill: d => {
                    //       switch (d.x) {
                    //         case "NY":
                    //           return "#5a98ce"
                    //         case "IL":
                    //           return "#73a84d"
                    //         case "FL":
                    //           return "#db6da9"
                    //         case "TX":
                    //           return "#204360"
                    //         case "CA":
                    //           return "#aa75d6"
                    //         case "WY":
                    //           return "#efe77c"
                    //         case "WA":
                    //           return "#db8936"
                    //         case "AK":
                    //           return "#8e4f52"
                    //         default:
                    //           return "#c60505"
                    //       }
                    //     }
                    //     // eslint-disable-next-line complexity
                    //     // opacity: d => {
                    //     //   if(d.y < 100) {
                    //     //     return
                    //     //   }
                    //     // }
                    //   }
                    // }}
                    // // domain={{y: [0, 60000]}}
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
