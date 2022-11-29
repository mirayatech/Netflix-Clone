import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: 'netflix-459fc.firebaseapp.com',
  projectId: 'netflix-459fc',
  storageBucket: 'netflix-459fc.appspot.com',
  messagingSenderId: '58908399063',
  appId: '1:58908399063:web:b17d2dce744779b42f2792',
}

const app = initializeApp(firebaseConfig)
const firebaseStorage = getStorage(app)
const firebaseDb = getFirestore(app)
const firebaseAuth = getAuth(app)

export { firebaseStorage, firebaseDb, firebaseAuth }
