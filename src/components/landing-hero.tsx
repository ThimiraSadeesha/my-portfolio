import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
    const [scrollY, setScrollY] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const progress = ref.current
        ? Math.min(1, scrollY / ref.current.clientHeight)
        : 0;

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.section
            animate={{ transform: `translateY(${progress * 30}vh)` }}
            transition={{ type: "spring", stiffness: 100 }}
            ref={ref}
            className="pointer-events-none flex h-[calc(100vh-112px)] items-center px-6 sm:px-14 md:px-20"
        >
            <div className="-mt-[112px] w-full">
                <div className="mx-auto max-w-7xl">
                    <AnimatePresence>
                        <FadeUp key="title-main" duration={0.6}>
                            <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                                Thimira Sadeesha
                            </h1>
                            <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                                Software Engineer{" "}
                                <span className="text-accent">Mobile &amp; Web</span>
                            </span>
                        </FadeUp>
                        <FadeUp key="description" duration={0.6} delay={0.2}>
                            <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-2xl">
                                <span className="text-xl text-accent sm:text-3xl">Hi</span>, I&apos;m
                                <span className="text-accent"> Thimira</span> I build clean, user focused digital solutions across web and mobile platforms.
                            </div>
                        </FadeUp>
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
}
