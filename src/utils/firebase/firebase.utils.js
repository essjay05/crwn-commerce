import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  // signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2B0SOzxcDM6P_vJaUz1-PM7CsRR3DKhY",
  authDomain: "crwn-apparel-db-ba44d.firebaseapp.com",
  projectId: "crwn-apparel-db-ba44d",
  storageBucket: "crwn-apparel-db-ba44d.appspot.com",
  messagingSenderId: "393445965828",
  appId: "1:393445965828:web:8b7cad5b8fa38f31acf551"
};

// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)