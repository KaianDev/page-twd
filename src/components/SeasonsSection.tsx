import { seasons } from "@/data/seasons";
import Aos from "aos";
import { Bebas_Neue } from "next/font/google";
import { useEffect } from "react";

const bebas = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
});

export const SeasonsSection = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <section id="seasons" className="container mx-auto px-4 py-6">
            <h2
                className={`text-primary uppercase  mb-8 text-4xl sm:text-5xl text-center lg:mb-6 ${bebas.className}`}
                data-aos="zoom-in"
                data-aos-duration="500"
            >
                Temporadas
            </h2>

            <div className="grid grid-cols-1 xl:grid-cols-2 text-white gap-4">
                {seasons.map((item, key) => (
                    <div
                        key={item.id}
                        className="flex items-start gap-4 mb-4 sm:mb-0"
                    >
                        <img
                            src={item.cover}
                            alt={`Capa temporada ${item.title}`}
                            className={`w-28 md:w-44
                                ${key % 2 !== 0 && "order-1 xl:order-none"}
                            `}
                            data-aos="zoom-in"
                            data-aos-duration="500"
                        />
                        <div
                            className="flex-1"
                            data-aos="zoom-out"
                            data-aos-duration="500"
                        >
                            <h3
                                className={`text-primary uppercase  text-2xl leading-none xl:text-3xl xl:leading-none mb-2
                                ${bebas.className} 
                                ${key % 2 !== 0 && "text-end xl:text-start"}
                                `}
                            >
                                Temporada {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm sm:text-justify">
                                {item.body}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
