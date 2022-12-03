import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components'
import { SignIn, SignUp, Browse } from './pages'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  )
}
