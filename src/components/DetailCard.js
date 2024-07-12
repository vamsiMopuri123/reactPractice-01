import { useState } from "react";
import useDetailCard from "../utils/useDetaiCard";
import RestaurantCategories from "./RestaurantCategories";
import Shimmer from "./Shimmer";
 import { useParams } from "react-router-dom";

const DetailCard = () =>{
    const {resoId} = useParams();
    const cardData = useDetailCard(resoId);
    const [showIndex, setShowIndex] = useState(null);
    if (cardData === null) return <Shimmer />;

    const {name,city,cuisines,costForTwoMessage,avgRating,totalRatingsString} = cardData?.cards[2]?.card?.card?.info;
    //const {itemCards} = cardData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(cardData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = cardData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(list=>{
       return list.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
   // console.log("categorie",categories);
    return (
        <div className="w-6/12 justify-center mx-auto">
            <div className="font-bold text-start text-2xl my-2">
                <h1>{name}</h1>
            </div>
            <div className=" bg-gray-50 border-gray-200 border-2 rounded-lg shadow-xl pl-3 pt-1">
                <h3 className="font-bold">⭐{avgRating}({totalRatingsString}) - {costForTwoMessage}</h3>
                <h3 className="text-red-500 font-bold">{cuisines.join(", ")}</h3>  
            </div>
            {categories.map((c,index) => <RestaurantCategories data={c} showCategory={showIndex === index ? true : false } setShowIndex={()=>setShowIndex(index)}/>)}
        </div>
    )
}

export default DetailCard;