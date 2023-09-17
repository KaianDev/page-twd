import { Bebas_Neue } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const bebas = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
});

export const WhereWatchSection = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <section
            id="where-watch"
            className="container mx-auto px-4 my-6 flex flex-col sm:flex-row justify-between items-center sm:gap-4">
            <img
                src="/assets/rick.png"
                alt="Rick segurando uma arma"
                className="max-w-[250px] sm:max-w-[200px] lg:max-w-sm"
                data-aos="fade-right"
                data-aos-duration="1000"
            />
            <div
                className="sm:flex-1 text-center sm:text-start xl:text-center"
                data-aos="zoom-in"
                data-aos-duration="1000">
                <h2
                    className={`text-primary uppercase ${bebas.className} sm:mb-4 text-4xl sm:text-5xl lg:mb-6`}>
                    Assista em:
                </h2>
                <p className="text-white sm:text-xl lg:text-2xl">
                    Não perca a chance de assistir a The Walking Dead no Star+.
                    Drama e terror em um mundo pós-apocalíptico. Inscreva-se
                    agora!
                </p>
                <div className="flex gap-2 sm:gap-4 mt-4 justify-center sm:justify-start xl:justify-center">
                    <img
                        src="/assets/amc-logo.png"
                        alt="Logo amc"
                        className="max-w-[40px] sm:max-w-[100px]"
                    />
                    <img
                        src="/assets/star-logo.png"
                        alt="Logo STAR+"
                        className="max-w-[70px] sm:max-w-[144px]"
                    />
                </div>
            </div>
            <img
                src="/assets/daryl.png"
                alt="Daryl segurando uma arma"
                className="hidden xl:block max-w-[200px] lg:max-w-sm"
                data-aos="fade-left"
                data-aos-duration="1000"
            />
        </section>
    );
};
