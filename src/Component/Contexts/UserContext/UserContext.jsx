
import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentUser = auth.currentUser;

  // create user email/pass
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const userProfile = (name, photo) => {
    return updateProfile(currentUser, { displayName: name, photoURL: photo });
  };

  // sign is with email/pass
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign in with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //sign in with github
  const signInWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //log out
  const logOut = () => {
    return signOut(auth);
  };

  // auth state changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  // auth information
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    signInWithGitHub,
    logOut,
    userProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;






































// import React, { createContext, useEffect, useState } from 'react';
// import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from 'firebase/auth'
// import app from '../../Firebase/firebase.config';


// // Export Authcontext
// export const AuthContext = createContext();
// const auth = getAuth(app);

// const UserContext = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // Google / Github provider.
//     const providerLogin = (provider) => {
//         setLoading(true);
//         return signInWithPopup(auth, provider);
//     }
// // For  a new user 
//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//     }
// // Login with mail
//     const logIn = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     }

//     const updateUserProfile = (profile) => {
//         return updateProfile(auth.currentUser, profile);
//     }
//       // update user profile
//   const userProfile = (name, photo) => {
//     return updateProfile(currentUser, { displayName: name, photoURL: photo });
//   };


    
// //Log out 
//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth);
//     }
// // For check the statement
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             console.log('inside auth state change', currentUser);

//             if(currentUser === null || currentUser.emailVerified){
//                 setUser(currentUser);
//             }
//             setLoading(false);
//         });

//         return () => {
//             unsubscribe();
//         }

//     }, [])


//     const authInfo = { 
//         user, 
//         loading, 
//         setLoading,
//         providerLogin, 
//         logOut, 
//         updateUserProfile,
//         createUser, 
//         userProfile,
//         logIn 
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default UserContext;