import hero1 from '../assets/img/hero1.avif';
import hero2 from '../assets/img/hero2.avif';
import hero3 from '../assets/img/hero3.avif';
const Decorate = () =>{
  return(
    <>
    <div className='mt-20 text-center'>
      <div>
        <h1 className="text-[rgb(92,61,46)] text-3xl font-semibold">Shop, renew, get inspired</h1>
        <h3 className='text-black text-xl'>Choose your favorite category and find finds that suit you.</h3>
      </div>

      <div className='md:flex grid justify-center items-center md:gap-5 pb-15'>
          <div style={{ backgroundImage: `url(${hero1})`}} className="bg-center md:h-[400px] md:w-[400px] h-[300px] w-[300px] flex justify-center items-center rounded-2xl md:mt-[105px] mt-[50px] ">
            <div className='grid'> 
              <h1 className="text-white text-xl font-bold mt-[260px] text-bottom"></h1>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${hero2})`}} className="bg-center md:h-[400px] md:w-[400px] h-[300px] w-[300px] flex justify-center items-center rounded-2xl md:mt-[105px] mt-[50px] ">
            <div className='grid'> 
              <h1 className="text-white text-xl font-bold mt-[260px] text-bottom"></h1>
            </div>
          </div>
          
          <div style={{ backgroundImage: `url(${hero3})`}} className="bg-center md:h-[400px] md:w-[400px] h-[300px] w-[300px] flex justify-center items-center rounded-2xl md:mt-[105px] mt-[50px] ">
            <div className='grid'> 
              <h1 className="text-white text-xl font-bold mt-[260px] text-bottom"></h1>
            </div>
          </div>

          
          
      </div>
      
    </div>
    </>
  )
}
export default Decorate;