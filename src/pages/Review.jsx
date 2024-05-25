import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../data/data';
import Contacts from '../components/Contacts';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';


function Review() {

    const navigate = useNavigate()
    const { id } = useParams();
    const product = products.find((item)=> {
        return item.id === parseInt(id);
    })
    console.log(product);

    const dispatch = useDispatch()
    

    return (
        <>
        <div className=' container  grid grid-cols-1 md:grid-cols-2 items-center mx-auto py-44 '>
            <div className=' mx-auto' >
                <img className=' hover:scale-125 duration-200 ease-in'  src={product.img} alt="image" />
            </div>
            <div>
                <div className=' py-10' >
                    <h1 className=' text-3xl font-medium text-[#122947]' >
                        {product.type}
                    </h1>
                    <p className=' text-base font-normal text-[#9A9DA0] ' >
                        {product.organ}
                    </p>
                </div>
                <div className=' py-5' >
                    <p className=' text-base font-normal text-[#122947]]' >
                        {product.description}
                    </p>
                </div>
                <div className=' py-5' >
                    Объем: {product.volume}
                </div>
                <div className=' flex items-center  py-3 gap-10' >
                    <p className=' text-[26px] text-[#122947] font-medium ' >
                        $ {product.price}
                    </p>
                    <button onClick={()=> dispatch(addToCart(product))}  className=' border px-4 py-2 text-base font-medium hover:scale-110 duration-200 ease-in ' >Добавить на карта</button>
                    <button onClick={() => navigate(-1)}  className=' border px-4 py-2   hover:scale-110 duration-200 ease-in bg-red-600 text-white ' >Назад</button>
                </div>
            </div>
            
        </div>
        <Contacts/>
        </>
    )
}

export default Review