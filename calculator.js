// Fonction pour additionner deux nombres
function add(number1, number2) {
    return number1 + number2;
}

// Fonction pour soustraire deux nombres
function subtract(number1, number2) {
    return number1 - number2;
}

// Fonction pour multiplier deux nombres
function multiply(number1, number2) {
    return number1 * number2;
}

// Fonction pour diviser deux nombres
function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// Ajouter des écouteurs d'événements pour les boutons
document.getElementById('add').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    document.getElementById('calculation-result').textContent = add(number1, number2);
});

document.getElementById('subtract').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    document.getElementById('calculation-result').textContent = subtract(number1, number2);
});

document.getElementById('multiply').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    document.getElementById('calculation-result').textContent = multiply(number1, number2);
});

document.getElementById('divide').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    document.getElementById('calculation-result').textContent = divide(number1, number2);
});
