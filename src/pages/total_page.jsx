import React from 'react'
import Title from './Title';
import Board from './Board';
import ItemPage from './ItemPage';
import { useSelector } from 'react-redux';

export default function TotalPage() {
  const reducers = useSelector((state) => state);
  const slices = Object.keys(reducers);
  return (
    <>
      <Title title='total_page' />
      <Board>
        {slices.map((slice) => (
          <ItemPage reducer={slice} />
        ))}
      </Board>
    </>
  )
}