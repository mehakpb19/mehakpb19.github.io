let coloms = document.querySelectorAll('td');
load()
let number = [4, 9, 14, 19, 24, 29, 34, 39, 44, 49]
let total = 0;

function load() {
    coloms.forEach(td => {
        td.innerText = localStorage.getItem(td.id)
    });
}

function isNumberOrEmpty(value) {
    // Convert the value to a number if it's a string that can be parsed as a number.
    const numericValue = typeof value === 'string' && !isNaN(value) && value.trim() !== '' ? Number(value) : value;

    // Now, check the type of the potentially converted value.
    const isNumber = typeof numericValue === 'number' && !isNaN(numericValue);

    // Check if it's an "empty" value (null, undefined, or empty/whitespace string).
    const isEssentiallyEmpty =
        value === null ||
        typeof value === 'undefined' ||
        (typeof value === 'string' && value.trim() === '');

    // Return true if it's a number OR if it's considered empty.
    return isNumber || isEssentiallyEmpty;
}

function save() {
    coloms.forEach(td => {
        localStorage.setItem(td.id, td.innerText)
        for (let i = 0; i < number.length; i++) {
            if (td.id == number[i]) {
                if (isNumberOrEmpty(td.innerText)) {
                    total = total + Number(td.innerText);
                    document.getElementById('total').innerText = `total expenses:  ${total}`;
                } else {
                    alert(`please insert only number insted of ${td.innerText}`)
                }
            }

        }
    });
}

function remove() {
    if (confirm("Do you agree to remove all the values?")) {
        localStorage.clear()
        load()
    }

}