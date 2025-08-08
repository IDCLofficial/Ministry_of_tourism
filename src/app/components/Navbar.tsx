'use client';
import Image from "next/image";
import NavLinks from "./NavLinks"
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

interface NavbarProps {
  onOpenSidebar: () => void;
}

export const Navbar = ({ onOpenSidebar }: NavbarProps) => {
    return(
        <header className="flex justify-between items-center px-[1rem] md:px-[3rem] py-[1rem] fixed top-0 left-0 right-0 z-50 border-b-[0.1px] border-[#FFFFFF] bg-[#232c39]/50 backdrop-blur-sm">
            <Link href='/' className="flex items-center gap-3 mb-2">
                <Image src="/logo.png" alt="Imo State Logo" width={40} height={40} />
            </Link>
            {/* Desktop NavLinks */}
            <div className="hidden lg:block">
                <NavLinks />
            </div>
            {/* Hamburger for Mobile */}
            <button
                className="lg:hidden text-white text-3xl focus:outline-none"
                aria-label="Open navigation menu"
                onClick={onOpenSidebar}
            >
                <FiMenu />
            </button>
        </header>
    )
}