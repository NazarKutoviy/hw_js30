// let count = 0;
// const intervalId = setInterval(() => {
//   count++;
//   console.log(`Повідомлення №${count}`);
//   if (count >= 5) {
//     clearInterval(intervalId);
//     console.log("Інтервал зупинено");
//   }
// }, 1000);


// let position = 0;
// const box = document.getElementById("box1");
// const interval = setInterval(() => {
//   position += 10;
//   box.style.left = position + "px";

//   if (position >= 300) {
//     clearInterval(interval);
//   }
// }, 100);

// const target = document.getElementById("target");
// const scoreDisplay = document.getElementById("score");
// let score = 0;
// let gameTime = 10; 


// const moveTarget = () => {
//   const x = Math.random() * (window.innerWidth - 50);
//   const y = Math.random() * (window.innerHeight - 50);
//   target.style.left = `${x}px`;
//   target.style.top = `${y}px`;
// };

// target.addEventListener("click", () => {
//   score++;
//   scoreDisplay.textContent = score;
// });

// const intervalIdSecond = setInterval(() => {
//   moveTarget();
// }, 500);

// setTimeout(() => {
//   clearInterval(intervalIdSecond);
//   alert(`Гра завершена! Ваш рахунок: ${score}`);
// }, gameTime * 1000);


function startTimer() {
  const seconds = parseInt(document.getElementById("timeInput").value, 10);
  const output = document.getElementById("output");
  output.textContent = `Таймер запущено на ${seconds} секунд...`;

  setTimeout(() => {
    output.textContent = `Час вийшов!`;
  }, seconds * 1000);
}
