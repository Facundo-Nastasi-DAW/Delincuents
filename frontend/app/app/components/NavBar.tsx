"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export const Header: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cookieName = Cookies.get("userName");
    if (cookieName) {
      setUserName(cookieName);
    }
  }, []);

  const logout = () => {
    Cookies.remove("userName");
    setUserName(null);
    router.push("/login");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={48} height={48} />
        </Link>

        <nav className="flex space-x-6 items-center text-base sm:text-lg">
          <Link href="/" className="text-[var(--color-text)] hover:text-[var(--color-secondary-green)]">Home</Link>
          <Link href="/about" className="text-[var(--color-text)] hover:text-[var(--color-secondary-green)]">About Us</Link>
          <Link href="/faqs" className="text-[var(--color-text)] hover:text-[var(--color-secondary-green)]">FAQs</Link>
        </nav>

        {/* Login / User menu */}
        {userName ? (
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-base sm:text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-secondary-green)]"
            >
              Hello, {userName}
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-xl shadow-lg z-10">
                <Link
                  href="/clients"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-xl"
                >
                  Mi perfil
                </Link>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 rounded-b-xl"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className="px-5 py-2.5 text-base sm:text-lg bg-[var(--color-secondary-green)] text-white rounded-2xl hover:bg-[var(--color-primary-green)] hover:text-black transition-colors duration-200"
          >
            Iniciar Sesión
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
