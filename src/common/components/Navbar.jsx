import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false)

  const changeBackgroundHeader = () => {
    window.scrollY >= 80 ? setNavbarBg(true) : setNavbarBg(false)
  }

  window.addEventListener('scroll', changeBackgroundHeader)

  return (
    <nav
      className={`fixed top-0 z-10 flex h-16 w-full items-center justify-between p-8 transition-colors ${
        navbarBg && 'bg-black/90'
      }`}
    >
      <Link to='/'>
        <span className='w-4 overflow-hidden'>
          <img src='/netflix-logo.svg' alt='NETFLIX' className='w-36' />
        </span>
      </Link>
      <div className='flex gap-4'>
        <Link to='/login'>
          <span className='text-white'>Iniciar Sesion</span>
        </Link>
        <Link to='/signup'>
          <span className='rounded bg-netflix px-4 py-2 text-white'>Registrarse</span>
        </Link>
      </div>
    </nav>
  )
}
