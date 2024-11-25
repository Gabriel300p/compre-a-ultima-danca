"use client";

import Arrow from "@/assets/arrow.png";
import Image from "next/image";

export default function Sinopse() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-5 md:px-20">
      <h2 className="text-primary text-7xl md:text-9xl font-normal font-streamer text-center pt-20 pb-10 md:pb-16">
        Sinopse
      </h2>
      <div className="text-tertiary text-xl md:text-3xl font-normal font-helvetica text-start flex flex-col md:gap-1 mb-20">
        <strong className="font-bold italic">
          Descubra o ritmo do amor e da autodescoberta em A Última Dança.
        </strong>
        <br />
        <p>
          Campsare é uma cidade como nenhuma outra, onde dias tranquilos se
          misturam com noites de pura magia. Seus campos verdejantes ecoam as
          palavras de um radialista onisciente, enquanto sua lendária balada, a
          Oásis, pulsa com magia e mistério — um lugar onde flores, luzes e
          dança se tornam uma fuga da realidade.
        </p>
        <br />
        <p>
          É nesse cenário mágico que Cindy, uma jovem tímida e sonhadora, busca
          refazer sua vida e enfrentar seus maiores desafios:{" "}
          <strong>superar o luto,</strong> trabalhar no maior jardim do país e,
          finalmente, <strong>encontrar coragem para aprender a dançar.</strong>
        </p>
        <br />
        <p>
          Determinada a retribuir o apoio de Raze, Cindy se junta a ela em uma
          emocionante jornada para ganhar o concurso de dança da Oásis — e, no
          processo, enfrenta a crescente paixão que surge por sua professora.
        </p>
        <br />
        <p>
          Com reviravoltas surpreendentes, personagens cativantes e uma
          atmosfera dos 80s fascinante,{" "}
          <strong>
            A Última Dança é uma história sobre amizade, amor e o poder
            transformador da dança. Uma jornada envolvente que vai te manter
            conectado até o último passo.
          </strong>
        </p>
      </div>
      <button
        aria-label="Scroll para o início"
        onClick={scrollToTop}
        className="bg-button-gradient p-6 md:p-12 flex justify-center items-center gap-4 md:gap-8 text-white font-bold text-2xl md:text-5xl rounded-xl md:rounded-3xl w-full text-center hover:opacity-75 transition-opacity duration-300 ease-in-out"
      >
        COMPRE O LIVRO FÍSICO
        <Image src={Arrow} alt="flecha" className="w-8 md:w-16 " />
      </button>
    </section>
  );
}
