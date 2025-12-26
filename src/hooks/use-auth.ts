
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';

export function useAuth(redirectTo = '/') {
  const { user, isLoading } = useUser();
  const router = useRouter();

  // Demo mode: Do not redirect, always allow access.
  useEffect(() => {
    // Original logic:
    // if (!isLoading && !user) {
    //   router.push(redirectTo);
    // }
  }, [user, isLoading, router, redirectTo]);

  return { user, isLoading };
}
