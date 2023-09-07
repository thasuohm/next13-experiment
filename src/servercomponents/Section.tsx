import {ReactNode} from "react";

type SectionProps = {
    children: ReactNode
}

export default function Section({children}: SectionProps) {
    return <section className="p-3 border rounded">{children}</section>
}