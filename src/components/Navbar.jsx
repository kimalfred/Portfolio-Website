import React from 'react';
import logo from "../assets/k.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/kim-alfred-molina-323455276/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/kimalfred" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.facebook.com/kimalfred.amolina" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com/kim_alfredkim/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
