import React, { useContext } from 'react'
import { AuthContext } from "../../contexts/auth"


const HorariosAluno=()=>{
    const { user } = useContext(AuthContext)

    return(
        <div className='body'>       
            <header>
                <h1>Horário do Aluno</h1>
                <p>nome: {user.name}</p>
            </header>
            <div className="horario">
                <div className="aula">
                    <p>matéria 1</p>
                </div>
                <div className="aula">
                    <p>matéria 2</p>
                </div>
            </div>
        </div>
    )
}
export default HorariosAluno