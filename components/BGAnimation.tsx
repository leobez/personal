export default function BGAnimation() {
  const backgroundColor = "#fff";        // Fundo da tela
  const starColor = "#000";              // Estrelas piscantes
  const shootingColor = "#000";          // Estrelas cadentes (traço)
  
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

  const shootingStars = generateShootingStars(15);

  // Estilo base da estrela cadente
  const shootingStyleBase = {
    position: "absolute" as const,
    width: "100px",
    height: "4px",
    left: "-100px",
    background: `linear-gradient(320deg, ${shootingColor}, transparent)`,
    animation: "shoot 10s infinite ease-in-out",
  };

  // Estilo base das estrelas fixas
  const starStyle = {
    width: "1px",
    height: "1px",
    position: "absolute" as const,
    background: starColor,
    boxShadow: `
      2vw 5vh 2px ${starColor}, 10vw 8vh 2px ${starColor}, 15vw 15vh 1px ${starColor},
      22vw 22vh 1px ${starColor}, 28vw 12vh 2px ${starColor}, 32vw 32vh 1px ${starColor},
      38vw 18vh 2px ${starColor}, 42vw 35vh 1px ${starColor}, 48vw 25vh 2px ${starColor},
      53vw 42vh 1px ${starColor}, 58vw 15vh 2px ${starColor}, 63vw 38vh 1px ${starColor},
      68vw 28vh 2px ${starColor}, 73vw 45vh 1px ${starColor}, 78vw 32vh 2px ${starColor},
      83vw 48vh 1px ${starColor}, 88vw 20vh 2px ${starColor}, 93vw 52vh 1px ${starColor},
      98vw 35vh 2px ${starColor}, 5vw 60vh 1px ${starColor}, 12vw 65vh 2px ${starColor},
      18vw 72vh 1px ${starColor}, 25vw 78vh 2px ${starColor}, 30vw 85vh 1px ${starColor},
      35vw 68vh 2px ${starColor}, 40vw 82vh 1px ${starColor}, 45vw 92vh 2px ${starColor},
      50vw 75vh 1px ${starColor}, 55vw 88vh 2px ${starColor}, 60vw 95vh 1px ${starColor},
      65vw 72vh 2px ${starColor}, 70vw 85vh 1px ${starColor}, 75vw 78vh 2px ${starColor},
      80vw 92vh 1px ${starColor}, 85vw 82vh 2px ${starColor}, 90vw 88vh 1px ${starColor},
      95vw 75vh 2px ${starColor}
    `,
    animation: "twinkle 8s infinite linear",
  };

  // Estilo do "after" alternativo
  const afterStarStyle = {
    content: "''",
    position: "absolute" as const,
    width: "1px",
    height: "1px",
    background: starColor,
    boxShadow: `
      8vw 12vh 2px ${starColor}, 16vw 18vh 1px ${starColor}, 24vw 25vh 2px ${starColor},
      33vw 15vh 1px ${starColor}, 41vw 28vh 2px ${starColor}, 49vw 35vh 1px ${starColor},
      57vw 22vh 2px ${starColor}, 65vw 42vh 1px ${starColor}, 73vw 28vh 2px ${starColor},
      81vw 48vh 1px ${starColor}, 89vw 32vh 2px ${starColor}, 97vw 45vh 1px ${starColor},
      3vw 68vh 2px ${starColor}, 11vw 75vh 1px ${starColor}, 19vw 82vh 2px ${starColor},
      27vw 88vh 1px ${starColor}, 35vw 72vh 2px ${starColor}, 43vw 85vh 1px ${starColor},
      51vw 92vh 2px ${starColor}, 59vw 78vh 1px ${starColor}
    `,
    animation: "twinkle 8s infinite linear reverse",
  };

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ backgroundColor }}
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
    </div>
  );
}
