'use client';
import { useState } from 'react'
import Link from 'next/link';

const Navbar = () => {
    //MenuToggle Functionality
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive); 
    };
  return (
    <nav>
        <div className="container navigation">
            <div className="row">
                <div className="col">
                    <a href="/" className="logo">NOVA</a>
                </div>
                <div className="col">

                    <a href="#"
                        className="menuToggle"
                        id="menuBtn"
                        onClick={ToggleClass}
                    >Menu</a>

                    <ul className={isActive ? "menu" : "menu active"} id="menu">
                        <li><Link href="/" onClick={ToggleClass}>Home</Link></li>
                        <li><Link href="/about" onClick={ToggleClass}>About</Link></li>
                        <li><Link href="/services" onClick={ToggleClass}>Services</Link></li>
                        <li><Link href="/contact" onClick={ToggleClass}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
