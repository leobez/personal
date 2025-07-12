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
    height: "4px",
    left: "-100px",
    background: `linear-gradient(320deg, ${ThemeMap[theme].mainFont}, transparent)`,
    animation: "shoot 10s infinite ease-in-out",
  };

  // Estilo base das estrelas fixas
  const starStyle = {
    width: "1px",
    height: "1px",
    position: "absolute" as const,
    background: ThemeMap[theme].mainFont,
    boxShadow: `
      2vw 5vh 2px ${ThemeMap[theme].mainFont}, 10vw 8vh 2px ${ThemeMap[theme].mainFont}, 15vw 15vh 1px ${ThemeMap[theme].mainFont},
      22vw 22vh 1px ${ThemeMap[theme].mainFont}, 28vw 12vh 2px ${ThemeMap[theme].mainFont}, 32vw 32vh 1px ${ThemeMap[theme].mainFont},
      38vw 18vh 2px ${ThemeMap[theme].mainFont}, 42vw 35vh 1px ${ThemeMap[theme].mainFont}, 48vw 25vh 2px ${ThemeMap[theme].mainFont},
      53vw 42vh 1px ${ThemeMap[theme].mainFont}, 58vw 15vh 2px ${ThemeMap[theme].mainFont}, 63vw 38vh 1px ${ThemeMap[theme].mainFont},
      68vw 28vh 2px ${ThemeMap[theme].mainFont}, 73vw 45vh 1px ${ThemeMap[theme].mainFont}, 78vw 32vh 2px ${ThemeMap[theme].mainFont},
      83vw 48vh 1px ${ThemeMap[theme].mainFont}, 88vw 20vh 2px ${ThemeMap[theme].mainFont}, 93vw 52vh 1px ${ThemeMap[theme].mainFont},
      98vw 35vh 2px ${ThemeMap[theme].mainFont}, 5vw 60vh 1px ${ThemeMap[theme].mainFont}, 12vw 65vh 2px ${ThemeMap[theme].mainFont},
      18vw 72vh 1px ${ThemeMap[theme].mainFont}, 25vw 78vh 2px ${ThemeMap[theme].mainFont}, 30vw 85vh 1px ${ThemeMap[theme].mainFont},
      35vw 68vh 2px ${ThemeMap[theme].mainFont}, 40vw 82vh 1px ${ThemeMap[theme].mainFont}, 45vw 92vh 2px ${ThemeMap[theme].mainFont},
      50vw 75vh 1px ${ThemeMap[theme].mainFont}, 55vw 88vh 2px ${ThemeMap[theme].mainFont}, 60vw 95vh 1px ${ThemeMap[theme].mainFont},
      65vw 72vh 2px ${ThemeMap[theme].mainFont}, 70vw 85vh 1px ${ThemeMap[theme].mainFont}, 75vw 78vh 2px ${ThemeMap[theme].mainFont},
      80vw 92vh 1px ${ThemeMap[theme].mainFont}, 85vw 82vh 2px ${ThemeMap[theme].mainFont}, 90vw 88vh 1px ${ThemeMap[theme].mainFont},
      95vw 75vh 2px ${ThemeMap[theme].mainFont}
    `,
    animation: "twinkle 8s infinite linear",
  };

  // Estilo do "after" alternativo
  const afterStarStyle = {
    content: "''",
    position: "absolute" as const,
    width: "1px",
    height: "1px",
    background: ThemeMap[theme].mainFont,
    boxShadow: `
      8vw 12vh 2px ${ThemeMap[theme].mainFont}, 16vw 18vh 1px ${ThemeMap[theme].mainFont}, 24vw 25vh 2px ${ThemeMap[theme].mainFont},
      33vw 15vh 1px ${ThemeMap[theme].mainFont}, 41vw 28vh 2px ${ThemeMap[theme].mainFont}, 49vw 35vh 1px ${ThemeMap[theme].mainFont},
      57vw 22vh 2px ${ThemeMap[theme].mainFont}, 65vw 42vh 1px ${ThemeMap[theme].mainFont}, 73vw 28vh 2px ${ThemeMap[theme].mainFont},
      81vw 48vh 1px ${ThemeMap[theme].mainFont}, 89vw 32vh 2px ${ThemeMap[theme].mainFont}, 97vw 45vh 1px ${ThemeMap[theme].mainFont},
      3vw 68vh 2px ${ThemeMap[theme].mainFont}, 11vw 75vh 1px ${ThemeMap[theme].mainFont}, 19vw 82vh 2px ${ThemeMap[theme].mainFont},
      27vw 88vh 1px ${ThemeMap[theme].mainFont}, 35vw 72vh 2px ${ThemeMap[theme].mainFont}, 43vw 85vh 1px ${ThemeMap[theme].mainFont},
      51vw 92vh 2px ${ThemeMap[theme].mainFont}, 59vw 78vh 1px ${ThemeMap[theme].mainFont}
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

      {/* <div 
        style={{ 
          borderColor: ThemeMap[theme].mainFont,
        }}
        className="absolute -right-[15%] -bottom-[50%] rotate-45 rounded-full border-2 h-[700px] w-[700px]"
      /> */}

    </div>
  );
}
