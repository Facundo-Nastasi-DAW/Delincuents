import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto flex items-center justify-between p-4'>

        <Link href='/' className='flex items-center'>
          <Image src='/logo.png' alt='Logo' width={40} height={40} />
        </Link>

        <nav className='flex space-x-6 items-center'>
          <Link href='/' className='text-[var(--color-text)] hover:text-[var(--color-secondary-green)]'>Home</Link>
          <Link href='/search' className='text-[var(--color-text)] hover:text-[var(--color-secondary-green)]'>Search</Link>
          <Link href='/about' className='text-[var(--color-text)] hover:text-[var(--color-secondary-green)]'>About Us</Link>
          <Link href='/faqs' className='text-[var(--color-text)] hover:text-[var(--color-secondary-green)]'>FAQs</Link>
        </nav>

        <Link href='/login' className='px-4 py-2 bg-[var(--color-secondary-green)] text-white rounded-2xl hover:bg-[var(--color-primary-green)] hover:text-black'>
          Iniciar Sesión
        </Link>
      </div>
    </header>
  )
}

export default Header;
