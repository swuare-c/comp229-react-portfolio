const API_BASE = "/api/projects"; 

// Create a new project
export const createProject = async (project) => {
  try {
    const response = await fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    return await response.json();
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

// Get list of all projects
export const listProjects = async () => {
  try {
    const response = await fetch(API_BASE);
    return await response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

// Get a project by ID
export const getProject = async (projectId) => {
  try {
    const response = await fetch(`${API_BASE}/${projectId}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching project ${projectId}:`, error);
    throw error;
  }
};

// Update a project by ID
export const updateProject = async (projectId, updatedProject) => {
  try {
    const response = await fetch(`${API_BASE}/${projectId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProject),
    });
    return await response.json();
  } catch (error) {
    console.error(`Error updating project ${projectId}:`, error);
    throw error;
  }
};

// Delete a project by ID
export const deleteProject = async (projectId) => {
  try {
    const response = await fetch(`${API_BASE}/${projectId}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.error(`Error deleting project ${projectId}:`, error);
    throw error;
  }
};
