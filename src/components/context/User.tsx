import { useContext } from "react"
import { userContext } from "./UserContext";



export const User = () => {


    const UserContext = useContext(userContext);

    const handleLogin = () => {
        if (UserContext) {
            UserContext.setUser({
                name: 'waruna',
                email: 'waruna532@gmail.com',
            })
        }
    }
    const handleLogOut = () => {
        if (UserContext) {
            UserContext?.setUser(null);
        }
    }

    return <div>
        <button onClick={handleLogin}>LogIn</button>
        <button onClick={handleLogOut}>LogOut</button>
        <h1>User name is {UserContext?.user?.name}</h1>
        <h1>User email is {UserContext?.user?.email}</h1>
    </div>
} 