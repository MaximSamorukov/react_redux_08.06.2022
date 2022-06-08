import React from 'react'

export default function Board({ children }) {
  return (
    <div
      style={{
        width: '100%',
        paddingTop: 20,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}
    >
      { children }
    </div>
  )
};
