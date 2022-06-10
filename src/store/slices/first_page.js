import { createSlice } from '@reduxjs/toolkit'

export const firstPageSlice = createSlice({
  name: 'first_page',
  initialState: {
    first_argument: 0,
    second_argument: 0,
    third_argument: 0,
    fourth_argument: 0,
    fifth_argument: 0,
  },
  reducers: {
    setInitialState_firstPage: () => {
      return {
        first_argument: 0,
        second_argument: 0,
        third_argument: 0,
        fourth_argument: 0,
        fifth_argument: 0,
      }
    },
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

export const { setFirstArgument, setSecondArgument, setThirdArgument, setFourthArgument, setFifthArgument, setInitialState_firstPage } = firstPageSlice.actions

export default firstPageSlice.reducer