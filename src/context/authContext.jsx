import React, {
  createContext, useCallback, useEffect, useMemo, useState,
} from 'react';
// import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setUser(JSON.parse(token));
    }
  }, []);

  const register = useCallback(async (values, actions) => {
    try {
      const { ConfirmPassword, ...rest } = values;
      const res = await axiosInstance.post(
        'register',
        rest,
      );
      console.log(res.data);
      localStorage.setItem('token', JSON.stringify(res.data));
      setUser(res.data);
      actions.resetForm();
    } catch (error) {
      console.log(error);
      actions.setErrors({
        serverError: error.message,
      });
    }
  }, []);

  const login = useCallback(async (values, actions) => {
    try {
      const { ConfirmPassword, ...rest } = values;
      const res = await axiosInstance.post(
        'login',
        rest,
      );
      console.log(res.data);
      localStorage.setItem('token', JSON.stringify(res.data));
      setUser(res.data);

      actions.resetForm();
    } catch (error) {
      console.log(error);
      actions.setErrors({
        serverError: error.message,
      });
    }
  }, []);
  const Logout = useCallback(
    () => {
      localStorage.clear();
      setUser(null);
    },
    [],
  );

  const value = useMemo(() => ({
    register, login, Logout, user,
  }), [register, login, Logout, user]);
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
