import React from 'react'
import Logo from '../Logo/Logo'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Header() {
  const navigate = useNavigate()
  return (
    <div className='text-white h-16 w-[95%] bg-[#141414] rounded-full mx-auto my-4 flex justify-between px-10 py-2 items-center'>
      <Logo />
      <div className=''>
        <ul className='flex gap-9 items-center'>
          <Link to="/">
            <li className='hover:cursor-pointer hover:text-blue-600'>Home</li>
          </Link>
          <Link to="/about">
            <li className='hover:cursor-pointer hover:text-blue-600'>About</li>
          </Link>
          <Link to="/events">
            <li className='hover:cursor-pointer hover:text-blue-600'>Events</li>
          </Link>
          <Link to="/team">
            <li className='hover:cursor-pointer hover:text-blue-600'>Team</li>
          </Link>
          <Link to="/clubs">
            <li className='hover:cursor-pointer hover:text-blue-600'>Clubs</li>
          </Link>
          <Link to="/contact">
          <li className='hover:cursor-pointer hover:text-blue-600'>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header