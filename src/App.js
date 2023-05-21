import logo from './logo.svg'
import './App.css'
import { Dashboard, Login, Error, PrivateRoute, AuthWrapper } from './pages'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from 'react-router-dom'
function App() {
  return (
    <>
      <AuthWrapper>
        <Router>
          <Routes>
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            ></Route>
            {/* <Route path='/' exact={true} element={<Dashboard />}></Route> */}
            <Route path='/login' element={<Login />}></Route>
            <Route path='*' element={<Error />}></Route>
            {/* Route Component redirects to first path matched in the list of Route or Rowhen we have multiple routes */}
          </Routes>
        </Router>
      </AuthWrapper>
    </>
  )
}
export default App
