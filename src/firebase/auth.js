import { auth } from './firebase';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePassword } from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = async (email, password) => createUserWithEmailAndPassword(auth, email, password)
export const doSignInWithEmailAndPassword = async (email, password) => signInWithEmailAndPassword(auth, email, password)

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)
  // save user data in FireStore
  return result
}

export const doSignInWithFacebook = async () => {
  const provider = new FacebookAuthProvider()
  const result = await signInWithPopup(auth, provider)
  // save user data in FireStore
  return result
}

export const doSignOut = () => auth.signOut()
export const doPasswordReset = email => sendPasswordResetEmail(auth, email)
export const doPasswordChange = password => updatePassword(auth.currentUser, password)
export const doSendEmailVerification = () => sendEmailVerification(auth.currentUser, {
  url: `${window.location.origin}/`
})