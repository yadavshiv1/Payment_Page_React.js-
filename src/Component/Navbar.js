import React from "react";
import './Payment.css'
import { BiSearchAlt } from 'react-icons/bi';
import Logo from "./logo.png";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';

export function Navbar(){
    return(
        <div className="main-nav">
            <div className="logo">
                <div><img src={Logo} alt="logo" /></div>
            </div>

            <div className="center-nav">
                <ul>
                    <li>
                        <a href="/">Men</a>
                    </li>
                    <li>
                        <a href="/">Women</a>
                    </li>
                    <li>
                        <a href="/">Kid's</a>
                    </li>
                </ul>
          
            </div>
            <div className="right-nav">
                <ul>
                    <li>
                        <a href="/"> <BiSearchAlt /></a>
                    </li>
                    <li>
                        <a href="/"><AiOutlineShoppingCart /></a>
                    </li>
                    <li>
                        <a href="/"><FaUserCircle /></a>
                    </li>
                </ul>
            </div>

        </div>
    )
}