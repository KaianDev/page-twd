import { BsArrowUp } from "react-icons/bs";

type Props = {
    onClick: () => void
};

export const ButtonToTop = ({ onClick }: Props) => {
    return (
        <div className="fixed bottom-10 right-6">
            <button
                onClick={onClick}
                className="bg-primary text-white w-10 h-10 border-2 border-transparent rounded-full flex justify-center items-center text-2xl font-bold animate-bounce hover:border-primary hover:bg-transparent hover:text-primary"
            >
                <BsArrowUp />
            </button>
        </div>
    );
};
