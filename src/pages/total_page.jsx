import React from 'react'
import Title from './Title';
import Board from './Board';
import ItemPage from './ItemPage';
import links from '../links';

export default function TotalPage() {
  return (
    <>
      <Title title='total_page' />
      <Board>
        <ItemPage slice={links.first} />
        <ItemPage slice={links.second} />
        <ItemPage slice={links.third} />
      </Board>
    </>
  )
}