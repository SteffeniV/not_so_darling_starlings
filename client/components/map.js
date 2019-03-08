import ReactDOM from "react-dom"
import {connect} from "react-redux"
import React, {Component} from "react"
import {fetchStateCounts} from "../store/starlings"
import axios from "axios"
import {Form, Button} from "semantic-ui-react"
import Slider from "react-rangeslider"
import USAMap from "react-usa-map"
import {VictoryContainer, VictoryChart, VictoryBar, VictoryAxis} from "victory"
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
      year: 0
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
      }
    }
  }
  handleOnChange = value => {
    this.setState({
      year: value
    })
  }
  handleOnChangeComplete = e => {
    this.props.fetchStateCount(this.state.year)
    // const data = this.createChartData(this.props.starlings)
    // this.setState({
    //   data: data
    // })
  }

  // createChartData = sightingsArr => {
  //   return sightingsArr.map(sighting => {
  //     return {sightings: sighting.data, year: this.state.year}
  //   })
  // }

  render() {
    const yearOptions = []
    for (let i = 1900; i <= 2016; i++) {
      yearOptions.push({key: i, text: i, value: i})
    }
    let {year} = this.state
    const dataForChart = this.props.starlings.length
      ? [
          {x: "CA", y: this.props.starlings[0].data},
          {x: "WA", y: this.props.starlings[1].data},
          {x: "AK", y: this.props.starlings[2].data},
          {x: "WY", y: this.props.starlings[3].data},
          {x: "IL", y: this.props.starlings[4].data},
          {x: "FL", y: this.props.starlings[5].data},
          {x: "NY", y: this.props.starlings[6].data}
        ]
      : null
    return (
      <div>
        <h1 className="year">NOT SO DARLING STARLINGS</h1>
        <div className="mapContainer">
          <USAMap
            onClick={this.mapHandler}
            className="map"
            customize={this.statesCustomConfig()}
          />
          {this.props.starlings.length ? (
            <div className="chart">
              <VictoryChart domainPadding={20}>
                <VictoryBar
                  style={{
                    data: {
                      fill: d => {
                        if (d.x === "NY") {
                          return "#5a98ce"
                        } else if (d.x === "IL") {
                          return "#73a84d"
                        } else if (d.x === "FL") {
                          return "#db6da9"
                        } else if (d.x === "CA") {
                          return "#aa75d6"
                        } else if (d.x === "WY") {
                          return "#efe77c"
                        } else if (d.x === "WA") {
                          return "#db8936"
                        } else {
                          return "#8e4f52"
                        }
                      }
                    }
                  }}
                  data={dataForChart}
                />
              </VictoryChart>
              <h2 className="year">{this.state.year}</h2>
            </div>
          ) : null}
        </div>
        <Slider
          value={year}
          orientation="horizontal"
          onChange={this.handleOnChange}
          min={1950}
          max={2015}
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
