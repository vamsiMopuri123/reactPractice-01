import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/imagesStore";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantContainer=(props)=>{
    //console.log(props);
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);
    const {name,cloudinaryImageId,locality,cuisines,areaName,costForTwo,avgRating,sla} = resData?.info;
    //console.log("Resturant");
    return(
        <div className="reso-container">
            <div className="w-[250px] mx-5 my-4 bg-gray-100 p-3 rounded-xl hover:bg-gray-200">
                <img className="h-[200px] w-[100%] rounded-lg" alt="card-image" src={IMAGE_URL+cloudinaryImageId}/>
                <h3 className="font-bold text-lg">{name}</h3>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{areaName}</h3>
                <h3>{costForTwo}</h3>
                <h3>{avgRating} rating</h3>
                <h4>{sla.deliveryTime} minutes</h4>
                <h4>{loggedInUser}</h4>
            </div>
        </div>
        
    )
}

export default RestaurantContainer;