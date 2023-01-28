import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navegate
} from "react-router-dom"

import RegisterPage from "./pages/login/register"
import HomePage from "./pages/home/homePage"

const AppRoutes=()=>{
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/entrar" element={<RegisterPage/>} />
            </Routes>
        </Router>
    )
}

export default AppRoutes