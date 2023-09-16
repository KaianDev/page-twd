import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
});

export const ConfrontationSection = () => {
    return (
        <section className="container mx-auto py-8 px-4 text-white flex flex-col xl:flex-row lg:gap-8 lg:items-center">
                <div className="flex gap-8 flex-wrap lg:flex-nowrap justify-center lg:justify-between py-4">
                    <img
                        src="/assets/confrontation1.png"
                        alt="Confronto"
                        className="w-[80%] lg:max-w-[400px] rounded-md"
                    />
                    <img
                        src="/assets/confrontation2.png"
                        alt="Confronto"
                        className="w-[80%] lg:max-w-[400px] rounded-md"
                    />
                </div>
                <div className="text-center my-6 lg:flex-1 xl:text-start">
                    <h2
                        className={`text-primary uppercase ${bebas.className} mb-4 text-5xl lg:mb-6`}>
                        Confrontos Épicos
                    </h2>
                    <p className="mx-auto text-xl lg:text-2xl">
                        The Walking Dead é uma série de TV de drama e terror que
                        segue o grupo de sobreviventes de um apocalipse zumbi
                        enquanto lutam para sobreviver em um mundo
                        pós-apocalíptico.
                    </p>
                </div>
            </section>
    );
};
