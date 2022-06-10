import React from 'react';
import Title from './Title';
import { useSelector, useDispatch } from 'react-redux';
import { setFirstArgument, setSecondArgument, setThirdArgument, setFourthArgument, setFifthArgument, setInitialState_firstPage } from '../store/slices/first_page';
import { Button } from '@mui/material';

export default function FirstPage() {
  const { first_argument, second_argument, third_argument, fourth_argument, fifth_argument } = useSelector((state) => state.firstPage);
  const dispatch = useDispatch();
  return (
    <>
      <Title title='first_page' />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '10px',
          marginTop: '10px',
          width: 300
        }}
      >
        <label htmlFor='first_argument'>first_argument</label>
        <input name='first_argument' value={first_argument} onChange={(e) => dispatch(setFirstArgument({ value: e.target.value }))} />

        <label htmlFor='second_argument'>second_argument</label>
        <input name='second_argument' value={second_argument} onChange={(e) => dispatch(setSecondArgument({ value: e.target.value }))} />

        <label htmlFor='third_argument'>third_argument</label>
        <input name='third_argument' value={third_argument} onChange={(e) => dispatch(setThirdArgument({ value: e.target.value }))} />

        <label htmlFor='fourth_argument'>fourth_argument</label>
        <input name='fourth_argument' value={fourth_argument} onChange={(e) => dispatch(setFourthArgument({ value: e.target.value }))} />

        <label htmlFor='fifth_argument'>fifth_argument</label>
        <input name='fifth_argument' value={fifth_argument} onChange={(e) => dispatch(setFifthArgument({ value: e.target.value }))} />
      </div>
      <Button
        onClick={() => {
          dispatch(setInitialState_firstPage())
        }}
      >
        Clear All
      </Button>
    </>
  )
}
