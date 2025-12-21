'use client';
import { useState, useEffect } from 'react';
import { onSnapshot, type DocumentReference } from 'firebase/firestore';

export function useDoc<T>(docRef: DocumentReference | null) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!docRef) {
      setData(null);
      setIsLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        setData({ id: snapshot.id, ...snapshot.data() } as T);
      } else {
        setData(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [docRef]);

  return { data, isLoading };
}
