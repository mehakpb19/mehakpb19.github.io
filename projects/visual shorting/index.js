let arraySizeSlider = document.getElementById('arraySizeSlider')
let arraySizeValue = document.getElementById('arraySizeValue')
let animationSpeedSlider = document.getElementById('animationSpeedSlider')
let animationSpeedValue = document.getElementById('animationSpeedValue')
let delay = 50;
gernatearray()

function utext(value) {
    if (value == 0) {
        gernatearray()
    }
    arraySizeValue.innerText = arraySizeSlider.value;
    animationSpeedValue.innerText = animationSpeedSlider.value;
    delay = parseInt(animationSpeedSlider.value)
}

function gernatearray() {
    let infoelement = document.getElementById('info')
    infoelement.innerHTML = '';
    for (let i = 0; i < arraySizeSlider.value; i++) {
        let bar = document.createElement('div');
        let presetbar = document.querySelectorAll('.bar').length;
        bar.id = `${presetbar+1}`;
        bar.classList.add('bar');
        document.getElementById(`info`).appendChild(bar);
    }
    let bars = document.querySelectorAll(`.bar`);
    bars.forEach(bars => {
        bars.style.height = `${Math.floor(Math.random() * (400 - 20 + 1) + 20)}px`;
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubblesort() {
    let bars = document.querySelectorAll(`.bar`);
    let turn = 0;
    for (let i = 0; i < bars.length; i++) {
        for (let i = 0; i < bars.length - 1; i++) {

            if (i == (bars.length - 1) - turn) {
                break;
            }
            bars[i].style.background = "#ecc94b";
            bars[i + 1].style.background = "#ecc94b";

            await sleep(delay);

            if (parseInt(bars[i].style.height) > parseInt(bars[i + 1].style.height)) {
                bars[i].style.background = "#fc8181";
                bars[i + 1].style.background = "#00ff4c";
                let bar1 = bars[i].style.height;
                let bar2 = bars[i + 1].style.height;
                bars[i].style.height = bar2;
                bars[i + 1].style.height = bar1;

                await sleep(delay);

                bars[i].style.background = "#63b3ed";


            } else {

                bars[i].style.background = "#fc8181";
                bars[i + 1].style.background = "#00ff4c";
                await sleep(delay);

                bars[i].style.background = "#63b3ed";

            }
        }
        turn++;
        if (turn == bars.length) {
            bars[0].style.background = "#00ff4c";

        }
    }
}
async function quickshort() {
    let bars = document.querySelectorAll(`.bar`);
    let barsheight = Array.from(bars).map(div => parseInt(div.style.height))
    let Pivot = barsheight[Math.floor(Math.random() * barsheight.length)];
    console.log(barsheight);

    let Pivotelementindex = barsheight.indexOf(Pivot)
    console.log(Pivotelementindex);

    let [firstSubSet, secondSubSet] = findSubSet(bars, Pivot);
    let firstRightBar = setValueFirstSubSet(bars, firstSubSet, Pivotelementindex);
    [firstSubSet, secondSubSet] = findSubSet(bars, parseInt(firstRightBar.style.height))
    console.log(firstSubSet.map(div => div.style.height));
    console.log(secondSubSet.map(div => div.style.height));
    console.log(firstSubSet.length + 1);

    for (let i = 0; i < firstSubSet.length; i++) {
        console.log(i);

        bar1 = bars[i].style.height
        bar2 = firstSubSet[i].style.height
        bars[i].style.height = bar2
        firstSubSet[i].style.height = bar1
    }
    // for (let j = firstSubSet.length + 2; j < secondSubSet.length + firstSubSet + 1; j++) {
    //     bar1 = bars[j].style.height
    //     bar2 = secondSubSet[j].style.height
    //     bars[j].style.height = bar2
    //     secondSubSet[j].style.height = bar1
    // }

    // for (let j = 0; j < firstSubSet.length; j++) {
    //     firstSubSet[j] = bars[j]
    // };
    // for (let j = firstSubSet.length + 2; j < secondSubSet.length + firstSubSet + 1; j++) {
    //     if (j == firstSubSet.length + 2) {
    //         let l = 0;
    //         secondSubSet[l] = bars[j]
    //         l++;
    //     } else {
    //         secondSubSet[l] = bars[j]
    //         l++;

    //     }
    // }
    // fixfirstsubset(firstSubSet)
}

function fixfirstsubset(firstSubSet) {
    for (let i = 0; i < firstSubSet.length; i++) {
        if (i == 0) {
            console.log('load');

            let Pivot = firstSubSet[Math.floor(Math.random() * firstSubSet.length)];
            console.log(Pivot);

            let [subfirstSubSet, subsecondSubSet] = findSubSet(firstSubSet, parseInt(Pivot.style.height));
            console.log(subfirstSubSet);
            console.log(subsecondSubSet);


            setValueFirstSubSet(firstSubSet, subfirstSubSet, firstSubSet.indexOf(Pivot))

            for (let i = 0; i < subfirstSubSet.length; i++) {
                bar1 = firstSubSet[i].style.height
                bar2 = subfirstSubSet[i].style.height
                firstSubSet[i].style.height = bar2
                subfirstSubSet[i].style.height = bar1
            }
        }

    }
}

function setValueFirstSubSet(bars, firstSubSet, Pivotelementindex) {
    let bar1 = bars[firstSubSet.length].style.height
    let bar2 = bars[Pivotelementindex].style.height
    bars[firstSubSet.length].style.height = bar2;
    bars[Pivotelementindex].style.height = bar1;
    bars[firstSubSet.length].style.background = "#00ff4c"
    return bars[firstSubSet.length];
}


function findSubSet(bars, Pivot) {
    let firstSubSet = [];
    let secondSubSet = [];
    for (let i = 0; i < bars.length; i++) {
        if (parseInt(bars[i].style.height) < Pivot) {
            firstSubSet.push(bars[i])
        }
        if (parseInt(bars[i].style.height) > Pivot) {
            secondSubSet.push(bars[i])
        }
    }
    return [firstSubSet, secondSubSet];
}