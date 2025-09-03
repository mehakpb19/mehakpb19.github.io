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
    // Outer loop for the number of passes
    for (let i = 0; i < bars.length - 1; i++) {
        // Inner loop for comparisons in each pass
        for (let j = 0; j < bars.length - 1 - i; j++) {
            bars[j].style.background = "#ecc94b"; // Color for comparison
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
            // Reset colors after comparison/swap
            bars[j].style.background = "#63b3ed";
        }
        // Mark the sorted element as green
        bars[bars.length - 1 - i].style.background = "#00ff4c";
    }
    // Mark the final element as sorted
    bars[0].style.background = "#00ff4c";
}