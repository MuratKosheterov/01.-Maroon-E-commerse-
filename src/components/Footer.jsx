import React from 'react'
import { RiFacebookLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";

function Footer() {
    return (
        <div className=' bg-[#F4F1ED]' >
            <div className=' container mx-auto' >
                <div className=' flex items-center justify-between' >
                    <h1 className=' uppercase text-[#122947] font-semibold text-2xl' >
                        Maroon
                    </h1>
                    <div className=' flex items-center justify-between gap-x-10 py-5' >
                        <RiFacebookLine />
                        <FiInstagram />
                        <LuTwitter />
                    </div>
                </div>
                <div className=' flex items-center justify-between border-t py-6 '  >
                    <p className=' text-[#959595] text-xs font-normal ' >2020 Все права защищены</p>
                    <p className=' text-[#959595] text-xs font-normal ' >Политика конфиденциальности</p>
                </div>
            </div>
        </div>
    )
}

export default Footer