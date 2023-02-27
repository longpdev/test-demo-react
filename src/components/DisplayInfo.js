import React from "react";
import './DisplayInfo.scss';
import logo from "./../logo.svg";

class DisplayInfo extends React.Component {
    constructor(props) {
        console.log('call constructor: 1 >>>>')
        super(props);
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log('call me component did mount >>>>')
        setTimeout(() => {
            document.title = 'test'
            console.log('done wait')
        }, 3000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('call me component did update >>>>', this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length == 5) {
                alert('max')
            }
        }

    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }


    render() {
        console.log('call me render')

        //destructuring array/object
        const { listUsers } = this.props; //object

        return (
            //prop -> property
            <div className="display-info-container">
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}> {this.state.isShowListUser ? "Hide" : "Show"} list user: </span>
                </div>
                {this.state.isShowListUser
                    &&
                    <>
                        {

                            listUsers.map((user) => {
                                return (
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                        <div> My name's {user.name}</div>
                                        <div> My age's {user.age}</div>
                                        <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </>
                }
            </div>
        )
    }

}

export default DisplayInfo;