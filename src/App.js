import React, {useState} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const app = props => {
    const [username, setUsername] = useState("Harry");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    return (
        <div className="App">
            <h1>Welcome!</h1>
            <UserInput changeName={handleUsernameChange} username={username} />
            <UserOutput username={username} />
        </div>
    );

};

export default app;
