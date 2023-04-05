import React from "react";

class ReachMe extends React.Component{
    constructor(){
        super();
        this.state={
            initialValue:0
        }
    }
    Add2 = ()=>{
        var {initialValue}=this.state;
        this.setState({initialValue:initialValue+2});
    }

    render(){
        var {initialValue}=this.state;
        return(
            <div class="listItem" style="background-color:{data.bgColor}"> 
                <img src={data.icon} alt={data.name}></img>
                <a href={data.link}>{data.name}</a> 
            </div>
        )
    }
}

export default ReachMe;