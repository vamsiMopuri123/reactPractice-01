import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                email: "dummy"
            }
        }
        console.log(this.props.name+"Child Class Constructor");
    }
    async componentDidMount(){
        console.log(this.props.name+"Child Class ComponentDidMount");
        const data=await fetch("https://api.github.com/users/akshaymarch7");
        const json=await data.json();
        //console.log(json);
        this.setState({userInfo:json});
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    render(){
        console.log(this.props.name+"Child Class Render");
        const {name,location,id}=this.state.userInfo;

        return(
            <div className="card-item">
            
            <h2>name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>contact: {id}</h4>
            </div>
        )
    }
}
export default UserClass;