'use client';
import {
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
  type Firestore,
} from 'firebase/firestore';
import { getAuth, type User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  createdAt: any;
}

export async function createUserProfile(user: User) {
  const firestore = getFirestore();
  const userRef = doc(firestore, 'users', user.uid);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    const newUserProfile: UserProfile = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createdAt: serverTimestamp(),
    };
    await setDoc(userRef, newUserProfile);
  }
}
