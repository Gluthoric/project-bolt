import { ScanResult } from '../types/scanner';

const API_BASE = 'http://localhost:8000/api';

export async function scanCard(imageFile: File): Promise<ScanResult> {
  const formData = new FormData();
  formData.append('image', imageFile);
  
  const response = await fetch(`${API_BASE}/scan`, {
    method: 'POST',
    body: formData
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error.message);
  }
  
  return response.json();
}