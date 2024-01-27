import { CiBadgeDollar } from "react-icons/ci"; 
import { HiUserGroup } from "react-icons/hi"; 
import { FaGasPump } from "react-icons/fa"; 
import React from 'react'
import green from '../../assets/img/green.png'
import green2 from '../../assets/img/off.png'

import red from '../../assets/img/red.png'
import red2 from '../../assets/img/red2.png'

import blue from '../../assets/img/blue.png'
import blue2 from '../../assets/img/blue2.png'

import shadow from '../../assets/img/shadow.png'

import './animation.css'
import Word from "../../Components/Home/Word/Word";


const Animation = () => {
  return (
    <div className='bg-[hsl(42,100%,90%)] pb-8 '>

        <section>
            <div className="container mx-auto">
                <div className='content'>
                    <ul className='flex items-center justify-center gap-4'>
                      <li className='bg-[#FFF9EB] py-[16px] px-14 rounded-[12px] my-5 drop-shadow-xl cursor-pointer'>الطرومبات</li>
                      <li className='bg-[#FFF9EB] py-[16px] px-14 rounded-[12px] my-5 drop-shadow-xl cursor-pointer'>طلبيات العملاء</li>
                      <li className='bg-[#FFF9EB] py-[16px] px-14 rounded-[12px] my-5 drop-shadow-xl cursor-pointer'>الشراء الجديد</li>
                      <li className='bg-[#FFF9EB] py-[16px] px-14 rounded-[12px] my-5 drop-shadow-xl cursor-pointer'>المصروفات</li>
                      <li className='bg-[#FFF9EB] py-[16px] px-14 rounded-[12px] my-5 drop-shadow-xl cursor-pointer'>عملاء المحطة</li>
                      <li className='bg-[#FFF9EB] py-[16px] px-14 rounded-[12px] my-5 drop-shadow-xl cursor-pointer'>الموظفين</li>
                      <li className='bg-[#FFF9EB] py-[16px] px-14 rounded-[12px] my-5 drop-shadow-xl cursor-pointer'>النقدي</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
          <div className="container mx-auto">
            <div className="content mx-10 flex ">

              <div className="animation box-shad rounded-[16px] bg-[#FFF9EB] w-fit py-10 mt-10 px-12   ">

                <div>
                  <div className=' rounded-full w-fit mx-auto relative overflow-hidden '>
                    <img src={green2} alt="animate" />
                    <div className='imganimate absolute top-full right-[-500px] ' >
                            <img className='w-[800px] h-[120px] object-cover ' src={green} alt="" />
                      </div>
                    <div className='animate-opaci opacity-0 absolute z-50 top-[40px] left-[50px] text-white '>
                      <p>160cm</p>
                      <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="134" viewBox="0 0 12 134" fill="none"><path d="M0.729167 5.97852C0.729167 8.92403 3.11698 11.3118 6.0625 11.3118C9.00802 11.3118 11.3958 8.92403 11.3958 5.97852C11.3958 3.033 9.00802 0.645182 6.0625 0.645182C3.11698 0.645182 0.729167 3.033 0.729167 5.97852ZM5.0625 5.97852V184H7.0625V5.97852H5.0625Z" fill="white"/></svg>
                        <p className='mt-5'>52698 L</p>
                      </div>
                    </div>
                  </div>
                  <img src={shadow} alt="shadow" />
                </div>
                <svg className='my-10' xmlns="http://www.w3.org/2000/svg" width="200" height="2" viewBox="0 0 200 2" fill="none"><path d="M0 1H200" stroke="#C5CCE4" stroke-opacity="0.5" stroke-width="2"/></svg>
              
                <div>
                  <div className=' rounded-full w-fit mx-auto relative overflow-hidden '>
                    <img src={red} alt="animate" />
                    <div className='imganimate2 absolute top-full right-[-500px] ' >
                        <img className='w-[800px] h-[180px] object-cover ' src={red2} alt="" />
                    </div>
                      <div className='animate-opaci opacity-0 absolute z-50 top-[26px] left-[30px] text-white '>
                      <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="134" viewBox="0 0 12 134" fill="none"><path d="M0.729167 5.97852C0.729167 8.92403 3.11698 11.3118 6.0625 11.3118C9.00802 11.3118 11.3958 8.92403 11.3958 5.97852C11.3958 3.033 9.00802 0.645182 6.0625 0.645182C3.11698 0.645182 0.729167 3.033 0.729167 5.97852ZM5.0625 5.97852V184H7.0625V5.97852H5.0625Z" fill="white"/></svg>
                        <div className='flex flex-col'>
                          <p>160cm</p>
                          <p className='mt-5'>52698 L</p>
                        </div>
                      </div>
                    </div>
                  </div>
                    <img src={shadow} alt="shadow" />
                </div>

                <svg className='my-10' xmlns="http://www.w3.org/2000/svg" width="200" height="2" viewBox="0 0 200 2" fill="none"><path d="M0 1H200" stroke="#C5CCE4" stroke-opacity="0.5" stroke-width="2"/></svg>

                <div>
                  <div className=' rounded-full w-fit mx-auto relative overflow-hidden '>
                    <img src={blue} alt="animate" />
                    <div className='imganimate3 absolute top-full right-[-500px] ' >
                            <img className='w-[800px] h-[120px] object-cover ' src={blue2} alt="" />
                    </div>
                    <div className='animate-opaci opacity-0 absolute z-50 top-[20px] left-[35px] text-white '>
                      <p>186cm</p>
                      <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="134" viewBox="0 0 12 134" fill="none"><path d="M0.729167 5.97852C0.729167 8.92403 3.11698 11.3118 6.0625 11.3118C9.00802 11.3118 11.3958 8.92403 11.3958 5.97852C11.3958 3.033 9.00802 0.645182 6.0625 0.645182C3.11698 0.645182 0.729167 3.033 0.729167 5.97852ZM5.0625 5.97852V184H7.0625V5.97852H5.0625Z" fill="white"/></svg>
                        <p className='mt-5'>72698 L</p>
                      </div>
                    </div>
                  </div>
                  <img src={shadow} alt="shadow" />
                </div>
                  
              </div>

              <div className='details mx-auto mt-10'>
               <div className="btns flex items-center gap-5 justify-center">
                <button className="text-[#6B6C72] bg-white flex items-center gap-4 text-[20px] py-[16px] px-20 rounded-[12px] "> المصروفات <FaGasPump /> </button>
                <button className="text-[#6B6C72] bg-white flex items-center gap-4 text-[20px] py-[16px] px-20 rounded-[12px] ">العملاء <HiUserGroup /> </button>
                <button className="btnact text-white bg-[#F98C07] flex items-center gap-4 text-[20px] py-[16px] px-20 rounded-[12px] ">الخزانات <CiBadgeDollar /> </button>
               </div>

               <div className="Table rounded-[16px] bg-[#FFF9EB] text-end mt-12">
                  <h2 className="m-8 pt-3 text-[20px]">الخزانات</h2>
                  <table className="w-[100%] text-center">
                    <thead>
                      <tr>
                        <th><Word text="المواد" /></th>
                        <th><Word text="كمية الخزان" /></th>
                        <th><Word text="عيار الخزان" /></th>
                        <th><Word text="الكمية المباعة" /></th>
                        <th><Word text="الكمية المتبقية" /></th>
                        <th><Word text="عدد الطرومبات" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-6"><Word text="9" /></td>
                        <td><Word text="56841" /></td>
                        <td><Word text="021458361" /></td>
                        <td><Word text="120" /></td>
                        <td><Word text="021458361" /></td>
                        <td className="text-[#069A0C] font-[600]"><Word text="بنزين 91" /></td>
                      </tr>
                      <tr>
                        <td className="py-6"><Word text="5" /></td>
                        <td><Word text="56841" /></td>
                        <td><Word text="021458361" /></td>
                        <td><Word text="260" /></td>
                        <td><Word text="021458361" /></td>
                        <td className="text-[#FF023E] font-[600]"><Word text="بنزين 95" /></td>
                      </tr>
                      <tr>
                        <td className="py-6"><Word text="4" /></td>
                        <td><Word text="56841" /></td>
                        <td><Word text="021458361" /></td>
                        <td><Word text="158" /></td>
                        <td><Word text="021458361" /></td>
                        <td className="text-[#0683FF] font-[600] "><Word text="ديزل" /></td>
                      </tr>
                      
                    </tbody>
                  </table>
               </div>

              <div className="Quantity">
                <div className="boxs mt-10 flex gap-4">

                  <div className="box bg-white rounded-[16px] ">
                    <div className="py-1"></div>
                    <div className="makeShadow m-3 bg-[#FFF9EB] rounded-[10px] w-[280px] h-[9px] after:absolute after:bg-[#3C9EFF] after:rounded-[10px] after:w-[150px] after:h-[9px] "></div>
                    <div className="flex justify-between mx-7 pb-3">
                      <div className="flex items-center gap-3"><p className="text-[#A6A7AD]">لتر</p>256984</div>
                      <p className="relative after:absolute after:w-[8px] after:h-[8px] after:bg-[#3C9EFF] after:top-[50%] after:translate-y-[-50%] after:right-[-15px] after:rounded-full ">الكمية المتبقية</p>
                    </div>
                  </div>
                  <div className="box bg-white rounded-[16px] ">
                    <div className="py-1"></div>
                    <div className="makeShadow m-3 bg-[#FFF9EB] rounded-[10px] w-[280px] h-[9px] after:absolute after:bg-[#FF023E] after:rounded-[10px] after:w-[67px] after:h-[9px] "></div>
                    <div className="flex justify-between mx-7 pb-3">
                      <div className="flex items-center gap-3"><p className="text-[#A6A7AD]">لتر</p>256984</div>
                      <p className="relative after:absolute after:w-[8px] after:h-[8px] after:bg-[#FF023E] after:top-[50%] after:translate-y-[-50%] after:right-[-15px] after:rounded-full ">الكمية المتبقية</p>
                    </div>
                  </div>
                  <div className="box bg-white rounded-[16px] ">
                    <div className="py-1"></div>
                    <div className="makeShadow m-3 bg-[#FFF9EB] rounded-[10px] w-[280px] h-[9px] after:absolute after:bg-[#01C20A] after:rounded-[10px] after:w-[107px] after:h-[9px] "></div>
                    <div className="flex justify-between mx-7 pb-3">
                      <div className="flex items-center gap-3"><p className="text-[#A6A7AD]">لتر</p>256984</div>
                      <p className="relative after:absolute after:w-[8px] after:h-[8px] after:bg-[#069A0C] after:top-[50%] after:translate-y-[-50%] after:right-[-15px] after:rounded-full ">الكمية المتبقية</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="statistics box-shad bg-white mt-10 rounded-[16px] flex ">
      
                <div className="numbersLeft mb-5 pb-8 ms-7">
                  <svg className="mt-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.9955 13.5H12.0045M11.9955 17.5H12.0045M15.991 13.5H16M8 13.5H8.00897M8 17.5H8.00897" stroke="#818181" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/><path d="M17.5 2V6M6.5 2V6" stroke="#818181" stroke-width="2" stroke-linejoin="round"/><path d="M21 8C21 5.79086 19.2091 4 17 4H7C4.79086 4 3 5.79086 3 8V18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18V8Z" stroke="#818181" stroke-width="2" stroke-linejoin="round"/><path d="M3 9H21" stroke="#818181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <p className="mb-4 pt-[14px] pe-5 ">251896</p>
                    <p className="mb-4">251896</p>
                    <p className="mb-4">251896</p>
                    <p className="mb-4">251896</p>
                    <p className="mb-4">251896</p>
                    <p className="mb-4">251896</p>
                    <p className="mb-4">251896</p>
                    <p className="mb-4">251896</p>
                    <p>0</p>
                </div>

                <div className="Title ms-auto " >
                  <p className="flex gap-3 justify-end py-5 pe-8 ">
                  ديزل
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3" stroke="#6B6C72" stroke-width="2" stroke-linecap="round"/><path d="M13 10V21" stroke="#6B6C72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 13V21" stroke="#6B6C72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 13V20" stroke="#6B6C72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 7.98693C19.16 7.98693 17.1922 8.24252 15.8771 6.49346C14.3798 4.50218 11.6202 4.50218 10.1229 6.49346C8.80782 8.24252 6.84003 7.98693 5 7.98693H3" stroke="#6B6C72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  95
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3" stroke="#6B6C72" stroke-width="2" stroke-linecap="round"/><path d="M13 10V21" stroke="#6B6C72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 13V21" stroke="#6B6C72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 13V20" stroke="#6B6C72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 7.98693C19.16 7.98693 17.1922 8.24252 15.8771 6.49346C14.3798 4.50218 11.6202 4.50218 10.1229 6.49346C8.80782 8.24252 6.84003 7.98693 5 7.98693H3" stroke="#6B6C72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  91
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3" stroke="#79D540" stroke-width="2" stroke-linecap="round"/><path d="M13 10V21" stroke="#79D540" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 13V21" stroke="#79D540" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 13V20" stroke="#79D540" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 7.98693C19.16 7.98693 17.1922 8.24252 15.8771 6.49346C14.3798 4.50218 11.6202 4.50218 10.1229 6.49346C8.80782 8.24252 6.84003 7.98693 5 7.98693H3" stroke="#79D540" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    احصائيات الطرومبات 
                  </p>
                  <div className="statistics pe-8 relative">
                    <div className="flex items-center justify-between relative ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="327" viewBox="0 0 2 327" fill="none"><path d="M1.45703 0V326.056" stroke="#CCCCCC" stroke-dasharray="4 2"/></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="327" viewBox="0 0 2 327" fill="none"><path d="M1.45703 0V326.056" stroke="#CCCCCC" stroke-dasharray="4 2"/></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="327" viewBox="0 0 2 327" fill="none"><path d="M1.45703 0V326.056" stroke="#CCCCCC" stroke-dasharray="4 2"/></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="327" viewBox="0 0 2 327" fill="none"><path d="M1.45703 0V326.056" stroke="#CCCCCC" stroke-dasharray="4 2"/></svg>
                        <div className="rows absolute ">
                          <svg className="absolute top-[-167px] " xmlns="http://www.w3.org/2000/svg" width="848" height="2" viewBox="0 0 848 2" fill="none"><path d="M0.457031 1.02783H848" stroke="#CCCCCC" stroke-dasharray="4 2"/></svg>
                          <svg className="absolute top-[-80px] " xmlns="http://www.w3.org/2000/svg" width="848" height="2" viewBox="0 0 848 2" fill="none"><path d="M0.457031 1.02783H848" stroke="#CCCCCC" stroke-dasharray="4 2"/></svg>
                          <svg className="absolute top-0 " xmlns="http://www.w3.org/2000/svg" width="848" height="2" viewBox="0 0 848 2" fill="none"><path d="M0.457031 1.02783H848" stroke="#CCCCCC" stroke-dasharray="4 2"/></svg>
                          <svg className="absolute top-[80px] " xmlns="http://www.w3.org/2000/svg" width="848" height="2" viewBox="0 0 848 2" fill="none"><path d="M0.457031 1.02783H848" stroke="#CCCCCC" stroke-dasharray="4 2"/></svg>
                        </div>
                    </div>
                      <div className="">
                        <div className="w-[14px] h-[321px] bg-[#75D43BF7] rounded-[8px] absolute bottom-2 right-14"></div>
                        <div className="w-[14px] h-[137px] bg-[#75D43BF7] rounded-[8px] absolute bottom-2 right-[145px] "></div>
                        <div className="w-[14px] h-[183px] bg-[#75D43BF7] rounded-[8px] absolute bottom-2 right-[245px] "></div>
                        <div className="w-[14px] h-[112px] bg-[#75D43BF7] rounded-[8px] absolute bottom-2 right-[345px] "></div>
                        <div className="w-[14px] h-[52px] bg-[#75D43BF7] rounded-[8px] absolute bottom-2 right-[435px] "></div>
                        <div className="w-[14px] h-[229px] bg-[#75D43BF7] rounded-[8px] absolute bottom-2 right-[535px] "></div>
                        <div className="w-[14px] h-[263px] bg-[#75D43BF7] rounded-[8px] absolute bottom-2 right-[635px] "></div>
                        <div className="w-[14px] h-[52px] bg-[#75D43BF7] rounded-[8px] absolute bottom-2 right-[735px] "></div>
                        <div className="w-[14px] h-[162px] bg-[#75D43BF7] rounded-[8px] absolute bottom-2 right-[828px] "></div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="848" height="2" viewBox="0 0 848 2" fill="none"><path d="M0.457031 1.02783H848" stroke="#CCCCCC" stroke-dasharray="4 2"/></svg>
                  </div>
                  <div className="NumbersBottom flex items-center justify-around mt-2">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                  </div>

                </div>

              </div>
              </div>
            </div>
          </div>
        </section>


    </div>
  )
}

export default Animation