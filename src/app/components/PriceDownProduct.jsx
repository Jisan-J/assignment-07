import React from 'react';
import Products from './home/Product';
import Link from 'next/link';
import { IoCaretDownSharp } from "react-icons/io5";

const PriceDownProduct = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data = await res.json();


    return (
        <div id="DownPrice" className="scroll-mt-6 py-5">
            <h1 className='text-2xl font-bold flex'><span className='text-green-700'><IoCaretDownSharp /></span>আজ দাম কমেছে</h1>
            <div className="PriceDownProduct grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
                {data.map((product) => {
                    if (product.change.dir == 'down') {
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

export default PriceDownProduct;