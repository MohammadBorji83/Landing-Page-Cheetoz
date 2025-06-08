import React, { useState } from "react"; // 1. ایمپورت کردن useState
import Logo from "../assets/Logo-FA-retina-1.png";
import { IoMenu, IoClose } from "react-icons/io5"; // اضافه کردن آیکون بستن
import { FaRegUser } from "react-icons/fa";

const NavbarMenu = [
    { id: 1, title: "خانه", link: "#" },
    { id: 2, title: "دسته بندی", link: "#" },
    { id: 3, title: "بلاگ", link: "#" },
    { id: 4, title: "درباره ما", link: "#" },
    { id: 5, title: "تماس با ما", link: "#" },
];

function Navbar() {
    // 2. تعریف State برای مدیریت باز و بسته بودن منو
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="bg-gray-800 shadow-md"> {/* رنگ پس‌زمینه بهتر و افزودن سایه */}
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        {/* --- لوگو --- */}
                        <div>
                            <a href="#">
                                <img src={Logo} alt="Logo" className="max-w-[100px] invert" />
                            </a>
                        </div>

                        {/* --- منوی اصلی برای دسکتاپ --- */}
                        <div className="hidden md:flex items-center">
                            <ul className="flex items-center gap-2 flex-row-reverse text-white">
                                {NavbarMenu.map((item) => (
                                    <li key={item.id}>
                                        <a href={item.link}
                                            className="inline-block text-base font-semibold py-2 px-3 rounded-md transition-colors duration-300 hover:bg-red-500">
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <button className="text-white text-xl ms-6 p-2 rounded-full transition-colors duration-300 hover:bg-red-500">
                                <FaRegUser />
                            </button>
                        </div>

                        {/* --- دکمه منوی همبرگری برای موبایل --- */}
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="text-white text-4xl">
                                {isMenuOpen ? <IoClose /> : <IoMenu />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- منوی کشویی برای موبایل --- */}
                {isMenuOpen && (
                    <div className="md:hidden bg-gray-800">
                        <ul className="flex flex-col items-center text-white pb-4">
                            {NavbarMenu.map((item) => (
                                <li key={item.id} className="w-full">
                                    <a href={item.link}
                                        className="block text-center text-lg font-semibold py-3 w-full transition-colors duration-300 hover:bg-red-500">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                            <button className="text-white text-2xl mt-4 p-2 rounded-full transition-colors duration-300 hover:bg-red-500">
                                <FaRegUser />
                            </button>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;