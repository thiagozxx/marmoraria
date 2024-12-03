// Animação para o cabeçalho - logo e menu
gsap.from(".logo", {
    opacity: 0,           // Inicia com opacidade 0
    y: -50,               // Inicia 50px acima
    duration: 1,          // Duração de 1 segundo
    ease: "power4.out",   // Efeito de desaceleração suave
    delay: 0.5            // Atraso para que o efeito comece após o carregamento
});

gsap.from(".menu-toggle", {
    opacity: 0,           // Inicia com opacidade 0
    x: -50,               // Inicia 50px à esquerda
    duration: 1,          // Duração de 1 segundo
    ease: "power4.out",   // Efeito de desaceleração suave
    delay: 0.7            // Atraso para que o efeito comece após o carregamento
});

gsap.from(".menu li", {
    opacity: 0,           // Inicia com opacidade 0
    y: -30,               // Inicia 30px acima
    duration: 1,          // Duração de 1 segundo
    ease: "power4.out",   // Efeito de desaceleração suave
    stagger: 0.2,         // Atraso de 0.2 segundos entre cada item
    delay: 1              // Atraso para que o efeito comece após o carregamento
});

// Animação para o banner
gsap.from(".banner-title", {
    opacity: 0,           // Inicia com opacidade 0
    y: 60,                // Inicia 60px abaixo
    duration: 1.5,        // Duração de 1.5 segundos
    ease: "power4.out",   // Efeito de desaceleração suave
    delay: 1.2            // Atraso para que o efeito comece após o carregamento
});

gsap.from(".banner-subtitle", {
    opacity: 0,           // Inicia com opacidade 0
    y: 40,                // Inicia 40px abaixo
    duration: 1.5,        // Duração de 1.5 segundos
    ease: "power4.out",   // Efeito de desaceleração suave
    delay: 1.4            // Atraso para que o efeito comece após o carregamento
});

gsap.from(".banner-button", {
    opacity: 0,           // Inicia com opacidade 0
    y: 30,                // Inicia 30px abaixo
    duration: 1,          // Duração de 1 segundo
    ease: "power4.out",   // Efeito de desaceleração suave
    delay: 1.6            // Atraso para que o efeito comece após o carregamento
});

// Animação para o título de "Produtos"
gsap.from(".text-main", {
    y: 60,                // Move o elemento para 60px abaixo
    opacity: 0,           // Inicia com opacidade 0
    duration: 1.2,        // Duração de 1.2 segundos
    ease: "power4.out",   // Efeito de desaceleração suave
    scrollTrigger: {
      trigger: ".text-main", // Elemento que dispara a animação
      start: "top 80%",   // Quando o topo do elemento atinge 80% da altura da tela
      end: "top 30%",     // Até que o topo chegue a 30% da tela
      scrub: true,        // Sincroniza a animação com o rolar da página
      toggleActions: "play none none none" // A animação começa ao rolar para baixo
    }
  });

// Animação para as caixas de serviços ".service-box"
gsap.from(".service-box", {
    x: -250,            // Move o elemento para 250px à esquerda
    opacity: 0,         // Inicia com opacidade 0
    duration: 1,        // Duração de 1 segundo para a animação
    stagger: 0.3,       // Atraso de 0.3 segundos entre a animação de cada item
    ease: "power4.out", // Efeito de desaceleração suave
    scrollTrigger: {
      trigger: ".services", // Elemento que dispara a animação
      start: "top 80%",     // Quando o topo da seção atinge 80% da altura da tela
      end: "top 30%",       // Até que o topo chegue a 30% da tela
      scrub: true,          // A animação vai seguir o movimento de rolagem
      toggleActions: "play none none none" // Só executa a animação ao rolar para baixo
    }
  });

// Animação para o título ".who-us h1"
gsap.from(".who-us h1", {
    rotationX: -90,     // Inicia com rotação no eixo X
    scale: 0.6,         // Começa com escala reduzida
    opacity: 0,         // Inicia com opacidade 0
    duration: 1.5,      // Aumenta a duração para uma transição mais suave
    ease: "power3.out", // Efeito de desaceleração suave
    scrollTrigger: {
      trigger: ".who-us", // Elemento que dispara a animação
      start: "top 80%",    // Quando o topo do elemento atinge 80% da altura da tela
      end: "top 30%",      // Até que o topo chegue a 30% da tela
      scrub: true,         // A animação acompanha o movimento do scroll
    }
  });

// Animação para a imagem da seção ".who-us-img"
gsap.from(".who-us-img", {
    x: -300,            // Inicia a imagem 300px à esquerda
    opacity: 0,         // Inicia com opacidade 0
    duration: 1.8,      // Aumenta ligeiramente a duração para suavizar
    ease: "power4.out", // Efeito de desaceleração suave
    scrollTrigger: {
      trigger: ".who-us-img", // O trigger agora é a própria imagem
      start: "top 80%",        // Quando o topo da imagem atingir 80% da altura da tela
      end: "top 30%",          // Até que o topo da imagem atinja 30% da tela
      scrub: true,             // A animação vai acompanhar o scroll
      toggleActions: "play none none none", // Começa ao rolar para baixo e reverte ao rolar para cima
    }
  });

// Animação para os diferenciais ".diferencial-box"
gsap.from(".diferencial-box", {
    opacity: 0,         // Inicia com opacidade 0
    y: 50,              // Inicia 50px abaixo
    duration: 1,        // Duração de 1 segundo
    stagger: 0.2,       // Atraso entre cada item
    ease: "power4.out", // Efeito de desaceleração suave
    scrollTrigger: {
      trigger: ".diferencial-boxs", // Elemento que dispara a animação
      start: "top 80%",     // Quando o topo da seção atinge 80% da altura da tela
      end: "top 30%",       // Até que o topo chegue a 30% da tela
      scrub: true,          // A animação vai seguir o movimento de rolagem
      toggleActions: "play none none reverse" // executa a animação ao rolar para baixo
    }
  });

// Animação para o footer
gsap.from(".footer_section", {
    opacity: 0,         // Inicia com opacidade 0
    y: 50,              // Inicia 50px abaixo
    duration: 1,        // Duração de 1 segundo
    stagger: 0.2,       // Atraso entre cada item
    ease: "power4.out", // Efeito de desaceleração suave
    scrollTrigger: {
      trigger: ".footer", // Elemento que dispara a animação
      start: "top 90%",    // Quando o topo do footer atinge 90% da altura da tela
      end: "top 30%",      // Até que o topo chegue a 30% da tela
      scrub: true,         // A animação vai seguir o movimento de rolagem
      toggleActions: "play none none none" // A animação começa ao rolar para baixo
    }
  });


gsap.registerPlugin(ScrollToPlugin);

document.querySelector(".menu a[href='#section1']").addEventListener("click", function(e) {
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo: "#section1"});
});