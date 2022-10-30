import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1);
            router.push('/'); // 頁面導向
        }, 3000);
    }, []);
    return (
        <>
            <h1>Ooops</h1>
            <h2>NotFound</h2>
            <p>
                Go back to <Link href="/">HomePage</Link>
            </p>
        </>
    );
};

export default NotFound;
