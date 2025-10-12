import React from 'react'
import Logo from "../assets/mesklogo.png"

const layout = ({ children }) => {
  return (
    <div>
      <nav className='flex items-center justify-between mt-5 px-30 font-semibold'>
        <div>
            <img src={Logo} className='w-18' />
        </div>

        <div className='flex items-center gap-10 list-none'>
            <li>Home</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Contact</li>
            <li>Services</li>
        </div>

        <button className='bg-[#ddd53b] rounded-full w-50 py-3 text-black'>Get a Free Quote</button>
      </nav>

      <main>{children}</main>

      <footer></footer>
    </div>
  )
}

export default layout
