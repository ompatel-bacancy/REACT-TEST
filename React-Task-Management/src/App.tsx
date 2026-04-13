import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import TaskDetail from './pages/TaskDetail'
import NotFound from './pages/NotFound'
import { useAuth } from './state/AuthContext'

export default function App() {
  const { loggedIn } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/" />} />
      <Route path="/dashboard/:taskId" element={loggedIn ? <TaskDetail /> : <Navigate to="/" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}