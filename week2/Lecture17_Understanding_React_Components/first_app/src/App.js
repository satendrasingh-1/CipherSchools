import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component{
  name="Ram";
  render(){
    return(
      <>
        <div>
          <h1>Jai Shree {this.name}</h1>
        </div>
        <div>
          <p>This is first paragraph</p>
        </div>
      </>
    );
  }
}

// function App() {
//   const name="Satendra"
//   return (
//     <div>
//       <h1 style={{
//         color:'red',
//         textAlign: "center"
//         }}>
//         Jai Shree Ram from {name}
//       </h1>
//     </div>
    
//   );
// }

export default App;
