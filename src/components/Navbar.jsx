import React, { useState } from 'react'
import { links } from '../data/data'
import { Link } from 'react-router-dom'
import { AiOutlineShopping } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavbar } from '../redux/slices/navbarSlice';


function Navbar() {

    const dispatch = useDispatch()
    const { isNavbarOpen } = useSelector((state) => state.navbarOpen)
    console.log(isNavbarOpen);

    const {totalItems} = useSelector((state)=> state.cartReducer)
    console.log(totalItems);

    return (
        <div className=' absolute mx-auto w-full z-50 ' >
            <div className='container mx-auto py-3  flex items-center justify-between'>
                <div className=' flex items-center justify-between  gap-x-5'  >
                    <div onClick={() => dispatch(toggleNavbar())} className=' block md:hidden z-30'    >
                        {
                            isNavbarOpen ?
                                <RiCloseLargeFill className=' cursor-pointer  ' />
                                :
                                <RxHamburgerMenu className=' cursor-pointer ' />
                        }
                    </div>
                    <div>
                        <Link className='uppercase text-[#122947] font-semibold text-2xl cursor-pointer ' to={'/'} >
                            maroon
                        </Link>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-x-24 ' >
                    <ul className={`  absolute  w-full h-screen md:h-auto left-0  bg-white md:bg-inherit md:static flex flex-col md:flex-row items-center  gap-x-16 duration-500 ease-out ${isNavbarOpen ? 'top-0' : ' top-[-1490px]'} `} >
                        {links.map((link, index) => (
                            <li key={index} className=' text-base font-normal py-2 ' >
                                <Link to={link.url}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <Link to={'/cart'} >
                        <div className=' text-xl relative  ' >
                            <AiOutlineShopping />
                            <sup className=' absolute  -right-2  rounded-full text-white top-2 py-2 px-1 bg-red-600 ' >{totalItems}</sup>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar