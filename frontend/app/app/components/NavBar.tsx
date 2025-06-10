import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto flex items-center justify-between px-4 sm:px-8 py-4'>

        <Link href='/' className='flex items-center'>
          <Image src='/./lib/trans1.png' alt='Logo' width={48} height={48} />
        </Link>

        <nav className='flex space-x-6 items-center text-base sm:text-lg'>
          <Link href='/' className='text-[var(--color-text)] hover:text-[var(--color-secondary-green)]'>Home</Link>
          <Link href='/search' className='text-[var(--color-text)] hover:text-[var(--color-secondary-green)]'>Search</Link>
          <Link href='/about' className='text-[var(--color-text)] hover:text-[var(--color-secondary-green)]'>About Us</Link>
          <Link href='/faqs' className='text-[var(--color-text)] hover:text-[var(--color-secondary-green)]'>FAQs</Link>
        </nav>

        <Link
          href='/login'
          className='px-5 py-2.5 text-base sm:text-lg bg-[var(--color-secondary-green)] text-white rounded-2xl hover:bg-[var(--color-primary-green)] hover:text-black transition-colors duration-200'
        >
          Iniciar Sesión
        </Link>
      </div>
    </header>
  )
}

export default Header;
