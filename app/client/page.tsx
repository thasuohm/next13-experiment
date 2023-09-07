'use client'

import {useState} from "react";
import Section from "~/servercomponents/Section";
import Button from "~/components/Buttton";
import ClientCurrentTime from "~/components/ClientCurrentTime";

export default function PageClient() {
    const [clicked, setClicked] = useState(false)

    return (
        <Section>
            <h1 className="text-xl pb-2">Click Button</h1>
            <div className="flex gap-4 flex-wrap">
                <ClientCurrentTime />
                <Button onClick={() => setClicked(prev => !prev)}>setClicked</Button>
                <span>clicked: {clicked.toString()}</span>
            </div>
        </Section>
    )
}
