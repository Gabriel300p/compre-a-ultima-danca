import Image from "next/image";

import Rosto1 from "@/assets/rosto-1.png";
import Rosto2 from "@/assets/rosto-2.png";

export default function Detalhes() {
  return (
    <section className="w-full mt-10">
      <Image src={Rosto1} alt="Rosto 1" className="w-full" />
      <h3 className="py-11 flex justify-center text-tertiary text-2xl md:text-6xl font-bold font-helvetica leading-normal md:leading-relaxed italic">
        🪩 Referência aos anos 80 <br /> ❤️ Found Family <br /> 💃 Best friends
        to lovers
      </h3>
      <Image src={Rosto2} alt="Rosto 2" className="w-full" />
    </section>
  );
}
