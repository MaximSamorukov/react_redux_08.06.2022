import React from 'react'

export default function Title({ title }) {
  return (
    <div
      style={{
        width: '100%',
        textAlign: 'center',
        fontSize: '20px',
        height: '30px',
        lineHeight: '20px',
        backgroundColor: '#dbfddb',
        padding: 10,
      }}
    >
      { title }
    </div>
  )
}