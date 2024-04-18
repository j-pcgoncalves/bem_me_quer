import { FaPhone } from "react-icons/fa";
import { FaLocationPin, FaInstagram } from "react-icons/fa6";

import logoURL from "../images/bem_me_quer_logo_full-removebg-preview.png";

export default function Header() {
    return (
        <div className="w-full">
            {/* SMALL HEADER */}
            <div className="flex justify-between items-center w-full bg-[#fabd242b] py-3 px-16 font-serif text-[#989898]">
                <div className="flex items-center gap-8 text-sm">
                    <div className="flex items-center gap-3">
                        <FaPhone className="text-primary text-lg" />
                        <a href="tel:+351 963 491 643">+351 963 491 643</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaLocationPin className="text-primary text-lg" />
                        <p>Domicílios - Castelo Branco</p>
                    </div>
                </div>
                <div>
                    <a href="https://instagram.com/bem.me.quer.massagem" target="_blank"><FaInstagram className="text-lg" /></a>
                </div>
            </div>

            {/* MAIN HEADER */}
            <div className="flex justify-between items-center w-full px-16 py-4 font-raleway">
                <img className="w-[150px]" src={logoURL} alt="Main Logo" />
                <div className="flex items-center gap-5">
                    <p className="font-medium text-sm border-b-[2.5px] border-primary px-7 pb-1 cursor-pointer">HOME</p>
                    <p className="font-medium text-sm border-b-[2.5px] border-[#98989840] hover:border-primary transition-all duration-200 px-7 pb-1 cursor-pointer">SOBRE MIM</p>
                    <p className="font-medium text-sm border-b-[2.5px] border-[#98989840] hover:border-primary transition-all duration-200 px-7 pb-1 cursor-pointer">CONTACTOS</p>
                </div>
            </div>  
        </div>
    )
}