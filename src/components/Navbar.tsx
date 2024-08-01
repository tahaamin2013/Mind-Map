"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 flex justify-between items-center text-white transition-all duration-200 shadow-xl px-5 lg:px-16  py-4 w-full">
                <Link href="/" className="text-xl font-bold">
                    Computer S
                </Link>
                <div className=" flex justify-end">
                    <div className="md:flex hidden text-white font-bold gap-5 text-lg">
                        <Link href="/" id="Our Services">Home</Link>
                        <Link href="/" id="#MemberShips">Units</Link>
                        <Link href="/" id="Meet the Team">Meet The Team</Link>
                        <Link href="/" id="FAQ">FAQ</Link>
                        <Link href="/" id="Contact">Contact us</Link>
                    </div>
                    <div className="md:hidden block z-50">
                        <Sheet>
                            <SheetTrigger
                                className="text-white -my-4 mt-1 text-2xl"
                                aria-label="Open menu"
                            >
                                <AlignJustify fill="white" size={27} />
                            </SheetTrigger>
                            <SheetContent className="flex-col flex gap-3 text-left items-start font-bold">
                                <SheetClose>
                                    <div id="Our Services">Our Services</div>
                                </SheetClose>
                                <SheetClose>
                                    <div id="#MemberShips">Save Here</div>
                                </SheetClose>
                                <SheetClose>
                                    <div id="Meet the Team - mobile">Meet The Team</div>
                                </SheetClose>
                                <SheetClose>
                                    <div id="FAQ">FAQ</div>
                                </SheetClose>
                                <SheetClose>
                                    <div id="Contact">Contact us</div>
                                </SheetClose>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;