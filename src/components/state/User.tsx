import { useState } from "react"

type AuthUserProps = {
    name: string
    email: string
}



export const User = () => {

    const [user, setUser] = useState<AuthUserProps | null>(null);

    const handleLogIn = () => {
        setUser({ name: 'vikum', email: "vikum@bandara.com" })

    }

    const handleLogOut = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogIn}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <div>User name is {user?.name} </div>
            <div>User email is{user?.email} </div>
        </div>
    );
}