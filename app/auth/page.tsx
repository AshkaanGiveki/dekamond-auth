'use client';
import { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import styles from './auth.module.scss';
import { useRouter } from 'next/navigation';
import loginIcon from '@/assets/icons/login.png';
import Image from 'next/image';

export default function AuthPage() {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const validatePhone = (number: string) => /^09\d{9}$/.test(number);

    const handleLogin = async () => {
        if (!validatePhone(phone)) {
            setError('Phone Number is incorrect. it should start with 09 and contain 11 digits!');
            return;
        }
        try {
            const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
            const data = await res.json();
            localStorage.setItem('user', JSON.stringify(data.results[0]));
            router.push('/dashboard');
        } catch {
            setError('Error: Failed to connect to server');
        }
    };
    

    return (
        <div className={styles.container}>
            <Image src={loginIcon} alt='Login' title='Login'/> 
            <h1 className={styles.title}>Login With Phone Number</h1>
            <h4 className={styles.description}>Sign into your account just by entering your phone number!</h4>
            <div className={styles.inputContainer}>
                <Input error={error} value={phone} onChange={setPhone} placeholder="Phone Number" />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.buttonContainer}>
                <Button onClick={handleLogin}>Submit</Button>
            </div>
        </div>
    );
}
