import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Felfeli from "../assets/felfeli.png";
import Namaki from "../assets/namaki.png";
import Serke from "../assets/serke.png";
import { FaWhatsapp } from "react-icons/fa";


const HeroData = [
    {
        id: 1,
        image: Felfeli,
        title: "چیپس فلفلی",
        subtitle: "یک طعم تند و هیجان‌انگیز که شما را به چالش می‌کشد. ساخته شده از بهترین سیب‌زمینی‌ها و فلفل قرمز.",
        price: "30,000 تومان",
        model: "آتشی",
        bgColor: "#c92a2a", 
    },
    {
        id: 2,
        image: Namaki,
        title: "چیپس نمکی",
        subtitle: "طعم کلاسیک و اصیل چیپس که هیچوقت تکراری نمی‌شود. مناسب برای تمام لحظات.",
        price: "28,000 تومان",
        model: "کلاسیک",
        bgColor: "#5f6c67",
    },
    {
        id: 3,
        image: Serke,
        title: "چیپس سرکه‌ای",
        subtitle: "ترکیبی از سرکه و نمک که طعمی ترش و دلربا را به وجود آورده است. یک انتخاب خاص برای سلیقه‌های خاص.",
        price: "32,000 تومان",
        model: "ترش",
        bgColor: "#862e9c", 
    },
];


const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { type: "tween", duration: 0.3, ease: "easeIn" } },
};


const imageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -25 },
    show: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 } },
    exit: { opacity: 0, scale: 0.5, rotate: 25, transition: { type: "tween", duration: 0.4, ease: "easeIn" } },
};

function Hero() {
    
    const [activeData, setActiveData] = useState(HeroData[0]);

    const handleActiveData = (data) => {
        setActiveData(data);
    };

    return (
        <main>
            <div
                className="relative min-h-screen overflow-hidden"
                style={{
                    backgroundColor: activeData.bgColor,
                    transition: "background-color 0.8s ease-in-out",
                }}
            >
                <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-screen">

                    <div className="order-2 md:order-1 flex flex-col justify-center gap-8 p-6 text-center md:text-right text-white dir-rtl">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={activeData.id}
                                variants={textVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                            >
                                {activeData.title}
                            </motion.h1>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                             <motion.p
                                key={activeData.id}
                                variants={textVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className="text-sm sm:text-base leading-relaxed text-white/90"
                            >
                                {activeData.subtitle}
                            </motion.p>
                        </AnimatePresence>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white/90 text-black font-bold px-6 py-3 rounded-lg hover:bg-white/70 transition-colors self-center md:self-end"
                        >
                            سفارش دهید
                        </motion.button>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex justify-center md:justify-start gap-4"
                        >
                            {HeroData.map((data) => (
                                <div
                                    key={data.id}
                                    onClick={() => handleActiveData(data)}
                                    className="w-20 h-20 flex items-center justify-center rounded-lg cursor-pointer"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                                >
                                    <motion.img
                                        src={data.image}
                                        alt={data.title}
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className={`w-16 h-16 object-contain transition-all duration-300 drop-shadow-lg ${
                                            activeData.id === data.id ? 'scale-110 opacity-100' : 'scale-90 opacity-60'
                                        }`}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center items-center relative">
                         <AnimatePresence mode="wait">
                            <motion.div
                                key={activeData.id}
                                initial={{ opacity: 0, scale: 1.5 }}
                                animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }}
                                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.4, ease: "easeIn" } }}
                                className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap select-none text-white/10 text-8xl sm:text-9xl lg:text-[200px] font-extrabold"
                            >
                                {activeData.model}
                            </motion.div>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeData.id}
                                src={activeData.image}
                                alt={activeData.title}
                                variants={imageVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className="w-[250px] sm:w-[350px] lg:w-[450px] relative z-10 drop-shadow-2xl"
                            />
                        </AnimatePresence>
                    </div>
                </div>
                <a href="#" className="fixed bottom-10 right-10 z-20">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { delay: 1, type: "spring" } }}
                        whileHover={{ scale: 1.1, rotate: '360deg' }}
                        transition={{ duration: 0.5 }}
                        className="bg-green-500 text-white p-4 rounded-full shadow-lg"
                    >
                        <FaWhatsapp className="text-3xl" />
                    </motion.div>
                </a>
            </div>
        </main>
    );
}

export default Hero;