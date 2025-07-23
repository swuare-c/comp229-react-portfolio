const API_BASE = "http://localhost:5000/api/qualification";

export const createQualification = async (qualificationData, token) => {
  const response = await fetch(API_BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(qualificationData),
  });
  return await response.json();
};

export const listQualifications = async () => {
  const response = await fetch(API_BASE);
  return await response.json();
};

export const readQualification = async (id) => {
  const response = await fetch(`${API_BASE}/${id}`);
  return await response.json();
};

export const updateQualification = async (id, qualificationData, token) => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(qualificationData),
  });
  return await response.json();
};

export const deleteQualification = async (id, token) => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};
