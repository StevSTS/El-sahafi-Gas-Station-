import React, { FunctionComponent } from 'react'


interface GasT {
    text? : string;
    color? : string;
}



const Table : FunctionComponent<GasT> = ({text , color}) => {
  return (
    <>
        <tr className="border-b-[2px] border-[#a0aaca80] ">
            <td><div className="flex justify-center items-center gap-3">ريال <span>123</span></div></td>
            <td><div className="flex justify-center items-center gap-3">ريال <span>123456</span></div></td>
            <td><div className="flex justify-center items-center gap-3">ريال <span>123456</span></div></td>
            <td><div className="flex justify-center items-center gap-3">لتر <span>123</span></div></td>
            <td><div className="flex justify-center items-center gap-3">لتر <span>123</span></div></td>
            <td><div className="flex justify-center items-center gap-3">لتر <span>123456</span></div></td>
            <td>00</td>
            <td className="py-7 font-[500] " style={{color: color}}>{text}</td>
        </tr>
    </>
  )
}

export default Table