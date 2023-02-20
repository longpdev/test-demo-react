import React from 'react';
import DisplayInfo from './DisplayInfo';
import UserInfo from './UserInfo';

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "hoi dan it", age: "30" },
            { id: 2, name: "Long Pham", age: "23" },
            { id: 3, name: "dev", age: "21" }
        ]
    }
    //jsx
    render() {

        return (
            <div>
                <UserInfo />
                <br></br>


                <DisplayInfo listUsers={this.state.listUsers} />
            </div>
        )
    }
}

export default MyComponent;