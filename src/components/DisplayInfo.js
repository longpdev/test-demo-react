import React from "react";

class DisplayInfo extends React.Component {


    render() {

        //destructuring array/object
        const { listUsers } = this.props; //object
        console.log(listUsers)
        return (
            //prop -> property
            <div >
                {
                    listUsers.map((user) => {
                        return (
                            <div key={user.id}>
                                <div> My name's {user.name}</div>
                                <div> My age's {user.age}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default DisplayInfo;