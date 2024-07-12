import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/imagesStore";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
    // let btnElement="login";
    const [btnElementReact,setBtnElementReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    //console.log(data);
     
    const cardItems = useSelector((store)=>store.cart.items);
    //console.log(cardItems);

    return (
        <div className="flex justify-between bg-gray-100">
            <div className="logo-container">
              <img className="w-[100px]" src={LOGO_URL} alt="app-logo"/>
            </div>
            <div>
                <ul className="flex py-8 mr-2">
                    <li className="px-3">Online Status:{onlineStatus? "🟢":"🔴"}</li>
                    <Link className="px-3" to="/"><li>Home</li></Link>
                    <Link className="px-3" to="/about"><li>About</li></Link>
                    <Link className="px-3" to="/contact"><li>Contact</li></Link>
                    <Link className="px-3" to="/grocery"><li>Grocery</li></Link>
                    <li className="px-3 font-bold"><Link to="/cart">Cart - ({cardItems.length} items)</Link></li>
                    <button 
                       className="px-3"
                       onClick={()=>{
                        btnElementReact==="Login" ? setBtnElementReact("Logout") : setBtnElementReact("Login");
                        console.log(btnElementReact);
                       }} 
                    >{btnElementReact}</button>
                    <li className="px-3">{loggedInUser}</li>
                </ul>

            </div>

        </div>
    )
}

export default Header;