import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaLanguage } from "react-icons/fa";

const MobileMenuToggle = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='sm:hidden flex items-center'>
      <button onClick={toggleMenu} className='text-white text-3xl'>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {menuOpen && (
        <ul className='absolute top-32 left-0 w-full bg-[#303f9f] flex flex-col items-center h-32 z-10'>
          <li className='navbar font-poppins font-normal cursor-pointer text-[16px] text-white py-2'>
            <a href="">KULLANIM KILAVUZU</a>
          </li>
          <li className='navbar font-poppins font-normal cursor-pointer text-[16px] text-white py-2'>
            <a href="">İZLE</a>
          </li>
          <li className='navbar font-poppins font-normal cursor-pointer text-[16px] text-white py-2'>
            <a href=""><FaLanguage className=' text-3xl' /></a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenuToggle;
