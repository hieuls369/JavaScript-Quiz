//All Questtion data
var questions = [
    {
        id: 1,
        question: "Which word or phrase most accurately sums up the main benefit of IoT technology?",
        answerA: "Economies",
        answerB: "Enhanced safety",
        answerC: "Accuracy",
        answerD: "Efficiencies",
        realAnswer: "D",
        selectedAnswer: ""
    },

    {
        id: 2,
        question: "How can IoT help combat climate change?",
        answerA: "Smart devices working to reduce energy use.",
        answerB: "Prevention of methane release from cows.",
        answerC: "Free internet in cities to help people operate in the city more easily.",
        answerD: "Predictive maintenance of wind turbines, preventing burn out.",
        realAnswer: "A",
        selectedAnswer: ""
    },
    {
        id: 3,
        question: "In an industrial fan maintenance system, what ph detect, measure and transmit data on?",
        answerA: "Vibration",
        answerB: "Blade speed",
        answerC: "Power",
        answerD: "Wind direction",
        realAnswer: "A",
        selectedAnswer: ""
    },
    {
        id: 4,
        question: "What protocol is good for communication of IoT devices with restricted power and low data rates over a range of a few kilometres ?",
        answerA: "Bluetooth",
        answerB: "Zigbee",
        answerC: "LoRaWAN",
        answerD: "4G",
        realAnswer: "C",
        selectedAnswer: ""
    },
    {
        id: 4,
        question: "Which of these media is currently NOT used in communicating data?",
        answerA: "Wireless / electromagnetic waves",
        answerB: "Hydrogen cables / electron ionisation",
        answerC: "Fibre optics / pulses of ligh",
        answerD: "Copper cables / electrical signals",
        realAnswer: "B",
        selectedAnswer: ""
    }
];


var id = 0;
var point = 0;
var answers = document.querySelectorAll('#answer');

//Show index of the current question below the question table.
document.getElementById("to").innerHTML = questions.length + "";
document.getElementById("from").innerHTML = id + 1 + "" ;

//Show the current content question and answers.
var question = (num) => {
    document.getElementById("id-question").innerHTML = questions[num].id;
    document.getElementById("question").innerHTML = questions[num].question;
    document.getElementById("A").innerHTML = questions[num].answerA;
    document.getElementById("B").innerHTML = questions[num].answerB;
    document.getElementById("C").innerHTML = questions[num].answerC;
    document.getElementById("D").innerHTML = questions[num].answerD;
}
question(id);

//Display the Previous, Next and Submit button.
var buttonCheck = (id) =>{
    if(id == 0){
        document.getElementById("pre").style.display = "none";
    }else{
        document.getElementById("pre").style.display = "inline";
    }
    if(id == questions.length - 1){
        document.getElementById("next").innerHTML = "Submit";
    }else{
        document.getElementById("next").innerHTML = "Next Question";
    }
}
buttonCheck(id);

//Store the checked answer in the property selectedAnswer of question object.
var checkAnswer = (id) => {
    for(let i = 0; i < answers.length; i++){
        if(answers[i].checked){
            questions[id].selectedAnswer = answers[i].value;
        }
    }
}

//Display again the answer has been selected.
var resetAnswer = (id) => {
    if(questions[id].selectedAnswer == ""){
        answers.forEach(check => check.checked = false);
    }else{
        answers.forEach(check => {
            if(check.value == questions[id].selectedAnswer){
                check.checked = true;
            }
        })
    }
}
//Get point for each correct answer.
var getPoint = () => {
    questions.forEach(questionCheck => {
        if(questionCheck.realAnswer == questionCheck.selectedAnswer){
            point++;
        }
        questionCheck.selectedAnswer = "";
    });
}
//Move between question and check validation.
var nextPreQuestion = (button) => {
    checkAnswer(id);
    if (button == 1) {
        id--;
    } else {
        id++;
    }
    if (id > questions.length - 1 || id < 0) {
        id = 0;
    }
    question(id);
    if(document.getElementById("next").innerHTML == "Submit" && button != 1){
        getPoint();
        alert("You earn: "+ point +" point");
        point = 0;
    }
    buttonCheck(id);
    document.getElementById("from").innerHTML = id + 1 + "" ;
    resetAnswer(id);
}

//Move to the next question.
document.getElementById("next").addEventListener("click", () => { 
    nextPreQuestion(2);
});

//Move to the previous question.
document.getElementById("pre").addEventListener("click", () => {
    nextPreQuestion(1);
});


