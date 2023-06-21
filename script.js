'use strict';
// Author: Ganesh M N
// Created on 21 June 2023
let highScore = 0;
let score = 20;
document.querySelector('.check').addEventListener('click', () => {
  document.querySelector('.score').textContent = score;
  let randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
  document.querySelector('.number').textContent = randomNumber;
  let inputNum = document.querySelector('.guess').value;

  if (inputNum < randomNumber) {
    document.querySelector('.message').textContent = 'too low..!';
    score = score - 1;
    document.body.style.backgroundColor = '#222';
  } else if (inputNum > randomNumber) {
    document.querySelector('.message').textContent = 'too high..!';
    score = score - 1;
    document.body.style.backgroundColor = '#222';
  } else if (inputNum == randomNumber) {
    document.querySelector('.message').textContent = '😍 Correct Number!';
    document.body.style.backgroundColor = '#60b347';

    if (inputNum > highScore) {
      highScore = inputNum;
      document.querySelector('.highscore').textContent = randomNumber;
    }
  }

  console.log(`score is : ${score}`);
  if (score < 0) {
    document.body.style.backgroundColor = '#FF9EAA';
    score = 20;
    document.querySelector('.message').textContent = 'Game Over..!';
    document.querySelector('.number').textContent = '?';
  }
});

document.querySelector('.again').addEventListener('click', () => {
  highScore = 0;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  console.log('again');
  document.body.style.backgroundColor = '#222';
});
