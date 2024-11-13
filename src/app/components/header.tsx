import React from 'react'
import Link from "next/link"

function Header() {
  return (
    <div>
      <header>
        <div className="logo">Portfolio</div>
        <div className="navigation">
          <input type="checkbox" className="toggle" />
          <div className="portfolio">
            <div className="icon" />
          </div>
          <div className="nav">
            <div className="background">
              <div className="center">
                <ul>
                  <li>
                    <Link href="#home">Home</Link>
                  </li>
                  <li>
                    <Link href="#about">About</Link>
                  </li>
                  <li>
                    <Link href="#skills">Skills</Link>
                  </li>
                  <li>
                    <Link href="#project">Projects</Link>
                  </li>
                  <li>
                    <Link href="#service">Services</Link>
                  </li>
                  <li>
                    <Link href="#contact-us">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Header