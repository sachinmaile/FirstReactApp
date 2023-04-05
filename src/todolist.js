import React from "react";

class ToDoList extends React.Component {
    constructor(){
        super();
        this.state={list:[{
            id: 1,
            text: "My Task",
            completed: true
        },{
            id: 2,
            text: "My Second Task",
            completed: false
        }]};
    }
    toggle=()=>{
        var {completed}=this.state;
        this.setState({completed:!completed});
    }
    render(){
        const {list}=this.state;
        return (
            <div>
                <h1>My Daily Goals</h1>
                
                <ul>
                    {list.map((item) => (
                        <li key={item.id}>{item.completed ? <input type='checkbox' onChange={this.toggle} checked></input> : <input type='checkbox' onChange={this.toggle}></input>}{<p>{item.text}</p>}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ToDoList;