import React, { useContext } from 'react'
import { AuthContext } from "../../contexts/auth"


const Notas=()=>{
    const { user } = useContext(AuthContext)

    return(
        <div className='body'>       
            <header>
                <h1>Notas do Aluno</h1>
                <p>nome: {user.name}</p>
            </header>
            <div className="notas">
                <div className="materia">
                    <p>matéria 1 - Nota 1</p>
                    <p>matéria 1 - Nota 2</p>
                    <p>matéria 1 - Nota 3</p>
                </div>
                <div className="materia">
                    <p>matéria 2 - Nota 1</p>
                    <p>matéria 2 - Nota 2</p>
                    <p>matéria 2 - Nota 3</p>
                </div>
            </div>
        </div>
    )
}
export default Notas