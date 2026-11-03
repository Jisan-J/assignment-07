import React from 'react';
import { IoCaretUpSharp, IoCaretDownSharp } from "react-icons/io5";

const page = async ({ params }) => {
    const { slug } = await params
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data = await res.json();

    const product = data.find((item) => item.slug === slug);
    const { nameBn,
        categoryNameBn,
        image,
        today,
        yesterday,
        change

    } = product

    const todaybn=today?.toLocaleString('bn-BD');
    const yesterdaybn=today?.toLocaleString('bn-BD');


    const priceStatus =
        change.dir == 'up' ? 'বেড়েছে' : change.dir == 'down' ? 'কমেছে' : 'পরিবর্তন হয়নি';

    const priceStatusRate =
        change.dir == 'up' ? today - yesterday : change.dir == 'down' ? yesterday - today : '';

    return (
        <div className='py-5'>
            <div className='container mx-auto w-[80%]'>
                <div className='h-[180px] bg-gray-50 p-4 flex items-center justify-between rounded-2xl '>
                    <div className='flex items-center gap-5'>
                        <p className='text-4xl bg-gray-100 w-fit py-5 px-4 rounded-2xl'>{image}</p>
                        <div>
                            <h2 className='text-3xl font-bold'>{nameBn}</h2>
                            <p className='text-gray-700 text-[12px]'>{`প্রতি কেজি ${categoryNameBn}`}</p>
                            <p className='text-[14px] text-gray-700'>{`গতকালের তুলনায় দাম ${priceStatus} ${priceStatusRate} টাকা`}</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 px-5 py-4 rounded-2xl *:py-0.5'>
                        <p className='text-gray-700 text-[12px]'>{`আজকের দাম`}</p>
                        <p className='text-2xl font-bold'>{todaybn}</p>
                        <p className='text-gray-700 text-[12px]'>{`টাকা/কেজি`}</p>
                        <p
                            className={`flex px-2 py-0.5 rounded-2xl text-[12px] ${product.change.dir === "up"
                                ? "text-red-500 "
                                : product.change.dir === "down"
                                    ? "text-green-500"
                                    : "text-gray-500 "}`
                            }
                        >
                            {product.change.dir === "up"
                                ? <IoCaretUpSharp />
                                : product.change.dir === "down"
                                    ? <IoCaretDownSharp />
                                    : <IoCaretUpSharp />}{product.change.pct.toLocaleString('bn-BD')}%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;