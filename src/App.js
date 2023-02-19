import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';

class App extends React.Component {

  state = {
    name: "Long Pham",
    address: '2805 Parliament Ave',
    age: 23
  };


  handleClick(event) {
    console.log('click')
    console.log("My name is", this.state.name)

    this.setState({
      name: 'Rocky',
    })

    this.setState({
      age: Math.floor((Math.random() * 100) + 1)

    })
  }

  // handleOnMouseOver(event) {
  //   console.log(event);
  // }

  render() {
    return (
      <div>
        My name is {this.state.name}, I'm {this.state.age} years old and I'm from {this.state.address}

        {/* 
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button> */}
        <button onClick={(event) => this.handleClick(event)}>CLick me</button>
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
