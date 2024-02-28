const prompt = require("prompt-sync")()

//character and atk: 

let cpu = {
    name: "Dialga",
    pv: 100,
    atk: [
        {
            name: "Hurle-temps",
            luck: 3,
            damage: 40
        },
        {
            name: "Soin",
            luck: 2,
            damage: 10
        },
        {
            name: "Tomberoche",
            luck: 3,
            damage: 20
        },
        {
            name: "Pouv-antiques",
            luck: 4,
            damage: 30
        }
    ]
}

let player = {
    name: "Guerrier de feu",
    pv: 100,
    atk: [
        {
            name: "Boutefeu",
            luck: 3,
            damage: 70
        },
        {
            name: "Soin",
            luck: 2,
            damage: 10
        },
        {
            name: "Tonnerre",
            luck: 3,
            damage: 20
        },
        {
            name: "Dracosoufle",
            luck: 4,
            damage: 30
        }
    ]
}



// function :

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function atkchoice() {

    let userChoice = null
    for (let i = 0; i < player.atk.length; i++) {

        console.log("- " + (i + 1) + " -" + player.atk[i].name);
    }

    do {

        userChoice = parseInt(prompt("Choissisez une Attaque !"))

    } while (userChoice > 1 && userChoice > 4);

    userAttack(player.atk[userChoice - 1])
}

function userAttack(atks) {

    if (atks == player.atk[1]) {
        if (random(1, atks.luck) === atks.luck) {
            player.pv = player.pv + atks.damage
            console.log(" Vous vous envelopper d'une énergie spirituelle et vous gagnez" + player.pv + " pv ");
        } else {
            console.log(" Vous n'avez pas reussie à vous concentrez ! Attaque échoué " + player.pv + " pv");
        }
    }
    if (atks != player.atk[1]) {

        console.log(atks);
        if (random(1, atks.luck) === atks.luck) {
            cpu.pv = cpu.pv - atks.damage
            console.log("Vous l'avez atteints de plein fouet ! Il reste lui " + cpu.pv + " pv");
        } else {
            console.log("l'attaque n'a pas reussi , le dialga est à " + cpu.pv + " pv");
        }
    }
}


function cpuAttack() {
    let enemieAtk = random(0, 3)
    console.log("le dialga vous attaque avec :");
    console.log(cpu.atk[enemieAtk])

    if (cpu.atk[enemieAtk] == cpu.atk[1]) {
        if (random(1, cpu.atk[1].luck) === cpu.atk[1].luck) {
            cpu.pv = cpu.pv + cpu.atk[1].damage
            console.log("l'énemi s'est concentré en plenitude ! " + cpu.pv + " pv ");
        } else {
            console.log("L'énemi à echouer dans sa plénitude ! " + cpu.pv + " pv");
        }
    }
    if (cpu.atk[enemieAtk] != cpu.atk[1]) {


        if (random(1, cpu.atk[enemieAtk].luck) === cpu.atk[enemieAtk].luck) {
            player.pv = player.pv - cpu.atk[enemieAtk].damage
            console.log("L'enemi vous a atteints ! vous passez à " + player.pv + " pv");
        } else {
            console.log("Vous évitez l'attaque ! il vous reste " + player.pv + " pv");
        }
    }
}




//Game:

console.log("Vous vous retrouvez face à une foret sombre et éffrayante.")

let intro 

while (intro != "oui" && intro != "non") {

    intro = prompt("Souhaitez vous rentrez? Appuyez sur <<oui>> pour rentrer ou <<non>> pour fuir")

}
if (intro === "oui") {
    console.log("Non !! Un Dialga se retrouve face à vous et semble vouloir vous combattre !");



    while (true) {

        atkchoice()

        if (cpu.pv <= 0) {
            console.log("Vous avez gagner !");
            break
        }

        cpuAttack()

        if (player.pv <= 0) {
            console.log("Vous avez perdu !");
            break
        }
    }

} else if (intro === "non") {

    console.log("bouuuh il a peur !!");
}