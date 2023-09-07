import Image from "next/image";
import Dog2 from "~pub/static/dog2.jpg"

export default function PageServer() {
    return (
            <Image src={Dog2} alt="Dog2" className="w-48"/>
    )
}
