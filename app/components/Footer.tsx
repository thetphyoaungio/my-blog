import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex-none w-full md:w-[15%] text-red-500 mb-4 md:mb-0">
          LOGO
        </div>
        <div className="flex-1 w-full md:w-auto text-start mb-4 md:mb-0">
          <Link href="#">
            <span className="block hover:opacity-70">Home</span>
          </Link>
          <Link href="#">
            <span className="block hover:opacity-70">Discovery</span>
          </Link>
          <Link href="#">
            <span className="block hover:opacity-70">Photos</span>
          </Link>
          <Link href="#">
            <span className="block hover:opacity-70">Contact</span>
          </Link>
        </div>
        <div className="flex-1 w-full md:w-auto text-start mb-4 md:mb-0">
          <Link href="#">
            <span className="block hover:opacity-70">Home</span>
          </Link>
          <Link href="#">
            <span className="block hover:opacity-70">Discovery</span>
          </Link>
          <Link href="#">
            <span className="block hover:opacity-70">Photos</span>
          </Link>
          <Link href="#">
            <span className="block hover:opacity-70">Contact</span>
          </Link>
        </div>
        <div className="flex-1 w-full md:w-auto text-start">
          <Link href="#">
            <span className="block hover:opacity-70">Home</span>
          </Link>
          <Link href="#">
            <span className="block hover:opacity-70">Discovery</span>
          </Link>
          <Link href="#">
            <span className="block hover:opacity-70">Photos</span>
          </Link>
          <Link href="#">
            <span className="block hover:opacity-70">Contact</span>
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-zinc-400 text-sm">
          &copy; 2024 My Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
