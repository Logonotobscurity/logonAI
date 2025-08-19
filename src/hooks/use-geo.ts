
'use client';

import { useState, useEffect } from 'react';

interface GeoInfo {
  country: string | null;
  currency: string | null;
}

export function useGeo() {
  const [geoInfo, setGeoInfo] = useState<GeoInfo>({ country: null, currency: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchGeoInfo() {
      try {
        setLoading(true);
        const response = await fetch("https://ipapi.co/json");
        if (!response.ok) {
          throw new Error('Failed to fetch geo information');
        }
        const data = await response.json();
        setGeoInfo({ country: data.country_name, currency: data.currency });
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchGeoInfo();
  }, []);

  return { ...geoInfo, loading, error };
}
