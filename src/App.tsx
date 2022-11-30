import { Route, Routes } from 'react-router-dom'
import { SignIn } from './pages'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  )
}
