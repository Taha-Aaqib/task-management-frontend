function FileUpload({ taskId, onUpload }) {
  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    try {
      await onUpload(taskId, file)
      e.target.value = ''
    } catch (error) {
      console.error('Error uploading file:', error)
      alert('Failed to upload file')
    }
  }

  return (
    <div className="mt-3">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Attach File
      </label>
      <label className="inline-block">
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded text-sm font-semibold hover:bg-blue-100 cursor-pointer">
          Choose File
        </span>
      </label>
    </div>
  )
}

export default FileUpload
