const messagePara = document.getElementById('message');
const changeBtn = document.getElementById('changeBtn');

function changeMessage() {
  messagePara.textContent = "Hello there!";
}

changeBtn.addEventListener('click', changeMessage);
