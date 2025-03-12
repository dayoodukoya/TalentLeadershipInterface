function calculateScore() {
    let score = 0;
    let questions = document.querySelectorAll('input[type="radio"]:checked');
    questions.forEach(function (question) {
        score += parseInt(question.value);
    });
    document.getElementById('totalScore').textContent = 'Total Score: ' + score;
}
