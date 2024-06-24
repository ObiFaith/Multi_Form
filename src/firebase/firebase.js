import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfy1IZavEomJCBHpROH0ezsiDFVuUPDo4",
  authDomain: "multi-form-93cb1.firebaseapp.com",
  projectId: "multi-form-93cb1",
  storageBucket: "multi-form-93cb1.appspot.com",
  messagingSenderId: "617973367328",
  appId: "1:617973367328:web:30c336f5a2fff8f0843245",
  measurementId: "G-XC89ZGGJP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, auth, }