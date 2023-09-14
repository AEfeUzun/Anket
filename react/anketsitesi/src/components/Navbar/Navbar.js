import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='ank_navbar'>
        <a href='/home' className='ank_header' style={{ color:'white',textDecoration:'none'}}>Ank@</a>
        <ul className='nav_list'>
            <li className='nav_item'><Link to=''  style={{ color:'white'}} >Spor</Link></li>
            <li className='nav_item'><Link to=''  style={{ color:'white'}}>Araba</Link></li>
            <li className='nav_item'><Link to=''  style={{ color:'white'}}>Teknoloji</Link></li>
            <li className='nav_item'><Link to=''  style={{ color:'white'}}>Siyaset</Link></li>
            <li className='nav_item'><Link to=''  style={{ color:'white'}}>E-Spor</Link></li>
           
            <li className='nav_item' style={{marginLeft:'450px',}}>
                <a href='/giris' style={{color:'blue'}}>Giriş Yap</a>
            </li>
            <li className='nav_item'>
            <a href='/kayit'style={{color:'blue'}}>Kayıt Ol</a>
            </li>
            
        </ul>
    </nav>
    
    
  )
}

export default Navbar