'use client';

import Link from 'next/link';
import React, {useState} from 'react';

const Header:React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between">
            <div className="flex-1">
            <span className="text-red-500 text-2xl">LOGO</span>
            </div>

            <div className="flex-1 hidden md:flex space-x-4 text-end" style={{justifyContent:'end'}}>
            <Link href="/">
            Home
            </Link>
            <Link href="/about">
            About
            </Link>
            <Link href="/blog">
            Blog
            </Link>
            </div>

            <div className="flex-1 text-end md:hidden">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle Menu"
            >
                <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                />
                </svg>
            </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
                <Link href="/">
                Home
                </Link>
                <Link href="/about">
                About
                </Link>
                <Link href="/blog">
                Blog
                </Link>
            </nav>
            </div>
        )}
        </header>
    )
}

export default Header;