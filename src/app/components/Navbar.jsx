import Link from "next/link";
import Marquee from "./Marquee";
import MarqueeText from "react-marquee-text";
import { Button } from "@heroui/react";

const Navbar = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
    const data = await res.json();
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: 'full'
    })
    return (
        <div className="bg-gray-50">
        <div className='container mx-auto py-5 w-[80%]'>
            <header className='flex justify-between items-start'>
                <div className='flex items-center gap-2'>
                    <img src="/logo-icon.png" alt="logo" className='bg-green-900 h-10 rounded-xl' />
                    <div>
                        <h2 className='font-bold text-2xl'>বাজার দর</h2>
                        <span className='text-[14px]'>
                            {date}
                        </span>

                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <Link href={'/log-in'}><Button>Log In</Button></Link>
                    <Link href={'/sign-in'}><Button>Sign In</Button></Link>
                </div>
            </header>
            <div className="flex gap-4">

                <nav className="flex items-center gap-6 p-4 w-full ">
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