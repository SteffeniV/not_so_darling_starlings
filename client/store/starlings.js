import axios from "axios"

//ACTION TYPES
export const SET_STARLING_DATA = "SET_STARLING_DATA"
export const SET_STARLING_SELECT_DATA = "SET_STARLING_SELECT_DATA"

//ACTION CREATORS
export const gotData = dataArr => ({
  type: SET_STARLING_DATA,
  dataArr
})
export const gotSelectData = dataArr => ({
  type: SET_STARLING_SELECT_DATA,
  dataArr
})

const initialState = {
  byState: [],
  all: []
}

//THUNKS
export const fetchStateCounts = year => async dispatch => {
  try {
    const {data: NYCount} = await axios.get(`/api/data/New York/${year}`)
    const {data: ILCount} = await axios.get(`/api/data/Illinois/${year}`)
    const {data: FLCount} = await axios.get(`/api/data/Florida/${year}`)
    const {data: TXCount} = await axios.get(`/api/data/Texas/${year}`)
    const {data: CACount} = await axios.get(`/api/data/California/${year}`)
    const {data: WYCount} = await axios.get(`/api/data/Wyoming/${year}`)
    const {data: WACount} = await axios.get(`/api/data/Washington/${year}`)
    const {data: AKCount} = await axios.get(`/api/data/Alaska/${year}`)
    const {data: NCCount} = await axios.get(`/api/data/North Carolina/${year}`)
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

export const fetchSelectedStates = (year, stateArr) => async dispatch => {
  try {
    const countArr = []
    await Promise.all(
      stateArr.map(async state => {
        const {data: count} = await axios.get(`/api/data/${state}/${year}`)
        countArr.push({[state]: count})
      })
    )
    dispatch(gotSelectData(countArr))
  } catch (err) {
    console.error(err)
  }
}

//REDUCER
export const stateCounts = (state = initialState, action) => {
  switch (action.type) {
    case SET_STARLING_DATA:
      return {...state, all: action.dataArr}
    case SET_STARLING_SELECT_DATA:
      return {...state, byState: action.dataArr}
    default:
      return state
  }
}
