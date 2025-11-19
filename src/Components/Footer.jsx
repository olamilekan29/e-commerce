import logo from '../assets/img/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () =>{
  return(
  <>

    <div className='bg-[rgb(245,222,210)] grid text-black items-center justify-center text-center p-10 mt-20 gap-4'>
      <img src={logo} alt=""  className='w-50 '/>
      <h3>08031112007</h3>
      <h3>farouqolamilekan2006@gmail.com</h3>
      
      <div className='flex gap-4 items-center justify-center'>
      
        <div className='flex gap-4 text-2xl mt-4 cursor-pointer'>
          <FaFacebook />
        </div>

        <div className='flex gap-4 text-2xl mt-4 cursor-pointer'>
        <FaWhatsapp />

        </div>

        <div className='flex gap-4 text-2xl mt-4 cursor-pointer '>
          <FaInstagram />
        </div>
    </div>
    
    </div>
  
  </>
  )
}
export default Footer