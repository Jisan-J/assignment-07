"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const MobileNav = ({ categories }) => {
const [isOpen, setIsOpen] = useState(false);

return (
    <div className="md:hidden">
        {/* Menu Button */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-0 top-7 z-50 text-2xl text-green-800"
            aria-label="Toggle navigation menu"
        >
            {isOpen ? <RxCross2 /> : <HiMenu />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
            <nav className="absolute right-0 top-20 z-40 w-full rounded-2xl bg-green-50 shadow-lg p-5 flex flex-col items-end gap-5 md:hidden">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/categories/${category.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="font-medium text-gray-700 hover:text-green-700 transition"
                    >
                        {category.icon} {category.nameBn}
                    </Link>
                ))}
            </nav>
        )}
    </div>
);

};

export default MobileNav;