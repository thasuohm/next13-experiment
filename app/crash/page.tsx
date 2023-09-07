'use client'

import Section from "~/servercomponents/Section";
import Button from "~/components/Buttton";

export default function PageCrash() {
    const callUndefinedLength = () => {
        let arr = undefined

        // @ts-ignore
        return arr.length
    }


    return <Section>
        <Button onClick={callUndefinedLength}>call undefined.length</Button>
    </Section>
}