import React from 'react'

function PageThree({onButtonClick}) {
  return (
    <div>
      <div>PageThree</div>
      <button onClick={onButtonClick("pagefour")}>Next</button>
    </div>

  )
}

export default PageThree