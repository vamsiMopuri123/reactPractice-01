
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import RestaurantContainer from "./RestaurantContainer";
// import restaurants from "../utils/restaurants"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const BodyContainer=()=>{

    const [listInfo,setListInfo]=useState([]);
    const [searchInput,setSearchInput] = useState("");
    const [filterResData,setFilterResData] = useState([]);

    console.log("every time render");
    useEffect(()=>{
      fetchData();
    },[])
    
    const {setUserName,loggedInUser} = useContext(UserContext);
    
    const fetchData = async() =>{
      const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      //console.log("json data",json);
      setListInfo(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      //console.log(json.data.cards);
      setFilterResData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
      return <h1>Oops!!!you're Offline.Please check your network connection</h1>;
    }
    if(listInfo.length === 0){
      return <Shimmer />;
    }

    //console.log("rendered outside");
    return(
        <div className="body-container">
          <div className="flex p-3">
            <div>
              <input type="text" className="border-2 rounded-md mr-2 hover:border-4 rounded-md" value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}} placeholder="search items"/>
              <button 
                onClick={()=>{
                  console.log(searchInput)
                  const filterData=listInfo.filter((res)=>res.info.name.toLowerCase().includes(searchInput.toLowerCase()));
                  setFilterResData(filterData);
                }} 
                className="mx-2 w-20 py-1 px-2 bg-blue-400 rounded-lg text-white hover:py-2 px-3"
              >Search</button>
            <button
              className="bg-red-400 px-2 py-1 rounded-lg text-white hover:py-2 px-3"
              onClick={()=>
              {
                const filterList = listInfo.filter((item) => {
                  return item.info.avgRating > 4.0
               })
              // console.log(filterList);
               setFilterResData(filterList)
              }}
            >Top Varities</button>
            <div className="my-2">
              <label>user name : </label>
              <input className="border-2 rounded-md mr-2 hover:border-4 rounded-md" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            </div>
          </div> 
            <div className="flex flex-wrap">
               {filterResData.map(reso=><Link key={reso.info.id} to={"/resta/"+reso.info.id}><RestaurantContainer key={reso.info.id} resData={reso}/></Link>)}
            </div>
        </div>
    )
}

export default BodyContainer;