import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../state/AuthContext'

export default function Login() {
  const [user, setUser] = useState('admin')
  const [pass, setPass] = useState('admin')
  const { login } = useAuth()
  const nav = useNavigate()

  const submit = () => {
    login(user, pass)
    nav('/dashboard')
  }

  return (
    <div className="center">
      <h2>Login</h2>
      <input value={user} onChange={e => setUser(e.target.value)} placeholder="Username" />
      <input value={pass} onChange={e => setPass(e.target.value)} placeholder="Password" type="password" />
      <button onClick={submit}>Login</button>
    </div>
  )
}