let questionbank = [
    {
        question: "Which is the largest planet in our solar system?",
        Answer1: "Earth",
        Answer2: "Jupiter",
        Answer3: "Saturn",
        Answer4: "Mars",
        correctIndex: 1
    },
    {
        question: "Who is known as the Father of the Nation in India",
        Answer1: "Jawaharlal Nehru",
        Answer2: "Subhash Chandra Bose",
        Answer3: "Mahatma Gandhi",
        Answer4: "Sardar Vallabhbhai Patel",
        correctIndex: 2
    },
    {
        question: "What is the capital city of Japan?",
        Answer1: "Beijing",
        Answer2: "Tokyo",
        Answer3: "Seoul",
        Answer4: "Bangkok",
        correctIndex: 1
    },
    {
        question: "Which gas do plants use during photosynthesis?",
        Answer1: "Oxygen",
        Answer2: "Carbon Dioxide",
        Answer3: "Nitrogen",
        Answer4: "Hydrogen",
        correctIndex: 1
    },
    {
        question: "Which is the smallest continent in the world?",
        Answer1: "Europe",
        Answer2: "Australia",
        Answer3: "Africa",
        Answer4: "South America",
        correctIndex: 1
    },
    {
        question: "Who wrote the National Anthem of India?",
        Answer1: "Bankim Chandra Chatterjee",
        Answer2: "Rabindranath Tagore",
        Answer3: "Mahatma Gandhi",
        Answer4: "Jawaharlal Nehru",
        correctIndex: 1
    },
    {
        question: "How many colors are there in a rainbow?",
        Answer1: "5",
        Answer2: "6",
        Answer3: "7",
        Answer4: "8",
        correctIndex: 2
    },
    {
        question: "Which is the longest river in the world?",
        Answer1: "Ganga",
        Answer2: "Amazon",
        Answer3: "Nile",
        Answer4: "Yangtze",
        correctIndex: 2
    },
    {
        question: "Which organ in the human body purifies blood?",
        Answer1: "Heart",
        Answer2: "Lungs",
        Answer3: "Kidneys",
        Answer4: "Liver",
        correctIndex: 2
    },
    {
        question: "Who invented the telephone?",
        Answer1: "Thomas Edison",
        Answer2: "Alexander Graham Bell",
        Answer3: "Isaac Newton",
        Answer4: "Albert Einstein",
        correctIndex: 1
    }
    
]

let question = document.getElementById("question");
let Answer = document.getElementsByClassName("answer");
let questionShow = document.getElementById("questionShow");
let currentQuestion = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize elements
    questionShow = document.getElementById("questionShow");
    Answer = document.getElementsByClassName("answer");
    showQuestion();

    // Attach click listeners to answer buttons
    for (let i = 0; i < Answer.length; i++) {
        // use a closure to capture index
        Answer[i].addEventListener('click', (function(index){
            return function() { checkAnswer(index); }
        })(i));
        Answer[i].style.cursor = 'pointer';
    }
});

// Function to show question and answers
function showQuestion() {
    let q = questionbank[currentQuestion];
    if (!questionShow) {
        console.error("Question element not found!");
        return;
    }
    questionShow.innerHTML = q.question;

    if (!Answer || Answer.length < 4) {
        console.error("Answer elements not found!");
        return;
    }

    // reset buttons state and styles
    for (let i = 0; i < Answer.length; i++) {
        Answer[i].disabled = false;
        Answer[i].style.backgroundColor = '';
        Answer[i].style.display = '';
    }

    Answer[0].innerHTML = q.Answer1;
    Answer[1].innerHTML = q.Answer2;
    Answer[2].innerHTML = q.Answer3;
    Answer[3].innerHTML = q.Answer4;

}

// Function to check answer
function checkAnswer(selectedIndex) {
    let q = questionbank[currentQuestion];

    // disable all buttons immediately
    for (let i = 0; i < Answer.length; i++) {
        Answer[i].disabled = true;
    }

    // mark selected
    if (selectedIndex === q.correctIndex) {
        Answer[selectedIndex].style.backgroundColor = 'green';
        score++;
    } else {
        Answer[selectedIndex].style.backgroundColor = 'red';
        // highlight correct answer
        const correctIdx = q.correctIndex;
        if (Answer[correctIdx]) {
            Answer[correctIdx].style.backgroundColor = 'green';
        }
    }

    // move to next question after a short delay
    setTimeout(function() {
        currentQuestion++;
        if (currentQuestion >= questionbank.length) {
            showResults();
        } else {
            showQuestion();
        }
    }, 1000);
}

function showResults() {
    questionShow.innerHTML = `Quiz finished! Score: ${score}/${questionbank.length}`;
    for (let i = 0; i < Answer.length; i++) {
        Answer[i].style.display = 'none';
    }
}


