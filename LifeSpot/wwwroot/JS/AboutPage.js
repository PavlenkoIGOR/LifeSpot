function SetComment() {

    let UserData = {};//создается объект для хранения данных пользователя (имя и комментарий) (да, ради прикола)
    UserData.userName = prompt("Введите Ваше имя: ");//запрос имени и запись в объект
    UserData.userComment = prompt("Введите свой комментарий: "); //запрос и запись комментария в объект
    UserData.commentDate = new Date().toLocaleString();

    let likes = 0;
    let dislikes = 0;

    if ((UserData.userName != '' || UserData.userComment != '') & (UserData.userName != null || UserData.userComment != null)) {

        let div = document.getElementById('mainCommentsField'); //выбор элемента по классу (родительский) - поле на котором все комментарии

        let divCommentDataLikes = document.createElement('div'); //создание дочернего div в котором будут поле с [комментарии, данные] и поле с [кнопки и счетчики]
        divCommentDataLikes.className = 'commentDivCommentDivLikes';

        let divUserData = document.createElement("div"); //создание в дочернем div div'а с данными юзверя
        divUserData.className = "divUserData"; //присвоение класса div'у с данными юзверя
        divUserData.textContent = "Пользователь: \n" + UserData.userName + "\n" + UserData.commentDate;  //вывод данных пользователя

        let divCommentText = document.createElement("div");//создание в дочернем div div'а с текстом комментария
        divCommentText.className = "divCommentText"; //присвоение класса div'у с текстом комментария
        divCommentText.textContent = UserData.userComment;


        
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


        divLikesCount.textContent = CountLikesOrDislikes(divLikesCount, likesButton, likes);
        divDislikesCount.textContent = CountLikesOrDislikes(divDislikesCount, dislikesButton, dislikes);


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
        return;
    }
}

//функция для подсчета лайков или дизлайков
function CountLikesOrDislikes(obj, button, counter) {
    button.onclick = () => {
        counter++;
        return obj.textContent = counter;
    }
}