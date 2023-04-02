import logo from './logo.svg';
import './App.css';
import React from 'react';
import IsRaining from './IsRaining'
import ToDoList from './todolist';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  // const project_name = "Hello World";
  // return (
  //   <>
  //     <h1>{project_name}</h1>
  //     <p>This is my first react js project on code sandbox platform</p>
  //     <ol type="a">
  //       <li>JavaScript</li>
  //       <li>Node JS</li>
  //       <li>React JS</li>
  //     </ol>
  //   </>
  // );

  // var today=new Date();
  // var hrs=13;
  // var mins=today.getMinutes();
  // if(hrs>=8 && hrs<=12) {
  //   return <h1 id='morning'>Breakfast Time!</h1>
  // }
  // else if(hrs>12 && hrs<18) {
  //   return <h1 id='afternoon'>Lunch Time!</h1>
  // }
  // else{
  //   return <h1 id='night'>Dinner Time!</h1>
  // }
  return (
    <div className='App'>
      <ToDoList/>
    </div>
  )
  
}

export default App;
