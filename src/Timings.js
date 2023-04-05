import React from "react";

class Timings extends React.Component {
    
    render(){
        var today=new Date();
        var hrs=today.getHours();
        var mins=today.getMinutes();
        if(hrs>=8 && hrs<=12) {
            return <h1 id='morning'>Breakfast Time!</h1>
        }
        else if(hrs>12 && hrs<18) {
            return <h1 id='afternoon'>Lunch Time!</h1>
        }
        else{
            return <h1 id='night'>Dinner Time!</h1>
        }
    }
}

export default Timings;