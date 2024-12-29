const introText = "HELLO WELCOME,";
let index = 0;
function typeEffect() {
  const introElement = document.getElementById('intro-text');
  if (index < introText.length) {
    introElement.textContent += introText.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
if (document.getElementById('intro-text')) typeEffect();
