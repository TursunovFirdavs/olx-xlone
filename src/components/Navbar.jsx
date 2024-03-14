import React from 'react'
import Logo from '../assets/photo/logo.svg'
import Account from '../assets/photo/account.svg'
import { FiMessageSquare } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import Button from '../utils/Button';


const Navbar = () => {
  return (
    <div className='shadow-md'>
        <nav className='container m-auto flex items-center gap-8 py-5'>
        <div className='flex-1'>
            <img className='' src={Logo} alt="" />
        </div>
        <ul className='flex items-center gap-6'>
            <li>
                <Link className='flex items-center gap-2'>
                    <FiMessageSquare className='text-lg' />
                    <p>Xabarlar</p>
                </Link>
            </li>
            <li>
                <Link className='flex items-center gap-2'>
                    <FaRegHeart className='text-lg' />
                    <p>Yoqtirganlar</p>
                </Link>
            </li>
            <li>
                <Link className='flex items-center gap-2'>
                    <img className='pb-[1px]' src={Account} alt="" />
                    <p>Akkaunt</p>
                </Link>
            </li>
            <li>
                <select name="" id="">
                    <option value="uz">uz</option>
                    <option value="eng">eng</option>
                </select>
            </li>
        </ul>
        <Button text={"E'lonlarni joylashtirish"} bg={'dark'} padding={'10px 16px'} />
    </nav>
    </div>
  )
}

export default Navbar