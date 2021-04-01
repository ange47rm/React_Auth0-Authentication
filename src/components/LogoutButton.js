import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"

const LogoutButton = () => {

    const { logout, isAuthenticated } = useAuth0();  // get logout functionality from useAuth0 hook

    return (
        isAuthenticated && (
            <button onClick={() => logout()}> Log Out </button> // set button to trigger logout
        )
    )
}

export default LogoutButton;
