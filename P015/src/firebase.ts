// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCdMx4W6KU8JJ8TZXhB0t8_pSDpU93kU_4',
  authDomain: 'residencia-tic.firebaseapp.com',
  projectId: 'residencia-tic',
  storageBucket: 'residencia-tic.appspot.com',
  messagingSenderId: '307356802354',
  appId: '1:307356802354:web:39a58e629dc02a0ec38b2b',
  measurementId: 'G-D5660XR8C6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
