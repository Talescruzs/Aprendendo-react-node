import React, { useContext } from 'react'
import { AuthContext } from "../../contexts/auth"


const Horarios=()=>{
    const { user } = useContext(AuthContext)

    return(
        <div className='body'>       
            <header>
                <h1>Horários do Professor</h1>
                <p>nome: {user.name}</p>
            </header>
            <div className="horario">
                <div className="aula">
                    <p>aula com a turma 1</p>
                </div>
                <div className="aula">
                    <p>aula com a turma 2</p>
                </div>
            </div>
        </div>
    )
}
export default Horarios