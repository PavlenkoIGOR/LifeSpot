var divImg = document.getElementById('divImg');
var pics = document.getElementsByTagName('img');
const nxtbttn = document.getElementById('nextButton');
const prvbttn = document.getElementById('previousButton');
var n = 1;
var p = 1;
var currentIndex = 0;
if (currentIndex == 0) {
    prvbttn.textContent = '';
}

nxtbttn.addEventListener('click', NextSlide);  //слайд вперёд
prvbttn.addEventListener('click', PreviousSlide); //слайд назад

//функция пролистывания назад
function PreviousSlide() {
    nxtbttn.textContent = '>';
    if (p != 1) {
        for (let i = 0; i < pics.length; i++) {
            pics[i].style.translate = `${p}00%`;
        }

        console.log("p!=1");
    }
    if (p == 1) {
        prvbttn.textContent = '';
        // //возврат в конец точку
        // p = (-1) * (pics.length - 1);
        // n = pics.length + 1;
        // for (let i = 0; i < pics.length; i++) {
        // pics[i].style.translate = `-${pics.length - 1}00%`;
        // }
        // console.log("p==1");
        return;
    }
    currentIndex--;
    if (currentIndex == 0) {
        prvbttn.textContent = '';
    }
    p++;
    n--;

    console.log("p: " + p);
    console.log("n: " + n);
}

//функция для показа следующего слайда
function NextSlide() {
    prvbttn.textContent = '<';
    if (currentIndex < pics.length - 1) {
        for (let i = 0; i < pics.length; i++) {
            pics[i].style.translate = `-${n}00%`; //-хе-хе

            // //возврат в исходную точку
            // if (n >= pics.length) {
            // n = 0;
            // p = 2;
            // for (let i = 0; i < pics.length; i++) {
            // pics[i].style.translate = `0%`;
            // }
            // }
        }
    }
    else {
        nxtbttn.textContent = '';
        return;
    }
    currentIndex++;
    if (currentIndex == pics.length - 1) {
        nxtbttn.textContent = '';
    }

    n++;
    p--;
    console.log("p: " + p);
    console.log("n: " + n);
    console.log("Элементов: " + pics.length);
}


//функция для оставления комментариев
function SetComment() {

    let UserData = {};//создается объект для хранения данных пользователя (имя и комментарий) (да, ради прикола)
    UserData.userName = prompt("Введите Ваше имя: ");//запрос имени и запись в объект
    UserData.userComment = prompt("Введите свой комментарий: "); //запрос и запись комментария в объект
    UserData.commentDate = new Date().toLocaleString();

    // Запросим, хочет ли пользователь оставить полноценный отзыв или это будет обычный комментарий
    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')

    if (enableLikes) {

        // Создадим для отзыва новый объект из прототипа - комментария
        let review = Object.create(UserData) //можно и без объекта, но в качестве практики...
        // и добавим ему нужное свойство
        review.rate = 0;

        // Добавляем отзыв с возможностью пользовательских оценок
        CreateRateComment(review);
    }
    else {
        // Добавим простой комментарий без возможности оценки
        CreateRateComment(UserData);
    }
}

//функция для подсчета лайков или дизлайков
function CountLikesOrDislikes(obj, button, counter) {
    button.onclick = () => {
        counter++;
        return obj.textContent = counter;
    }
}


//функция создания комментария с лайками
const CreateRateComment = (review) => {

    let likes = 0;
    let dislikes = 0;

    if ((review.userName != '' || review.userComment != '') & (review.userName != null || review.userComment != null)) { //проверка имени и текста на NULL и пустую строку

        //если с возможностью комментирования, то так:
        if (review.hasOwnProperty('rate')) {
            let div = document.getElementById('mainCommentsField'); //выбор элемента по классу (родительский) - поле на котором все комментарии

            let divCommentDataLikes = document.createElement('div'); //создание дочернего div в котором будут поле с [комментарии, данные] и поле с [кнопки и счетчики]
            divCommentDataLikes.className = 'commentDivCommentDivLikes';
            divCommentDataLikes.id = Math.random() * 10;

            let divUserData = document.createElement("div"); //создание в дочернем div div'а с данными юзверя
            divUserData.className = "divUserData"; //присвоение класса div'у с данными юзверя
            divUserData.textContent = "Пользователь: \n" + review.userName + "\n" + review.commentDate;  //вывод данных пользователя

            let divCommentText = document.createElement("div");//создание в дочернем div div'а с текстом комментария
            divCommentText.className = "divCommentText"; //присвоение класса div'у с текстом комментария
            divCommentText.textContent = review.userComment;



            let divLikesDislikes = document.createElement('div'); //создание в дочернем div div'а с [div с кнопкой Like||div со счетчиком лайков||div с кнопкой Like||div со счетчиком дизлайков]
            divLikesDislikes.className = 'divLikesDislikes';

            let divLikesCount = document.createElement('div'); //создание в дочернем div div'а с счётчиком лайков
            divLikesCount.className = 'divLikesCount';


            let divDislikesCount = document.createElement('div'); //создание в дочернем div div'а с счётчиком дизлайков
            divDislikesCount.className = 'divDislikesCount';


            let divLikesButton = document.createElement('div'); //создание в дочернем div div'а с кнопкой Like

            let divDislikesButton = document.createElement('div'); //создание в дочернем div div'а с кнопкой Dislike


            let likesButton = document.createElement('button'); //создание в div'е [divLikesButton] кнопки Like
            likesButton.textContent = 'Нравится';
            let dislikesButton = document.createElement('button'); //создание в div'е [divDislikesButton] кнопки dislike
            dislikesButton.textContent = 'Не нравится';


            divLikesCount.textContent = likes;
            likes = CountLikesOrDislikes(divLikesCount, likesButton, likes);

            divDislikesCount.textContent = dislikes;
            dislikes = CountLikesOrDislikes(divDislikesCount, dislikesButton, dislikes);

            ////////////////////////////////////////
            //формирование конструкции комментария//
            ////////////////////////////////////////
            divLikesButton.appendChild(likesButton);
            divDislikesButton.appendChild(dislikesButton);

            divLikesDislikes.appendChild(divLikesButton);
            divLikesDislikes.appendChild(divLikesCount);
            divLikesDislikes.appendChild(divDislikesButton);
            divLikesDislikes.appendChild(divDislikesCount);

            divCommentDataLikes.appendChild(divUserData);
            divCommentDataLikes.appendChild(divCommentText);
            divCommentDataLikes.appendChild(divLikesDislikes);

            div.appendChild(divCommentDataLikes);
        }
        else {
            let div = document.getElementById('mainCommentsField'); //выбор элемента по классу (родительский) - поле на котором все комментарии

            let divCommentDataLikes = document.createElement('div'); //создание дочернего div в котором будут поле с [комментарии, данные] и поле с [кнопки и счетчики]
            divCommentDataLikes.className = 'commentDivCommentDivLikes';
            divCommentDataLikes.id = Math.random();

            let divUserData = document.createElement("div"); //создание в дочернем div div'а с данными юзверя
            divUserData.className = "divUserData"; //присвоение класса div'у с данными юзверя
            divUserData.textContent = "Пользователь: \n" + review.userName + "\n" + review.commentDate;  //вывод данных пользователя

            let divCommentText = document.createElement("div");//создание в дочернем div div'а с текстом комментария
            divCommentText.className = "divCommentText"; //присвоение класса div'у с текстом комментария
            divCommentText.textContent = review.userComment;

            divCommentDataLikes.appendChild(divUserData);
            divCommentDataLikes.appendChild(divCommentText);


            div.appendChild(divCommentDataLikes);
        }
    }
    else {
        return;
    }

}



//////////////////////////////////////////////
//в первый раз, объявляется функция, которая добавляет события клика,
//а во второй раз, они уже отрабатывают. нужно функцию вызвать сначала
//1. Объявление функции.
//2. Вызов функции.
//3. Добавление событий к элементам внутри функции.
//4. Клик по кнопке и получение желаемого результата.
////////////////////////////////////////////////

//функция слайдера

//const nxtbttn = document.getElementById('nextButton');
//nxtbttn.addEventListener("click", () => {
//    document.getElementById('k1').style.translate = '90%';
//    });

//const nxtbttn = document.getElementById('nextButton');
//function Slider() {
//    nxtbttn.addEventListener("click", () => {
//        document.getElementById('k1').style.left = '150px';
//    });
//}
//Slider()


//const prvbttn = document.getElementById('previousButton');
//prvbttn.addEventListener('click', () => { document.getElementById('k1').style.translate = '-90%'; })







//перетаскивание мышью
//for (let i = 0; i < pics.length; i++) {
//    pics[i].addEventListener('mousedown', (event) => {
//        event.preventDefault(); //запрет выделения объекта браузером


//        for (let i = 0; i < pics.length; i++) {
//            pics[i].style.translate = `-${n}00%`;
//        }
//        n++;
//        p--;
//    });
//}

/*
//пока не работает
for (let i = 0; i < pics.length; i++) {
    pics[i].addEventListener('mousedown', (event) => {
        event.preventDefault();


        let shiftX = event.clientX;


        moveAt(event.pageX);

        // переносит картинку на координаты (pageX, pageY),
        // дополнительно учитывая изначальный сдвиг относительно указателя мыши
        function moveAt(pageX) {
            for (let i = 0; i < pics.length; i++) {
                pics[i].style.translate = pageX - shiftX + 'px';
            }
        }

        function onMouseMove(event) {
            moveAt(event.pageX);
        }

        // передвигаем слайды при событии mousemove
        document.addEventListener('mousemove', onMouseMove);

        // отпустить слайд, удалить ненужные обработчики
        pics[i].onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            pics[i].onmouseup = null;
        };

    });
}
*/







