import Table from "./Table/table";
import TotalBtn from "./Total/totalBtn";
import Riyals from "./saudi riyals/riyals";
import Thead from "./theadTable/Thead";

export default function Home() {
    return (
        <>
            <nav>
                <div className="container mx-auto ">
                    <div className="flex items-center justify-between me-12 ">
                        <div className="bg-[#F98C07] py-8 px-12 text-white text-center text-[20px]  ">
                            <p>محطة الصحفى</p>
                            <p>El sahafi Gas Station</p>
                        </div>
                        <div>
                            <p className="text-[28px] font-[500] ">تقرير شامل</p>
                        </div>
                    </div>
                </div>
            </nav>


            <section className="home my-14">
                <div className="container mx-auto ">
                    <div className="content text-end me-11 ">
                        <h3 className="text-[24px] mb-10 text-black ">بيانات اساسية</h3>
                        <ul className="flex flex-row-reverse gap-16 me-3 text-[#464853] ">
                            <li>رقم الفرع <span className="me-7">000</span> </li>
                            <li> <span className="me-7">----</span> مسلسل الوردية </li>
                            <li> <span className="me-7">---</span> فترة الوردية</li>
                            <li> <span className="me-7">--</span>مسؤل الشيفت</li>
                            <li>التاريخ</li>
                            <li>1 نوفمبر 2023 - 30 نوفمبر 2023</li>
                        </ul>
                    </div>

                    <div className="content2 mx-14 text-center ">
                        <h3 className="mt-20 mb-12 text-[24px] text-end ">بيانات مالية</h3>
                        <div className="boxs flex flex-row-reverse justify-between ">
                            <div className="box1">
                                <p>المصروفات</p>
                                <div className="mt-10 text-[17px]">
                                    <Riyals bgColor="#FC808091" p="8px" borderRa="12px" />
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="129" viewBox="0 0 2 129" fill="none"><path d="M1 0V144" stroke="#C5CCE4" stroke-opacity="0.5" stroke-width="2"/></svg>
                            <div className="box2">
                                <p>ضرائب الشراء</p>
                                <div className="mt-10 text-[17px]">
                                    <Riyals />
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="129" viewBox="0 0 2 129" fill="none"><path d="M1 0V144" stroke="#C5CCE4" stroke-opacity="0.5" stroke-width="2"/></svg>
                            <div className="box3">
                                <p>المبيعات</p>
                                <div className="mt-10 text-[17px]">
                                    <Riyals bgColor="#9747FF42" p="8px" borderRa="12px" />
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="129" viewBox="0 0 2 129" fill="none"><path d="M1 0V144" stroke="#C5CCE4" stroke-opacity="0.5" stroke-width="2"/></svg>
                            <div className="box4">
                                <p>ضرائب البيع</p>
                                <div className="mt-10 text-[17px]">
                                    <Riyals />
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="129" viewBox="0 0 2 129" fill="none"><path d="M1 0V144" stroke="#C5CCE4" stroke-opacity="0.5" stroke-width="2"/></svg>
                            <div className="box5">
                                <p>المصروفات</p>
                                <div className="mt-10 text-[17px]">
                                    <Riyals  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home2">
                <div className="container mx-auto">
                    <div className="content text-end  ">
                        <h3 className="text-[26px] mb-6 me-12 ">تفاصيل المصروفات</h3>
                        <p className="relative ms-20 text-[22px] me-20 after:bg-black after:absolute after:w-[7px] after:h-[7px] after:top-[52%] after:right-[-20px] ">شراء المواد السولارية</p>
                        <div className="mx-20 mt-10">
                            <table className="w-[100%] text-center mx-auto   ">
                                <thead className="bg-[#F4F2F2] text-[#464853] ">
                                    <tr>
                                        <th className="py-4">الفرق بالكمية</th>
                                        <th>اجمالي التبخر</th>
                                        <th>اجمالي الشراء</th>
                                        <th>الفرق بالكمية</th>
                                        <th>التبخر</th>
                                        <th>الكمية الفعلية</th>
                                        <th>سعر اللتر</th>
                                        <th>---</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Table text="بنزين ممتاز 91" color="#30F738" />
                                    <Table text="بنزين ممتاز 95" color="#FE4444" />
                                    <Table text="ديزل" color="#0551E3" />
                                </tbody>
                            </table>
                            <div className="border-b-[2px] border-[#a0aaca80]">
                                <tr>
                                    <td><div className="flex justify-center items-center me-16 my-4 bg-[#F4F2F2] py-3 px-16 gap-5 rounded-[16px] "> <span className="text-[20px]"><Riyals /></span>الإجمالي</div></td>
                                    <td><div className="flex justify-center items-center gap-3 me-28 "><span><Riyals /></span>مصروفات حكومية</div></td>
                                    <td><div className="flex justify-center items-center gap-3 me-32 "><span><Riyals /></span>مصروفات المحطة</div></td>
                                    <td><div className="flex justify-center items-center gap-3">مصروفات داخلية</div></td>
                                </tr>
                            </div>
                        </div>
                    </div>
                    <div className="Total flex gap-5 justify-center mt-8 ">
                        <TotalBtn  text="قيمة ضريبة الشراء المطلوبة" bgColor="#DD6602" />
                        <TotalBtn text="أجمالي المصروفات بالضريبة"  bgColor="black" />
                    </div>
                    <div className="mt-5 w-[81%] text-center mx-auto ">
                        <TotalBtn text="صافي  المصروفات" bgColor="black" />
                    </div>
                </div>
            </section>

            <section className="home3">
                <div className="container mx-auto">

                    <div className="content">
                        <div className="title text-end ">
                            <h3 className="mt-20 mb-6 me-12 text-[24px] font-[500]">تفاصيل المبيعات</h3>
                            <p className="relative ms-20 text-[22px] me-20 after:bg-black after:absolute after:w-[7px] after:h-[7px] after:top-[52%] after:right-[-20px]">بيع المواد السولارية</p>
                        </div>
                        <div className="mx-20">
                            <table className="w-[100%] text-center mx-auto mt-12 ">
                                <Thead text="اسم المادة" text2="سعر اللتر " text3="الكمية الفعلية" text4="اجمالي الشراء" bgColor="#F4F2F2" />
                                <tbody>
                                    <tr className="border-b-[2px] border-[#a0aaca80] ">
                                        <td><div className="flex justify-center items-center gap-4 py-7">لتر <span>123</span></div></td>
                                        <td><div className="flex justify-center items-center gap-4 py-7">لتر <span>123456</span></div></td>
                                        <td>00</td>
                                        <td className="text-[#30F738] font-[600] ">بنزين ممتاز 91</td>
                                    </tr>
                                    <tr className="border-b-[2px] border-[#a0aaca80] ">
                                        <td><div className="flex justify-center items-center gap-4 py-7">لتر <span>123</span></div></td>
                                        <td><div className="flex justify-center items-center gap-4 py-7">لتر <span>123456</span></div></td>
                                        <td>00</td>
                                        <td className="text-[#FE4444] font-[600] ">بنزين ممتاز 91</td>
                                    </tr>
                                    <tr className="border-b-[2px] border-[#a0aaca80] ">
                                        <td><div className="flex justify-center items-center gap-4 py-7">لتر <span>123</span></div></td>
                                        <td><div className="flex justify-center items-center gap-4 py-7">لتر <span>123456</span></div></td>
                                        <td>00</td>
                                        <td className="text-[#0551E3] font-[600] ">ديزل</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="Total flex gap-5 justify-center mt-8 ">
                        <TotalBtn  text="قيمة ضريبة البيع المطلوبة" bgColor="#DD6602" />
                        <TotalBtn text="أجمالي المبيعات بالضريبة"  bgColor="black" />
                    </div>
                    </div>
                </div>
            </section>

            <section className="home4 my-20 ">
                <div className="container mx-auto">
                    <div className="content">
                        <p className="relative text-end ms-20 text-[22px] me-20 after:bg-black after:absolute after:w-[7px] after:h-[7px] after:top-[52%] after:right-[-20px] ">واردات سيارات المحطة</p>
                        <div className="mx-20">
                            <table className="w-[100%] text-center mx-auto mt-12 ">
                                <Thead text="اسم السيارة" text2="عدد المشاوير" text3="قيمة الايجار" text4="اجمالي المشاوير" bgColor="#F4F2F2" />
                                <tbody>
                                <tr className="border-b-[2px] border-[#a0aaca80] ">
                                            <td><div className="flex justify-center items-center gap-4 py-7">ريال<span>123</span></div></td>
                                            <td><div className="flex justify-center items-center gap-4 py-7">ريال<span>123456</span></div></td>
                                            <td>00</td>
                                            <td className="text-[#30F738] font-[600] ">بنزين ممتاز 91</td>
                                        </tr>
                                        <tr className="border-b-[2px] border-[#a0aaca80] ">
                                            <td><div className="flex justify-center items-center gap-4 py-7">ريال <span>123</span></div></td>
                                            <td><div className="flex justify-center items-center gap-4 py-7">ريال<span>123456</span></div></td>
                                            <td>00</td>
                                            <td className="text-[#FE4444] font-[600] ">بنزين ممتاز 91</td>
                                        </tr>
                                        <tr className="border-b-[2px] border-[#a0aaca80] ">
                                            <td><div className="flex justify-center items-center gap-4 py-7">ريال <span>123</span></div></td>
                                            <td><div className="flex justify-center items-center gap-4 py-7">ريال<span>123456</span></div></td>
                                            <td>00</td>
                                            <td className="text-[#0551E3] font-[600] ">ديزل</td>
                                        </tr>
                                        <tr>
                                            <td><Riyals /></td>
                                            <td><div className="my-5 bg-[#F4F2F2] py-4 px-0 rounded-[16px]"><Riyals /></div></td>
                                            <td>--</td>
                                            <td className="py-5">الاجمالى</td>
                                        </tr>
                                </tbody>
                            </table>
                            <div className="border-b-[2px] border-[#a0aaca80] ">
                                <tr>
                                </tr>
                            </div>
                            <div className="buttons mt-6">
                                <div className="mb-6">
                                    <TotalBtn text="صافي  المبيعات" bgColor="black" />
                                </div>
                                <TotalBtn text="صافي الارباح" bgColor="black" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home5">
                <div className="container mx-auto">
                    <div className="content">
                        <p className="relative text-end ms-20 text-[22px] me-20 after:bg-black after:absolute after:w-[7px] after:h-[7px] after:top-[52%] after:right-[-20px] ">الضرائب</p>
                        <div className="mx-20">
                            <table className="w-[100%] text-center mx-auto mt-12">
                            <Thead text="طرق الدفع" text2="الضرائب المطلوبة" text3="الضرائب الدفوعة" text4="المتبقي" bgColor="#DD6602" Color="white" />
                                <tbody>
                                    <tr className="border-b-[2px] border-[#a0aaca80] ">
                                        <td className="py-7"><Riyals /></td>
                                        <td><Riyals /></td>
                                        <td><Riyals /></td>
                                        <td>ضريبة الشراء</td>
                                    </tr>
                                    <tr className="border-b-[2px] border-[#a0aaca80] ">
                                        <td className="py-7"><Riyals /></td>
                                        <td><Riyals /></td>
                                        <td><Riyals /></td>
                                        <td>ضريبة البيع</td>
                                    </tr>
                                    <tr className="border-b-[2px] border-[#a0aaca80] bg-black text-white ">
                                        <td className="py-7"><Riyals /></td>
                                        <td><Riyals /></td>
                                        <td><Riyals /></td>
                                        <td>الاجمالي</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>



            <section className="home6 my-20">
                <div className="container mx-auto">
                    <div className="content">
                        <p className="relative text-end ms-20 text-[22px] me-20 after:bg-black after:absolute after:w-[7px] after:h-[7px] after:top-[52%] after:right-[-20px] ">الفواتير والاوراق الرسمية</p>
                        <div className="mx-20">
                            <table className="w-[100%] text-center mx-auto mt-12">
                                <Thead text="م" text2="الوردية" text3="القسم" text4="الملف" bgColor="#CBFFEA" Color="#464853" />
                                <tbody>
                                    <tr className="border-b-[2px] border-[#a0aaca80] ">
                                        <td className="py-7 text-[#6CB6FF] ">عرض الملف</td>
                                        <td>عملاء المحطة</td>
                                        <td>الصباحية</td>
                                        <td>01</td>
                                    </tr>
                                    <tr className="border-b-[2px] border-[#a0aaca80] ">
                                        <td className="py-7 text-[#6CB6FF] ">عرض الملف</td>
                                        <td>شراء جديد</td>
                                        <td>الصباحية</td>
                                        <td>02</td>
                                    </tr>
                                    <tr className="border-b-[2px] border-[#a0aaca80] ">
                                        <td className="py-7 text-[#6CB6FF] ">عرض الملف</td>
                                        <td>الموظفين</td>
                                        <td>الصباحية</td>
                                        <td>03</td>
                                    </tr>
                                </tbody>
                            </table>
                                <div className="border-b-[2px] border-[#a0aaca80] w-[1380px] flex items-center gap-40 text-[20px] justify-center bg-black text-white ">
                                    <td className="py-7 ">3</td>
                                    <td>الاجمالي</td>
                                </div>
                        </div>
                    </div>
                </div>
            </section>



        </>

    )
}

