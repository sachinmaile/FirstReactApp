import React from "react";

class IsRaining extends React.Component {
    constructor() {
        super();
        this.state={
            isRaining:true
        }
    }
    render(){
        const {isRaining}=this.state;
        if(isRaining){
            return <h1>Is it Raining today?Yes</h1>
        }
        else{
            return <h1>Is it Raining today?No</h1>
        }
    }
}

export default IsRaining;