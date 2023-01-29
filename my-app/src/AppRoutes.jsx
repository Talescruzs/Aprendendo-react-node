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
                    <Route exact path="/" element={<Private><RedirectType/></Private>} />
                    <Route exact path="/registrar" element={<RegisterPage/>} />
                    <Route exact path="/aluno" element={
                        <Private>
                            <PrivAluno>
                                <AlunoPage/>
                            </PrivAluno>
                        </Private>} 
                    />
                    <Route path="/professor">
                        <Route index element={
                            <Private>
                                <PrivProf>
                                    <ProfPage/>
                                </PrivProf>
                            </Private>
                        }/>
                        <Route path="turmas" element={
                            <Private>
                                <PrivProf>
                                    <Turmas/>
                                </PrivProf>
                            </Private>
                        }/>
                        <Route path="horarios" element={
                            <Private>
                                <PrivProf>
                                    <Horarios/>
                                </PrivProf>
                            </Private>
                        }/>
                        <Route path="configuracoes" element={
                            <Private>
                                <PrivProf>
                                    <Config/>
                                </PrivProf>
                            </Private>
                        }/>
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes