import ImageMid from "@/assets/image-mid.png";
import Image from "next/image";

export default function Citacao() {
  return (
    <section className="relative  md:mb-20 mt-6 md:mt-0">
      <Image
        src={ImageMid}
        alt="Casal"
        className="absolute -z-10 md:left-10 w-1/2 md:w-fit"
      />
      <div className="relative max-w-6xl flex items-center justify-center mx-auto">
        <div className=" bg-white/75 rounded-3xl border-4 border-white p-12 mt-[50%] md:mt-[18%]">
          <blockquote className="text-primary text-xl md:text-5xl font-bold !leading-tight font-helvetica pb-4 italic">
            &quot;A Última Dança nos lembra que, para não deixar a vida passar
            em vão, nem sempre o melhor é dançar conforme a música e, sim, de
            acordo com as batidas do coração.&quot;
          </blockquote>

          <span className=" text-tertiary text-xl md:text-5xl font-normal font-helvetica !leading-tight !text-pretty">
            <strong>Marina Feijóo,</strong> autora de{" "}
            <strong>Entre Namoradas e Lobos e O Centro de Todo o Caos.</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
