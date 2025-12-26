import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';

export function initializeFirebase() {

  if (getApps().length) {
    const app = getApp();
    const firestore = getFirestore(app);
    return { firebaseApp: app, firestore };
  }

  const firebaseApp = initializeApp({});
  const firestore = getFirestore(firebaseApp);

  return { firebaseApp, firestore };
}

export { useCollection } from './firestore/use-collection';
export { useDoc } from './firestore/use-doc';
