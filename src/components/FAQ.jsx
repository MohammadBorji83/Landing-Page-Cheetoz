import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";


const FAQData = [
    {
        id: 1,
        ques: "محصولات شما از چه موادی تشکیل شده‌اند؟",
        ans: "تمام محصولات ما از مواد اولیه درجه یک و طبیعی تهیه می‌شوند. ما از بهترین سیب‌زمینی‌ها، روغن‌های گیاهی سالم و ادویه‌های طبیعی بدون هیچ‌گونه مواد نگهدارنده مصنوعی استفاده می‌کنیم.",
    },
    {
        id: 2,
        ques: "آیا امکان خرید عمده وجود دارد؟",
        ans: "بله، ما برای فروشگاه‌ها، رستوران‌ها و سایر کسب‌وکارها شرایط ویژه‌ای برای خرید عمده در نظر گرفته‌ایم. لطفاً برای اطلاعات بیشتر با بخش فروش ما تماس بگیرید.",
    },
    {
        id: 3,
        ques: "زمان و هزینه ارسال سفارشات چقدر است؟",
        ans: "زمان ارسال بسته به موقعیت مکانی شما بین ۱ تا ۳ روز کاری متغیر است. هزینه ارسال نیز بر اساس وزن و حجم سفارش شما محاسبه و در هنگام پرداخت به شما نمایش داده می‌شود.",
    },
    {
        id: 4,
        ques: "آیا محصولات شما برای افراد وگان مناسب است؟",
        ans: "بله، اکثر محصولات ما مانند چیپس نمکی و برخی از طعم‌های کلاسیک کاملاً گیاهی و برای افراد وگان مناسب هستند. برای اطمینان، لطفاً به بخش ترکیبات هر محصول مراجعه کنید.",
    },
];


const AccordionIcon = ({ isOpen }) => {
    return (
        <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-6 flex items-center justify-center text-red-500"
        >
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8 0V16M0 8H16"
                    stroke="currentColor"
                    strokeWidth="2"
                />
            </svg>
        </motion.div>
    );
};


function FAQ() {
   
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
       
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-20" dir="rtl">
            <div className="container max-w-3xl mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center pb-12 text-gray-800 dark:text-white">
                    پرسش‌های متداول
                </h1>
                <div className="space-y-4">
                    {FAQData.map((item, index) => (
                        <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                            <div
                                className="flex justify-between items-center cursor-pointer p-6"
                                onClick={() => handleClick(index)}
                            >
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    {item.ques}
                                </h3>
                                <AccordionIcon isOpen={activeIndex === index} />
                            </div>

                           
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-600 dark:text-gray-300 px-6 pb-6 leading-relaxed">
                                            {item.ans}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;