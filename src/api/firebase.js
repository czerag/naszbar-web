import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from './firebase.config';
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const firebaseErrors = {
//   'auth/invalid-email': 'Nieprawidłowy email...',
//   'auth/weak-password': 'Password should be at least 6 characters',
//   'auth/email-already-in-use': 'Account registered for this e-mail is already in use',
//   'auth/user-not-found': 'User account does not exist',
//   'auth/wrong-password': 'Provided wrong password',
//   'auth/network-request-failed': 'Something went wrong... Check you internet connection.',
// };
