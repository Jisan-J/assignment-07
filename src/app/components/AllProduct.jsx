import React from 'react';
import Products from './home/Product';
import Link from 'next/link';

const AllProduct = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data = await res.json();
    return (
        <div id="AllProduct" className="scroll-mt-6">
            <h1 className='text-3xl font-bold'>সব পণ্য</h1>
            <p className='my-4 text-gray-600'>{`মোট ${data.length}টি পণ্য দেখানো হচ্ছে`}</p>
            <div className="allProduct grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
                {data.map((product) => (
                    <Link
                        key={product.id}
                        href={`/categories/${product.slug}`}
                        className="hover:text-blue-600"
                    >

                        <Products product={product} key={product.id}></Products>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllProduct;