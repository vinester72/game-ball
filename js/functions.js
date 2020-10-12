
//получить случайное число
function random(max) {
	// случайное число от 0 до max
	var randomNumber = 1 + Math.random() * (max + 1);
	// округляем случайное число
	randomNumber = Math.floor(randomNumber);
	// возвращаем результат
	return randomNumber;
}			


/*===================================
Функции для создания элементов игры
====================================*/

/*
<div id="start-block">
	<button id="start-btn">
		Start
	</button>
</div>
*/
//создание блока старта
function creatureStartBlock() {
	// создаём блок див <div id="start-block">
	startBlock = document.createElement('div');
	//прописываем тегу div => id='start-block' 
	startBlock.id = 'start-block';
	// создаём кнопку <button id="start-btn">Start</button>   
    startBtn = document.createElement('button');
    //прописываем тегу button => id='start-btn' кнопке
    startBtn.id = 'start-btn';
    // добавляем текст
    startBtn.innerText = 'Start';
    // добавляем кнопку в стартовый блок    
    startBlock.appendChild(startBtn);
    // добавляем игровой блок в игровое поле
    gameField.appendChild(startBlock);
}


/*
<button id="restart-btn">
	Restart
</button>
*/
//создание кнопки-блока перезапуска старта игры
function creatureRestartBtnBlock() {
	// создаём кнопку <button id="restart-btn">Restart</button>
	restartBtn = document.createElement('button');
	//прописываем тегу button => id='restart-btn' кнопке
	restartBtn.id = 'restart-btn';
	// добавляем текст
	restartBtn.innerText = 'Continue';
	// добавляем кнопку в блок движения шариком restartBlock
	restartBlock.appendChild(restartBtn);
	if (numberLifes == 0) {
		restartBtn.style.display = "none";
	}  		
}



/*
<div id="stars">0</div>
*/
// создание блока очков
function creatureStarsBlock() {
	// создаём блок очков <div id="stars">0</div>
	stars = document.createElement('div');
	//прописываем тегу div => id='stars' шарику
	stars.id = 'stars';
	// score = 0;
	stars.innerText = 0;
	// добавляем в игровое поле блок очков <div id="game"><div>
	gameField.appendChild(stars);

}			


/*
<div id="lifes">
	<span></span>
	<span></span>
	<span></span>
</div>	
*/
// создание блока жизней
function creatureLifesBlock() {
	//создаём блок <div id="lifes">
	lifes = document.createElement('div');
	//прописываем тегу div => id='lifes' 
	lifes.id = 'lifes';
	// создаём переменную текущего количества жизней
	var numberLifesNow = 0;
	// пока текущее количество жизней меньше чем мы хотим видеть
	while(numberLifesNow < numberLifes) {
		// создаём тег span
		var life = document.createElement('span');
		// добавляем в <div id="lifes"> тег <span>
		lifes.appendChild(life);
		// увеличиваем  текущее количество жизней на единицу
		numberLifesNow++;
	}
	// добавляем в игровое поле блок жизни <div id="lifes"><div>
	gameField.appendChild(lifes); 
}


// <h2> Time: <span id="timer">10</span></h2>
// функция для создания блока таймера
function creatureTimerBlock() {
	// создаём заголовок h2 с текстом Время:
	time = document.createElement('h2');
	time.innerText = ' Time:';
	// в коробочку 	timerBlock добавляем тег span
	timerBlock = document.createElement('span');
	// прописываем span id = 'timer' и текст '10'
	timerBlock.id = 'timer';
	// добавляем текст
	timerBlock.innerText = '10';
	// добавляем в заголовок h2 тег span 
	time.appendChild(timerBlock);
	// добавляем в инфоблок заголовок h2
	infoBlock.appendChild(time);	
}


//<div id="ball"></div>
// Создаём шарик и добавляем его на игровое поле
function creatureBallBlock() {
	// создаём блок div
	var ball = document.createElement('div');
		//прописываем тегу div => className='ball' шарику
		ball.className = 'ball';

	// создаём переменную "направление" со случайным числом от 1 до 2
	var direction = random(2); // 1 - left, 2 - right
		// если направление равно 1, то добавляем ball свойства left
		if(direction == 1) {
			ball.className = 'ball left';
		} else { // иначе добавляем ball свойства right
			ball.className = 'ball right';
		}

	//при наведении мыши на шарик выполняем функцию 
	ball.onmousemove = function() {
		// если шарик не ожидает удаления, то выполняются следующие условия
		if(ball.className != 'ball expects-to-remuve') {
			// увеличиваем счёт игры
			score = score + 1;
			// меняем текст счёта, текст будет из переменной i
			stars.innerText = score;
			// при клике на шарик меняем цвет шарика на жёлтыйи и синий
			ball.style.background = (ball.style.background =='yellow') ? 'blue' : 'yellow';
			// делаем шарик постепенно прозрачным
			ball.style.opacity = '0';
			// постепенно удаляем и создаём шарик
			setTimeout(function() {
				// удаляем шарик
				ball.remove();
				// если мы элемент выбрали, то будет хранится element | null
				var beBall = document.querySelector('.ball');
				// если существующих шариков null, то выполняются следующие условия
				if(beBall == null) {
					// сколько я хочу сделать шариков
					var numberBall = random(5);
					// текущее количество шариков
					var numberBallNow = 0;
					// пока текущее количество шариков меньше чем мы хотим видеть
					while(numberBallNow < numberBall) {
						// создаём шарик
						creatureBallBlock();
						// текущее количество увеличиваем на единицу
						numberBallNow++;
					}
				}		
			}, 100); // конец таймера
		}
		// иначе шарик ожидает удаления
		ball.className = 'ball expects-to-remuve';
	} // конец события onmousemove

	// через 100 милисекунд после создания шарика перемещаем его в случайное место
	setTimeout(function() {
		ball.style.top = random(300) + 'px';
		ball.style.left = random(500) + 'px';
	}, 100);

    // запустить передвижение шарика вниз и удалять его если вышел за границу + отнимать жизни
	setTimeout(function() {
		// убираем свойство с задержкой изменения стилей
		ball.style.transition = 'all 0s';
		// создаём таймер, который каждые 10 милисекунд опускает шарик ниже
		var timerBall = setInterval(function() {
			// меняем позицию шарика, опуская его на 1 пиксель вниз
			ball.style.top = ball.offsetTop + 1 +'px';
			// если шарик вышел за пределы поля
			if (ball.offsetTop > 400) {
				// удаляем шарик
				ball.remove();
				//создаём новый шарик
				creatureBallBlock();
				// уменьшаем количество жизней
				numberLifes = numberLifes - 1;
				// если жизней не осталось
				if(numberLifes == 0) {
					// создаю блок окончания игры
					creatureGameOverBlock();
				}
				// удаляем блок жизней
				removeLifesBlock();
				// создаём новый блок жизней
				creatureLifesBlock();
				// удаляем таймер
				clearInterval(timerBall);
			}
		}, 10);
	}, 1000);

	// если статус не равен концу игры, шарик помещаем в игровое поле
	if(status != 'end') {
		// добавляем в игровое поле шарик <div id="game"><div>
		gameField.appendChild(ball);
	}	
}


/*	     
<div id="game-over">
	<h2>Game over!</h2>
	<h3>You scored: 100 points</h3>
</div>
*/
// Создание блока окончания игры
function creatureGameOverBlock() {
	// Cоздаём блок <div id="game-over">
    gameOver = document.createElement('div');
		//прописываем тегу div => id='game-over' 
    gameOver.id = 'game-over';
	// создаём блок <h2>Game over!</h2>	
	var h2 = document.createElement('h2');
		// добавляем тескт h2
	    h2.innerText = 'Game over!';
	// создаём блок <h3>You scored: 100 points</h3>     
	var h3 = document.createElement('h3');
		// добавляем тескт h3
	    h3.innerText = 'You scored: ' + score + ' points';
	
	var h4 = document.createElement('h4');
		h4.innerText = 'Lives left:  ' + numberLifes;     
	// добавляем заголовок h2    
	gameOver.appendChild(h2);
	// добавляем заголовок h3 
	gameOver.appendChild(h3);

	gameOver.appendChild(h4);
	// добавляем в игровое поле блок завершения игры
	gameField.appendChild(gameOver); 

	if (numberLifes == 0) {
		h4.style.color = 'red';
		h4.innerText = 'Lives left:  ' + numberLifes + 
		              ', you cannot continue playing!';
	}

}



/*=================
Удаление элементов
===================*/

// Удалить стартовый блок
function removeStartBlock() {
	// удалить, выбранный блок
    startBlock.remove();
}

// Удаляем блок жизней
function removeLifesBlock() {
	lifes.remove();
}

// Удаляем блок очков
function removeStarsBlock() {
	stars.remove();
}

// Удаляем блок таймера
function removeTimerBlock() {
	time.remove();
}

// очисчаем игровое поле в конце игры
function clearGameField() {
	gameField.innerText = '';
}

// удаляем блок окончания игры
function removeGameOverBlock() {
	gameOver.remove();
}

function removeRestartBtnBlock() {
	restartBtn.remove();
}

