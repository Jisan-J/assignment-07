
"use client";

import { useState } from "react";
import { useSession, signOut } from "@/lib/auth-client";
import Link from "next/link";
import { Button } from "@heroui/react";


const SingBtn = () => {
    const { data: session, isPending } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    console.log(session);
    
    if (isPending) return <p>Loading...</p>;

    if (!session) {
        return (
            <div className="flex gap-2 items-center">
                <Link href="/sign-in">
                    <Button className=" bg-transparent text-black rounded-lg">
                        Sign In
                    </Button>
                </Link>

                <Link href="/sign-up">
                    <Button className="bg-green-600 shadow shadow-green-700/80 rounded-lg">
                        Sign Up
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 cursor-pointer"
            >
                <img
                    src={session.user.image || "/default-avatar.png"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                />

                <span className="font-medium">
                    {session.user.name}
                </span>

                <span className="text-xs">▼</span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-50">

                    {/* User Information */}
                    <div className="border-b pb-3">
                        <h3 className="font-semibold">
                            {session.user.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {session.user.email}
                        </p>
                    </div>
                    <div className="py-3">
                        <button className="w-full text-left hover:bg-gray-100 p-2 rounded-lg">
                            👤 আমার প্রোফাইল
                        </button>
                    </div>

                    {/* Sign Out */}
                    <div className="border-t pt-3">
                        <button
                            onClick={() => signOut()}
                            className="w-full text-left text-red-500 hover:bg-red-50 p-2 rounded-lg"
                        >
                            ↪ সাইন আউট
                        </button>
                    </div>

                </div>
            )}

        </div>
    );
};

export default SingBtn;
