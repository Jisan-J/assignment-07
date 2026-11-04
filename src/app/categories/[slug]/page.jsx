import { IoCaretUpSharp, IoCaretDownSharp } from "react-icons/io5";
import ProductPriceChart from './ProductPriceChart';
import CategoryProductsDesign from "./CategoryProductDesign";
import Link from "next/link";

const page = async ({ params }) => {
    const { slug } = await params
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data = await res.json();
    const productCategory = data.find((item) => item.category === slug);
    const product = data.find((item) => item.slug === slug);
    const categoryProducts = data.filter(item => item.category === slug).length;


    const { nameBn,
        categoryNameBn,
        image,
        today,
        yesterday,
        change,

    } = product || {};

    const todaybn = today?.toLocaleString('bn-BD');
    const upPrice = today - yesterday;
    const downPrice = yesterday - today;
    const upPriceBn = upPrice.toLocaleString('bn-BD');
    const downPriceBn = downPrice.toLocaleString('bn-BD');
    const priceStatus =
        change?.dir == 'up' ? 'বেড়েছে' : change?.dir == 'down' ? 'কমেছে' : 'পরিবর্তন হয়নি';

    const priceStatusRate =
        change?.dir == 'up' ? `${upPriceBn} টাকা ` : change?.dir == 'down' ? `${downPriceBn} টাকা ` : '';

    return (
        <div className='py-5'>

            {productCategory ? <div className='category-product-list container mx-auto w-[80%] '>
                <div className="category-bannar flex gap-2 p-5 rounded-2xl items-center bg-gray-50 border-2 border-gray-300">
                    <div className="category-icon text-3xl">{productCategory.categoryIcon}</div>
                    <div className="category-product-text">
                        <h2 className="font-bold text-2xl">{productCategory.categoryNameBn}</h2>
                        <p className="text-[14px] text-gray-500">{`${categoryProducts.toLocaleString('bn-BD')}টি পণ্যের আজকের দাম ও পরিবর্তন`}</p>
                    </div>
                </div>
                <p className="text-[14px] text-gray-500 py-5">{`মোট ${categoryProducts.toLocaleString('bn-BD')}টি পণ্যে দেখানো হচ্ছে`}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {data.map((el, ind) => {
                        if (el.category === slug) {
                            return <Link
                                key={el.id}
                                href={`/categories/${el.slug}`}
                                className="hover:text-blue-600"
                            >
                                <CategoryProductsDesign product={el} key={ind}></CategoryProductsDesign>
                            </Link>
                        }



                    })}
                </div>
            </div> :
                <div className='signle-product-pric-chart-list container mx-auto w-[80%]'>

                    <div className='price-chart-bannar min-h-[180px] max-h-container bg-gray-50 p-4 my-10 flex-col flex md:flex-row items-center justify-between rounded-2xl border-gray-200 border-2'>
                        <div className='flex items-center gap-5'>
                            <p className='text-4xl bg-gray-100 w-fit py-5 px-4 rounded-2xl'>{image}</p>
                            <div>
                                <h2 className='text-3xl font-bold'>{nameBn}</h2>
                                <p className='text-gray-700 text-[12px]'>{`প্রতি কেজি ${categoryNameBn}`}</p>
                                <p className='text-[14px] text-gray-700'>{`গতকালের তুলনায় দাম ${priceStatus} ${priceStatusRate}`}</p>
                            </div>
                        </div>
                        <div className='bg-gray-100 px-[40%]  md:px-5 py-4 rounded-2xl *:py-0.5'>
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

                    {
                        <ProductPriceChart product={product}></ProductPriceChart>
                    }
                </div>}
        </div>
    );
};

export default page;