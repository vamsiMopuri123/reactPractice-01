import { useState } from "react";

const User = (props) =>{
    const {name,location,contact} = props
    const [count,setCount] = useState(0);
    const [count1] = useState(1);
    return(
        <div className="card-item">
          <h1>Count: {count}</h1> 
          <button onClick={()=>{
            setCount(count+1);
          }}>increase</button>
          <button onClick={()=>{
            setCount(count-1);
          }}>decrease</button>
          <h2>name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>contact: {contact}</h4>
        </div>
    )
}
export default User;