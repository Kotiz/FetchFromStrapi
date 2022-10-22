// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDldkNyd1H91lNEZ8JaPlK-Oq4HvKGCA9k',
  authDomain: 'hash-96616.firebaseapp.com',
  projectId: 'hash-96616',
  storageBucket: 'hash-96616.appspot.com',
  messagingSenderId: '72280216733',
  appId: '1:72280216733:web:ab8f83c3e776f0f7657074'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
  db
}
