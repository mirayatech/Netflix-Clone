import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './Context'
import { SignIn, SignUp, Browse } from './pages'

export default function App() {
  return (
    <AuthContextProvider>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </AuthContextProvider>
  )
}
