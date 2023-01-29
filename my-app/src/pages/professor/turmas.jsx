import React, { useContext } from 'react'
import { AuthContext } from "../../contexts/auth"


const Turmas=()=>{
    const { user } = useContext(AuthContext)

    return(
        <div className='body'>       
            <header>
                <h1>Turmas do Professor</h1>
                <p>nome: {user.name}</p>
            </header>
            <div className="turmas">
                <div className="turma">
                    <p>turma1</p>
                </div>
                <div className="turma">
                    <p>turma2</p>
                </div>
            </div>
        </div>
    )
}
export default Turmas