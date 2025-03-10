import { fakultet } from './fakultet.js';

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const input = document.querySelector('input[name="tall"]');
    const number = parseInt(input.value);
    const resultElement = document.querySelector('.resultat');

    if (isNaN(number) || number < 0) {
        resultElement.textContent = 'Please enter a non-negative integer.';
        return;
    }

    resultElement.textContent = fakultet(number);
});
