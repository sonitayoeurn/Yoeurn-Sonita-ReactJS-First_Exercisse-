import React from 'react'
import Product from './Product'
import Feedback from './Feedback'
export default function Main() {
  return (
    <div className='product' style={{ width: "350px", height: "400px", borderRadius: "14px"}}>
        <Product/>
        <Feedback/>
    </div>
  )
}
