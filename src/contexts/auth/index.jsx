import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase';

const Auth = createContext();
export const useAuth = () => useContext(Auth);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => setUser(user ? user : null));

    return () => unsubscribe();
	}, []);

  const signup = async (email, password) => await createUserWithEmailAndPassword(auth, email, password)

  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password)
    setUser(response.user);
  }

  const logout = async () => {
    await signOut()
    setUser(null)
  }

	return <Auth.Provider value={{user, isLoading, signup, login, logout}}>{children}</Auth.Provider>;
};
