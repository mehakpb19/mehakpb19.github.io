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
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - 1 - i; j++) {
            bars[j].style.background = "#ecc94b";
            bars[j + 1].style.background = "#ecc94b";
            await sleep(delay);

            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                bars[j].style.background = "#fc8181"; // Color for swap
                bars[j + 1].style.background = "#00ff4c";

                // Swap the heights of the elements
                const tempHeight = bars[j].style.height;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = tempHeight;
                await sleep(delay);
            }
            bars[j].style.background = "#63b3ed";
        }
        bars[bars.length - 1 - i].style.background = "#00ff4c";
    }
    bars[0].style.background = "#00ff4c";
}

// quick sort function to call onclick
async function quickSort() {
    let bars = document.querySelectorAll('.bar');
    await _quickSort(bars, 0, bars.length - 1);
    for (let k = 0; k < bars.length; k++) {
        bars[k].style.background = "#00ff4c";
    }
}

async function _quickSort(bars, low, high) {
    if (low < high) {
        let pi = await partition(bars, low, high);
        await _quickSort(bars, low, pi - 1);
        await _quickSort(bars, pi + 1, high);
    }
}

async function partition(bars, low, high) {
    let pivot = parseInt(bars[high].style.height);
    bars[high].style.background = "#fc8181"; // Color the pivot
    let i = (low - 1);

    for (let j = low; j < high; j++) {
        bars[j].style.background = "#ecc94b"; // Color the current bar being compared
        await sleep(delay);

        if (parseInt(bars[j].style.height) < pivot) {
            i++;
            // Swap bars[i] and bars[j]
            let tempHeight = bars[i].style.height;
            bars[i].style.height = bars[j].style.height;
            bars[j].style.height = tempHeight;

            bars[i].style.background = "#00ff4c"; // Color swapped elements
            bars[j].style.background = "#00ff4c";
            await sleep(delay);
        }
        bars[j].style.background = "#63b3ed"; // Reset bar color
    }
    await sleep(delay);

    // Swap the pivot with the element at i+1
    let tempHeight = bars[i + 1].style.height;
    bars[i + 1].style.height = bars[high].style.height;
    bars[high].style.height = tempHeight;

    bars[high].style.background = "#63b3ed"; // Reset pivot color
    bars[i + 1].style.background = "#00ff4c"; // Final position of pivot
    await sleep(delay);

    return i + 1;
}