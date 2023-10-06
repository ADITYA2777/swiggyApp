import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItems from './FoodItems'
import { clearCart, removeItems } from '../helper/CerateSlice'

const Cart = () => {
    //    const CartItems = useSelector(store=>store.Cart)

    const dispatch = useDispatch()
    const handlerClearCart = () => {
        dispatch(clearCart()) 
    }
    const handlerRemoverrCart = () => {
        dispatch(removeItems()) 
    }
  return (
    <div>
      <h1>CartItems {Cart.length}</h1>
      <button
        className="p-2 m-5 bg-green-500 text-black"
        onClick={()=>handlerClearCart()}
      >
        ClaerCart
      </button>
      <button
        className="p-2 m-5 bg-red-500 text-black"
        onClick={()=>handlerRemoverrCart()}
      >
        remover
      </button>
      <FoodItems {...Cart[0]} />
    </div>
  );
}

export default Cart