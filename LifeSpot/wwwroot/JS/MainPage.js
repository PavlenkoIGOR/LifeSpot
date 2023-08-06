/*Function Expression - переменной присваивается функция. Функции, объявленные как FE, ведут себя по-разному в зависимости от того, 
какой оператор был использован (var, let, const).*/

/*Функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода, поэтому их можно вызвать до объявления.*/

// создадим структуру данных "объект" (шаблон let o = {};) для хранения сессии вместо let m = new Map();
//Сохранение данных сессии сразу при заходе пользователя на страницу

//применение sessionStorage  - хранит информацию только в рамках одной вкладки при обновлении страницы. При смене вкладки и перезапуске браузера информация будет потеряна.

/* Проверка возраста пользователя */
let checker = function (newVisit) {
    if (window.sessionStorage.getItem('userAge') >= 18) {
        // Добавим проверку на первое посещение, чтобы не показывать приветствие
        // лишний раз
        //document.getElementById('allWindow').style.display = 'none';
        if (newVisit) {
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
            
        }
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}
 
/*Вывод данных сессии в консоль*/
let logger = function () {
    console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate"))
    console.log('Даныне клиента: ' + window.sessionStorage.getItem("userAgent"))
    console.log('Возраст пользователя: ' + window.sessionStorage.getItem("userAge"))
}



/* Сохранение данных сессии сразу при заходе пользователя на страницу*/
function handleSession(logger, checker) {

    // Проверяем дату захода и проставляем, если новый визит
    if (window.sessionStorage.getItem("startDate") == null) {
        window.sessionStorage.setItem("startDate", new Date().toLocaleString())
    }

    // Проверяем userAgent и проставляем, если новый визит
    if (window.sessionStorage.getItem("userAgent") == null) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }

    // Проверяем возраст и проставляем, если новый визит
    if (window.sessionStorage.getItem("userAge") == null) {
        let input = prompt("Пожалуйста, введите ваш возраст?");
        window.sessionStorage.setItem("userAge", input)

        /* Возраст отсутствовал в sessionStorage. Значит, это первый визит пользователя, и
         при прохождении проверки на возраст он увидит приветствие*/
        checker(true)
    } else {

        /* Пользователь заходит не первый раз, приветствие не показываем. */
        checker(false)
    }

    /* Вызываем переданную в качестве колл-бэка функцию логирования.
    передавать в качестве коллбека не обязательно, можно вызвать и напрямую, но мы добавили для повторения.*/
    logger()
}


//функция, которая предлагает юзверям подписаться 
function SubscribeNow() {
    setTimeout(function () { confirm("А ну-ка, подпишись!"); }, 16000);
    console.log("Возраст пользоватля: " + window.sessionStorage.getItem());
}


//функция (или объект в JS) для поиска видео
const SomethingInput = function () {
    return document.getElementsByTagName('input')[0].value.toLowerCase();
}
function SeekAndShow() {
    /*Код ниже отрабатывает каждый раз при вводе символа в input*/

    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');
    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector('.video-title').innerText;
        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(SomethingInput().toLowerCase())) {
            // Описание
            elements[i].style.display = 'none';
        }
        else {
            elements[i].style.display = 'inline-block';
        }
    }
}



