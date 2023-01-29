import React, { useState, useContext } from 'react'
import { AuthProvider, AuthContext } from "../../contexts/auth"


const AlunoPage=()=>{
    const { user } = useContext(AuthContext)

    return(
        <h1>Aluno {user.name}</h1>
    )
}
export default AlunoPage