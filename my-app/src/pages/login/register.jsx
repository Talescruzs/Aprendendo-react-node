import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import './login.css'

const RegisterPage=()=>{
    const { authenticated, login } = useContext(AuthContext)

    const [insertName, setName] = useState("")
    const [insertPassword, setPassword] = useState("")
    const handleSubmit=(ev)=>{
        ev.preventDefault()
        console.log("a", { insertName, insertPassword})
        login(insertName, insertPassword)
    }

    return (
        <div className='register'>       
            <header>
                <h1>Adicionando registro</h1>
            </header>
            <p>{String(authenticated)}</p>
            <form className='form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor='name'>Nome:</label>
                    <input type='text' name='name' id='name' value={insertName} onChange={(ev) => setName(ev.target.value)}/>
                </div>
                <div className='field'>
                    <label htmlFor='password'>Senha:</label>
                    <input type='password' name='password' id='password' value={insertPassword} onChange={(ev) => setPassword(ev.target.value)}/>
                </div>
                <div className='action'>
                    <button type='submit'>Registrar</button>
                </div>
            </form>
        </div>
        )
}

export default RegisterPage