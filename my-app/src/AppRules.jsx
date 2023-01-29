// Arquivo das regras de negócio e limitações de navegações criadas

import React, { useContext } from 'react'
import{ Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "./contexts/auth"

export const Private=()=>{
    const { authenticated, loading } = useContext(AuthContext)
    if(loading){
        return(
            <div className='loading'>carregando</div>
        )
    }
    
    if(!authenticated){
        return(
            <Navigate to="/registrar"/>
        )
    }
    return <Outlet/>
}

export const RedirectType=()=>{
    const {user} = useContext(AuthContext)
    if(user.type==="Aluno"){
        return(
            <Navigate to="/aluno"/>
        )
    }
    if(user.type==="Professor"){
        return(
            <Navigate to="/professor"/>
        )
    }
}

export const PrivAluno=()=>{
    const {user} = useContext(AuthContext)
    if(user.type==="Professor"){
        return(
            <Navigate to="/professor"/>
        )
    }
    return <Outlet/>
}

export const PrivProf=()=>{
    const {user} = useContext(AuthContext)
    if(user.type==="Aluno"){
        return(
            <Navigate to="/aluno"/>
        )
    }
    return <Outlet/>
}