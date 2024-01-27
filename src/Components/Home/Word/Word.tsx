import React, { FunctionComponent } from 'react'

interface wordEdit {
    text? : string
}


const Word : FunctionComponent<wordEdit> = ({text}) => {
  return (
    <div>{text}</div>
  )
}

export default Word