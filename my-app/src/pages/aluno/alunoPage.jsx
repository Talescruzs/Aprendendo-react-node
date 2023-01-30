import React, { useState, useContext } from 'react'
import { AuthProvider, AuthContext } from "../../contexts/auth"


const AlunoPage=()=>{
    const { user, logout } = useContext(AuthContext)

    const handleLogout =()=>{
        logout()
    }

    return(
        <div className='body'>       
            <header>
                <h1>Painel do Aluno</h1>
                <p>nome: {user.name}</p>
                <button onClick={handleLogout}>Sair</button>
            </header>
            <div className="base">
                <div>
                    <a href={"aluno/horarios"}><h2>Horários</h2></a>
                </div>
                <div>
                    <a href={"aluno/notas"}><h2>Minhas notas</h2></a>
                </div>
            </div>
        </div>
    )
}
export default AlunoPage