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
import Turmas from "./pages/professor/turmas"
import Horarios from "./pages/professor/horarios"
import Config from "./pages/professor/config"

const AppRoutes=()=>{
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/registrar" element={<RegisterPage/>} />

                    <Route element={<Private/>}>
                        <Route exact path="/" element={<RedirectType/>}/>

                        <Route element={<PrivProf/>}>
                            <Route path="professor">
                                <Route index element={
                                    <ProfPage/>
                                }/>
                                <Route path="turmas" element={
                                    <Turmas/>
                                }/>
                                <Route path="horarios" element={
                                    <Horarios/>
                                }/>
                                <Route path="configuracoes" element={
                                    <Config/>
                                }/>
                            </Route>
                        </Route>

                        <Route element={<PrivAluno/>}>
                            <Route path="aluno">
                                <Route index element={
                                    <AlunoPage/>
                                }/>
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes