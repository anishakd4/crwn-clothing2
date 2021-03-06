import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtARdnXuv_iSPXCkwJMsFgyz_Y2Ynt6hk",
    authDomain: "crwnn-db.firebaseapp.com",
    projectId: "crwnn-db",
    storageBucket: "crwnn-db.appspot.com",
    messagingSenderId: "388687886965",
    appId: "1:388687886965:web:cd0a609ab4afdcf35c963c",
    measurementId: "G-KL4SDYEYWM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    console.log(`users/${userAuth.uid}`);

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            });
        }catch(error){
            console.log("error creating user", error.message);
        }
    }

    return userRef;
}

export default firebase;