plateauElement = document.querySelector("#plateau")

plateau = {
    init: () => {
        plateau.pieces = []
        for (colNum = 0; colNum < 7; colNum++) {
            col = document.createElement("div")
            col.classList.add("col")
            col.dataset.col = colNum

            plateau.pieces.push([])
            for (ligneNum = 0; ligneNum < 6; ligneNum++) {
                emplacement = document.createElement("div")
                emplacement.classList.add("emplacement")
                emplacement.dataset.col = colNum
                emplacement.dataset.ligne = ligneNum
                col.appendChild(emplacement)
                plateau.pieces[colNum].push("")
            }

            plateauElement.appendChild(col)
        }
    },
    ligneMin: (col) => {
        ligne = 5
        while (plateau.pieces[col][ligne] != "" && ligne >= 0) {
            ligne--
        }
        return ligne
    },
    placerPiece: (col, couleur) => {
        if (plateau.ligneMin(col) >= 0) {
            ligne = plateau.ligneMin(col)
            plateau.pieces[col][ligne] = couleur
            plateauElement.querySelector(".col[data-col='" + col + "'] .emplacement[data-ligne='" + ligne + "']").innerHTML = "<div class='jeton " + couleur + "'>"
        }
    }
}

plateau.init()

plateauElement.querySelectorAll('.col').forEach ( col => {
    console.log(col)
    col.onclick = () => {
        plateau.placerPiece(col.dataset.col, joueurActuel)
        if (joueurActuel == "rouge") {
            joueurActuel = "jaune"
        } else {
            joueurActuel = "rouge"
        }
        
    }
})

joueurActuel = "rouge"