import React, { useState } from "react";
import './DisplayInfo.scss';
import logo from "./../logo.svg";

// class DisplayInfo extends React.Component {
//     constructor(props) {
//         console.log('call constructor: 1 >>>>')
//         super(props);
//         this.state = {
//             isShowListUser: true
//         }
//     }



//     render() {
//         console.log('call me render')

//         //destructuring array    /object
//         const { listUsers } = this.props; //object

//         return (
//             //prop -> property
//             <div className="display-info-container">

//                 {true
//                     &&
//                     <>
//                         {

//                             listUsers.map((user) => {
//                                 return (
//                                     <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                         <div> My name's {user.name}</div>
//                                         <div> My age's {user.age}</div>
//                                         <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                     </div>
//                                 )
//                             })
//                         }
//                     </>
//                 }
//             </div>
//         )
//     }

// }

const DisplayInfo = (props) => {
    const { listUsers } = props; //object

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    // this.state = {
    //     isShowHideListUser: true
    // }

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
        // this.setState({
        //     isShowHideListUser: true
        // })
    }

    return (
        //prop -> property
        <div className="display-info-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list user" : "Show list user"}
                </span>
            </div>

            {isShowHideListUser
                &&
                <>
                    {

                        listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div> My name's {user.name}</div>
                                    <div> My age's {user.age}</div>
                                    <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                                </div>
                            )
                        })
                    }
                </>
            }
        </div>
    )

}

export default DisplayInfo;