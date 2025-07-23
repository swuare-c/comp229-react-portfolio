const API_BASE = '/api/users';

export const signup = async (userData) => {
  try {
    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (err) {
    console.error('Signup error:', err);
    throw err;
  }
};
