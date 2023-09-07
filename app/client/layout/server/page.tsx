import Section from "~/servercomponents/Section";
import Image from "next/image";
import Dog1 from "~pub/static/dog1.jpg";
import ServerCurrentTime from "~/servercomponents/ServerCurrentTime";
import ServerText from "~/servercomponents/ServerText";

export default function PageClientLayoutServer() {

    return (
        <Section>
            <div className="flex gap-4 flex-wrap">
                <ServerText text="text from server"/>
                <ServerCurrentTime/>
                <Image src={Dog1} alt="Dog1" className="w-48"/>
            </div>
        </Section>
    )
}
