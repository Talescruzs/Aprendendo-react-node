import React from 'react'
import{
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"
import {
    Private,
    RedirectType,
    PrivAluno,
    PrivProf,
} from "./AppRules"
import { AuthProvider } from "./contexts/auth"
import RegisterPage from "./pages/login/register"
import AlunoPage from "./pages/aluno/alunoPage"
import ProfPage from "./pages/professor/profPage"

const AppRoutes=()=>{

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Private><RedirectType/></Private>} />
                    <Route exact path="/registrar" element={<RegisterPage/>} />
                    <Route exact path="/aluno" element={
                        <Private>
                            <PrivAluno>
                                <AlunoPage/>
                            </PrivAluno>
                        </Private>} 
                    />
                    <Route exact path="/professor" element={
                        <Private>
                            <PrivProf>
                                <ProfPage/>
                            </PrivProf>
                        </Private>} 
                    />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes