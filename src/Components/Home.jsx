import bg from '../assets/img/bg.avif';
const Home = () =>{
  return(<>
  
  <div>
    
  <div style={{ backgroundImage: `url(${bg})`}} className=" bg-cover bg-center md:pl-[750px] p-[30px] md:h-[527px] h-[475px] flex items-center justify-center">
   <div className='grid mt-30'> 
    <h1 className="text-white md:text-5xl text-xl font-bold mb-4">TOP DEALS. TOP PICKS. TOP QUALITY.</h1>
    <p className='md:text-[#323232] text-white mb-4'> Get the products you want without breaking the bank.<br className="hidden lg:block"/> Shop smart, shop better.</p>
    <button className='md:w-[150px] w-[250px] h-[50px] rounded-4xl bg-[#386641] text-white cursor-pointer '>Shop for more</button>
  </div>
  </div>

  </div>
  </>)
}
export default Home