import React from "react";

class Calculator extends React.Component{
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
    Square = ()=>{
        var {initialValue}=this.state;
        this.setState({initialValue:initialValue*initialValue});
    }
    Double = ()=>{
        var {initialValue}=this.state;
        this.setState({initialValue:initialValue*2});
    }
    DivideBy2 = ()=>{
        var {initialValue}=this.state;
        this.setState({initialValue:initialValue/2});
    }
    Subtract2 = ()=>{
        var {initialValue}=this.state;
        this.setState({initialValue:initialValue-2});
    }

    render(){
        var {initialValue}=this.state;
        return(
            <div>
                <h1>initialValue={initialValue}</h1>
                <button onClick={this.Add2}>Add2!</button>
                <button onClick={this.Square}>Square!</button>
                <button onClick={this.Double}>Double!</button>
                <button onClick={this.DivideBy2}>DivideBy2!</button>
                <button onClick={this.Subtract2}>Subtract2!</button>
            </div>
        )
    }
}

export default Calculator;