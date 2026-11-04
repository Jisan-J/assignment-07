import React from 'react';
import { IoCaretUpSharp, IoCaretDownSharp } from "react-icons/io5";

const CategoryProductsDesign = ({ product }) => {    

    return (
        <div className='category-product-list-card-style'>
            <div className="bg-gray-50  h-[150px] rounded-2xl border-2 border-gray-300 p-4 flex flex-col justify-between">
                <div className="flex gap-2">
                    <div className='text-xl bg-gray-200 w-fit p-2 rounded-2xl'>{product.image}</div>
                    <div>
                        <h1 className='font-bold'>{product.nameBn}</h1>
                        <p className='text-[12px] text-gray-600'>প্রতি কেজি</p>
                    </div>
                </div>
                <div className='flex justify-between items-end'>
                    <div>
                        <p className='text-[12px] text-gray-600'>আজকের দাম</p>
                        <p className='font-bold text-lg'>{product.yesterday} টাকা</p>
                    </div>
                    <p
                        className={`flex px-2 py-0.5 rounded-2xl text-[12px] ${product.change.dir === "up"
                            ? "text-red-500 bg-red-600/10"
                            : product.change.dir === "down"
                                ? "text-green-500 bg-green-600/10"
                                : "text-gray-500 bg-gray-500/10"}`
                        }
                    >
                        {product.change.dir === "up"
                            ? <IoCaretUpSharp />
                            : product.change.dir === "down"
                                ? <IoCaretDownSharp />
                                : <IoCaretUpSharp />}{product.change.pct}%
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CategoryProductsDesign;