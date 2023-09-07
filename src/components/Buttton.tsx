import {ReactNode} from "react";

type ButtonProps = {
    children: ReactNode,
    onClick: () => void,
}

export default function Button({children, onClick}: ButtonProps) {
    return <button className="bg-indigo-700 text-white px-3 py-1 rounded" onClick={onClick}
                   type="button">{children}</button>
}