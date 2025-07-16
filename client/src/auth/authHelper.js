// Save JWT to sessionStorage
export const authenticate = (jwt, cb) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem('jwt', JSON.stringify(jwt));
    cb();
  }
};

// Retrieve JWT
export const isAuthenticated = () => {
  if (typeof window === "undefined") return false;
  if (sessionStorage.getItem('jwt'))
    return JSON.parse(sessionStorage.getItem('jwt'));
  return false;
};

// Clear JWT
export const clearJWT = (cb) => {
  if (typeof window !== "undefined") sessionStorage.removeItem('jwt');
  cb();
};
