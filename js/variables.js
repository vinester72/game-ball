
// stars - очки на игровом поле
var stars = null;

// lifes - жизни на игровом поле
var lifes = null;

//количество жизней
var numberLifes = 3;

// кнопка для движения шарика
var restartBtn = null;

// помещаем в переменную блок движения мячика
var restartBlock = document.querySelector('#restart-block') ;

// i - счёт игры
var score = 0;

// сщстояние игрового поля
var status = 'open';

// помещаем в переменную кнопку для старта игры
var startBtn = null;

// помещаем в переменную стартовый блок
var startBlock = null;

// выбираем блок таймера в html
var timerBlock = document.querySelector('#timer');

var time = document.querySelector('#time');

// создаём переменную игрового поля`
var gameField = document.querySelector('#game');

// выбираем информационный блок
var infoBlock = document.querySelector('#info-block');

var gameOver = document.querySelector('#game-over');
