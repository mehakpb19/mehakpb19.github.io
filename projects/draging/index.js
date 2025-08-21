const draggableElement = document.getElementById('card');
const dropTarget = document.querySelectorAll('.droptarget');

draggableElement.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
});
dropTarget.forEach(dropTarget => {
    dropTarget.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
    dropTarget.addEventListener('drop', (event) => {
        let dropelement = document.getElementById(event.dataTransfer.getData('text/plain'))
        dropTarget.appendChild(dropelement);
    });
});





let newX = 0,
    newY = 0,
    startX = 0,
    startY = 0;

const card = document.getElementById('card2')

card.addEventListener('mousedown', mouseDown)

function mouseDown(e) {
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e) {
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY

    card.style.top = (card.offsetTop - newY) + 'px'
    card.style.left = (card.offsetLeft - newX) + 'px'
}

function mouseUp(e) {
    document.removeEventListener('mousemove', mouseMove)
}