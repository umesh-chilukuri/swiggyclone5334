import React from "react";
import Userclass from "./UserClass";

class User extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            count:1,
        }
    }
componentDidMount(){
    console.log("hhhiiiiiiiiiiiiiiiii")
}
    render(){
        const {count}=this.state;
        
        return (
           
            <div className="user-card">
        <h2>{this.props.name}</h2>
        <h1>{count}</h1>
        <button  onClick={()=>{
            this.setState({count:this.state.count+1})
        }}>count increse</button>
        <h2>Location:hyderabad</h2>
        <Userclass/>
    </div>
        );

}
}



export default User;