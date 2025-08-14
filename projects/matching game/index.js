    let card = document.querySelectorAll('#card');
    let ans1;
    let ans1front;
    let turn = 1;
    let ansfound = 0;


    let img = document.querySelectorAll('#cardback');
    rimg()

    function rimg() {
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        numbers.sort(() => Math.random() - 0.5);
        for (let i = 0; i < numbers.length; i++) {
            switch (numbers[i]) {
                case 6:
                    numbers[i] = 1
                    break;
                case 7:
                    numbers[i] = 2
                    break;
                case 8:
                    numbers[i] = 3
                    break;
                case 9:
                    numbers[i] = 4
                    break;
                case 10:
                    numbers[i] = 5
                    break;

                default:
                    break;
            }

        }
        img.forEach((img, index) => {
            img.src = `${numbers[index % 10]}.png`;
        });
    }
    card.forEach(card => {

        card.addEventListener('click', (e) => {

            let front = e.target
            let back = e.target.parentNode.parentNode.lastElementChild.children[0]

            front.classList.toggle('flipped');
            back.classList.toggle('flipped');


            if ((turn % 2) == 1) {
                ans1 = back;
                ans1front = front;
                setTimeout(() => {
                    back.classList.toggle('flipped');
                    front.classList.toggle('flipped');
                }, 1000);
            } else {
                if (ans1.src == back.src) {
                    ansfound++;

                    ans1front.classList.toggle('flipped');
                    ans1.classList.toggle('flipped')
                    if (ansfound == 5) {
                        alert('you won the game');
                        reset()
                    }
                } else {
                    setTimeout(() => {
                        back.classList.toggle('flipped');
                        front.classList.toggle('flipped');
                    }, 1000);
                }
            }

            turn++;

        })
    });

    function reset() {
        rimg()

        card.forEach(card => {
            card.firstElementChild.children[0].classList.toggle('flipped')
            card.lastElementChild.children[0].classList.toggle('flipped')
        })
    }