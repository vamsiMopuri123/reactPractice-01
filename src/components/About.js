import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
        //console.log("Parent Class Constructor")
        
    }
    componentDidMount(){
       
        //console.log("Parent Class ComponentDidMount");
    }
    render(){
        //console.log("Parent Class Render");
        return(
            <div>
                <h1>About</h1>
                <h2>Welcome to about section</h2>
                <UserContext.Consumer>
                    {({loggedInUser})=> <h2 className="font-bold">{loggedInUser}</h2>}
                </UserContext.Consumer>
                <UserClass name={"First"} location={"class"} contact={"@class"}/>
            </div>
        )
    }
}
// const About = () => {
    
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>Welcome to about section</h2>
//             <UserClass name={"Vamsi (Class)"} location={"class"} contact={"@class"}/>
//         </div>
//     )
// }

export default About;