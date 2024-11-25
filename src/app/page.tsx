import Citacao from "./sections/Citacao";
import Detalhes from "./sections/Detalhes";
import Hero from "./sections/Hero";
import Sinopse from "./sections/Sinopse";

export default function Home() {
  return (
    <div className="mb-20">
      <Hero />
      <Citacao />
      <Detalhes />
      <Sinopse />
    </div>
  );
}
