$(document).ready(function () {
    $("#remaining-time").hide();

    let questionTimer = 10;
    let current = 0;
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    let userAnswer;
    let intervalTimer;
    let button;
    let optionsArr;
    let correctAnswer;

    let questionArray = [{
        question: "What is Superman's real name?",
        options: ["Peter Parker", "Kal-el", "Clark Kent", "Bruce Wayne"],
        answer: 1
    }, {
        question: "Which Robin did The Joker kill?",
        options: ["Jason Todd", "Dick Grayson", "Tim Drake", "Alred Pennyworth"],
        answer: 0
    }, {
        question: "Who is the Oracle in the DC Universe?",
        options: ["Jimmy Olsen", "The Riddler", "Lois Lane", "Barbara Gordon"],
        answer: 3
    }, {
        question: "What is the name of the original Flash?",
        options: ["Barry Allen", "Jay Garrick", "Wally West", "Bart Allen"],
        answer: 1
    }, {
        question: "Which of these people was a Green Lantern?",
        options: ["Harvery Dent", "Wally West", "John Stewart", "Scott Storch"],
        answer: 2
    }, {
        question: "Harley Quinn is devoted to which villain?",
        options: ["Two Face", "The Joker", "The Riddler", "Mr Freeze"],
        answer: 1
    }, {
        question: "Which villain killed Superman?",
        options: ["The Joker", "Darkseid", "Thanos", "Doomsday"],
        answer: 3
    }, {
        question: "Who killed Bruce Wayan's parents?",
        options: ["Ben Affleck", "Steve Buschemi", "Joe Macy", "Joe Chill"],
        answer: 3
    }, {
        question: "Where is Superman's original home?",
        options: ["Gotham", "Krypton", "Metropolis", "Galactus"],
        answer: 1
    }, {
        question: "What is Wonder Woman's whip called?",
        options: ["Lasso Of Truth", "Wonder Whip", "Golden Lariat", "Dave"],
        answer: 0
    }];

    $("#start").click(function () {
        $(this).hide();
        $('#result').hide();
        $("#instructions").hide();
        $("#remaining-time").show();
        questions();
    });
    function questions() {

        intervalTimer = setInterval(timer, 1000);

        $("#questions").html(questionArray[current].question);
        optionsArr = questionArray[current].options;

        for (let i = 0; i < optionsArr.length; i++) {
            button = $("<button>");
            button.text(optionsArr[i]);
            button.attr("data-id", i);
            button.addClass("answer-buttons");
            $("#buttons-div").append(button);
        };
        $(".answer-buttons").on("click", function () {

            userAnswer = $(this).data("id");
            correctAnswer = questionArray[current].answer;

            if (userAnswer === correctAnswer) {

                correctAnswerResponse();
            }
            else {

                wrongAnswerResponse();
            }

        });
        $("#Unanswered").html("Unanswered: " + unanswered);
        $("#Correct").html("Correct: " + correct);
        $("#Incorrect").html("Incorrect: " + incorrect);
        console.log(unanswered);
    };
    function timer() {
        questionTimer--;
        $("#timer").html(questionTimer + " seconds");
        if (questionTimer <= 0) {
            unanswered++;
            nextQuestion();
        };
    };
    function correctAnswerResponse() {
        correct++;
        nextQuestion();
    };
    function wrongAnswerResponse() {
        incorrect++;
        nextQuestion();
    };
    function nextQuestion() {
        current++;
        clearTimeout(intervalTimer);

        if (current > 9) {
            return end();
        };
        questionTimer = 10;
        $("#buttons-div").empty();
        questions();
    };
    function end() {
        restartButton = $("<button>");
        $("#buttons-div").append(restartButton);
        restartButton.text("Try again?");
        $(".answer-buttons").hide();
        $("#remaining-time").hide();


        $("#questions").hide();
        restartButton.on("click", function () {
            $(this).hide();
            $('#results').show();
            $("#remaining-time").show();
            current = 0;
            unanswered = 0;
            correct = 0;
            incorrect = 0;
            questions();
        });
    };
});







