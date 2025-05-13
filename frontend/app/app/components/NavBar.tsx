import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto flex items-center justify-between p-4'>

        {/* Logo and Home Link */}
        <Link href='/' className='flex items-center'>
          <Image src='/logo.png' alt='Logo' width={40} height={40} />
        </Link>

        {/* Navigation Links */}
        <nav className='flex space-x-6 items-center'>
          <Link href='/' className='text-gray-700 hover:text-gray-900'>Home</Link>
          <Link href='/search' className='text-gray-700 hover:text-gray-900'>Search</Link>
          <Link href='/about' className='text-gray-700 hover:text-gray-900'>About Us</Link>
          <Link href='/faqs' className='text-gray-700 hover:text-gray-900'>FAQs</Link>
        </nav>

        {/* Login Button */}
        <Link href='/login' className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
          Iniciar Sesión
        </Link>
      </div>
    </header>
  )
}

export default Header;
