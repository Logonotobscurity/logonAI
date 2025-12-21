'use client';
import { useState, useEffect } from 'react';
import {
  collection,
  onSnapshot,
  query,
  where,
  type DocumentData,
  type Query,
} from 'firebase/firestore';

export function useCollection<T>(query: Query | null) {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setData([]);
      setIsLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(query, (snapshot) => {
      const data: T[] = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as T);
      });
      setData(data);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [query]);

  return { data, isLoading };
}
