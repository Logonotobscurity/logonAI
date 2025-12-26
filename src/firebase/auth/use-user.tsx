
'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import type { User } from 'firebase/auth';
import { initializeFirebase } from '@/firebase';
import type { Auth, FirebaseApp } from 'firebase/auth';

interface UserContextType {
    firebaseApp: FirebaseApp | null;
    auth: Auth | null;
    user: User | null;
    isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Mock user for demo mode
const demoUser: User = {
    uid: 'demo-user-123',
    displayName: 'Demo User',
    email: 'demo@example.com',
    photoURL: 'https://placehold.co/40x40/6c47ff/ffffff.png?text=D',
    emailVerified: true,
    isAnonymous: false,
    metadata: {},
    providerData: [],
    providerId: 'demo',
    tenantId: null,
    delete: async () => {},
    getIdToken: async () => 'demo-token',
    getIdTokenResult: async () => ({
        token: 'demo-token',
        expirationTime: '',
        authTime: '',
        issuedAtTime: '',
        signInProvider: null,
        signInSecondFactor: null,
        claims: {},
    }),
    reload: async () => {},
    toJSON: () => ({}),
};


export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const { firebaseApp, auth } = initializeFirebase();

  useEffect(() => {
    // In demo mode, we just set a mock user and bypass Firebase Auth.
    setUser(demoUser);
    setIsLoading(false);

    // Original Firebase Auth logic is commented out below:
    /*
    if (!auth) {
        setIsLoading(false);
        return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
    */
  }, [auth]);

  return (
    <UserContext.Provider value={{ user, isLoading, firebaseApp, auth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
