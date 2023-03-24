import React, { useState } from "react";


// class AddUserInfo extends React.Component {

//     //bad code
//     // this.state.age = event.target.value //avoid this

//     state = {
//         name: "Long Pham",
//         address: '2805 Parliament Ave',
//         age: 23
//     };


//     handleOnChangeinput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault()
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         })
//     }

//     render() {
//         return (
//             <div>
//                 My name is {this.state.name}, I'm {this.state.age} years old and I'm from {this.state.address}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name:</label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeinput(event)}
//                     />
//                     <label>Your age:</label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeAge(event)}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfo = (props) => {

    const [name, setName] = useState("Long Pham");
    const [age, setAge] = useState("23");
    const [address, setAddress] = useState("2805");

    const handleOnChangeinput = (event) => {
        setName(event.target.value)

    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)

    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        })
    }

    return (
        <div>
            My name is {name}, I'm {age} years old and I'm from {address}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name:</label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangeinput(event)}
                />
                <label>Your age:</label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfo;            