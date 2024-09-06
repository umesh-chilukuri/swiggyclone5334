import React  from "react";


class Userclass extends React.Component{
constructor(props){
    super(props);
    console.log(props);
    this.state={
        count:0,
        
    }
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
        <h2>umesh</h2>
    </div>
        );
    }

}

export default Userclass;