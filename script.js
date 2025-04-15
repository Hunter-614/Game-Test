// Simple menu button interaction
const buttons = document.querySelectorAll('.menu-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('selected'));
    button.classList.add('selected');
  });
});
