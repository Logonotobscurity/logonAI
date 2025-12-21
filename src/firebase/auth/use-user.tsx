'use client';
import { useEffect, useState } from 'react';
import { type User, onAuthStateChanged } from 'firebase/auth';
import { doc } from 'firebase/firestore';
import { useAuth, useFirestore, useDoc } from '@/firebase';
import { UserProfile, createUserProfile } from '@/firebase/users';

export const useUser = () => {
  const auth = useAuth();
  const firestore = useFirestore();

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [firestoreUser, setFirestoreUser] = useState<UserProfile | null>(null);

  const userDocRef = user ? doc(firestore, 'users', user.uid) : null;
  const { data: userProfile, isLoading: isProfileLoading } =
    useDoc<UserProfile>(userDocRef);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setIsLoading(false);

      if (user) {
        // This is a new user, create a profile
        await createUserProfile(user);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (userProfile) {
      setFirestoreUser(userProfile);
    }
  }, [userProfile]);

  return {
    user,
    firestoreUser,
    isLoading: isLoading || isProfileLoading,
  };
};
