"use client";

import { useEffect, useState } from "react";
import { Progress } from "./ui/progress";

const ProgressHero = () => {
  const [progress, setProgress] = useState(12);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Garantir que o componente foi montado no cliente

    const maxProgress = 49;
    const savedProgress = localStorage.getItem("progress");
    if (savedProgress) {
      setProgress(Number(savedProgress));
    }

    const incrementProgress = () => {
      setProgress((prevProgress) => {
        const newProgress = Math.min(prevProgress + 1, maxProgress);
        localStorage.setItem("progress", String(newProgress));
        return newProgress;
      });
    };

    // Adiciona o delay de 2 segundos para mudar o número
    const timer = setTimeout(() => {
      incrementProgress();
    }, 2000); // 2 segundos de delay

    return () => clearTimeout(timer); // Limpeza do timer
  }, []); // Esse efeito roda apenas uma vez quando o componente for montado

  if (!isClient) {
    return null; // Não renderiza nada no servidor, evitando o erro de hidratação
  }

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <h4 className="text-primary text-sm md:text-lg font-bold font-helvetica text-center">
        OS PRIMEIROS 50 LIVROS VÃO COM BRINDES! <br className="md:hidden" />
        <span className="text-2xl md:text-lg "> CORRE PARA APROVEITAR!</span>
      </h4>

      <Progress value={(progress / 49) * 100} />
      <span className="text-tertiary text-xl md:text-4xl font-bold font-helvetica text-center">
        {progress} VENDIDOS! 🔥
      </span>
    </div>
  );
};

export default ProgressHero;
