import React, { useContext } from 'react'

import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom"

import RegisterPage from "./pages/login/register"
import HomePage from "./pages/home/homePage"
import { AuthProvider, AuthContext } from "./contexts/auth"

const AppRoutes=()=>{
    const Private=({ children })=>{
        const { authenticated } = useContext(AuthContext)
        
        if(!authenticated){
            return(
                <Navigate to="/registrar"/>
            )
        }
        return children
    }

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Private><HomePage/></Private>} />
                    <Route exact path="/registrar" element={<RegisterPage/>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes