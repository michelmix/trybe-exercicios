function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();



let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function createDaysOfDecember() {
  let getDecemberList = document.querySelector('#days');
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let daysDecember = decemberDaysList[index];
    let eachDay = document.createElement('li');
    eachDay.innerText = daysDecember;
    if (daysDecember === 24 || daysDecember === 31) {
      eachDay.className = 'day holiday';
      getDecemberList.appendChild(eachDay);
    } else if (daysDecember === 4 || daysDecember === 11 || daysDecember === 18) {
      eachDay.className = 'day friday';
      getDecemberList.appendChild(eachDay);
    } else if (daysDecember === 25) {
      eachDay.className = 'day holiday friday';
      getDecemberList.appendChild(eachDay);
    } else {
      eachDay.className = 'day';
      getDecemberList.appendChild(eachDay);
    }
  }
}

createDaysOfDecember();


// Criar botão feriado

function createHolidayButton(buttonName) {
  let getHolidayButton = document.querySelector('.buttons-container'); // onde será criado
  let button = document.createElement('button'); // cria o elemento button e armazena num let
  let newButtonID = 'btn-holiday'; // cria uma variável para a ID pq vai ser diferente de
  button.innerText = buttonName; // chama o innex text do botão e atribui a nome do parâmetro
  button.id = newButtonID; // o ID do botão = ao botão do parâmetro
  getHolidayButton.appendChild(button); // insere no html
}

createHolidayButton('Feriados'); // chama a função

/*
4- Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem 
a classe "holiday"
É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, 
ele retorna à configuração inicial com a cor "rgb(238,238,238)".
*/


function changeHolidaysColor() {
  let getHolidayButton2 = document.getElementById('btn-holiday');
  let getHolidaysWithClassName = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton2.addEventListener('click', function() {
    for (let index = 0; index < getHolidaysWithClassName.length; index += 1) {
      if (getHolidaysWithClassName[index].style.backgroundColor === setNewColor) {
        getHolidaysWithClassName[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidaysWithClassName[index].style.backgroundColor = setNewColor;
      }
    }
  });
}

changeHolidaysColor();