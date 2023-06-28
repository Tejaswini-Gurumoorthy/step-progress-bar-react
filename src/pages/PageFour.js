import React from 'react'

function PageFour({onButtonClick}) {
  return (
    <div>
      <div>PageFour</div>
      <button onClick={onButtonClick("pagefive")}>Next</button>
    </div>

  )
}

export default PageFour