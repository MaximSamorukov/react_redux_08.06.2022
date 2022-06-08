import React from 'react';

export default function ItemPage({ slice }) {
  return (
    <div
      style={{
        border: '2px solid black',
        width: '100%',
        height: '300px',
        margin: '10px'
      }}
    >
      {slice}
    </div>
  )
}
