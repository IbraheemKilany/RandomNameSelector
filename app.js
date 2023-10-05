

let Names = ["ibraheem", "ahmed", "hashem", "ali", "fares", "baha", "mohammad", "yaqeen"]

var englishLetters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

let randomIndex = Math.floor(Math.random()*englishLetters.length)
console.log(englishLetters[randomIndex])
function checkTheName() {
    for (let i = 0; i < Names.length; i++)
        if (Names[i][0] ==englishLetters[randomIndex]) {

            console.log("the name " + " " + Names[i] + " "+ "is starting with the letter" + " " + Names[i][0])
        }
        // else (
        //     console.log("not Found The Name!")
        // )

}
checkTheName();