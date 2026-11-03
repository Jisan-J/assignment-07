import React from 'react';
import Products from './home/Product';
import Link from 'next/link';
import { IoCaretUpSharp } from "react-icons/io5";

const PriceUpProduct = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data = await res.json();


    return (
        <div id="UpPrice" className="scroll-mt-6 py-5">
            <h1 className='text-2xl font-bold flex'><span className='text-red-700'><IoCaretUpSharp /></span>আজ দাম বেড়েছে</h1>
            <div className="allProduct grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto gap-5 py-5">
                {data.map((product) => {
                    if (product.change.dir == 'up') {
                       return <Link
                            key={product.id}
                            href={`/categories/${product.slug}`}
                            className="hover:text-blue-600"
                        >

                            <Products product={product} key={product.id}></Products>
                        </Link>
                    }

                }
                )}
            </div>
        </div>
    );
};

export default PriceUpProduct;