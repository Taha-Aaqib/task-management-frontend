import { useNavigate } from 'react-router-dom'
import RegisterForm from '../components/Auth/RegisterForm'
import { register } from '../services/authService'

function RegisterPage() {
  const navigate = useNavigate()

  const handleRegister = async (formData) => {
    try {
      await register(formData.name, formData.email, formData.password)
      alert('Registration successful! Please login.')
      navigate('/login')
    } catch (error) {
      console.error('Registration failed:', error)
      alert('Registration failed. User may already exist.')
    }
  }

  return (
    <RegisterForm 
      onSubmit={handleRegister} 
      onToggle={() => navigate('/login')} 
    />
  )
}

export default RegisterPage
