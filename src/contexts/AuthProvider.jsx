'use client';

import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { app, db } from '../firebase/firebase.config';
import { doc, setDoc } from 'firebase/firestore';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (name, email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        const ref = doc(db, 'users', result.user.uid);
        const docref = await setDoc(ref, { name })
          .then(() => {
            alert('user created successfully');
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Email already in use');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUpWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    login,
    signUpWithGoogle,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
