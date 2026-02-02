import { useState } from 'react'

const TaskForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ title: '', description: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({ title: '', description: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Task title"
        className="w-full p-2 border rounded"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Description (optional)"
        className="w-full p-2 border rounded"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm
