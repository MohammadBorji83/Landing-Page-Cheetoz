import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Roll1 from "../assets/roll1.png";
import Roll2 from "../assets/roll2.png";
import Roll3 from "../assets/roll3.png";
import Roll4 from "../assets/roll4.png";


const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};


const imageVariants = (x, y) => ({
    hidden: { opacity: 0, scale: 0.5, x, y },
    show: {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
        },
    },
});

function Products() {
    
    const constraintsRef = useRef(null);

    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-20 overflow-hidden" dir="rtl">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* عکس*/}
                    <motion.div
                        ref={constraintsRef} 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show" 
                        viewport={{ once: true, amount: 0.4 }} 
                        className="relative h-96 w-full"
                    >
                        <motion.img
                            variants={imageVariants(200, 100)} 
                            src={Roll1}
                            alt="عکس محصول ۱"
                            className="w-[150px] md:w-[200px] absolute top-0 left-5 cursor-grab drop-shadow-lg"
                            drag
                            dragConstraints={constraintsRef}
                            dragElastic={0.1}
                            whileTap={{ scale: 0.9, cursor: "grabbing" }}
                        />
                        <motion.img
                            variants={imageVariants(-200, 100)} 
                            src={Roll2}
                            alt="عکس محصول ۲"
                            className="w-[150px] md:w-[200px] absolute top-10 right-5 cursor-grab drop-shadow-lg"
                            drag
                            dragConstraints={constraintsRef}
                            dragElastic={0.1}
                            whileTap={{ scale: 0.9, cursor: "grabbing" }}
                        />
                        <motion.img
                            variants={imageVariants(200, -100)} 
                            src={Roll3}
                            alt="عکس محصول ۳"
                            className="w-[150px] md:w-[200px] absolute bottom-10 left-10 cursor-grab drop-shadow-lg"
                            drag
                            dragConstraints={constraintsRef}
                            dragElastic={0.1}
                            whileTap={{ scale: 0.9, cursor: "grabbing" }}
                        />
                        <motion.img
                            variants={imageVariants(-200, -100)} 
                            src={Roll4}
                            alt="عکس محصول ۴"
                            className="w-[150px] md:w-[200px] absolute bottom-0 right-10 cursor-grab drop-shadow-lg"
                            drag
                            dragConstraints={constraintsRef}
                            dragElastic={0.1}
                            whileTap={{ scale: 0.9, cursor: "grabbing" }}
                        />
                    </motion.div>

                    {/* متن */}
                    <div className="space-y-6 text-center md:text-right">
                        <motion.h2 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
                        >
                            طعم‌هایی که هرگز فراموش نمی‌کنید
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-600 dark:text-gray-300 leading-loose"
                        >
                            ما با استفاده از بهترین مواد اولیه و دستور پخت‌های منحصر به فرد، تجربه‌ای بی‌نظیر از طعم چیپس و پفیلا را برای شما به ارمغان می‌آوریم. هر بسته، داستانی از تازگی و کیفیت است که منتظر شماست.
                        </motion.p>
                        <motion.button 
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-red-300 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-lg"
                        >
                            مشاهده همه محصولات
                        </motion.button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Products;
