"use client";

import { Source_Code_Pro } from "@next/font/google";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { BsArrowDownShort } from "react-icons/bs";

const scp = Source_Code_Pro({ subsets: ["latin"] });

const Home: NextPage = () => {
    return (
        <main className={`${scp.className} text-neutral-200 overflow-x-hidden`}>
            <motion.section
                className="w-screen h-screen flex flex-col lg:flex-row items-center justify-evenly pt-10 lg:pt-0"
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -200 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <motion.img
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src="/me.jpg"
                    alt="man in suit"
                    className="h-2/5 lg:h-2/3 border-2 border-neutral-300 shadow-lg"
                />
                <div className="max-w-lg lg:h-2/3 text-center lg:text-left flex flex-col gap-6 lg:gap-0 justify-center">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-6xl">Robert Teets</h1>
                        <p>
                            A self-motivated, hard-working Software Developer
                            out of Grand Lake, Colorado
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p>Scroll down to learn more about me</p>
                        <motion.div
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                            initial={{ y: -10 }}
                            animate={{ y: 10 }}
                        >
                            <BsArrowDownShort className="text-6xl text-center w-full" />
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default Home;
