let hours = document.getElementById('hours')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let start = document.getElementById('start')
let stop = document.getElementById('stop')

let nhour = 0;
let nmin = 0;
let nsec = 0;
let intervalison = false;

function update() {
    hours.value = nhour;
    min.value = nmin;
    sec.value = nsec;
}

start.addEventListener('click', () => {
    nhour = hours.value;
    nmin = min.value;
    nsec = sec.value;

    if (!intervalison == true) {
        let secondInterval = setInterval(() => {
            intervalison = true;
            stop.addEventListener('click', () => {
                intervalison = false;

                clearInterval(secondInterval);

            })
            if (nsec > 0) {
                nsec--;
            } else {
                if (!nhour == 0 && nmin == 0) {
                    nhour--;
                    nmin = 60
                }
                nmin--;
                nsec = 59;
            }

            if (nmin == 0 && nhour == 0 && nsec == 0) {
                intervalison = false;
                alert('done');
                clearInterval(secondInterval);
                location.reload();
            }
            update();
        }, 1000);
    }
})