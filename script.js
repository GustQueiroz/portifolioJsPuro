function changeLanguage(language) {
  if (language === "ENG") {
    document.querySelector(".photoMe").src = "./img/euliverpool.png";
    const elementoTexto = document.getElementById("aboutme-text");
    const elementoTitle = document.getElementById("aboutme-text-title");
    const elementoTech = document.getElementById("technologies-text");
    elementoTexto.innerHTML =
      "MY NAME IS GUSTAVO QUEIROZ, I'M 18 YEARS OLD AND I'M A FULL-STACK DEVELOPER.TODAY I WORK IN AN ECOMMERCE AND SERVICES COMPANY. I LIKE SOLVE PROBLEMS AND MAKE DESIGNS";
    elementoTitle.innerHTML = "ABOUT ME";
    elementoTech.innerHTML = "TECHNOLOGIES USED";
  }
  if (language === "PT") {
    document.querySelector(".photoMe").src = "./img/eubrasil.png";
    const elementoTexto = document.getElementById("aboutme-text");
    const elementoTitle = document.getElementById("aboutme-text-title");
    const elementoTech = document.getElementById("technologies-text");
    elementoTexto.innerHTML =
      "ME CHAMO GUSTAVO QUEIROZ, TENHO 18 ANOS E SOU DESEVOLVEDOR FULL-STACK. HOJE TRABALHO EM UMA EMPRESA DE ECOMMERCE E SERVIÇOS. GOSTO DE RESOLVER PROBLEMAS E FAZER DESIGNS";
    elementoTitle.innerHTML = "SOBRE MIM";
    elementoTech.innerHTML = "TECNOLOGIAS UTILIZADAS";
  }
  if (language === "ESP") {
    document.querySelector(".photoMe").src = "./img/eureal.png";
    const elementoTexto = document.getElementById("aboutme-text");
    const elementoTitle = document.getElementById("aboutme-text-title");
    const elementoTech = document.getElementById("technologies-text");
    elementoTexto.innerHTML =
      "MI NOMBRE ES GUSTAVO QUEIROZ, TENGO 18 AÑOS Y SOY DESARROLLADOR FULL STACK. HOY TRABAJO EN UNA EMPRESA DE ECOMMERCE Y SERVICIOS. ME GUSTA RESOLVER PROBLEMAS Y HACER DISEÑOS";
    elementoTitle.innerHTML = "SOBRE MI";
    elementoTech.innerHTML = "TECNOLOGÍAS UTILIZADAS";
  }
  if (language === "FRA") {
    document.querySelector(".photoMe").src = "./img/eupsg.png";
    const elementoTexto = document.getElementById("aboutme-text");
    const elementoTitle = document.getElementById("aboutme-text-title");
    const elementoTech = document.getElementById("technologies-text");
    elementoTexto.innerHTML =
      "JE M'APPELLE GUSTAVO QUEIROZ, J'AI 18 ANS ET JE SUIS UN DÉVELOPPEUR FULL-STACK. AUJOURD'HUI JE TRAVAILLE DANS UNE ENTREPRISE DE COMMERCE ET DE SERVICES. J'AIME RÉSOUDRE DES PROBLÈMES ET CRÉER DES CONCEPTIONS";
    elementoTitle.innerHTML = "SUR MOI";
    elementoTech.innerHTML = "TECHNOLOGIES UTILISÉES";
  }
}
function changeTheme(theme) {
  const techContainerElement = document.querySelectorAll(".tech-container");
  const techTextElement = document.querySelectorAll(".techText");
  if (theme === "black") {
    document.getElementById("black").src = "./img/blackframeselected.png";
    document.getElementById("white").src = "./img/whiteframe.png";
    document.getElementById("yellow").src = "./img/yellowframe.png";
    document.body.classList.remove("yellow");
    document.body.classList.add("black");

    for (var i = 0; i < techContainerElement.length; i++) {
      techContainerElement[i].classList.remove("tech-container-white");
      techContainerElement[i].classList.remove("tech-container-yellow");
      techContainerElement[i].classList.add("tech-container-black");
    }

    for (var i = 0; i < techTextElement.length; i++) {
      techTextElement[i].classList.remove("techText-white");
      techTextElement[i].classList.remove("techText-yellow");
      techTextElement[i].classList.add("techText-black");
    }
  }
  if (theme === "white") {
    document.getElementById("white").src = "./img/whiteframeselected.png";
    document.getElementById("black").src = "./img/blackframe.png";
    document.getElementById("yellow").src = "./img/yellowframe.png";
    document.body.classList.remove("black");
    document.body.classList.remove("yellow");

    for (var i = 0; i < techContainerElement.length; i++) {
      techContainerElement[i].classList.add("tech-container-white");
      techContainerElement[i].classList.remove("tech-container-yellow");
      techContainerElement[i].classList.remove("tech-container-black");
    }

    for (var i = 0; i < techTextElement.length; i++) {
      techTextElement[i].classList.remove("techText-black");
      techTextElement[i].classList.remove("techText-yellow");
      techTextElement[i].classList.add("techText-white");
    }
  }
  if (theme === "yellow") {
    document.getElementById("yellow").src = "./img/yellowframeselected.png";
    document.getElementById("white").src = "./img/whiteframe.png";
    document.getElementById("black").src = "./img/blackframe.png";
    document.body.classList.remove("black");
    document.body.classList.add("yellow");

    for (var i = 0; i < techContainerElement.length; i++) {
      techContainerElement[i].classList.remove("tech-container-white");
      techContainerElement[i].classList.add("tech-container-yellow");
      techContainerElement[i].classList.remove("tech-container-black");
    }

    for (var i = 0; i < techTextElement.length; i++) {
      techTextElement[i].classList.remove("techText-white");
      techTextElement[i].classList.add("techText-yellow");
      techTextElement[i].classList.remove("techText-black");
    }
  }
}
