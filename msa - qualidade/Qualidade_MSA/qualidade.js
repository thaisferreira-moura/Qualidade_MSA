
function calcularQualidade() {

    const goodPieces = Number(
        document.getElementById("goodPieces").value
    );

    const totalPieces = Number(
        document.getElementById("totalPieces").value
    );

    let quality = 0;

    if (totalPieces > 0) {
        quality = (goodPieces / totalPieces) * 100;
    }

    // Limita entre 0 e 100%
    quality = Math.min(Math.max(quality, 0), 100);

    // Atualiza porcentagem
    document.getElementById("qualityValue").textContent =
        quality.toFixed(1) + "%";

    // Atualiza barra
    document.getElementById("qualityProgress").style.width =
        quality + "%";

    // Atualiza posição do marcador
    document.getElementById("qualityThumb").style.left =
        `calc(${quality}% - 13px)`;

    // Atualiza números da fórmula
    document.getElementById("goodPiecesText").textContent =
        goodPieces.toLocaleString("pt-BR");

    document.getElementById("totalPiecesText").textContent =
        totalPieces.toLocaleString("pt-BR");

    // Atualiza gráfico donut
    const donut = document.querySelector(".donut-chart");

    donut.style.setProperty("--percent", quality);

    document.querySelector(".donut-text").textContent =
        quality.toFixed(1) + "%";
}

// Calcula ao carregar a página
calcularQualidade();