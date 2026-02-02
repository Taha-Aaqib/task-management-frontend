import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TaskForm from '../components/Tasks/TaskForm'
import FileUpload from '../components/Tasks/FileUpload'
import AttachmentsList from '../components/Tasks/AttachmentsList'
import { getTasks, createTask, updateTask, deleteTask } from '../services/taskService'
import { uploadFile, deleteFile, downloadFile } from '../services/fileService'
import { removeToken, getToken } from '../services/authService'


function TaskItem({ task, onToggle, onDelete, onUploadFile, onDeleteFile, onDownloadFile }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task._id, task.completed)}
          className="mt-1"
        />
        <div className="flex-1">
          <h3 className={`font-semibold ${task.completed ? 'line-through text-gray-400' : ''}`}>
            {task.title}
          </h3>
          {task.description && (
            <p className="text-gray-600 text-sm">{task.description}</p>
          )}
          <FileUpload taskId={task._id} onUpload={onUploadFile} />
          <AttachmentsList 
            attachments={task.attachments} 
            onDelete={(index) => onDeleteFile(task._id, index)}
            onDownload={(index) => onDownloadFile(task._id, index)}
          />
        </div>
        <button
          onClick={() => onDelete(task._id)}
          className="text-red-500 hover:text-red-700 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

function TasksPage() {
  const [tasks, setTasks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (!getToken()) {
      navigate('/login')
      return
    }
    loadTasks()
  }, [navigate])

  const loadTasks = async () => {
    try {
      const data = await getTasks()
      setTasks(data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
      if (error.response?.status === 401) {
        removeToken()
        navigate('/login')
      }
    }
  }

  const handleAddTask = async (taskData) => {
    try {
      await createTask(taskData)
      loadTasks()
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  const handleToggleTask = async (id, completed) => {
    try {
      await updateTask(id, { completed: !completed })
      loadTasks()
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id)
      loadTasks()
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  const handleUploadFile = async (taskId, file) => {
    try {
      await uploadFile(taskId, file)
      loadTasks()
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }

  const handleDeleteFile = async (taskId, fileIndex) => {
    try {
      await deleteFile(taskId, fileIndex)
      loadTasks()
    } catch (error) {
      console.error('Error deleting file:', error)
    }
  }

  const handleDownloadFile = async (taskId, fileIndex) => {
    try {
      const blob = await downloadFile(taskId, fileIndex)
      const task = tasks.find(t => t._id === taskId)
      const attachment = task.attachments[fileIndex]
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = attachment.filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading file:', error)
    }
  }

  const handleLogout = () => {
    removeToken()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">My Tasks</h1>
            <button onClick={handleLogout} className="text-red-500 hover:underline cursor-pointer">
              Logout
            </button>
          </div>
          <TaskForm onSubmit={handleAddTask} />
        </div>
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
              onUploadFile={handleUploadFile}
              onDeleteFile={handleDeleteFile}
              onDownloadFile={handleDownloadFile}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TasksPage
