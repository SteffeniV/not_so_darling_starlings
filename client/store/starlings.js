import axios from "axios"

//ACTION TYPES
export const SET_STARLING_DATA = "SET_STARLING_DATA"

//ACTION CREATORS
export const gotData = dataArr => ({
  type: SET_STARLING_DATA,
  dataArr
})

//THUNKS
// const states = [
//   'New York',
//   'Illinois',
//   'Florida',
//   'Texas',
//   'California',
//   'Wyoming',
//   'Washington',
//   'Alaska'
// ]

export const fetchStateCounts = year => async dispatch => {
  try {
    const NYCount = await axios.get(`/api/data/New York/${year}`)
    const ILCount = await axios.get(`/api/data/Illinois/${year}`)
    const FLCount = await axios.get(`/api/data/Florida/${year}`)
    const TXCount = await axios.get(`/api/data/Texas/${year}`)
    const CACount = await axios.get(`/api/data/California/${year}`)
    const WYCount = await axios.get(`/api/data/Wyoming/${year}`)
    const WACount = await axios.get(`/api/data/Washington/${year}`)
    const AKCount = await axios.get(`/api/data/Alaska/${year}`)
    const NCCount = await axios.get(`/api/data/North Carolina/${year}`)
    const countArr = [
      NYCount,
      ILCount,
      FLCount,
      TXCount,
      CACount,
      WYCount,
      WACount,
      AKCount,
      NCCount
    ]
    dispatch(gotData(countArr))
  } catch (err) {
    console.error(err)
  }
}

//REDUCER
export const stateCounts = (state = [], action) => {
  switch (action.type) {
    case SET_STARLING_DATA:
      return action.dataArr
    default:
      return state
  }
}
