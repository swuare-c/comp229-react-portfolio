const API_BASE = "/api/qualifications";

// Create Qualification
export const createQualification = async (qualificationData, token) => {
  try {
    const response = await fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // If required
      },
      body: JSON.stringify(qualificationData),
    });
    return await response.json();
  } catch (err) {
    console.error("Error creating qualification:", err);
    throw err;
  }
};

// List Qualifications
export const listQualifications = async () => {
  try {
    const response = await fetch(API_BASE);
    return await response.json();
  } catch (err) {
    console.error("Error listing qualifications:", err);
    throw err;
  }
};

// Read Qualification by ID
export const readQualification = async (id) => {
  try {
    const response = await fetch(`${API_BASE}/${id}`);
    return await response.json();
  } catch (err) {
    console.error("Error reading qualification:", err);
    throw err;
  }
};

// Update Qualification
export const updateQualification = async (id, qualificationData, token) => {
  try {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(qualificationData),
    });
    return await response.json();
  } catch (err) {
    console.error("Error updating qualification:", err);
    throw err;
  }
};

// Delete Qualification
export const deleteQualification = async (id, token) => {
  try {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (err) {
    console.error("Error deleting qualification:", err);
    throw err;
  }
};
