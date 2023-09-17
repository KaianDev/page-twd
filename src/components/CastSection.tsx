import { Bebas_Neue } from "next/font/google";
import Aos from "aos";
import { actors } from "@/data/actors";
import { useEffect } from "react";

const bebas = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
});

export const CastSection = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <section id="cast" className="container mx-auto px-4 my-6">
            <h2
                className={`text-primary uppercase ${bebas.className} mb-4 text-4xl sm:text-5xl text-center lg:mb-6`}
                data-aos="zoom-in"
                data-aos-duration="500">
                Elenco
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-8">
                {actors.map((actor) => (
                    <div key={actor.id} className="relative group">
                        <img
                            src={`/assets/actors/${actor.avatar}`}
                            alt={actor.name}
                            className="h-full w-full"
                            data-aos="zoom-in"
                            data-aos-duration="500"
                        />
                        <div className="absolute invisible opacity-0 top-0 w-full bg-black/60 h-full flex justify-center items-center text-2xl text-white text-center transition-all ease-in group-hover:visible group-hover:opacity-100">
                            {actor.name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
