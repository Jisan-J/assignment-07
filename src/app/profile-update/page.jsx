'use client';
import React, { useState } from "react";
import { Toast } from "@heroui/react";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
const UpdateProfile = () => {

    const { data: session, isPending } = useSession();
    const user = session?.user;

    const [name, setName] = useState(null);
    const currentName = name ?? user?.name ?? "";

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            const { error } = await updateUser({
                name: name || user.name,
            });

            if (error) {
                Toast.toast.danger(error.message);
                return;
            }

            Toast.toast.success("Name successfully changed");
        } catch {
            Toast.toast.danger("Unable to update your name");
        }
    };

    if (isPending) {
        return <div>লোড হচ্ছে...</div>;
    }
    return (
        <div className="min-h-screen bg-[#f0f5f1] px-4 py-12">
            <div className="mx-auto max-w-[700px]">

                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-[#26332b]">
                        আমার প্রোফাইল
                    </h1>

                    <p className="text-sm text-gray-500">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন
                    </p>
                </div>

                {/* User Info */}
                <div className="mb-5 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#dfe7e1] bg-[#fafcfb] p-5 sm:flex-row">

                    <div className="flex items-center gap-4">
                        {user?.image ?(
                            <img
                                src={user?.image}
                                alt={user?.name}
                                className="h-16 w-16 rounded-2xl object-cover"
                            />
                        ) : (
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-2xl font-bold text-green-700">
                                {user?.name}
                            </div>
                        )}

                        <div>
                            <h2 className="text-lg font-semibold text-[#26332b]">
                                {user?.name}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {user?.email}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => signOut()}
                        className="rounded-lg border border-red-400 px-4 py-2 text-sm text-red-500 transition hover:bg-red-50"
                    >
                        ↩ সাইন আউট
                    </button>
                </div>

                {/* Update Form */}
                <div className="rounded-2xl border border-[#dfe7e1] bg-[#fafcfb] p-6 sm:p-8">

                    <h3 className="mb-8 text-lg font-semibold text-[#26332b]">
                        তথ্য
                    </h3>

                    <form
                        onSubmit={handleUpdateProfile}
                        className="space-y-4"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                নাম
                            </label>

                            <input
                                id="name"
                                type="text"
                                value={currentName}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-lg border border-[#dfe7e1] bg-transparent px-4 py-2.5 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                                required
                            />
                        </div>


                        <button
                            type="submit"
                            className="w-full rounded-lg bg-[#07883e] py-3 font-semibold text-white shadow-md transition hover:bg-[#067532] disabled:opacity-60"
                        >পরিবর্তন করুন</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;