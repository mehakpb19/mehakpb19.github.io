let p = document.getElementById('q');
let ob = document.querySelectorAll("#ob");
let skip = document.getElementById('skip');
let score = document.getElementById('score');
let skips = document.getElementById("skips")
let value;
let skipc = 0;
let qdone = 0;
let wrong = 0;
let done = false;


const questions = [{
        question: "Which method adds one or more elements to the end of an array and returns the new length of the array?",
        options: ["a) push()", "b) pop()", "c) shift()", "d) unshift()"]
    },
    {
        question: "Which method removes the last element from an array and returns that element?",
        options: ["a) push()", "b) pop()", "c) shift()", "d) unshift()"]
    },
    {
        question: "Which method removes the first element from an array and returns that removed element?",
        options: ["a) push()", "b) pop()", "c) shift()", "d) unshift()"]
    },
    {
        question: "Which method adds one or more elements to the beginning of an array and returns the new length of the array?",
        options: ["a) push()", "b) pop()", "c) shift()", "d) unshift()"]
    },
    {
        question: "How do you create an empty array in JavaScript?",
        options: ["a) var arr = {};", "b) var arr = [];", "c) var arr = new Array();", "d) Both b and c"]
    },
    {
        question: "Which method joins all elements of an array into a string?",
        options: ["a) concat()", "b) join()", "c) slice()", "d) splice()"]
    },
    {
        question: "Which method returns a new array containing a portion of the original array?",
        options: ["a) splice()", "b) slice()", "c) push()", "d) pop()"]
    },
    {
        question: "Which method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place?",
        options: ["a) slice()", "b) concat()", "c) splice()", "d) join()"]
    },
    {
        question: "How do you find the number of elements in an array?",
        options: ["a) arr.length()", "b) arr.size", "c) arr.length", "d) arr.count()"]
    },
    {
        question: "Which method creates a new array with the results of calling a provided function on every element in the calling array?",
        options: ["a) forEach()", "b) filter()", "c) map()", "d) reduce()"]
    },
    {
        question: "Which method creates a new array with all elements that pass the test implemented by the provided function?",
        options: ["a) map()", "b) forEach()", "c) filter()", "d) find()"]
    },
    {
        question: "Which method executes a reducer function on each element of the array, resulting in a single output value?",
        options: ["a) map()", "b) filter()", "c) forEach()", "d) reduce()"]
    },
    {
        question: "Which method tests whether all elements in the array pass the test implemented by the provided function?",
        options: ["a) some()", "b) every()", "c) find()", "d) includes()"]
    },
    {
        question: "Which method tests whether at least one element in the array passes the test implemented by the provided function?",
        options: ["a) every()", "b) some()", "c) filter()", "d) map()"]
    },
    {
        question: "Which method returns the first element in the provided array that satisfies the provided testing function?",
        options: ["a) filter()", "b) find()", "c) findIndex()", "d) includes()"]
    },
    {
        question: "Which method is used to sort the elements of an array in place?",
        options: ["a) order()", "b) arrange()", "c) sort()", "d) organize()"]
    },
    {
        question: "Which method reverses the order of the elements in an array in place?",
        options: ["a) reverse()", "b) flip()", "c) invert()", "d) backwards()"]
    },
    {
        question: "What is the index of the first element in a JavaScript array?",
        options: ["a) 1", "b) 0", "c) -1", "d) Varies depending on array content"]
    },
    {
        question: "Can an array contain elements of different data types in JavaScript?",
        options: ["a) No, only elements of the same type", "b) Yes, it can", "c) Only if explicitly declared as mixed type", "d) Only in strict mode"]
    },
    {
        question: "Which of the following is NOT a valid way to iterate over an array in JavaScript?",
        options: ["a) for loop", "b) for...of loop", "c) while loop", "d) forEach (for objects)"]
    }
];

const answers = [
    "a) push()",
    "b) pop()",
    "c) shift()",
    "d) unshift()",
    "d) Both b and c",
    "b) join()",
    "b) slice()",
    "c) splice()",
    "c) arr.length",
    "c) map()",
    "c) filter()",
    "d) reduce()",
    "b) every()",
    "b) some()",
    "b) find()",
    "c) sort()",
    "a) reverse()",
    "b) 0",
    "b) Yes, it can",
    "d) forEach (for objects)"
];

rnum();

ob.forEach(button => {
    button.addEventListener('click', (event) => {
        if (done === true) {
            return;
        }

        if (button.innerText == answers[value]) {
            event.target.style.background = 'lime';
            done = true;
            setTimeout(() => {
                rnum();
            }, 1000);
            score++;
        } else {
            event.target.style.background = 'red';
            done = true;
            setTimeout(() => {
                rnum();
            }, 1000);
            wrong++;
        }
    })
});

skip.addEventListener('click', () => {
    skipc++;
    rnum();
})

function rnum() {

    if (qdone == 19) {
        alert(`score = ${score},wrong = ${wrong} and skips = ${skipc}`)
    } else {
        done = false;
        value = Math.floor((Math.random() * 20));
        qdone++;
        p.innerText = questions[value].question;
        for (let i = 0; i < 4; i++) {
            ob[i].innerText = questions[value].options[i];
            ob[i].style.background = 'white';
        }
    }
}