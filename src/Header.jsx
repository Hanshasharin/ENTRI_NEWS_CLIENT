// import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {

  const tokenRelease=()=>{
    sessionStorage.removeItem('userToken')
  }
  return (
    <div>
      <header className='navbar'>
        <nav className='links'>
            <ul>
                <li className='link'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='link'>
                    <Link to='/new'>New</Link>
                </li>
                <li className='link'>
                    <Link to='/blogs'>Blogs</Link>
                </li>
                <li className='link'>
                    <Link to='/trending'>Trending</Link>
                </li>
                <li className='link'>
                    <Link to='/signup'>Sign Up</Link>
                </li>
                <li className='link'>
                    <Link to='/login'>Login</Link>
                </li>
                <li className='link'>
                    <Link to='/' onClick={tokenRelease}>Logout</Link>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header