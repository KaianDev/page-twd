import { ReactNode, useEffect, useRef, useState } from "react";
import { ButtonToTop } from "./ButtonToTop";

export const Layout = ({ children }: { children: ReactNode }) => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const testScroll = () => setScroll(window.scrollY);
        window.addEventListener("scroll", testScroll);
        return () => window.removeEventListener("scroll", testScroll);
    }, []);

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
