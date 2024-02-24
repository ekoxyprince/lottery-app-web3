import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AuthProvider } from "./utilities/AuthContext";
import IsAuth from "./utilities/IsAuth";


function App(){

  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={"/"} element={<IsAuth><Home/></IsAuth>}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
