'use client'

import { ThemeMap, useThemeStore } from "@/store/useThemeStore";

export default function BGAnimation() {

  const {theme} = useThemeStore()

  
  const generateShootingStars = (count = 8) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        top: `${Math.floor(Math.random() * 80)}%`, // de 0% a 80%
        delay: `${Math.random() * 6}s`,             // de 0s a 6s
        width: `${80 + Math.random() * 40}px`,      // de 80px a 120px
        duration: `${4 + Math.random() * 4}s`,      // de 4s a 8s
      });
    }
    return stars;
  };

  const shootingStars = generateShootingStars(8);

  // Estilo base da estrela cadente
  const shootingStyleBase = {
    position: "absolute" as const,
    width: "100px",
    height: "5px",
    left: "-100px",
    background: `linear-gradient(320deg, #fff, transparent)`,
    animation: "shoot 10s infinite ease-in-out",
  };

  // Estilo base das estrelas fixas
  const starStyle = {
    width: "5px",
    height: "5px",
    position: "absolute" as const,
    background: "#FFF",
    boxShadow: `
      2vw 5vh 2px #fff, 10vw 8vh 2px #fff, 15vw 15vh 1px #fff,
      22vw 22vh 1px #fff, 28vw 12vh 2px #fff, 32vw 32vh 1px #fff,
      38vw 18vh 2px #fff, 42vw 35vh 1px #fff, 48vw 25vh 2px #fff,
      53vw 42vh 1px #fff, 58vw 15vh 2px #fff, 63vw 38vh 1px #fff,
      68vw 28vh 2px #fff, 73vw 45vh 1px #fff, 78vw 32vh 2px #fff,
      83vw 48vh 1px #fff, 88vw 20vh 2px #fff, 93vw 52vh 1px #fff,
      98vw 35vh 2px #fff, 5vw 60vh 1px #fff, 12vw 65vh 2px #fff,
      18vw 72vh 1px #fff, 25vw 78vh 2px #fff, 30vw 85vh 1px #fff,
      35vw 68vh 2px #fff, 40vw 82vh 1px #fff, 45vw 92vh 2px #fff,
      50vw 75vh 1px #fff, 55vw 88vh 2px #fff, 60vw 95vh 1px #fff,
      65vw 72vh 2px #fff, 70vw 85vh 1px #fff, 75vw 78vh 2px #fff,
      80vw 92vh 1px #fff, 85vw 82vh 2px #fff, 90vw 88vh 1px #fff,
      95vw 75vh 2px #fff
    `,
    animation: "twinkle 8s infinite linear",
  };

  // Estilo do "after" alternativo
  const afterStarStyle = {
    content: "''",
    position: "absolute" as const,
    width: "5px",
    height: "5px",
    background: "#FFF",
    boxShadow: `
      8vw 12vh 2px #fff, 16vw 18vh 1px #fff, 24vw 25vh 2px #fff,
      33vw 15vh 1px #fff, 41vw 28vh 2px #fff, 49vw 35vh 1px #fff,
      57vw 22vh 2px #fff, 65vw 42vh 1px #fff, 73vw 28vh 2px #fff,
      81vw 48vh 1px #fff, 89vw 32vh 2px #fff, 97vw 45vh 1px #fff,
      3vw 68vh 2px #fff, 11vw 75vh 1px #fff, 19vw 82vh 2px #fff,
      27vw 88vh 1px #fff, 35vw 72vh 2px #fff, 43vw 85vh 1px #fff,
      51vw 92vh 2px #fff, 59vw 78vh 1px #fff
    `,
    animation: "twinkle 8s infinite linear reverse",
  };

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none transition-colors duration-500 ease-in-out"
      style={{ backgroundColor: ThemeMap[theme].mainBg }}
    >
      {/* Estrelas principais */}
      <div style={starStyle} />

      {/* Estrelas "depois", simulando o ::after */}
      <div style={afterStarStyle} />

      {/* Estrelas cadentes */}
      {shootingStars.map((star, i) => (
        <div
          key={i}
          style={{
            ...shootingStyleBase,
            top: star.top,
            animationDelay: star.delay,
          }}
        />
      ))}

      <div 
        className="absolute -right-[17%] -bottom-[45%] rotate-45 rounded-full bg-white h-[700px] w-[700px] overflow-hidden shadow-lg">
      </div>

    </div>
  );
}
