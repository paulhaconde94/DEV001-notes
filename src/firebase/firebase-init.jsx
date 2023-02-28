import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDocs,
  query,
  updateDoc
  
  


} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLblv1LlFqMiNEQLEidHLa2c1oCkfe20o",
  authDomain: "write-coffee-4b72f.firebaseapp.com",
  projectId: "write-coffee-4b72f",
  storageBucket: "write-coffee-4b72f.appspot.com",
  messagingSenderId: "888585045663",
  appId: "1:888585045663:web:ae50bcdac61364635704aa",
  measurementId: "G-S6LLWTZ8QR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth (app); 
export const provider = new GoogleAuthProvider();
export const googlePopUp = () => signInWithPopup(auth, provider);

export const boardSignOut = async () => {
  await signOut(auth);
}
export const loginWithGoogle = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
  const displayNameUser = user.displayName;
  const emailUser = user.email;
  console.log("usuario ingresado: ", emailUser)
  console.log("usuario display: ", displayNameUser)
}
  return googlePopUp();
};

export { GoogleAuthProvider };

export const db = getFirestore(app);

export  const saveNote = (title, description) =>{
  addDoc(collection(db, "notas"), { title, description });
};

export async function getNotes() {
  const collectNotes = query(collection(db, "notas"));
  return getDocs(collectNotes).then((QuerySnapshot) => {
    return QuerySnapshot.docs.map((docu) => ({
      data: docu.data(),
      id: docu.id,
    }));
  });
}

export async function editNotes(item, newObj) {
  await updateDoc(doc(collection(db, "notas"), item.id), {
    title: newObj.title,
    description: newObj.description,
  })
}

