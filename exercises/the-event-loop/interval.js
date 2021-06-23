let currentCount = 3;
function countdown(number) {
  if (number === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
    return;
  }
  console.log(number);
  currentCount -= 1;
}
const intervalID = setInterval(() => { countdown(currentCount); }, 1000);
