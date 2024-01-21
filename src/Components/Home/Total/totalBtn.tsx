import React, { FunctionComponent } from 'react'


interface Total {
    text? : string ,
    bgColor? : string ,
}




const TotalBtn : FunctionComponent<Total> = ({text , bgColor}) => {
  return (
    <div className='flex items-center gap-20 text-white justify-center py-5 px-20 ' style={{backgroundColor : bgColor}}>
        <p className='text-[18px] flex items-center gap-6 '>ريال<span>123456789</span></p>
        <span className='text-[20px]'>{text}</span>
    </div>
  )
}

export default TotalBtn