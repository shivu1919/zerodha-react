import React from 'react'
import '../css/Header.css'

function Header() {
  return (
    <>
       <div className='header'>
            <img src='https://zerodha.com/static/images/logo.svg' width='140' />
            <ul>
                <li>Signup</li>
                <li>About</li>
                <li>Products</li>
                <li>Pricing</li>
                <li>Support</li>
                <li> <img src="/menu.png" width="25"/> </li>
            </ul>
       </div>
    </>
  )
}

export default Header