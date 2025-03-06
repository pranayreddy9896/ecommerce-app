import { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { setShowSearch, getCartCount } = useContext(ShopContext);

    return (
        <div className="flex items-center justify-between py-5 font-medium">
            {/* Logo */}
            <Link to="/">
                <img src={assets.logo} className="h-12" alt="Logo" />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6">
                <NavLink to="/" className="text-lg font-medium hover:text-gray-600">HOME</NavLink>
                <NavLink to="/collections" className="text-lg font-medium hover:text-gray-600">COLLECTIONS</NavLink>
                <NavLink to="/about" className="text-lg font-medium hover:text-gray-600">ABOUT</NavLink>
                <NavLink to="/contact" className="text-lg font-medium hover:text-gray-600">CONTACT</NavLink>
            </ul>

            {/* Icons */}
            <div className="flex items-center space-x-4">
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />

                {/* Profile Dropdown */}
                <div className="group relative">
                   <Link to='/login'> <img 
                        src={assets.profile_icon} 
                        className="w-5 cursor-pointer" 
                        alt="Profile" 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                    /></Link>
                    {isDropdownOpen && (
                        <div className=" group-hover:block hidden absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md p-2">
                            <p className="p-2 hover:bg-gray-100 cursor-pointer">My Profile</p>
                            <p className="p-2 hover:bg-gray-100 cursor-pointer">Orders</p>
                            <p className="p-2 hover:bg-gray-100 cursor-pointer">Logout</p>
                        </div>
                    )}
                </div>

                {/* Cart Icon */}
                <Link to="/cart" className="relative">
                    <img src={assets.cart_icon} className="w-5" alt="Cart" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white rounded-full text-[8px]">
                        {getCartCount ? getCartCount() : 0}
                    </p>
                </Link>

                {/* Mobile Menu Button */}
                <img 
                    onClick={() => setIsMenuOpen(true)} 
                    src={assets.menu_icon} 
                    className="w-5 cursor-pointer sm:hidden" 
                    alt="Menu" 
                />
            </div>

            {/* Mobile Sidebar Menu */}
            {isMenuOpen && (
                <div className="absolute top-0 right-0 bottom-0 w-full bg-white p-5">
                    <div className="flex flex-col text-gray-600">
                        <div onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
                            <p>Back</p>
                        </div>

                        <ul className="space-y-4">
                            <NavLink onClick={() => setIsMenuOpen(false)} to="/" className="block text-lg font-medium">HOME</NavLink>
                            <NavLink onClick={() => setIsMenuOpen(false)} to="/collections" className="block text-lg font-medium">COLLECTIONS</NavLink>
                            <NavLink onClick={() => setIsMenuOpen(false)} to="/about" className="block text-lg font-medium">ABOUT</NavLink>
                            <NavLink onClick={() => setIsMenuOpen(false)} to="/contact" className="block text-lg font-medium">CONTACT</NavLink>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
