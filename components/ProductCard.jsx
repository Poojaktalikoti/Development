import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return(
  <Link href="/product/1">
      <img  className="w-[320px] absolute top-[650px]
      md:top-[640px]  py-[60px] md:py-[30px] left-5 cursor-pointer" src="Tomato.png" alt="Product Image" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-bold text-center left-20 md:top-[930px] absolute"> Fresh Tomatos</h2>
        <div className="flex items-center text-black/[0.5]">
        <p className="ml-auto top-[250px] md:top-[650px] absolute font-medium left-60 text-white bg-red-600">Get 5% off</p>
        </div>
            </div>

  <img  className="w-[300px] absolute top-[650px]
  md-top-[550px] py-[60px] md:py-[30px] right-5 cursor-pointer " src="Orange.png" alt="Product Image" />
   <div className="p-4 text-black/[0.9]">
  <h2 className="text-lg font-bold text-center right-24 md:top-[930px] absolute"> Seasonal Fruits</h2>
   <div className="flex items-center text-black/[0.5]">
   <p className="ml-auto top-[250px] md:top-[650px] absolute font-medium right-10 text-white bg-red-600">Get 15% off</p>
  </div>
   </div>

  <img  className="w-[320px] absolute top-[680px] 
    md-top-[550px] py-[40px] md:py-[20px] left-1/4" src="WheatGrains.png" alt="Product Image" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-bold text-center left-1/3 md:top-[930px] absolute">MultiGrains</h2>
        <div className="flex items-center text-black/[0.5]">
        <p className="ml-auto top-[250px] md:top-[650px] absolute font-medium left-1/3 text-white bg-red-600">Get 20% off</p>
        </div>
        </div>
           

 <img  className="w-[280px] absolute top-[680px]
      md-top-[550px] py-[40px] md:py-[20px] right-1/4 cursor-pointer " src="Eggs.png" alt="Product Image" />
   <div className="p-4 text-black/[0.9]">
    <h2 className="text-lg font-bold text-center right-1/3 md:top-[930px] absolute">Eggs</h2>
     <div className="flex items-center text-black/[0.5]">
 <p className="ml-auto top-[250px] md:top-[650px] absolute font-medium right-1/4 text-white bg-red-600">Get 12% off</p>
                   </div>
                              </div>

                
                
                 </Link>
 
  );
  
};

export default ProductCard