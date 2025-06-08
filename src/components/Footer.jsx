import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const TelegramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2 11 13 2 9l20-7-9 11v6l-4-3-6 3V2z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.75 13.96c.27.13.42.23.5.33.22.25.16.53.08.73-.2.45-.78.93-1.26 1.12-.5.2-1.03.3-1.56.23-.54-.08-1.07-.3-1.57-.6s-1.02-.7-1.48-1.15c-.46-.46-.85-1-1.15-1.57s-.53-1.1-.6-1.57c-.08-.54 0-1.06.2-1.56.2-.48.67-1.06 1.12-1.26.2-.08.48-.14.73.08.1.08.2.23.33.5.13.27.23.58.3.88.08.3.1.65.04.93-.05.28-.15.53-.3.73-.15.2-.33.36-.53.5.07.1.15.2.24.3.52.52 1.1 1.04 1.74 1.42.43.26.88.45 1.34.58.1.02.2.03.3.03.23 0 .44-.07.6-.2.18-.15.32-.3.44-.5.1-.17.2-.3.35-.3s.33.02.5.1zM12 2a10 10 0 10.02 20.02A10 10 0 0012 2z" />
    </svg>
);

function Footer() {
    return (
        <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-800 text-white pt-16 pb-8" dir="rtl">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mx-10">
                    
                    
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold mb-4 border-b-2 border-red-500 pb-2 inline-block">
                            درباره ما
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            ما با عشق و علاقه، بهترین و باکیفیت‌ترین تنقلات را برای شما تولید می‌کنیم تا لحظات شادتری را تجربه کنید.
                        </p>
                    </div>

                    
                    <div className="col-span-1">
                        <h3 className="text-xl font-bold mb-4 border-b-2 border-red-500 pb-2 inline-block">
                            لینک‌های سریع
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">صفحه اصلی</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">محصولات</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">بلاگ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">تماس با ما</a></li>
                        </ul>
                    </div>

                    
                    <div className="col-span-1">
                        <h3 className="text-xl font-bold mb-4 border-b-2 border-red-500 pb-2 inline-block">
                            تماس با ما
                        </h3>
                        <div className="space-y-4 text-gray-400">
                            <p>ایران، تهران، خیابان آزادی</p>
                            <p>ایمیل: info@example.com</p>
                            <p>شماره تماس: ۰۲۱-۱۲۳۴۵۶۷۸</p>
                        </div>
                    </div>

                    
                    <div className="col-span-1">
                         <h3 className="text-xl font-bold mb-4 border-b-2 border-red-500 pb-2 inline-block">
                            شبکه‌های اجتماعی
                        </h3>
                        <div className="flex space-x-4 space-x-reverse">
                            <motion.a whileHover={{ scale: 1.2, y: -5 }} href="#" className="text-gray-400 hover:text-white transition-colors">
                                <InstagramIcon />
                            </motion.a>
                             <motion.a whileHover={{ scale: 1.2, y: -5 }} href="#" className="text-gray-400 hover:text-white transition-colors">
                                <TelegramIcon />
                            </motion.a>
                             <motion.a whileHover={{ scale: 1.2, y: -5 }} href="#" className="text-gray-400 hover:text-white transition-colors">
                                <WhatsAppIcon />
                            </motion.a>
                        </div>
                    </div>
                </div>

                
                <div className="text-center text-gray-500 border-t border-gray-700 mt-12 pt-8">
                    <p>&copy; ۲۰۲۴ - تمامی حقوق برای این وب‌سایت محفوظ است.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;