import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { AuthProvider } from "./utilities/AuthContext";
import IsAuth from "./utilities/IsAuth";


function App(){

  return (
    <AuthProvider>
    <Router>
    <Routes>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={"/"} element={<IsAuth><Home/></IsAuth>}/>
    </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
