import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/Auth/LoginForm'
import { login, setToken } from '../services/authService'

function LoginPage() {
  const navigate = useNavigate()

  const handleLogin = async (formData) => {
    try {
      const data = await login(formData.email, formData.password)
      if (data.token) {
        setToken(data.token)
        navigate('/tasks')
      }
    } catch (error) {
      console.error('Login failed:', error)
      alert('Login failed. Please check your credentials.')
    }
  }

  return (
    <LoginForm 
      onSubmit={handleLogin} 
      onToggle={() => navigate('/register')} 
    />
  )
}

export default LoginPage
