import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import Navbar from './common/components'

import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  )
}

export default App
