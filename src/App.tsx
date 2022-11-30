import { Route, Routes } from 'react-router-dom'
import { SignIn, SignUp } from './pages'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  )
}
