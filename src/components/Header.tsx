export const Header = () => {
    return (
        <header className="min-h-screen bg-zinc-800">
            <div className="container mx-auto px-4 sm:px-0">
                <nav className="py-2 flex justify-between items-center">
                    <img
                        src="../assets/amc-logo.svg"
                        alt="Logo AMC"
                        className="w-[80px]"
                    />
                    <ul className="hidden text-white font-bold gap-[24px] uppercase sm:flex ">
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
                    <div className="sm:hidden flex flex-col h-8 justify-between p-1 rounded-sm cursor-pointer border border-transparent hover:border-white group">
                        <span className="w-9 h-1 bg-white rounded-sm transition-all ease-linear group-hover:w-7"></span>
                        <span className="w-9 h-1 bg-white rounded-sm transition-all ease-linear group-hover:w-8"></span>
                        <span className="w-9 h-1 bg-white rounded-sm"></span>
                    </div>
                </nav>
            </div>
        </header>
    );
};
