import React from 'react'
import { RiFacebookLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";

function Contacts() {
    return (
        <div className=' container mx-auto bg-[#F4F1ED]  my-10 py-10 grid grid-cols-1 md:grid-cols-2  '>
            <div className=' p-10' >
                <h1 className=' text-3xl font-medium text-[#122947]' >
                    Контакты
                </h1>
                <div className=' flex flex-col items-start justify-between gap-5' >
                    <div>
                        <h2 className=' text-lg font-medium text-[#122947]' >
                            Адрес
                        </h2>
                        <p className=' text-lg font-normal text-[#122947]' >
                            Санкт-Петербург, <br /> ул. Большая Конюшенная, 19
                        </p>
                    </div>
                    <div>
                        <h2 className=' text-lg font-medium text-[#122947]' >
                            Телефон
                        </h2>
                        <p className=' text-lg font-normal text-[#122947]' >
                            +7 (923) 888-90-60
                        </p>
                    </div>
                    <div>
                        <h2 className=' text-lg font-medium text-[#122947]' >
                            E-mail
                        </h2>
                        <p className=' text-lg font-normal text-[#122947]' >
                            info@maroon.ru
                        </p>
                    </div>
                </div>
                <div className=' flex items-center  gap-x-10 py-5  ' >
                    <RiFacebookLine className=' cursor-pointer' />
                    <FiInstagram className=' cursor-pointer' />
                    <LuTwitter className=' cursor-pointer' />
                </div>
            </div>
            <div className='' >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94174.21872990955!2d59.521430122914005!3d42.47147256274513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9a36ea33d7cf%3A0x8454c68babd0b936!2z0J3Rg9C60YPRgSwg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQsNGA0LDQutCw0LvQv9Cw0LrRgdGC0LDQvSwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1716358823797!5m2!1sru!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

        </div>
    )
}

export default Contacts