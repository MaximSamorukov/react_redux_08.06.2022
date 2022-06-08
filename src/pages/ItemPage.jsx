import React from 'react';
import { useSelector } from 'react-redux';

export default function ItemPage({ reducer }) {
  const data = useSelector((state) => state[reducer]);
  const values = Object.entries(data);
  return (
    <div
      style={{
        border: '2px solid black',
        width: '100%',
        height: '300px',
        margin: '10px'
      }}
    >
      {reducer}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifycontent: 'flex-start',
          marginTop: '10px'
        }}
      >
        {values.map(([key, value]) => (
          <div
            style={{
              width: '100%',
              height: '30px',
            }}
          >
            <span>{key}</span>: <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
