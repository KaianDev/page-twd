import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <header onClick={closeMenu} className="relative ">
            <div className="container mx-auto px-4 flex min-h-[75vh] sm:min-h-screen flex-col">
                <nav
                    data-aos="fade-down"
                    className="py-3 flex justify-between items-center">
                    <a href="/">
                        <img
                            src="/assets/amc-logo.png"
                            alt="Logo AMC"
                            className="w-[55px] sm:w-[70px]"
                        />
                    </a>
                    <ul className="hidden text-white font-bold gap-[24px] uppercase sm:flex ">
                        <li className="hover:scale-110">
                            <a href="#curiosity" className="hover:underline hover:text-primary">
                                Curiosidades
                            </a>
                        </li>
                        <li className="hover:scale-110">
                            <a href="#where-watch" className="hover:underline hover:text-primary">
                                Onde Assistir
                            </a>
                        </li>
                        <li className="hover:scale-110">
                            <a href="#cast" className="hover:underline hover:text-primary">
                                Elenco
                            </a>
                        </li>
                        <li className="hover:scale-110">
                            <a href="#" className="hover:underline hover:text-primary">
                                Temporadas
                            </a>
                        </li>
                    </ul>
                    <MenuHamburger menu={menu} toggleMenu={toggleMenu} />
                </nav>

                <section className="flex-1 flex flex-col items-start justify-center">
                    <img
                        src="/assets/logo-twd.png"
                        alt=""
                        className="w-[70%] sm:max-w-[50vw] mb-4 -z-1"
                    />
                    <div className="w-[70%] sm:max-w-[50vw]">
                        <p className="uppercase text-xl font-bold mb-4 text-primary sm:text-secondary-dark sm:text-2xl text-shadow">
                            Entre no mundo aterrorizante dos mortos vivos
                        </p>
                        <p className="text text-white sm:text-xl">
                            The Walking Dead é uma série de ação que aborda o
                            cotidiano de um grupo de pessoas tentando sobreviver
                            em um cenário dominado por mortos-vivos.
                        </p>
                    </div>
                    <a
                        href="#"
                        className={`${bebas.className} px-4 py-3 sm:px-8 sm:py-5 mt-8 text-white text-2xl sm:text-4xl uppercase bg-secondary-dark rounded-tr-2xl border-4 border-secondary-light tracking-wide transition-all duration-300 hover:animate-pulse`}>
                        Assistir agora
                    </a>
                </section>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden bg-zombie"></div>
        </header>
    );
};
