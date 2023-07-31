import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";


 const HeroBanner = () => {

  return (
    <div className=" h-[200px] md:h-[320px] w-full bg-yellow-400">
           
           <div>
          <p className="w-full absolute text-black top-16 md:w-[80px]
             text-2xl font-extrabold cursor-pointer hover:opacity-90">
              Get FRESH Grocery now at less time
              </p>
                 </div>
                   
       <div>
        <img src="Fruits-and-Vegetables.jpg"  
      className="h-[300px] md:m[180px] absolute top-[100px] mix-blend-darken
       right-0 cursor-pointer hover:opacity-90"/>
          </div>
          
           {/*F & V start*/}
      <div>
        <img src="F & V.png" className="h-[30px] md:h-[200px] py-[15px] md:py-[32px]
         bg-green-300 absolute bottom-[30px] md:bottom-[40px] left-5 cursor-pointer hover:opacity-90"/> 

          <div className=" text-sm w-[85px] md:[w-40px] font-oswald font-semibold left-5
           absolute bottom-[40px] md:bottom-[35px] cursor-pointer hover:opacity-90">Fruits & Vegetables</div>
         </div>

               {/*DryFruits Start*/} 
 <div>
     <img src="nuts.png" className="h-[30px] md:h-[200px] py-[15px] md:py-[32px]
         bg-green-300 absolute bottom-[30px] md:bottom-[40px] left-52 
         cursor-pointer hover:opacity-90"/>
               
        <div className=" text-sm w-[85px] md:[w-40px] font-oswald font-semibold left-52
           absolute bottom-[40px] md:bottom-[35px] cursor-pointer hover:opacity-90">DrayFruits & Seeds</div>
   </div>

       {/*MultiGrains Start */}
   <div>
 <img src="Grains..png" className="h-[30px] md:h-[200px] py-[15px] md:py-[32px]
 bg-green-300 absolute bottom-[30px] md:bottom-[40px] right-52 cursor-pointer hover:opacity-90"/>
            
  <div className=" text-sm w-[85px] md:[w-42px] font-oswald font-semibold right-52
 absolute bottom-[40px] md:bottom-[35px] cursor-pointer hover:opacity-90">MultiGrains & Masala</div>
         
      </div>
              {/*Dairy & Eggs Start*/}
      <div>
    <img src="Dairy.png" className="h-[30px] md:h-[200px] py-[15px] md:py-[32px]
  bg-green-300 absolute bottom-[30px] md:bottom-[40px] right-5 cursor-pointer hover:opacity-90"/>

      <div className=" text-sm w-[85px] md:[w-42px] font-oswald font-semibold right-5
   absolute bottom-[40px] md:bottom-[39px] cursor-pointer hover:opacity-90">Dairy & Eggs</div>
         
          
      </div>
               {/*Cakes & Bakery Start*/}
      <div>
         <img src="Bakery1.png" className="h-[30px] md:h-[200px] py-[15px] md:py-[32px]
         bg-green-300 absolute bottom-[40px] md:bottom-[39px] left-1/2 
       cursor-pointer hover:opacity-90"/>
          <div className=" text-sm w-[60px] md:[w-40px] font-oswald font-semibold left-1/2
           absolute bottom-[40px] md:bottom-[35px] cursor-pointer hover:opacity-90">Cake & Bakery</div>
      </div>
               {/*Bevarages Start*/}
      <div>
         <img src="softdrinks1.png" className="h-[30px] md:h-[200px] py-[15px] md:py-[32px]
         bg-green-300 absolute bottom-[30px] md:bottom-[40px] right-96 cursor-pointer hover:opacity-90"/>
           
           <div className=" text-sm w-[60px] md:[w-40px] font-oswald font-semibold right-96
           absolute bottom-[40px] md:bottom-[35px] cursor-pointer hover:opacity-90">Bevarages</div>
      </div>
                  {/*Bevarages end*/}
     
               {/*Snaks & Food Packets*/}
      <div>
         <img src="Snacks.png" className="h-[40px] md:h-[200px] py-[20px] md:py-[35px]
         bg-green-300 absolute bottom-[30px] md:bottom-[40px] left-96 cursor-pointer hover:opacity-90"/>
          
          <div className=" text-sm w-[60px] md:[w-40px] font-oswald font-semibold left-96
           absolute bottom-[50px] md:bottom-[42px] cursor-pointer hover:opacity-90">Snacks & PackedFoods</div>
      </div>

                {/*Snacks end*/}


        
      </div>

   
  )
}

export default HeroBanner