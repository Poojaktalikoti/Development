import HeroBanner from "@/components/HeroBanner"
import Wrapper from "@/components/Wrapper"
import ProductCard from "@/components/ProductCard"



export default function Home() {
  return <main className="h-[1000px]">
    <HeroBanner/>
    <Wrapper>
      <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14
       px-5 md:px-0">
        <ProductCard/>
        


      </div>
    </Wrapper>
  </main>
  
}
