import React from 'react'
import { products } from '../data/data'
import { Link } from 'react-router-dom'
import Contacts from '../components/Contacts'
import { useDispatch, useSelector } from 'react-redux'
import { filterOpen } from '../redux/slices/filterSlice'
import { setFilter } from '../redux/slices/cartSlice'



function Catalog() {
  const { filter } = useSelector((state) => state.cartReducer)
  const { isFilterOpen } = useSelector((state) => state.filterReducer)
  const dispatch = useDispatch()




  return (
    <div className=' container mx-auto py-16' >
      <div className=' flex items-center justify-between' >
        <h1 className=' text-4xl font-medium text-[#122947]  py-3 ' >Каталог</h1>
        <button onClick={() => dispatch(filterOpen())} className=' border px-5 py-2 text-base font-medium hover:scale-110 duration-200 ease-in ' >Фильтр</button>
      </div>
      <div className={` duration-500 ease-in ${isFilterOpen ? "" : "hidden"}   `} >
        <div className=' flex items-center justify-evenly py-10  ' >
          <button onClick={()=> dispatch(setFilter("all"))}  className=' px-4 py-2  border hover:scale-110 duration-200 ease-in rounded-2xl ' >Все</button>
          <button onClick={()=> dispatch(setFilter("Крем"))} className=' px-4 py-2  border hover:scale-110 duration-200 ease-in rounded-2xl' >Пудра</button>
          <button onClick={()=> dispatch(setFilter("Пудра"))} className=' px-4 py-2  border hover:scale-110 duration-200 ease-in rounded-2xl' >Мыло</button>
          <button onClick={()=> dispatch(setFilter("Маска"))} className=' px-4 py-2  border hover:scale-110 duration-200 ease-in rounded-2xl' >Крем</button>
          <button onClick={()=> dispatch(setFilter("Мыло"))} className=' px-4 py-2  border hover:scale-110 duration-200 ease-in rounded-2xl' >Маска</button>
        </div>
      </div>
      <div className=' py-5 flex flex-wrap  gap-10 ' >
        {
          products.filter((item) => {
            if (filter === "all") {
              return item;
            }
            else {
              return filter  ===  item.category;
            }
          }).map((product) => {
            return (
              <div key={product.id} className=' mx-auto relative duration-500 ease-in '  >
                <Link to={`/${product.id}`} >
                  <img src={product.img} alt="" />
                </Link>
                <div className=' absolute bottom-5 w-full px-5 ' >
                  <div className=' flex items-center justify-between ' >
                    <p className=' text-base font-medium text-[#122947] ' >{product.type}</p>
                    <p className=' text-xs font-medium text-[#122947]' >{product.price} $</p>
                  </div>
                  <div className=' flex items-center justify-between' >
                    <p className=' text-xs text-[#9A9DA0]' >{product.organ}</p>
                    <p className=' text-xs text-[#9A9DA0]' >{product.volume}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <Contacts />
    </div>
  )
}

export default Catalog;