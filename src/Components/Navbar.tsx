
import beyaz from '../images/beyazlogo.png';
import textwhite from '../images/TextWhite.png';
import MobileMenuToggle from './MobileMenuToggle.tsx';
import { FaLanguage } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center bg-[#303f9f] h-32'>
      <img src={beyaz} alt="Logo" className='h-24 pl-7 pb-0' />
      <img src={textwhite} alt="Text" className='h-12 pl-7' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        <li className='navbar font-poppins font-normal cursor-pointer text-[16px] text-white mr-10'>
          <a href="">KULLANIM KILAVUZU</a>
        </li>
        <li className='navbar font-poppins font-normal cursor-pointer text-[16px] text-white mr-10'>
          <a href="">İZLE</a>
        </li>
        <li className='navbar font-poppins font-normal cursor-pointer text-[16px] text-white mr-10'>
          <a href=""><FaLanguage className=' text-3xl' />
          </a>
        </li>
      </ul>
      <MobileMenuToggle />
    </nav>
  );
};

export default Navbar;
