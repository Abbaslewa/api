// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD0oiAlyUXloWwULqlyq1sHuFf5H8QJTko",
//   authDomain: "sahand-estate-c348c.firebaseapp.com",
//   projectId: "sahand-estate-c348c",
//   storageBucket: "sahand-estate-c348c.firebasestorage.app",
//   messagingSenderId: "19902078259",
//   appId: "1:19902078259:web:6300630bacbb85996f3246",
//   measurementId: "G-8BGN7SR3Z5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export default app;


// firebase.js

// //Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD0oiAlyUXloWwULqlyq1sHuFf5H8QJTko",
//   authDomain: "sahand-estate-c348c.firebaseapp.com",
//   projectId: "sahand-estate-c348c",
//   storageBucket: "sahand-estate-c348c.firebasestorage.app",
//   messagingSenderId: "19902078259",
//   appId: "1:19902078259:web:6300630bacbb85996f3246",
//   measurementId: "G-8BGN7SR3Z5",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Use named export
// export { app, analytics };



// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate.firebaseapp.com',
  projectId: 'mern-estate',
  storageBucket: 'mern-estate.appspot.com',
  messagingSenderId: '1078482850952',
  appId: '1:1078482850952:web:28f19139ab77246602fb3d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);