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
            // listUsers: [userObj, ...this.state.listUsers]
        })
    }
    handleDeleteUser = (userId) => {
        let listUserClone = this.state.listUsers
        listUserClone = listUserClone.filter((item) => item.id !== userId)
        this.setState({
            listUsers: listUserClone
        })
    }
    //jsx
    render() {

        return (
            <>
                <AddUserInfo
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br></br>


                <DisplayInfo
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}

                />
            </>
        )
    }
}

export default MyComponent;