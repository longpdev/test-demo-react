import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';

class App extends React.Component {

  state = {
    name: "231231232131231",
    address: '1805',
    age: 23
  };

  abc = {
    name: "123"
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        My name is {this.abc.name}
      </div>
    )
  }
}

// const App = () => {
//   return (

//   );
// }

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
