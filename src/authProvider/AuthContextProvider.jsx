import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setuser] = useState();
  const [isCartUpdated, setIsCartUpdated] = useState(false);
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setproducts(data));
  }, []);

  const signUpEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const UpdateUser = (obj) => {
    setLoading(true);
    return updateProfile(auth.currentUser, obj);
  };

  const LognOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // update profile
  const updateUserProfile = (obj) => {
    setLoading(true);
    return updateProfile(auth.currentUser, obj);
  };

  const ResetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsebscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setLoading(false);
    });

    return () => {
      unsebscribe();
    };
  }, []);

  const Info = {
    user,
    setuser,
    UpdateUser,
    products,
    loading,
    setLoading,
    LognOut,
    googleSignIn,
    signUpEmailAndPassword,
    cartUpdate: [isCartUpdated, setIsCartUpdated],
    signInEmailPassword,
    updateUserProfile,
    ResetPassword,
  };

  return <AuthContext.Provider value={Info}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
