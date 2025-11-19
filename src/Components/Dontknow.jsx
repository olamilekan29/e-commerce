import hero5 from '../assets/img/hero5.jpg';
import hero6 from '../assets/img/hero6.jpg';
import hero7 from '../assets/img/hero7.png';
import hero8 from '../assets/img/hero8.jpg';

const Dontknow = () =>{
  return(
    <>
    <div className='m-13 text-center'>
      

      <div className='md:flex grid justify-center items-center md:gap-5 pb-15'>
          <div style={{ backgroundImage: `url(${hero5})`}} className="bg-center md:h-[400px] md:w-[400px] h-[300px] w-[300px] flex justify-center items-center rounded-2xl md:mt-[105px] mt-[50px] ">
            <div className='grid'> 
              <h1 className="text-white text-xl font-bold mt-[260px] text-bottom"></h1>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${hero6})`}} className="bg-center md:h-[400px] md:w-[400px] h-[300px] w-[300px] flex justify-center items-center rounded-2xl md:mt-[105px] mt-[50px] ">
            <div className='grid'> 
              <h1 className="text-white text-xl font-bold mt-[260px] text-bottom"></h1>
            </div>
          </div>
          
          <div style={{ backgroundImage: `url(${hero7})`}} className="bg-center md:h-[400px] md:w-[400px] h-[300px] w-[300px] flex justify-center items-center rounded-2xl md:mt-[105px] mt-[50px] ">
            <div className='grid'> 
              <h1 className="text-white text-xl font-bold mt-[260px] text-bottom"></h1>
            </div>
          </div>



          <div style={{ backgroundImage: `url(${hero8})`}} className="bg-center md:h-[400px] md:w-[400px] h-[300px] w-[300px] flex justify-center items-center rounded-2xl md:mt-[105px] mt-[50px] ">
            <div className='grid'> 
              <h1 className="text-white text-xl font-bold mt-[260px] text-bottom"></h1>
            </div>
          </div>
          
          
      </div>
      
    </div>
    </>
  )
}
export default Dontknow;