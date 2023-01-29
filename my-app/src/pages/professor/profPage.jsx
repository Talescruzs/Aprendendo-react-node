import React, { useState, useContext } from 'react'
import { AuthProvider, AuthContext } from "../../contexts/auth"
import {  useNavigate } from "react-router-dom"


const ProfPage=()=>{
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    return(
        <div className='body'>       
            <header>
                <h1>Painel do Professor</h1>
                <p>nome: {user.name}</p>
            </header>
            <div className="base">
                <div>
                    <a href={"professor/turmas"}><h2>Minhas Turmas</h2></a>
                </div>
                <div>
                    <a href={"professor/horarios"}><h2>Horários</h2></a>
                </div>
                <div>
                    <a href={"professor/configuracoes"}><h2>Meu Registro</h2></a>
                </div>
            </div>
        </div>
    )
}
export default ProfPage