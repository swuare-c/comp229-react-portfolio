const API_BASE = "/api/auth"; // adjust port/backend URL accordingly

export const signin = async (user) => {
  try {
    const response = await fetch(`${API_BASE}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const signout = async () => {
  try {
    const response = await fetch(`${API_BASE}/signout`, {
      method: 'GET',
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
