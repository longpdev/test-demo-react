import React from 'react';
import DisplayInfo from './DisplayInfo';
import AddUserInfo from './AddUserInfo';

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "hoi dan it", age: "16" },
            { id: 2, name: "Long Pham", age: "69" },
            { id: 3, name: "dev", age: "21" }
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    //jsx
    render() {

        return (
            <div>
                <AddUserInfo
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br></br>


                <DisplayInfo
                    listUsers={this.state.listUsers}

                />
            </div>
        )
    }
}

export default MyComponent;