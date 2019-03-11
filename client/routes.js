import React, {Component} from "react"
import {connect} from "react-redux"
import {withRouter, Route, Switch} from "react-router-dom"
import PropTypes from "prop-types"

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {}

  render() {
    return <Switch />
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {}
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {}
