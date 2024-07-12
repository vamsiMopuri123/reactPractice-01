import { useEffect, useState } from "react";
import { CARD_URL } from "../utils/imagesStore";
const useDetailCard = (resoId) => {
    const [cardData,setCardData]=useState(null);
    
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() =>{
        const data =await fetch(CARD_URL+resoId);
        const response = await data.json();
        console.log(response);
        setCardData(response.data);
    }
    return cardData;
}
export default useDetailCard;