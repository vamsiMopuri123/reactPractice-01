import React, { useEffect } from "react";
import { useState } from "react";
const useBodyContainer = () => {
    const [listInfo,setListInfo]=useState([]);
    //const [searchInput,setSearchInput] = useState("");
    const [filterResData,setFilterResData] = useState([]);
    useEffect(()=>{
        fetchData();
      },[])
      
      const fetchData = async() =>{
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log("json data",json);
        setListInfo(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilterResData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      }
    return listInfo,filterResData;
}
export default useBodyContainer;