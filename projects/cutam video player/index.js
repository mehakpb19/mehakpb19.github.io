let video = document.getElementById(`video`)
let player = document.getElementById(`player`)
let btn = [document.getElementById(`10back`), document.getElementById(`10skip`), document.getElementById(`play`)]

video.addEventListener('change', () => {
    let url = URL.createObjectURL(video.files[0])
    player.src = url;
})

btn.forEach(btn => {
    btn.addEventListener('click', (e) => {

        if (e.target.value == 'play' || e.target.value == 'pause') {
            if (e.target.value == 'play') {

                player.play()
                e.target.value = 'pause';
            } else {
                player.pause()
                e.target.value = 'play';
            }
        }

        if (e.target.value == '10skip') {
            if (player.duration > player.currentTime + 10) {
                player.currentTime = player.currentTime + 10

            }
        }


    })

})