import { useState } from "react";

export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoggedIn = () => {
        setIsLoggedIn(true);
    };
    const handleLoggedOut = () => {
        setIsLoggedIn(false);
    };

    return <div>
        <button onClick={handleLoggedIn}>LOGIN</button>
        <button onClick={handleLoggedOut}>LOGOUT</button>
        <div>USER IS {isLoggedIn ? 'LOG IN' : 'LOG OUT'}</div>
    </div>
}