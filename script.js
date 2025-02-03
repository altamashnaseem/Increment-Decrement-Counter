const countValue = document.querySelector('#counting');
const textElement = document.querySelector('.text');

function increment() {
  // Get the value from UI
  let value = parseInt(countValue.innerText);
  
  // Update value
  value = value + 1;
  
  // Animate the count
  animateCount(value, 'increment');
  
  // Animate the text
  animateText();
}

function decrement() {
  // Get value from UI
  let value = parseInt(countValue.innerText);
  
  // Update value
  value = value - 1;
  
  // Animate the count
  animateCount(value, 'decrement');
  
  // Animate the text
  animateText();
}

function animateCount(value, direction) {
  // Set the value on UI with animation
  countValue.style.opacity = 0;
  countValue.style.transform = 'scale(0.5)';
  setTimeout(() => {
    countValue.innerText = value;
    countValue.style.opacity = 1;
    countValue.style.transform = 'scale(1)';
    
    // Change color based on count value
    if (value > 0) {
      countValue.style.color = 'green';
    } else if (value < 0) {
      countValue.style.color = 'red';
    } else {
      countValue.style.color = '#344151'; // Default color
    }
  }, 200);
}

function animateText() {
  // Animate the text
  textElement.style.transform = 'scale(1.2)';
  textElement.style.color = '#0398d4';
  textElement.style.textShadow = '0px 0px 5px rgb(191, 53, 222)';
  
  setTimeout(() => {
    textElement.style.transform = 'scale(1)';
    textElement.style.color = '';
    textElement.style.textShadow = '';
  }, 500);
}