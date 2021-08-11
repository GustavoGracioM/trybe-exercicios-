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
  
// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
// Exercicio 1
let daysLi = document.getElementById('days');
for (let key = 0; key < dezDaysList.length; key += 1) {
    let valueLi = document.createElement('li');
    valueLi.className = 'day';
    if (dezDaysList[key] === 24 || dezDaysList[key] === 25 || dezDaysList[key] === 31) {
        valueLi.className += ' holiday';
    } else if (dezDaysList[key] === 4 || dezDaysList[key] === 11 || dezDaysList[key] === 18 || dezDaysList[key] === 25) {
        valueLi.className += ' friday';
    }
    valueLi.innerText = dezDaysList[key];
    daysLi.appendChild(valueLi);
}

// Exercicio 2
let buttonsContainer = document.querySelector('.buttons-container');
function createButton(Feriados) {
    let button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerText = Feriados;
    buttonsContainer.appendChild(button)
}
createButton('Feriados');