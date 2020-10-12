// Главный файл, в котором я буду вызывать необходимые функции и действия игры

// Запускаем функцию при загрузке страницы
function start() {
	// создаём стартовый блок
	creatureStartBlock();
	// создаём блок таймера
	creatureTimerBlock();
	// при клике на кнопку begin запускаем игру
	startBtn.onclick = beginGame;
	
}


// при начале игры выполняем эту функцию
function beginGame() {
	//статус игры
	status = 'begin';
    // удалить стартовый блок
	removeStartBlock();
	// создаём блок очков
	creatureStarsBlock();
	// создаём блок жизней
	creatureLifesBlock();
	// создаём шарик
	creatureBallBlock();
	// функция обратного отсчета`
	timerGame();
 
}

start();


// создаём функцию "конец игры!"
function finish() {
	// статус игры
	status = 'end';
	// удаляем элементы игры: очки
    removeStarsBlock();
    // удаляем элементы игры: жизни
    removeLifesBlock();
    // очистить игровое поле
	clearGameField();
    // создаём блок окончания игры
	creatureGameOverBlock();
	// удаляем данные блока таймера
	removeTimerBlock();
	// создаём блок рестарта игры`
	creatureRestartBtnBlock();
    // при клике на кнопку Restart запускаем функцию restart
    restartBtn.onclick = restart;

	// console.log('Game over!');
	// console.log(score);
}
 

function restart() {
	// удаляем блок окончания игры
	removeGameOverBlock();
	// создаём блок таймера
	creatureTimerBlock();
	// подключаем функцию начала игры
	beginGame();
	// start();
	// удаляем блок рестарта игры`
	removeRestartBtnBlock();
}



// функция для обратного отсчета игры	
function timerGame() {
	// запускаю функцию интервала для выполнения постоянно
	var clock = setInterval(function() {
		// уменьшаем значение таймера на единицу	
		timerBlock.innerText = timerBlock.innerText - 1;
		// numberLifes = numberLifes - 1;
		// если наш таймер == 0 или количество жизней == 0, то мы 
		if (timerBlock.innerText == 0 || numberLifes == 0) {
			// удаляем таймер
			clearInterval(clock);                              	
			// завершаем игру
			finish();
		}
	}, 1000);  //каждую секунду выполнять то что прописано в функции
}

