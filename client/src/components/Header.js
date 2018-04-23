import React from "react";

// changed from Component to Functional

// ES6
const Header = () => (
    <header>
        <h3>Logo</h3>
        <nav>
         <a href="/">Home</a>
         <a href="/contact">Contact</a>
         <a href="/about">About</a>
         </nav>
    </header>
)

// allows you to export this file somewhere else.   
export default Header;


// import React from "react";
// copied from Github.

// const Header = props => (
//   <header>
//     <h3>{props.title}</h3>
//     <h4>{props.another}</h4>
//     <nav>
//       <a href="/">Home</a>
//       <a href="/contact">Contact</a>
//       <a href="/about">About</a>
//     </nav>
//     <button onClick={props.increase}>Increase</button>
//   </header>
// );

// ES5
// const Header = function() {

// };
 

// class App extends Component {
//   render() {
//     <div>
    
//     </div>
//   };
// }
      
  
// );

// export default App;