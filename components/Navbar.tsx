import { NextComponentType } from "next";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { Source_Code_Pro } from "@next/font/google";

const scp = Source_Code_Pro({ subsets: ["latin"] });

const Navbar: NextComponentType = () => {
    return (
        <div
            className={`p-5 w-full bg-neutral-800 shadow-lg text-neutral-300 font-bold ${scp.className}`}
        >
            <nav className="flex items-center gap-5">
                <Link href="/">
                    <AiFillHome />
                </Link>
                <Link href="/projects" className="hover:text-white">
                    Projects
                </Link>
                <Link href="/contact">Contact Me</Link>
            </nav>
        </div>
    );
};

export default Navbar;
