import { useState } from 'react'

const LoginForm = ({ onSubmit, onToggle }) => {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  } 

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Task Manager</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button className="w-full  bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
        <button onClick={onToggle} className="w-full mt-4 text-blue-500 hover:underline">
          Need an account? Register
        </button>
      </div>
    </div>
  )
}

export default LoginForm
