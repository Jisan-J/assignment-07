import ProductChartTable from './ProductChartTable';

const ProductPriceChart = ({ product }) => {
const {
        markets

    } = product;
    const sortedMarkets = [...markets].sort((a, b) => a.min - b.min);
const totalMin = markets.reduce((total, item) => total + item.min, 0);
const totalMax = markets.reduce((total, item) => total + item.max, 0);
const totalValueLentgh= markets.length * 2;
const totalAverage = (totalMin + totalMax) / totalValueLentgh;
const minArray = markets.map(item => item.min);
const maxArray = markets.map(item => item.max);
const lowestPrice = Math.min(...minArray).toLocaleString('bn-BD');
const highestPrice = Math.max(...maxArray).toLocaleString('bn-BD');
    return (
       <div className="price-chart-main bg-gray-50 p-6 rounded-2xl border-gray-200 border-2">
                    <h2 className='font-bold text-lg my-5'>দামের সারসংক্ষেপ</h2>
                    <div className="priceStatus-chart *:h-[110px] *:border-gray-200 *:border-2 *:max-w-[400px] grid-cols-1 lg:grid grid-cols-3 gap-4 *:rounded-2xl *:flex *:flex-col *:px-5 *:justify-center place-items-center *:w-full">
                        <div className="lowestPrice">
                            <p className='text-[12px]'>সর্বনিম্ন দাম</p>
                            <p className='font-extrabold text-xl text-green-700'>{lowestPrice} টাকা</p>
                            <p className='text-[12px]'>সবচেয়ে কম দামের বাজার</p>
                        </div>
                        <div className="heighestPrice">
                            <p className='text-[12px]'>সর্বোচ্চ দাম</p>
                            <p className='font-extrabold text-xl text-red-700'>{highestPrice} টাকা</p>
                            <p className='text-[12px]'>সবচেয়ে বেশি দামের বাজার</p>
                        </div>
                        <div className="avaragePrice">
                            <p className='text-[12px]'>গড় দাম</p>
                            <p className='font-extrabold text-xl text-green-700'>{totalAverage.toLocaleString('bn-BD',{maximumFractionDigits: 2})} টাকা</p>
                            <p className='text-[12px]'>প্রতি কেজি-এর হিসাবে</p>
                        </div>
                    </div>
                    <h2 className='font-bold text-lg my-5'>বাজারভিত্তিক আজকের দাম</h2>
                  
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>বাজার</th>
                                    <th>বিভাগ</th>
                                    <th>সর্বনিম্ন</th>
                                    <th>সর্বোধিক</th>
                                    <th>গড়</th>
                                </tr>
                            </thead>
                            <tbody>

                                {sortedMarkets.map((item, ind) => {

                                    return <ProductChartTable product={item} key={ind}></ProductChartTable>

                                })
                                }

                            </tbody>
                        </table>
                    </div>

                </div>


    );
};

export default ProductPriceChart;