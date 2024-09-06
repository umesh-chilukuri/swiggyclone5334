import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";



const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items)

     const dispatch=useDispatch();

     const handleClearCart=()=>{
        dispatch(clearCart())
     }



    return(
    <div className="text-center m-4 p-4">
       <h1 className="text-2xl font-bold">
        cart
       </h1>
       <div className="w-6/12 m-auto">
       <button className="p-2 bg-black rounded-lg text-white"
        onClick={handleClearCart}
       >
        clearCart</button>
        {cartItems.length===0 && <h3>enter any items into the cart</h3>}
       <ItemList items={cartItems}/>
       </div>


    </div>)
}


export default Cart