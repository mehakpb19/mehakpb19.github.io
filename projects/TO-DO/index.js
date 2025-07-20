    let feild = document.getElementById('tfeild');
    let sbtn = document.getElementById('sbtn');
    let list = document.getElementById('list');
    let divCounter = 0;

    sbtn.addEventListener('click', () => {
        divCounter++;
        let text = feild.value;
        let childDiv = document.createElement('div');
        let cinput = document.createElement('input');
        let h4 = document.createElement('h4');
        let btn = document.createElement('button');
        btn.id = 'xbtn';
        cinput.type = 'checkbox';
        childDiv.classList.add('item');
        childDiv.id = `dynamicDiv-${divCounter}`;
        h4.innerText = text;
        btn.innerText = 'X';


        btn.addEventListener('click', (event) => {
            const divToRemove = event.target.parentElement;
            divToRemove.remove();
            console.log(`Removed: ${divToRemove.id}`);
        });

        childDiv.appendChild(cinput);
        childDiv.appendChild(h4);
        childDiv.appendChild(btn);
        list.appendChild(childDiv);
        console.log(`Created: ${childDiv.id}`);
    });