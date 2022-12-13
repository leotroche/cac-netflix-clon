import { AppRoutes } from './routes/AppRoutes'
import { Navbar } from './common/components'

import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <AppRoutes />
    </AuthContextProvider>
  )
}

export default App
