import React from 'react';
import './item.css';

const Item = ({text, value, color}) => {
  return (
    <div className='i'>
        <div className='i-left' >{text}</div>
        <div className='i-right' style={{color: `${color}`}}>{value}</div>
    </div>
  )
}

export default Item