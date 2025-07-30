const API_BASE = "http://localhost:5000/api/auth";

// Sign in user
export const signin = async (user) => {
  try {
    const response = await fetch(`${API_BASE}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });

    return await response.json();
  } catch (error) {
    console.error("Error during signin:", error);
    throw error;
  }
};

// Sign out user
export const signout = async () => {
  try {
    const response = await fetch(`${API_BASE}/signout`, {
      method: "GET",
      credentials: "include",
    });

    return await response.json();
  } catch (error) {
    console.error("Error during signout:", error);
    throw error;
  }
};
