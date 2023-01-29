import React, { useState, useContext } from 'react'
import { AuthProvider, AuthContext } from "../../contexts/auth"


const ProfPage=()=>{
    const { user } = useContext(AuthContext)

    return(
        <h1>Professor {user.name}</h1>
    )
}
export default ProfPage