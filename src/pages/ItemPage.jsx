import React from 'react';
import { useSelector } from 'react-redux';
import { Paper } from '@mui/material';

export default function ItemPage({ reducer }) {
  const data = useSelector((state) => state[reducer]);
  const values = Object.entries(data);
  return (
    <Paper
      elevation={3}
      style={{
        width: '100%',
        height: '300px',
        margin: '10px',
        padding: '10px'
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
    </Paper>
  )
}
