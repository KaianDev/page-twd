import React, { useEffect, useRef, useState } from "react";

type Props = {
    menu: boolean;
    toggleMenu: () => void;
};

export const MenuHamburger = ({ menu, toggleMenu }: Props) => {
    return (
        <div onClick={toggleMenu} className="relative sm:hidden">
            <div className="sm:hidden flex flex-col h-8 justify-between p-1 rounded-sm cursor-pointer border border-transparent hover:border-white group">
                <span
                    className={`h-1 bg-white rounded-sm transition-all ease-linear 
                    ${menu ? "w-7 group-hover:w-9" : "w-9 group-hover:w-7"}
                `}
                ></span>
                <span
                    className={`h-1 bg-white rounded-sm transition-all ease-linear 
                    ${menu ? "w-8 group-hover:w-9" : "w-9 group-hover:w-8"}
                `}
                ></span>
                <span className="w-9 h-1 bg-white rounded-sm"></span>
            </div>

            {menu && (
                <ul className="absolute top-9 right-0 min-w-max bg-black/70 text-white flex flex-col rounded-md overflow-hidden uppercase shadow-xl shadow-white/20">
                    <li className="hover:bg-black/90 p-3 cursor-pointer">
                        <a href="#curiosity">Curiosidades</a>
                    </li>
                    <li className="hover:bg-black/90 p-3 cursor-pointer">
                        <a href="#where-watch">Onde Assistir</a>
                    </li>
                    <li className="hover:bg-black/90 p-3 cursor-pointer">
                        <a href="#">Elenco</a>
                    </li>
                    <li className="hover:bg-black/90 p-3 cursor-pointer">
                        <a href="#">Temporadas</a>
                    </li>
                </ul>
            )}
        </div>
    );
};
