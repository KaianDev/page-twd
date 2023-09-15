import { useState } from "react";
import { MenuHamburger } from "./MenuHamburger";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
});

export const Header = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => setMenu(!menu);
    const closeMenu = () => menu && setMenu(false);

    return (
        <header onClick={closeMenu} className="relative">
            <div className="container mx-auto px-4 sm:px-4 flex min-h-[65vh] sm:min-h-screen flex-col">
                <nav className="py-3 flex justify-between items-center">
                    <a href="/">
                        <img
                            src="../assets/amc-logo.svg"
                            alt="Logo AMC"
                            className="w-[55px] sm:w-[70px]"
                        />
                    </a>
                    <ul className="hidden text-white font-bold text-[14px] md:text-[16px] gap-[24px] uppercase sm:flex ">
                        <li>
                            <a href="#" className="hover:underline">
                                Curiosidades
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Onde Assistir
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Elenco
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Temporadas
                            </a>
                        </li>
                    </ul>

                    <MenuHamburger menu={menu} toggleMenu={toggleMenu} />
                </nav>

                <section className="flex-1 flex flex-col items-start justify-center">
                    <img
                        src="../assets/logo-twd.png"
                        alt=""
                        className="w-[70%] sm:max-w-[50vw] mb-4"
                    />
                    <div className="w-[70%] sm:max-w-[50vw]">
                        <p className="uppercase text-xl font-bold mb-4 text-primary sm:text-secondary-dark sm:text-2xl text-shadow">
                            Entre no mundo aterrorizante dos mortos vivos
                        </p>
                        <p className="text text-white sm:text-xl">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomized
                            words which don't
                        </p>
                    </div>
                    <a
                        href="#"
                        className={`${bebas.className} px-4 py-3 sm:px-8 sm:py-5 mt-8 text-white text-2xl sm:text-4xl uppercase bg-secondary-dark rounded-tr-2xl border-4 border-secondary-light tracking-wide transition-all duration-300 hover:animate-pulse`}
                    >
                        Assistir agora
                    </a>
                </section>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden">
                <img
                    src="../assets/bg.png"
                    alt=""
                    className="w-full h-full object-cover object-center-top sm:object-[60%]"
                />
            </div>
        </header>
    );
};
