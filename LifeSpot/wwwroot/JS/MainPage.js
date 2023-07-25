/*Function Expression - переменной присваивается функция. Функции, объявленные как FE, ведут себя по-разному в зависимости от того, 
какой оператор был использован (var, let, const).*/

/*Функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода, поэтому их можно вызвать до объявления.*/




// создадим объект Map для хранения сессии
let session = new Map();

//Сохранение данных сессии сразу при заходе пользователя на страницу
function HandleSession() {
    // Сохраним время начала сессии
    session.set("startDate", new Date().toLocaleString());
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent);
}

//проверка возраста
function DeclarationCheckAge() {
    // Запрос возраса пользователя и тоже сохраним
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"));
    
    // Проверка на возраст и сохранение сессии
    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();

        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
        document.getElementById('allWindow').style.display = 'none';
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }
    
}


//вывод сессии в консоль
let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result);
    }
}






//функция, которая предлагает юзверям подписаться 
function SubscribeNow()
{
    setTimeout(function () { confirm("А ну-ка, подпишись!"); }, 10000 );
}


//функция (или объект в JS) для поиска видео
const SomethingInput = function () {
    return document.getElementsByTagName('input')[0].value.toLowerCase();
};
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
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
};

