import Capa from "@/assets/capa-livro.jpeg";
import ProgressHero from "@/components/ProgressHero";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <header className="p-3 md:p-16 flex md:flex-row flex-col items-center gap-8 md:gap-12 2xl:gap-20">
        <Image src={Capa} alt="logo" className="w-[80%] md:w-1/3" />
        <div className="flex flex-col justify-center items-center gap-8 md:gap-20 2xl:gap-20">
          <h1 className="text-primary text-lg md:text-4xl xl:text-5xl font-bold font-helvetica text-center md:text-pretty !leading-tight">
            &quot;Às vezes, não importa quão alta seja a música ao nosso redor,
            é o coração que <br />
            dá o ritmo certo para seguir em frente.&quot;
          </h1>
          <div className="flex flex-col gap-5 w-full px-5">
            <a
              type="button"
              href="https://www.xn--aultimadana-v9a.com/produtos/livro-a-ultima-danca-pre-venda/"
              target="_blank"
              rel="noreferrer"
              className="bg-primary p-6 md:px-12 md:py-10 text-white font-bold text-xl md:text-3xl 2xl:text-5xl rounded-xl md:rounded-3xl w-full text-center hover:bg-fuchsia-600 transition-colors duration-300 ease-in-out"
            >
              COMPRE O LIVRO FÍSICO
            </a>
            <a
              type="button"
              href="https://www.amazon.com.br/Compre-a-%C3%BAltima-d%C3%A2ncia-Eduardo-Alves/dp/8546000002"
              target="_blank"
              rel="noreferrer"
              className="bg-tertiary p-6 md:px-12 md:py-10 text-white font-bold text-xl md:text-3xl 2xl:text-5xl rounded-xl md:rounded-3xl w-full text-center hover:bg-purple-700 transition-colors duration-300 ease-in-out"
            >
              COMPRE NA AMAZON
            </a>
          </div>
          <ProgressHero />
        </div>
      </header>
    </>
  );
}
