import React from 'react'
import { FunctionComponent } from 'react';

interface Details {
    bgColor? : string  ,
    p? : string ,
    borderRa? : string ;
}

const Riyals : FunctionComponent<Details> = ({bgColor , p , borderRa}) => {
  return (
    <div  style={{
      backgroundColor : bgColor , padding: p , borderRadius : borderRa}} className="flex items-center justify-center gap-6"><span>ريال</span>123456</div>
  )
}

export default Riyals