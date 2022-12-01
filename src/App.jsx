import { Route, Routes } from "react-router-dom"
import Home from "./assets/pages/Home"
import Login from "./assets/pages/Login"
import SignUp from "./assets/pages/SignUp"
import Account from "./assets/pages/Account"
import Navbar from "./components/Navbar"
import { AuthContextProvider } from "./context/AuthContext"

function App() {


  return (
    <>
    <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
