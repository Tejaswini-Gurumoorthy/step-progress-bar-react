import React from 'react'

function PageOne({onButtonClick}) {
  return (
    <div>
      <div>PageOne</div>
      <button onClick={onButtonClick("pagetwo")}>Next</button>
    </div>

  )
}

export default PageOne