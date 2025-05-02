import clsx from "clsx";

interface Props {
    children?: React.ReactNode;
    text?: string;
    icon?: React.ReactNode;
    showOnlyIcon?: boolean;
    className?: string;
    onClick?: () => void;
}

export const InputButton = ({ children, text, icon, showOnlyIcon, className, onClick }: Props) => {
    return (
        <button
            className={clsx(
                "font-semibold cursor-pointer hover:bg-blue-300",
                "flex rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-[0_4px_15px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                showOnlyIcon ? "!w-fit p-2 justify-center h-fit " : "w-full px-4 py-2 flex items-center justify-between",
                className && `${className}`,
            )}
            onClick={onClick}
        >
            {text && !showOnlyIcon && <span>{text}</span>}
            {icon && <span>{icon}</span>}

            {!showOnlyIcon && children}
        </button>
    );
}