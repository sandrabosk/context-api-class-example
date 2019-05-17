// final version:
import React from 'react';
import './App.css';

import { MyContext } from './context';

function App() {
  return (
    <Family />
  )
}    
     
function Family(){
  return (           
    <Person />
  )         
}   
   
function Person() {  
  return ( 
    <MyContext.Consumer>
    {(context) => {
      const { name, age } = context.teacher;
      return(
        <div>         
          <p>Hey my name is { name }!</p> 
          <p> I'm { age } years old. </p>
          <button onClick={ context.getYearOlder }> Celebrate Birthday! </button>
        </div>
      )
    }} 
    </MyContext.Consumer>       
  )
}

export default App;


// start version with props drilling:


// import React from 'react';
// import './App.css';

// function App() {
//   let teacher = {
//     name: "Joss",
//     age: 23,
//     cool: true
//   };

//   return (
//     <Family theName = {teacher.name} />
//   ); //        |
// }    //        |__
//      //           |
// function Family(props){
//   return (    // |
//               // |---------|
//               //           V
//     <Person name={props.theName}/>
//   ) //        |
// }   //        |
//     //        |---|---------------
// function Person(props) {   //    |
//   return (                 //    |
//     <div>         {/*      //    V       */}
//       <p>Hey my name is {props.name}!</p> 
//     </div>
//   )
// }

// export default App;