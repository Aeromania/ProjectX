// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCH8cSnpEtNyI5gTQNV4SljDIdC0fNhtmk',
  authDomain: 'projectx-labs.firebaseapp.com',
  projectId: 'projectx-labs',
  storageBucket: 'projectx-labs.appspot.com',
  messagingSenderId: '826475438047',
  appId: '1:826475438047:web:4f18899e76a0921bbdee6a',
  measurementId: 'G-QN2RMY4MYL',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
