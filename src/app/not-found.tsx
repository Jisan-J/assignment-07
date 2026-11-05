"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl shadow-green-900/5 px-6 py-12 sm:px-12 text-center">

        {/* Illustration */}
        <div className="relative flex justify-center mb-8">
          <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-8xl sm:text-9xl">🥬</span>
          </div>

          <span className="absolute top-2 right-[20%] text-4xl rotate-12">🥕</span>
          <span className="absolute bottom-2 left-[18%] text-4xl -rotate-12">🍅</span>
        </div>

        {/* 404 */}
        <h1 className="text-7xl sm:text-8xl font-extrabold text-green-600 tracking-tight">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto mt-4 leading-7">
          Looks like this page has gone out of stock! 
          Don't worry, fresh vegetables are waiting for you on our homepage.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20 hover:-translate-y-1"
          >
            <span>←</span>
            Back to Home
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-10">
          Freshness is just one click away 🌱
        </p>
      </div>
    </div>
  );
};

export default NotFound;