import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Account from "./pages/Account"
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
