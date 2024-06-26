import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase';

const Auth = createContext();
export const useAuth = () => useContext(Auth);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const registeredUser = localStorage.getItem('user');
		if (registeredUser) setUser(JSON.parse(registeredUser));

		const unsubscribe = onAuthStateChanged(auth, user => {
      if (user){
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        setLoading(true)
      }
      else{
        localStorage.removeItem('user');
        setUser(null);
        setLoading(false)
      }
    });

    return () => unsubscribe();
	}, []);

  const signup = async (email, password) => await createUserWithEmailAndPassword(auth, email, password)

  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password)
    console.log('response:', response)
    setUser(response.user);
    localStorage.setItem('user', JSON.stringify(response.user));
  }

  const logout = async () => {
    await signOut()
    setUser(null)
    localStorage.removeItem('user')
  }

	return <Auth.Provider value={{user, isLoading, signup, login, logout}}>{children}</Auth.Provider>;
};
