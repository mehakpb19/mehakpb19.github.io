let btn = document.querySelectorAll('button');
let blanks = document.getElementById('blanks');
let word;
let turn = 0;
let gameison = true;
let onefind = 0;
const meaningfulWords = ["brave", "dream", "hope", "peace", "light", "truth", "grace", "honor", "faith", "wisdom", "joy", "love", "kind", "calm", "trust", "grow", "seek", "shine", "create", "build", "friend", "family", "spirit", "imagine", "inspire", "journey", "listen", "respect", "strength", "unique", "value", "wonder", "beauty", "destiny", "freedom", "gentle", "honest", "moment", "purity", "serene", "thought", "vibrant", "cherish", "connect", "courage", "develop", "embrace", "forgive", "genuine", "harmony", "inspire", "passion", "patience", "reflect", "support", "victory", "believe", "explore", "miracle", "resolve", "sincere", "tranquil", "unwaver", "beneath", "explore", "insight", "nurture", "persist", "radiant", "reflect", "revive", "serenity", "thrive", "unity", "uplift", "vibrant", "wander", "blossom", "empathy", "courage", ];
reset();


btn.forEach(button => {

    button.addEventListener('click', (event) => {
        turn++;
        if (gameison == false) {
            return;
        }

        let input = event.target;
        for (let i = 0; i < word.length; i++) {
            if (input.id == word[i].toUpperCase()) {
                document.getElementById(i).innerText = input.id;
                input.style.background = "limegreen";
                onefind = onefind + 1;
                input.disabled = true;
                if (turn >= word.length) {
                    gameison = false;
                    setTimeout(() => {
                        blanks.replaceChildren();
                        reset();
                    }, 2000);
                }
            } else {
                input.style.background = 'red';
                input.disabled = true;
            }
        }
    })
});








function reset() {
    onefind = false;
    btn.forEach(btn => {
        btn.style.background = "#d3b300";
    });
    gameison = true;
    turn = 0;
    word = meaningfulWords[Math.floor(Math.random() * (meaningfulWords.length + 0))]
    console.log(word);
    for (let I = 0; I < word.length; I++) {
        let blank = document.createElement("p");
        blank.id = I;
        blanks.appendChild(blank);
    }
}