import React from "react";


const BlogData = [
    {
        id: 1,
        image: "https://placehold.co/600x400/ef4444/white?text=مقاله+اول",
        title: "چگونه بهترین قهوه را دم کنیم؟",
        dec: "در این مقاله، به بررسی نکات و ترفندهای کلیدی برای دم کردن یک فنجان قهوه بی‌نظیر در خانه می‌پردازیم.",
        author: "سارا احمدی",
    },
    {
        id: 2,
        image: "https://placehold.co/600x400/3b82f6/white?text=مقاله+دوم",
        title: "معرفی جدیدترین گجت‌های سال",
        dec: "با جدیدترین و هیجان‌انگیزترین گجت‌هایی که امسال به بازار عرضه شده‌اند، آشنا شوید و زندگی خود را هوشمندتر کنید.",
        author: "علی رضایی",
    },
    {
        id: 3,
        image: "https://placehold.co/600x400/10b981/white?text=مقاله+سوم",
        title: "نکاتی برای افزایش بهره‌وری در کار",
        dec: "راهکارهای عملی و ساده برای مدیریت زمان و افزایش تمرکز که به شما کمک می‌کند در کار خود موفق‌تر باشید.",
        author: "مریم حسینی",
    },
];

function Blogs() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-12 "  dir="rtl">
            <div className="container">
                <h1 className="text-3xl md:text-4xl font-bold text-center pb-10 text-gray-800 dark:text-white">
                    آخرین اخبار و مقالات
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-6 ">
                    {BlogData.map((item) => (
                        <div
                            key={item.id} 
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col hover:scale-90"
                        >  
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400?text=Image+Not+Found"; }}
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                    {item.title} 
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                                    {item.dec} 
                                </p>
                                <button className="w-full mt-auto bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300">
                                    ادامه مطلب
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blogs;