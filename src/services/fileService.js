import api from "./api";

export const uploadFile = async (taskId, file) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await api.post(`/tasks/${taskId}/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const downloadFile = async (taskId, fileIndex) => {
  const response = await api.get(`/tasks/${taskId}/download/${fileIndex}`, {
    responseType: "blob",
  });
  return response.data;
};

export const deleteFile = async (taskId, fileIndex) => {
  const response = await api.delete(`/tasks/${taskId}/file/${fileIndex}`);
  return response.data;
};
