/*
var userName = prompt('Ваше имя?');
alert('Значит, Вы - ' + userName + " и длина имени " + userName.length + ' символов.');
function outputData()
{
    alert(document.getElementById('inputBordered').value);
}
*/

//функция (или объект в JS) для поиска видео
const SomethingInput = function () {
    let currentInput = document.getElementsByTagName('input')[0].value.toLowerCase();

    // Покажем окно с прошлым и новым значением
    alert('Последний ввод: ' + this.lastInput /* равноценно window.lastInput, так как мы работаем в контексте браузера */
        + '\n' + 'Текущий ввод: ' + currentInput);

    // Сохраним новое значение в контекст
    this.lastInput = currentInput;
}

