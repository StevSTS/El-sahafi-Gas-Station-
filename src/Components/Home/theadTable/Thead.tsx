import React, { FunctionComponent } from 'react'

interface TheadT {
    text? : string ,
    text2? : string ,
    text3? : string ,
    text4? : string ,
    bgColor? : string,
    Color? : string ;
}

const Thead : FunctionComponent<TheadT> = ({text , text2 , text3 , text4 , bgColor , Color}) => {
  return (
    <thead style={{backgroundColor : bgColor , color : Color}}>
        <tr>
            <th className='py-4'>{text4}</th>
            <th>{text3}</th>
            <th>{text2}</th>
            <th>{text}</th>
        </tr>
    </thead>
  )
}

export default Thead