import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showSocial, setShowSocial] = useState(false);
  const [showLinks, setShowLinks] = useState(false)
  return (
    <>
      <nav className="container border border-primary">
        <div className="navHeader border d-flex justify-content-between p-2">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          <button
            onClick={() => setShowLinks(!showLinks)}
            className="border-0 "
            style={{ backgroundColor: "transparent" }}
          >
            <FaBars className="text-primary" />
          </button>
        </div>
        {showLinks && (
          <div className="navContainer relative">
            <ul
              className="linkul"
              style={{ listStyleType: "none" }}
            >
              {links.map((link, index) => {
                const { id, text, url } = link;
                return (
                  <li key={id} className="linkLi">
                    <a
                      href={url}
                      className="text-danger"
                      style={{ textDecoration: "none" }}
                    >
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {showSocial && (
          <div className="navSocial">
            {social.map((social) => {
              const { id, url, icon } = social;
              return (
                <a href={url} key={id} className="p-1">
                  {icon}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar
