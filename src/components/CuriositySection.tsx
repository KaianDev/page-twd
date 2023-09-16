import { useEffect } from "react";
import { Bebas_Neue } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";

const bebas = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
});

export const CuriositySection = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <section
            id="curiosity"
            className="container mx-auto py-8 px-4 text-white flex flex-col xl:flex-row lg:gap-8 lg:items-center">
            <div className="flex gap-8 flex-wrap lg:flex-nowrap justify-center lg:justify-between py-4">
                <img
                    src="/assets/confrontation1.png"
                    alt="Confronto"
                    className="w-[80%] lg:max-w-[400px] rounded-md"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                />
                <img
                    src="/assets/confrontation2.png"
                    alt="Confronto"
                    className="w-[80%] lg:max-w-[400px] rounded-md"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                />
            </div>
            <div
                className="text-center my-6 lg:flex-1 xl:text-start"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300">
                <h2
                    className={`text-primary uppercase ${bebas.className} mb-4 text-2xl sm:text-5xl lg:mb-6`}>
                    Confrontos Épicos
                </h2>
                <p className="mx-auto sm:text-xl lg:text-2xl">
                    The Walking Dead é uma série de TV de drama e terror que
                    segue o grupo de sobreviventes de um apocalipse zumbi
                    enquanto lutam para sobreviver em um mundo pós-apocalíptico.
                </p>
                <button
                    className={`px-4 py-2 text-2xl sm:text-4xl my-4 ${bebas.className} bg-primary border-2 border-primary text-secondary-dark rounded-md transition-all duration-300 ease-in hover:bg-transparent hover:text-primary`}>
                    Curiosidades
                </button>
            </div>
        </section>
    );
};
