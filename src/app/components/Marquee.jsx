
import "react-marquee-text/dist/styles.css"
import Link from 'next/link';
import { IoCaretUpSharp, IoCaretDownSharp  } from "react-icons/io5";

const Marquee = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data = await res.json();
    return (
        <div className='flex gap-10 border border-2 border-gray-100  '>
            {data.map((category) => (
                <Link
                    key={category.id}
                    href={`/categories/${category.slug}`}
                    className="hover:text-blue-600"
                >
                    <div className='flex border-r-2 border-gray-100 pr-8 h-full py-2 '>

                        {category.categoryIcon};
                        {category.nameBn};
                        <p
                            className={`flex ${category.change.dir === "up"
                                    ? "text-red-500"
                                    : category.change.dir === "down"
                                        ? "text-green-500"
                                        : "text-gray-500"}`
                            }
                        >
                            {category.change.dir === "up"
                                ? <IoCaretUpSharp />
                                : category.change.dir === "down"
                                    ? <IoCaretDownSharp />
                                    : <IoCaretUpSharp />}{category.change.pct}%
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Marquee;