'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userStr = localStorage.getItem('user');

    if (userStr) {
      router.replace('/dashboard');
    } else {
      router.replace('/auth');
    }

    setTimeout(() => setLoading(false), 2000);
  }, []);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '5px solid #ccc',
        borderTop: '5px solid #0070f3',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <p style={{ marginTop: '1rem', fontSize: '1.1rem', color: '#666' }}>Redirecting ...</p>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

}
