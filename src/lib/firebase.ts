// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBso1cFOo7dQK2d_aqEy3d-OBDcQdo614I",
    authDomain: "pearl-paradise-travel.firebaseapp.com",
    projectId: "pearl-paradise-travel",
    storageBucket: "pearl-paradise-travel.firebasestorage.app",
    messagingSenderId: "1063768761289",
    appId: "1:1063768761289:web:5934d105770a86acd03e18",
    measurementId: "G-G6N3G6XSLT"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Analytics (client-side only)
export const initAnalytics = async () => {
    if (typeof window !== "undefined") {
        const supported = await isSupported();
        if (supported) {
            return getAnalytics(app);
        }
    }
    return null;
};

export { app };
