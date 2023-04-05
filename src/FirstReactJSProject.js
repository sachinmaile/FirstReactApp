import React from "react";

class FirstReactJSPRoject extends React.Component{
    render(){
        const project_name = "Hello World";
        return (
            <>
            <h1>{project_name}</h1>
            <p>This is my first react js project on code sandbox platform</p>
            <ol type="a">
                <li>JavaScript</li>
                <li>Node JS</li>
                <li>React JS</li>
            </ol>
            </>
        );
    }
}

export default FirstReactJSPRoject;