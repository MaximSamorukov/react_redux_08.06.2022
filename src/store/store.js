import { configureStore } from '@reduxjs/toolkit'
import firstPageReducer from './slices/first_page';
import secondPageReducer from './slices/second_page';
import thirdPageReducer from './slices/third_page';

export default configureStore({
  reducer: {
    firstPage: firstPageReducer,
    secondPage: secondPageReducer,
    thirdPage: thirdPageReducer,
  }
})