import React from 'react'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { NavigationMenuDemo } from './NavLinks'
import Image from 'next/image'
import Logo from '/public/Logo.webp'

const NavBar = () => {
  return (
    <div className=''><div className="navbar bg-[#f2f2f2] text-gray-900 px-10 ">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href={"/"}>Home</Link></li>
        <li tabIndex={0}>
          <details>
            <summary>All Products</summary>
            <ul className="p-2">
              <li><Link href={"/man"}>Man</Link></li>
              <li><Link href={"/woman"}>Woman</Link></li>
              <li><Link href={"/kids"}>Kids</Link></li>
              <li><Link href={"/new-born"}>New Born</Link></li>
              
            </ul>
          </details>
        </li>
        <li><Link href={"/contact"}>Contact</Link></li>
        </ul>
      </div>
      <Link href={'/'}><Image src={Logo} alt='/' /></Link>
    </div> 
    <div className="navbar-center ">
      {/* <ul className="menu menu-horizontal px-1">
        <li><Link href={"#"}>Home</Link></li>
        <li tabIndex={0}>
          <details>
            <summary>All Products</summary>
            <ul className="p-2">
              <li><Link href={"#"}>Male</Link></li>
              <li><Link href={"#"}>Female</Link></li>
              <li><Link href={"#"}>Kids</Link></li>
              
            </ul>
          </details>
        </li>
        <li><Link href={"#"}>Contact</Link></li>
      </ul> */}
      <div className='hidden lg:flex'>
        <NavigationMenuDemo/>
      </div>
    </div>
    <div className="navbar-end">
  <Link href={'/cart'}>
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
  </Link>
      
    
    </div>
  </div></div>
  )
}

export default NavBar