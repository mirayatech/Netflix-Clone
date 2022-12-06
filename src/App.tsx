import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './Components'
import { AuthContextProvider } from './Context'
import { SignIn, SignUp, Browse, Movie, MyList } from './pages'

export default function App() {
  return (
    <AuthContextProvider>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route
          path="/browse"
          element={
            <PrivateRoute>
              <Browse />
            </PrivateRoute>
          }
        />

        <Route
          path="/my-list"
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />

        <Route
          path="/browse/:id"
          element={
            <PrivateRoute>
              <Movie />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthContextProvider>
  )
}
