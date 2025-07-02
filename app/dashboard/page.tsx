'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.scss';
import logoutIcon from '../../assets/icons/turn-off.png';
import Image from 'next/image';

export default function Dashboard() {
    const router = useRouter();
    const [user, setUser] = useState<{ name: { first: string; last: string } } | null>(null);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (!userData) {
            router.replace('/auth');
        } else {
            try {
                const parsedUser = JSON.parse(userData);
                setUser(parsedUser);
            } catch {
                router.replace('/auth');
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        router.replace('/auth');
      };

    return (
        <div className={styles.container}>
            {user ? (
                <>
                    <Image src={logoutIcon} className={styles.logout} alt='logout' title='Logout' onClick={handleLogout} />
                    <p className={styles.welcomeText}>
                        Welcome to dashboard, {user.name.first} {user.name.last}!
                    </p>
                </>
            ) : (
                <div className={styles.loader}></div>
            )}
        </div>
    );
}
