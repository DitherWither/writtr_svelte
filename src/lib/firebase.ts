// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth, onAuthStateChanged } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBP0mDyXr3m7KFTzkedJAK51J9Qxyqx9kE',
	authDomain: 'writtrr-app.firebaseapp.com',
	projectId: 'writtrr-app',
	storageBucket: 'writtrr-app.appspot.com',
	messagingSenderId: '645499059233',
	appId: '1:645499059233:web:23b6ccbf56c003ec827760',
	measurementId: 'G-N46MH77VF2'
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const firestore: Firestore = getFirestore(app);

export let isAuthReady = false;

onAuthStateChanged(auth, () => {
	if (!isAuthReady) {
		isAuthReady = true;
		console.log('Auth is ready');
	}
});
