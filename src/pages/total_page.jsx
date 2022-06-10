import React from 'react'
import Title from './Title';
import Board from './Board';
import ItemPage from './ItemPage';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { setInitialState_firstPage } from '../store/slices/first_page';
import { setInitialState_secondPage } from '../store/slices/second_page';
import { setInitialState_thirdPage } from '../store/slices/third_page';

export default function TotalPage() {
  const reducers = useSelector((state) => state);
  const dispatch = useDispatch();
  const slices = Object.keys(reducers);
  return (
    <>
      <Title title='total_page' />
      <Board>
        {slices.map((slice) => (
          <ItemPage reducer={slice} />
        ))}
      </Board>
      <Button
        onClick={() => {
          dispatch(setInitialState_firstPage());
          dispatch(setInitialState_secondPage());
          dispatch(setInitialState_thirdPage());
        }}
      >
        Clear All
      </Button>
    </>
  )
}