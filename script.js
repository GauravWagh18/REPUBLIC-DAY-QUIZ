// script.js
const quizData = [
    {
        question: "Who is known as the 'Father of the Nation?",
        options: ["Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru", "Sardar Patel"],
        correctAnswer: "Mahatma Gandhi"
    },
    {
        question: "Which freedom fighter is also known as 'Netaji'?",
        options: ["Bhagat Singh", "Subhas Chandra Bose", "Lala Lajpat Rai", "Rani Lakshmi Bai"],
        correctAnswer: "Subhas Chandra Bose"
    },
    {
        question: "Who played a key role in the integration of princely states into India after independence?",
        options: ["B.R. Ambedkar", "Sardar Patel", "Jawaharlal Nehru", "Maulana Abul Kalam Azad"],
        correctAnswer: "Sardar Patel"
    },
    {
        question: "Who takes the salute at the grand parade on Republic Day in New Delhi?",
        options: [ "President","Prime Minister","Governor"," Defence Minister"],
        correctAnswer: "President"
    },
    {
        question: "Who is popularly known as 'Father of Indian Constitution'?",
        options: [ "Jawaharlal Nehru","B.R. Ambedkar","Mahatma Gandhi","Rajendra Prasad"],
        correctAnswer: "B.R. Ambedkar"
    },
    {
        question: "When did India adopt its Constitution?",
        options: [ "26 November 1949","26 January 1950","26 November 1950","26 January 1951"],
        correctAnswer: "26 January 1950"
    },
    {
        question: "The Republic Day parade starts from ?",
        options: [ "Red Fort","India Gate","Rashtrapati Bhavan","Vijay Chowk"],
        correctAnswer: "Rashtrapati Bhavan"
    },
    {
        question: "Who was the first Chief Guest at the Republic Day Parade in 1950?",
        options: [ "Jawaharlal Nehru","Sukarno-IDN","Queen Elizabeth II","Mahatma Gandhi"],
        correctAnswer: "Sukarno-IDN"
    },
    {
        question: "What is the traditional venue for the Republic Day Parade?",
        options: [ "India Gate","Red Fort","Kartavyapath","President's House"],
        correctAnswer: "Kartavyapath"
    },
    {
        question: "What is the theme of the 2024 Republic Day Parade?",
        options: [ "India - Mother of Democracy and Viksit Bharat","Women Empowerment","Atmanirbhar Bharat (Self-reliant India)","Technology and Innovation"],
        correctAnswer: "India - Mother of Democracy and Viksit Bharat"
    },
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;
let quizCompleted = false;

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const republicDayMessageContainer = document.getElementById('republic-day-message-container');
    const nextButton = document.getElementById('next-btn');

    if (!quizCompleted) {
        // Show quiz container
        quizContainer.style.display = 'block';
        republicDayMessageContainer.style.display = 'none';

        const questionContainer = document.getElementById('question-container');
        const optionsContainer = document.getElementById('options-container');
        const resultContainer = document.getElementById('result');
        const scoreContainer = document.getElementById('score');

        questionContainer.textContent = quizData[currentQuestion].question;
        optionsContainer.innerHTML = "";

        for (let i = 0; i < quizData[currentQuestion].options.length; i++) {
            const option = document.createElement('div');
            option.textContent = quizData[currentQuestion].options[i];
            option.className = 'option';
            option.onclick = function () {
                checkAnswer(this.textContent);
            };
            optionsContainer.appendChild(option);
        }

        resultContainer.textContent = "";
        scoreContainer.textContent = `Score: ${score}`;
        nextButton.disabled = true; // Disable next button until an option is selected
        nextButton.textContent = (currentQuestion === quizData.length - 1) ? 'Finish' : 'Next Question';
    } else {
        // Show Republic Day message container directly
        quizContainer.style.display = 'none';
        republicDayMessageContainer.style.display = 'block';
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    const resultContainer = document.getElementById('result');
    const nextButton = document.getElementById('next-btn');

    if (selectedOption === correctAnswer) {
        resultContainer.textContent = "Correct! Well done!";
        score++;
    } else {
        resultContainer.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
    }

    const scoreContainer = document.getElementById('score');
    scoreContainer.textContent = `Score: ${score}`;
    nextButton.disabled = false; // Enable next button after an option is selected
}

function nextQuestion() {
    const nextButton = document.getElementById('next-btn');

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
        nextButton.disabled = true; // Disable next button for the next question
    } else {
        quizCompleted = true;
        loadQuestion();
    }
}

// Initial load
loadQuestion();