import { useState } from "react";
import EachCategory from "./CartItems";
import { IMAGE_URL } from "../utils/imagesStore";
import { useDispatch } from "react-redux";
import { addItems } from "../reducer/cartSlice";

const RestaurantCategories = ({data,showCategory,setShowIndex}) => {
    //const [showCategory, setShowCategory] = useState(false);
    //console.log(data);
    const handleClick = () => {
       setShowIndex();
    }
    const dispatch = useDispatch();
   const handleClickCart = (item) =>{
        dispatch(addItems(item));
   }
   // console.log("items=>",items);
    const {itemCards} = data?.card?.card;
   // console.log(itemCards);
     return <div>
        <div className="flex justify-between bg-gray-200 my-5 cursor-pointer" onClick={handleClick}>
        <span className="my-3 pl-3 font-bold text-lg">{data?.card?.card?.title}({itemCards.length})</span>
        <span className="mr-3 my-auto text-center text-xl">🔽</span>
        </div>
        {showCategory && itemCards.map(item => 
         <div className="flex my-3 border-b-2 border-gray-300">
            <div className=" w-9/12">
            <span className="text-md font-bold">{item?.card?.info?.name} - ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
            <div>
               <span>{item?.card?.info?.description}</span>
            </div>
            </div>
            <div className="w-3/12 my-3">
            <div className="flex justify-end flex-col">
               <div className="absolute mx-4">
               <button className="bg-white text-green-400 mx-auto font-bold px-10 py-2 rounded-lg" onClick={()=>handleClickCart(item)}>
               ADD + 
               </button>
               </div>
               <img src={IMAGE_URL+item?.card?.info?.imageId} alt={item?.card?.info?.name}/>
            </div>
            </div>
     
         </div>
        )}
     </div>
}

export default RestaurantCategories;