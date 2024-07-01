const antallBilder = 18; // Anta at vi har X bilder av Jarle
const bildeMappe = 'img/jarle/'; // Mappen hvor bildene er lagret
const bildePrefix = 'jarle_'; // Prefix for bildefilene
const bildeType = '.jpg'; // Filtype for bildene

function genererBildeListe() {
    const bildeListe = [];
    for (let i = 1; i <= antallBilder; i++) {
        bildeListe.push(`${bildeMappe}${bildePrefix}${i}${bildeType}`);
    }
    return bildeListe;
}

const jarleBilder = genererBildeListe();

function visTilfeldigBilde() {
    const tilfeldigIndeks = Math.floor(Math.random() * jarleBilder.length);
    const bildeSti = jarleBilder[tilfeldigIndeks];
    document.getElementById('jarle-bilde').src = bildeSti;
}

// Vis et tilfeldig bilde når siden lastes
visTilfeldigBilde();

// Legg til en event listener på knappen
document.getElementById('nytt-bilde').addEventListener('click', visTilfeldigBilde);