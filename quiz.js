function checkAnswer() {
    // Réponse correcte
    const correctAnswer = "4";

    // Obtenir la réponse sélectionnée
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Élément de feedback
    const feedbackElement = document.getElementById('feedback');

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "orange";
    }
}

// Ajouter un écouteur d'événements au bouton
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
