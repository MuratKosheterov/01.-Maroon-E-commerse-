import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GrClose } from "react-icons/gr";
import { removeFromCart, increament, decreament } from '../redux/slices/cartSlice';


function Cart() {

    const { cartItems } = useSelector((state) => state.cartReducer)
    const { totalPrice } = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch()
    console.log(cartItems);

    const delivery = totalPrice * 0.12

    return (
        <div className=' container mx-auto py-16' >
            <h1 className=' text-4xl font-medium text-[#122947]  py-3 ' >Корзина</h1>
            {
                cartItems.length > 0 ?
                    cartItems.map((item) => {
                        return (
                            <div key={item.id} className=' py-5 grid grid-cols-6 gap-5 items-start border-b-2  ' >
                                <div>
                                    <img className=' size-32' src={item.img} alt="" />
                                    <p className='text-lg font-normal text-[#122947] mx-auto' >
                                        {item.organ}
                                    </p>
                                </div>
                                <div>
                                    <p className='text-lg font-normal text-[#122947] text-center' >
                                        $ {(item.price).toFixed(2)}
                                    </p>
                                </div>
                                <div className=' flex items-center justify-between border py-1 px-3  ' >
                                    <button onClick={() => dispatch(decreament(item))} className=' hover:bg-gray-300 px-5 duration-200 ease-in' >-</button>
                                    <p className='text-lg font-normal text-[#122947]' >
                                        {item.count}
                                    </p>
                                    <button onClick={() => dispatch(increament(item))} className=' hover:bg-gray-300 px-5 duration-200 ease-in' >+</button>
                                </div>
                                <div>
                                    <p className=' text-lg font-normal text-[#122947] text-center' >
                                        $ {(item.price * item.count).toFixed(2)}
                                    </p>
                                </div>
                                <div className=' p-3 mx-auto' >
                                    <GrClose onClick={() => dispatch(removeFromCart(item))} className=' cursor-pointer ' />
                                </div>
                            </div>
                        )
                    })
                    : <div className=' flex items-center justify-center h-[315px] ' >
                        <p className=' text-2xl font-semibold text-center' >
                            Your cart is empty yet...
                        </p>
                    </div>
            }

            <div className=' pt-10' >
                <h1 className=' text-4xl ' >Total</h1>
                <div className=' py-5' >
                    <div className=' flex items-center justify-between py-5'>
                        <p>
                            Товары
                        </p>
                        <p className=' text-lg font-medium text-[#122947] text-center' >
                            {/* $ {(cartItems.reduce((acc, item) => acc + (item.price * item.count), 0)).toFixed(2)} */}
                            $ {totalPrice.toFixed(2)}
                        </p>
                    </div>
                    <div className=' flex items-center justify-between py-5' >
                        <p>
                            Доставка
                        </p>
                        <p className=' text-lg font-medium text-[#122947] text-center' >
                            $ {(totalPrice * 0.12).toFixed(2)}
                        </p>
                    </div>
                    <div className=' flex items-center justify-between py-5'>
                        <p>
                            Итого
                        </p>
                        <p className=' text-lg font-medium text-[#122947] text-center' >
                            $  {(totalPrice + delivery).toFixed(2)}
                        </p>
                    </div>

                </div>
            </div>




        </div>
    )
}

export default Cart