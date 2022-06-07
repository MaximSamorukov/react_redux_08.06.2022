import React from 'react'
import { Link } from 'react-router-dom';

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
          }} to='first_page'>First page</Link>
        </li>
        <li>
          <Link style={{
            textDecoration: 'none',
          }} to='second_page'>Second page</Link>
        </li>
        <li>
          <Link style={{
            textDecoration: 'none',
          }} to='third_page'>Third page</Link>
        </li>
      </ul>
    </div>
  )
}
