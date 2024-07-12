import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../reducer/cartSlice";
import CartItems from "./CartItems";


const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    //console.log(cartItems);
    const dispatch = useDispatch();
    const clickCartItemDeleted = () => {
          dispatch(clearCart());
    }
    return (
        <div className="">
            <h1 className="text-center font-bold m-4 p-4">Cart</h1>
            <div className="text-center">
                <button className="bg-black rounded-lg font-bold text-white p-2 my-2" onClick={clickCartItemDeleted}>Clear Cart</button>
            </div>
            <div className="w-6/12 justify-center mx-auto">
                <CartItems items={cartItems}/>
            </div>
        </div>
    );
}

export default Cart;