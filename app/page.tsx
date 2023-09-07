import Image from "next/image";
import Dog1 from "~pub/static/dog1.jpg";

export default function PageHome() {
  return (
      <Image src={Dog1} alt="Dog1" className="w-48"/>
  )
}
