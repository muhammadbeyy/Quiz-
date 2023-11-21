//Small Quiz app

const questionContainer = document.getElementById('question-container')
const nextButton = document.getElementById('next-button')

const questions = [
    {
        question : 'What is the sum of 2 + 2?',
        answer: '4'
    },
    {
        question : 'What is the capital of France?',
        answer: 'Paris'
    } ,
    {
        question : 'What is the capital of Nigeria?',
        answer: 'Abuja'
    }
       
]

let currentQuestionIndex = 0

function showQuestion () {
    const question = questions[currentQuestionIndex]
    questionContainer.innerHTML = `<p>${question.question}</p> <input id='answer-input' type='text'><button onclick='checkAnswer()'>Check</buton>`

}

function checkAnswer() {
    const userInput = document.getElementById('answer-input').value
    if (userInput === questions[currentQuestionIndex].answer) {
        alert('correct')
        nextQuestion()
    } else {
        alert ('WRONG ANSWER ! TRY AGAIN')
    }
    }

function nextQuestion() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        alert('Congratulations, quiz completed')
     currentQuestionIndex= 0
      showQuestion()
    }
}

//initially show the first question
showQuestion() 
