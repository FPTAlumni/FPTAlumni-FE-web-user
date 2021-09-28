// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA8GEmELk7bBfmxHcOQBhQrck3pHQlk1gw",
  authDomain: "tasky-a84eb.firebaseapp.com",
  projectId: "tasky-a84eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export { app };
