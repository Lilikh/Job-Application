// src/services/api.js
const apiUrl = import.meta.env.VITE_API_BASE_URL || '/api';

export async function fetchJobs() {
  const response = await fetch(`${apiUrl}/jobs`);
  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }
  return response.json();
}

export async function fetchJobById(jobId) {
  const response = await fetch(`${apiUrl}/jobs/${jobId}`);
  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }
  return response.json();
}
