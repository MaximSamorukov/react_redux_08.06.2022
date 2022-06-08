import { createSlice } from '@reduxjs/toolkit'

export const secondPageSlice = createSlice({
  name: 'second_page',
  initialState: {
    first_argument: 0,
    second_argument: 0,
    third_argument: 0,
    fourth_argument: 0,
    fifth_argument: 0,
  },
  reducers: {
    setFirstArgument: (state, action) => {
      return {
        ...state,
        first_argument: action.payload.value,
      }
    },
    setSecondArgument: (state, action) => {
      return {
        ...state,
        second_argument: action.payload.value,
      }
    },
    setThirdArgument: (state, action) => {
      return {
        ...state,
        third_argument: action.payload.value,
      }
    },
    setFourthArgument: (state, action) => {
      return {
        ...state,
        fourth_argument: action.payload.value,
      }
    },
    setFifthArgument: (state, action) => {
      return {
        ...state,
        fifth_argument: action.payload.value,
      }
    },
  }
})

export const { setFirstArgument, setSecondArgument, setThirdArgument, setFourthArgument, setFifthArgument } = secondPageSlice.actions

export default secondPageSlice.reducer