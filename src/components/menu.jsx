import React from 'react'
import { Link } from 'react-router-dom';
import links from '../links';

export default function Menu() {
  return (
    <div>
      <ul style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        listStyleType: 'none',
      }}>
        <li>
          <Link style={{
            textDecoration: 'none',
          }} to={links.total}>Total page</Link>
        </li>
        <li>
          <Link style={{
            textDecoration: 'none',
          }} to={links.first}>First page</Link>
        </li>
        <li>
          <Link style={{
            textDecoration: 'none',
          }} to={links.second}>Second page</Link>
        </li>
        <li>
          <Link style={{
            textDecoration: 'none',
          }} to={links.third}>Third page</Link>
        </li>
      </ul>
    </div>
  )
}
