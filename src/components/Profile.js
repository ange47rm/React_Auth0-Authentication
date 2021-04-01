import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import JSONPretty from "react-json-pretty"; // and we comment out the JSON.stringify bit

const Profile = () => {

    const { user, isAuthenticated } = useAuth0();    // get user and isAuthenticated property from useAuth0 hook


    // the information below can only be displayed IF the user isAuthenticated
    return (
      isAuthenticated && (
        <div>
            <img src={user.picture} alt={user.name}></img>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <br></br>
            
            <JSONPretty data={user}/>
            {/* {JSON.stringify(user, null, 2)}     displays user info but untidy, you can npm install react-json-pretty to make it look tidier */}
        </div>
      )
    )
}

export default Profile
