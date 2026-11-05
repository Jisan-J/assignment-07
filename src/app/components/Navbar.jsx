import Link from "next/link";
import Marquee from "./Marquee";
import MarqueeText from "react-marquee-text";
import SingBtn from "./SingInOutBtn";
import MobileNav from "./MobileNav";

const Navbar = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
    const data = await res.json();
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: 'full'
    });




    return (
        <div className="bg-gray-50 relative">
            <div className='container mx-auto py-5 w-[80%] relative'>
                <header className='flex flex-col md:flex-row justify-between items-start'>
                    <div className='flex items-center gap-2'>
                        <Link href={'/'}><img src="/logo-icon.png" alt="logo" className='bg-green-900 h-10 rounded-xl' /></Link>
                        <div>
                            <Link href={'/'}><h2 className='font-bold text-2xl'>বাজার দর</h2></Link>
                            <span className='md:text-[14px] text-[10px]'>
                                {date}
                            </span>

                        </div>
                    </div>
                    <SingBtn />
                     {/* Mobile Menu */}
                <MobileNav categories={data} />
                </header>
                <div className="flex gap-4">
                    <nav className="desktopNav hidden  md:flex items-center gap-6 p-4 w-full ">
                        {data.map((category) => (
                            <Link
                                key={category.id}
                                href={`/categories/${category.slug}`}
                                className="hover:text-blue-600"
                            >
                                <h2>{category.icon}{category.nameBn}</h2>
                            </Link>
                        ))}
                    </nav>
                </div>
                <MarqueeText>
                    <Marquee />

                </MarqueeText>
            </div>
        </div>
    );
};

export default Navbar;