function AttachmentsList({ attachments, onDelete, onDownload }) {
  if (!attachments || attachments.length === 0) {
    return null
  }

  return (
    <div className="mt-3 pt-3 border-t">
      <p className="text-sm font-medium text-gray-700 mb-2">Attachments:</p>
      <div className="space-y-2">
        {attachments.map((attachment, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded text-sm">
            <div className="flex-1">
              <p className="font-medium text-gray-800">{attachment.filename}</p>
              <p className="text-gray-500">{(attachment.size / 1024).toFixed(2)} KB</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onDownload(index)}
                className="text-blue-500 hover:text-blue-700 text-xs px-2 py-1 bg-blue-50 rounded cursor-pointer"
              >
                Download
              </button>
              <button
                onClick={() => onDelete(index)}
                className="text-red-500 hover:text-red-700 text-xs px-2 py-1 bg-red-50 rounded cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AttachmentsList
