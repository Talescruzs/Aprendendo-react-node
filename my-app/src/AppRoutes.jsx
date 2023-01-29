import React, { useContext } from 'react'

import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom"

import RegisterPage from "./pages/login/register"
import AlunoPage from "./pages/aluno/alunoPage"
import ProfPage from "./pages/professor/profPage"
import { AuthProvider, AuthContext } from "./contexts/auth"

const AppRoutes=()=>{
    const Private=({ children })=>{
        const { authenticated, loading } = useContext(AuthContext)
        if(loading){
            return(
                <div className='loading'>carregando</div>
            )
        }
        
        if(!authenticated){
            return(
                <Navigate to="/registrar"/>
            )
        }
        return children
    }
    const RedirectType=()=>{
        const {user} = useContext(AuthContext)
        if(user.type==="Aluno"){
            return(
                <Navigate to="/aluno"/>
            )
        }
        if(user.type==="Professor"){
            return(
                <Navigate to="/professor"/>
            )
        }
    }
    const PrivAluno=({ children })=>{
        const {user} = useContext(AuthContext)
        if(user.type==="Professor"){
            return(
                <Navigate to="/professor"/>
            )
        }
        return children
    }
    const PrivProf=({ children })=>{
        const {user} = useContext(AuthContext)
        if(user.type==="Aluno"){
            return(
                <Navigate to="/aluno"/>
            )
        }
        return children
    }


    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Private><RedirectType/></Private>} />
                    <Route exact path="/registrar" element={<RegisterPage/>} />
                    <Route exact path="/aluno" element={<Private><PrivAluno><AlunoPage/></PrivAluno></Private>} />
                    <Route exact path="/professor" element={<Private><PrivProf><ProfPage/></PrivProf></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes