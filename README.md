* to play https://nickmartello.github.io/TriviaGame/

# Trivia Game

This project is a timed triva game with a DC Comic theme. You have 10 seconds to answer each question or the intervalTimer will skip to the next question.



```javascript
function questions() {
        questionTimer = 10;

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

 

