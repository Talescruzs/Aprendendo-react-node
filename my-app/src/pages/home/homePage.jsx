import React, { useState, useContext } from 'react'
import { AuthProvider, AuthContext } from "../../contexts/auth"


const HomePage=()=>{
    const { user } = useContext(AuthContext)

    return(
        <h1>{user.name}</h1>
    )
}
export default HomePage