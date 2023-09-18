import { useEffect, useRef, useState } from "react";

export const ButtonToTop = () => {
    const [scroll, setScroll] = useState(0);
    const html = useRef<HTMLElement>(null);
    
    useEffect(() => {
        if (html.current?.scrollHeight) {
            const scrollH = html.current.scrollHeight;
            setScroll(scrollH);
        }
    }, [scroll]);

    return (
        <div className="fixed bottom-6 right-6">
            {scroll !== 0 && (
                <button className="bg-primary text-white w-10 h-10 rounded-full flex justify-center items-center">
                    Subir
                </button>
            )}
        </div>
    );
};
