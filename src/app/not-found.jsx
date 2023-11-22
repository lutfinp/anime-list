"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-2 flex-col text-color-accent">
                <FileSearch size={44}/>
                <h3 className="text-4xl font-bold">NOT FOUND</h3>
                <Link href="/" className="hover:text-color-primary transition-all underline" >
                    Kembali
                </Link>
            </div>
        </div>
    );
};

export default Page;
