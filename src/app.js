import caesar13 from "./modules/caesar";

const inputMessage = document.querySelector('.input');
const outputMessage = document.querySelector('.output');

inputMessage.addEventListener('input', showMessage);

function showMessage(e) {
  if (e.target.value === '') {
    outputMessage.textContent = '';
    return 0;
  }
  const encodedMessage = caesar13(e.target.value);
  outputMessage.textContent = encodedMessage;
}