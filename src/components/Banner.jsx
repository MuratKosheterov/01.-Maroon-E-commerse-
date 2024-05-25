import React from 'react'
import bgImage from '../images/bg-banner.png'
import hero from '../images/hero.png'
import Catalog from '../pages/Catalog'

function Banner() {
    return (
        <>
            <div style={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                color: 'white',
                textAlign: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                padding: '1rem',
                boxSizing: 'border-box',
                position: 'relative',
                zIndex: '1'
            }}  >
                <>

                    <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ' >

                        <div className='   text-start' >
                            <h1 className=' text-6xl font-medium leading-none text-[#122947] ' >
                                MAROON
                            </h1>
                            <p className=' text-lg font-normal text-[#122947]  py-10' >
                                Натуральная косметика
                                для бережного ухода за кожей
                            </p>
                            <button className=' border text-sm  text-[#122947] p-3 font-medium hover:scale-110 duration-200 ease-in  ' >
                                Подробнее
                            </button>
                        </div>
                        <div className=' mx-auto' >
                            <img src={hero} alt='hero' />
                        </div>
                    </div>
                </>
            </div>
            <Catalog />
        </>
    )
}

export default Banner