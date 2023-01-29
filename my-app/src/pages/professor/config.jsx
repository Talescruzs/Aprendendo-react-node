import React, { useContext } from 'react'
import { AuthContext } from "../../contexts/auth"


const Config=()=>{
    const { user } = useContext(AuthContext)

    return(
        <div className='body'>       
            <header>
                <h1>Configurações do Professor</h1>
            </header>
            <div className="Config">
                <p>Nome: {user.name}</p>
                <p>Disciplina: qualquer</p>
                <p>Numero de identificação: 12983409</p>
            </div>
        </div>
    )
}
export default Config