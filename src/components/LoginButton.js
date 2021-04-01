import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();   // get login functionality from useAuth0 hook

    // we only render the Log In button if the user is NOT authenticated
    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()}> Log In </button>   // set button to trigger login
        )
    )
}

export default LoginButton
