import Image from "next/image";
import { Button } from "@heroui/react";
import { Suspense } from "react";
import AllProduct from "./components/AllProduct";
import Link from "next/link";
import PriceUpProduct from "./components/PriceUpProduct";
import PriceDownProduct from "./components/PriceDownProduct";

export default function Home() {
 

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: 'full'
  });
  return (
    <div className='w-[80%] mx-auto'>
      <div className='container mx-auto'>
        <div className='flex flex-col-reverse lg:flex-row justify-center  p-8 my-10 bg-gray-50 border-gray-200 border-2 rounded-4xl'>
          <div className="hero-text flex flex-col gap-5 flex-1">
            <div className=''>
              <div className='bg-green-500/10 w-fit text-green-600 px-4 py-1 rounded-2xl'>{date}</div>
              <h2 className='text-3xl font-bold'>আজকের বাজারের দাম এক নজরে</h2>
            </div>
            <p>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
            <Link href={'#AllProduct'}> <Button className={'bg-green-700 rounded-xl shadow shadow-green-800'}>সব পণ্য দেখুন</Button></Link>
          </div>
          <div className="hero-image flex-1 flex justify-center lg:justify-end">
            <Image
              src="/bazar-hero.png"
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </div>
        </div>
         <Suspense fallback={'Loading...'}>
          <PriceUpProduct></PriceUpProduct>
        <PriceDownProduct></PriceDownProduct>
           <AllProduct></AllProduct>
           
        </Suspense>
        
       
      </div>
    </div>
  );
}
