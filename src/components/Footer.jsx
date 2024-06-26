import React from 'react'
import Logo from '../assets/photo/footer-logo.svg'
import AppStore from '../assets/photo/app-store.png'
import PlayMarket from '../assets/photo/play-market.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full bg-dark-color text-white py-10'>
            <div className="flex justify-between items-start container mx-auto">
                <img src={Logo} alt="" />
                <ul className='flex flex-col gap-2'>
                    <li><Link to={"/"}>Mobil ilovalar</Link></li>
                    <li><Link to={"/"}>Yordam</Link></li>
                    <li><Link to={"/"}>Pullik xizmatlar</Link></li>
                    <li><Link to={"/"}>OXO da biznes</Link></li>
                    <li><Link to={"/"}>Saytda reklama</Link></li>
                    <li><Link to={"/"}>Foydalanish shartlari</Link></li>
                    <li><Link to={"/"}>Maxfiylik siyosati</Link></li>
                    <li><Link to={"/"}>Foydalanish shartlari</Link></li>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <li><Link to={"/"}>Qanday qilib sotish va sotib olish kerak?</Link></li>
                    <li><Link to={"/"}>Xavfsizlik qoidalari</Link></li>
                    <li><Link to={"/"}>Sayt xaritasi</Link></li>
                    <li><Link to={"/"}>Mintaqalar xaritasi</Link></li>
                    <li><Link to={"/"}>OXO da karyera</Link></li>
                    <li><Link to={"/"}>Qayta aloqa</Link></li>
                </ul>
                <div className="flex flex-col gap-2">
                    <Link to="/">
                        <img src={AppStore} alt="" />
                    </Link>
                    <Link to="/">
                        <img src={PlayMarket} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer