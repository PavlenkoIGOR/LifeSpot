/*Function Expression - переменной присваивается функция. Функции, объявленные как FE, ведут себя по-разному в зависимости от того, 
какой оператор был использован (var, let, const).*/

/*Функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода, поэтому их можно вызвать до объявления.*/




// создадим объект для хранения сессии вместо new Map()
//Сохранение данных сессии сразу при заходе пользователя на страницу
let session = {
    "userAge": prompt("Укажите свой возраст: "),
    "userSet": window.navigator.userAgent,
    "startDate": new Date().toLocaleString() 
}

//функция, которая предлагает юзверям подписаться 
function SubscribeNow() {
    setTimeout(function () { confirm("А ну-ка, подпишись!"); }, 16000);
}

//проверка возраста
const DeclarationCheckAge = (subscribe) => {
    // Запрос возраса пользователя и тоже сохраним

    // Проверка на возраст и сохранение сессии
    if (session.userAge >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + `${new Date().toLocaleString()}`);
        document.getElementById('allWindow').style.display = 'none';

        window.onload = () => subscribe(SubscribeNow());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }
    
}

//вывод сессии в консоль
let sessionLog = function() {
    console.log(session.userAge);
    console.log(session.startDate);
    console.log(session.userSet);
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

