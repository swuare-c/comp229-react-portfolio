const API_BASE = 'http://localhost:5000/api/users';

export const signup = async (userData) => {
  const response = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return await response.json();
};
