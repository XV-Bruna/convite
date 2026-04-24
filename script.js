const telaEnvelope = document.getElementById("tela-envelope");
const telaVideo = document.getElementById("tela-video");
const telaInfo = document.getElementById("tela-info");
const video = document.getElementById("videoConvite");

const imagemPrincipal = document.getElementById("imagemPrincipal");
const btnDress = document.getElementById("btnDress");
const btnPresentes = document.getElementById("btnPresentes");
const btnFechar = document.getElementById("btnFechar");
const btnLinkPresentes = document.getElementById("btnLinkPresentes");
const menuBotoes = document.getElementById("menuBotoes");

const imagemOriginal = "assets/convite.png";
const imagemDress = "assets/dressCode.png";
const imagemPresentes = "assets/listaDePresente.png";


//envelope
telaEnvelope.addEventListener("click", () => {
    telaEnvelope.classList.add("hidden");
    telaVideo.classList.remove("hidden");

    video.muted = false;
    video.currentTime = 0;

    const playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise
            .then(() => console.log("Vídeo rodando com som"))
            .catch(error => console.log("Erro ao dar play:", error));
    }
});


// video
video.addEventListener("ended", () => {
    telaVideo.classList.add("hidden");
    telaInfo.classList.remove("hidden");
});


// dress code
btnDress.addEventListener("click", (e) => {
    e.preventDefault();

    imagemPrincipal.src = imagemDress;

    menuBotoes.classList.add("hidden");
    btnFechar.classList.remove("hidden");
    btnLinkPresentes.classList.add("hidden");

    imagemPrincipal.style.transform = "scale(1.3)";
    imagemPrincipal.style.transition = "all 1s ease-in-out";
});


// presentes
btnPresentes.addEventListener("click", (e) => {
    e.preventDefault();

    imagemPrincipal.src = imagemPresentes;

    menuBotoes.classList.add("hidden");
    btnFechar.classList.remove("hidden");
    btnLinkPresentes.classList.remove("hidden");

    imagemPrincipal.style.transform = "scale(1.3)";
    imagemPrincipal.style.transition = "all 1s ease-in-out";
});

// fechar
btnFechar.addEventListener("click", () => {
    imagemPrincipal.src = imagemOriginal;

    menuBotoes.classList.remove("hidden");
    btnFechar.classList.add("hidden");
    btnLinkPresentes.classList.add("hidden");

    imagemPrincipal.style.transform = "scale(1)";
});