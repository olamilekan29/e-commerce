// import { useState } from "react";
// import { CiMenuBurger } from "react-icons/ci";
// import { RxCross1 } from "react-icons/rx";
// import Logo from '../assets/img/logo.png'


// const Navbar = ({ cartCount, onCartClick }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white md:px-10 px-5 py-4 sticky w-full top-0 left-0 z-50 shadow-md">
//       <div className="h-18 items-center flex justify-between">
//        <img src={Logo} className="text-3xl w-50 font-thin px-4" alt="" />

//         {/* Desktop Menu */}
//         <div className="hidden sm:block">
          
//           <a onClick={onCartClick} style={{ cursor: "pointer" }}> 🛒 Cart  <strong>{cartCount}</strong> </a>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="block sm:hidden px-4 text-3xl text-black cursor-pointer"
//         >
//           <CiMenuBurger />
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full bg-gray-200 transform transition-transform duration-300 ease-in-out sm:hidden 
//           ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {/* Close button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-5 right-5 text-3xl text-gray-700 cursor-pointer"
//         >
//           <RxCross1 />
//         </button>

//         {/* Menu Links */}
//         <div className="flex flex-col items-center justify-center h-full space-y-8">
         
//           <a onClick={onCartClick} style={{ cursor: "pointer" }}> 🛒 Cart  <strong>{cartCount}</strong> </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



import Logo from '../assets/img/logo.png'
const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <div className="bg-white md:px-10 px-5 py-4 sticky w-full top-0 left-0 z-50 shadow-md">
      <div className="h-18 items-center flex justify-between">
      <img src={Logo} className="text-3xl w-50 font-thin px-4" alt="" />

      <button
        className="cart-btn"
        onClick={onCartClick}
      >
        🛒 Cart ({cartCount})
      </button>
      </div>
    </div>
  );
};

export default Navbar;
