import React, { createContext, useState, useEffect }  from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider=({ children })=>{
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const recoveredUser = localStorage.getItem("user")

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false)
    }, [])
    
    const login=(name, password)=>{
        console.log("login", name, password)
        const loggedUser = {
            id : "123",
            name
        }
        localStorage.setItem("user", JSON.stringify(loggedUser))

        if(password === "senha"){
            setUser(loggedUser)
            navigate("/")
        }
    }
    const logout=()=>{
        console.log("logout")
        setUser(null)
        navigate("/registrar")
    }

    return(
        <AuthContext.Provider value={{ authenticated: 
            !!user, user, loading, login, logout }}>
                { children }
        </AuthContext.Provider>
    )
}