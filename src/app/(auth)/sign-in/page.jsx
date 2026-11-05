"use client";
import { signIn } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const { data: edata, error } = await signIn.email({
            email: data.email,
            password: data.password,
            callbackURL: "/",
        });
        console.log(edata, error);
    };
    const handleGoogle = async () => {
        const { error } = await signIn.social({
            provider: "google",
            callbackURL: "/",

        });

    }
    const handleGithub = async () => {
        const { error } = await signIn.social({
            provider: "github",
            callbackURL: "/",

        })
    }
    return (
        <div className="py-5">
            <div className="text-center py-5">
                <h2 className="font-bold text-2xl">সাইন ইন</h2>
                <p className="text-[14px] text-gray-500">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            </div>
            <Form
                className="flex min-w-96 mx-auto  flex-col gap-4 container bg-gray-50 h-100 justify-center max-w-fit gap-5 border-2 border-gray-300 p-4 rounded-2xl"
                render={(props) => <form {...props} data-custom="foo" />}
                onSubmit={onSubmit}
            >
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "কমপক্ষে ৮ অক্ষর";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "কমপক্ষে একটা অক্ষর বড় হাতের হবে";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "কমপক্ষে একটা সংখ্যা হতে হবে";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="আপনার পাসওয়ার্ড দিন" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>

                <div className="flex flex-col gap-2">
                    <Button type="submit" className={'bg-green-700 rounded-lg w-full'}>
                        সাইন ইন
                    </Button>
                    <p className="text-gray-600 text-[12px] text-center py-4">অথবা</p>
                    <div className="*:bg-gray-50 *:text-black *:font-bold *:text-[12px]">
                        <Button type="button" onClick={() => handleGoogle()}><FcGoogle /> Google দিয়ে চালিয়ে যান</Button>
                        <Button type="button" onClick={() => handleGithub()}><IoLogoGithub /> Github দিয়ে চালিয়ে যান</Button>
                    </div>
                    <p className="text-[12px] text-center">
                        অ্যাকাউন্ট নেই?
                        <Link href={'/sign-up'} className="text-green-600">সাইন আপ করুন</Link>
                    </p>
                </div>
            </Form>
            <p className=" flex justify-center py-5"><Link href={'/'} className="text-gray-600 text-[12px] ">হোমে ফিরে যান</Link></p>
        </div>
    );
}