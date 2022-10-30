import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <h1>Nav List</h1>
                </div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/mall">Mall</Link>
            </nav>
        </>
    );
};

export default Navbar;
