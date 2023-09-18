import { ReactNode, useEffect, useRef, useState } from "react";
import { ButtonToTop } from "./ButtonToTop";

export const Layout = ({ children }: { children: ReactNode }) => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", testScroll);


    }, [scroll]);

    const testScroll = () => {
        setScroll(window.scrollY);
    };

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {children}
            {scroll > 0 && <ButtonToTop onClick={toTop} />}
        </div>
    );
};
