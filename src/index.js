import React from 'react'; 
import ReactDOM from 'react-dom'; 
//import Calculator from './components/calculator.js'; 
import App from './App.js';
import './App.css';
// import $ from 'jquery';
// <script>
//   $(document).ready(function(){
   
//       console.log('hi rakesh')

   
//   });
//   </script>
  

  
// Render the Calculator to the Web page. 
ReactDOM.render(<App />, document.getElementById('root')); 
//import React from "react";

//  import React from 'react'; 
// // import ReactDOM from 'react-dom'; 
// // import Calculator from './components/calculator.js'; 
// // import App from './App.js'
  
// // // Render the Calculator to the Web page. 
// // ReactDOM.render(<App />, document.getElementById('root')); import React from "react";
// import ReactDOM from "react-dom";

// class NumberKeyboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       operations: []
//     };
//   }

//   handleInput(e) {
//     console.log(e.target.value);
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="keyboard">
//           <div className="column" />
//           <div className="column">
//             <div
//               className="keyboardRow roundBorder"
//               value={"example"}
//               onClick={e => this.handleInput(e, "value")}
//             >
//               <button value="clear">C</button>
//               <button value="±">±</button>
//               <button value=".">.</button>
//               <button value="+">+</button>
//             </div>
//             <div className="keyboardRow" onClick={e => this.handleInput(e, "value")}>
//               <button value="1">1</button>
//               <button value="2">2</button>
//               <button value="3">3</button>
//               <button value="-">-</button>
//             </div>
//             <div className="keyboardRow" onClick={e => this.handleInput(e, "value")}>
//               <button value="4">4</button>
//               <button value="5">5</button>
//               <button value="6">6</button>
//               <button value="*">X</button>
//             </div>
//             <div className="keyboardRow lastRow" onClick={e => this.handleInput(e, "value")}>
//               <button value="7">7</button>
//               <button value="8">8</button>
//               <button value="9">9</button>
//               <button value="%">÷</button>
//             </div>
//           </div>

//           <div className="column" />
//         </div>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<NumberKeyboard />, rootElement);