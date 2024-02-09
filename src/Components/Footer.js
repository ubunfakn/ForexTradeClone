import React from 'react'

export default function Footer() {
  return (
    <div style={{ width: "calc(100% - 280px)", marginLeft: "280px",position: "fixed", bottom:"0", border:"2px solid lightgray", padding:"25px" }}>
      <div className="d-flex">
        <h6 className='text-secondary mt-1'>&copy; FOREX GROW Trader. All Rights Reserved</h6>
      </div>
    </div>
  )
}
