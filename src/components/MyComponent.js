import React from 'react';

class MyComponent extends React.Component {

    //bad code
    // this.state.age = event.target.value //avoid this

    state = {
        name: "Long Pham",
        address: '2805 Parliament Ave',
        age: 23
    };


    handleClick(event) {

    }

    // handleOnMouseOver(event) {
    //   console.log(event);
    // }
    handleOnChangeinput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }


    //jsx
    render() {
        return (
            <div>
                My name is {this.state.name}, I'm {this.state.age} years old and I'm from {this.state.address}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeinput(event)}
                    />
                    <label>Your age:</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button onClick={(event) => this.handleClick(event)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default MyComponent;