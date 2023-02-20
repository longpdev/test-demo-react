import React from 'react';
import DisplayInfo from './DisplayInfo';
import UserInfo from './UserInfo';

class MyComponent extends React.Component {


    //jsx
    render() {

        return (
            <div>

                <UserInfo />
                <br></br>
                <DisplayInfo name="Long Pham" age="30" />
            </div>
        )
    }
}

export default MyComponent;