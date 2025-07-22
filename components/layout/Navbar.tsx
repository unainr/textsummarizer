'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setisScrolled] = useState(false)
useEffect(() => {
  const handleScroll = () => { 
    setisScrolled(window.scrollY > 0)
   }
   window.addEventListener('scroll',handleScroll)
   return ()=>window.removeEventListener('scroll',handleScroll)
}, [])



  return (
    <header>
    <nav className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? " backdrop-blur-md " : ""
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-gradient-to-r from-teal-500 to-indigo-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold">TS</span>
              </div>
              <span className=" font-semibold text-xl">TextSummarizer</span>
            </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className=" transition-colors">
              Home
            </Link>
            <Link href="/summarize" className=" transition-colors">
              Summarize
            </Link>
            <Link href="/summarize-text" className=" transition-colors">
              Summarize Text
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-md ">
          <Link 
            href="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/summarize" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Summarize
          </Link>
          <Link 
            href="#" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
         
          
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
