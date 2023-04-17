import React from 'react'
import {FaStar } from 'react-icons/fa';
export default function Feedback() {
  return (
    <div style={{padding: "15px"}}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <h4>User Feedback</h4>
            <div style={{color: "gold"}}>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>

        </div>
        <p style={{textAlign: "center", marginTop: "10px"}}>
        I don’t normally write reviews of products unless I think it’s worthwhile for you guys reading it – whether that be things you may not have heard of, things you’d find interesting.
        </p>
    </div>
  )
}
