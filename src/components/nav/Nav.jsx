import yorfy from "../../assets/Logo.png";
import hamBurger from "../../assets/menu.svg";
import "./Nav.css";

const Nav = () => {
    return <div className="nav w-full mx-auto ">
     <nav className='flex justify-between items-center py-4 px-5 container mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-[860px]'>
    <div className='flex justify-between items-center'>
      <div className='flex justify-between items-center gap-3'><img src={yorfy} alt="yorfee" /><span className='font-bold'>YORFY</span></div>
        <ul className='lg:flex justify-between items-center gap-5 ml-6 hidden'>
          <li className='text-gray-300 hover:text-white px-2 h-[24px] cursor-pointer'>Home</li>
          <li className='text-gray-300 hover:text-white px-2 h-[24px] cursor-pointer'>NFT</li>
          <li className='text-gray-300 hover:text-white px-2 h-[24px] cursor-pointer'>Roadmap</li>
          <li className='text-gray-300 hover:text-white px-2 h-[24px] cursor-pointer'>Contact Us</li>
          <li className='text-gray-300 hover:text-white px-2 h-[24px] cursor-pointer'>Pages</li>
          <li className='text-gray-300 hover:text-white px-2 h-[24px] cursor-pointer'>Contact us</li>
        </ul>
      </div>
    <div className='h-[3rem] flex justify-center items-center gap-2'>
      <img src={hamBurger} alt="menu" className="block h-[35px] sm:hidden" />
      <button className='bg-blue-500 block h-full w-[7rem] rounded-lg'>Join Us</button>
    </div>
  </nav>
  </div>
};

export default Nav;