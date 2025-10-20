import { useState, useEffect } from 'react';

// Placeholder auth hook
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    setTimeout(() => {
      setUser(null); // No user logged in initially
      setLoading(false);
    }, 1000);
  }, []);

  const login = (email, password) => {
    // Placeholder login
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
  };

  return { user, loading, login, logout };
};

export default useAuth;
