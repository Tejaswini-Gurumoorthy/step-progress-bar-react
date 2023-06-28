import React from 'react'

function PageTwo({onButtonClick}) {
  return (
    <div>
      <div>PageTwo</div>
      <button onClick={onButtonClick("pagethree")}>Next</button>
    </div>

  )
}

export default PageTwo