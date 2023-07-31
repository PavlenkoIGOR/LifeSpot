function SetComment() {
    let UserData = {};//создается объект для хранения данных пользователя (имя и комментарий)
    UserData.userName = prompt("Введите Ваше имя: ");//запрос имени и запись в объект
    UserData.userComment = prompt("Введите свой комментарий: "); //запрос и запись комментария в объект
    UserData.commentDate = new Date().toLocaleString();

    if ((UserData.userName != '' || UserData.userComment != '') & (UserData.userName != null || UserData.userComment != null)) {

        let div = document.getElementById('mainCommentsField'); //выбор элемента по классу (родительский) - поле на котором все комментарии

        let commentDivCommentDivLikes = document.createElement('div'); //создание дочернего div в котором будут поле с [комментарии, данные] и поле с [кнопки и счетчик]
        commentDivCommentDivLikes.className = 'commentDivCommentDivLikes';

        let commentDivTextAndData = document.createElement('div'); //создание дочернего div в котором будут комментарии и данные
        let commentDivUser = document.createElement("div"); //создание в дочернем div div'а с данными юзверя
        let commentDivText = document.createElement("div");//создание в дочернем div div'а с текстом комментария

        commentDivTextAndData.className = "commentDivTextAndData";
        commentDivText.className = "commentDivText"; //присвоение класса div'у с текстом комментария
        commentDivUser.className = "commentDivUser"; //присвоение класса div'у с данными юзверя

        commentDivText.textContent = UserData.userComment;
        commentDivUser.textContent = "Пользователь: \n" + UserData.userName + "\n" + UserData.commentDate;  //вывод данных пользователя

        //создание div для расположения в нем 4-х полей: поле счётчика лайков||кнопка 'LIKE'||кнопка 'DIASLIKE'||поле счетчика дизлайков
        let divForLikeDislike = document.createElement('div');
        divForLikeDislike.className = 'divForLikeDislike';

        //создание div счетчика лайков
        let likesDiv = document.createElement('div');
        likesDiv.className = 'likesDiv';
        likesDiv.id = 'likesDiv';
        //создание кнопки 'Like'
        let likeButton = document.createElement('button');
        likeButton.className = 'likeButton';
        likeButton.textContent = 'Нравится';
        likeButton.id = 'likeButton';

        //создание кнопки 'DisLike'
        let disLikeButton = document.createElement('button');
        disLikeButton.className = 'disLikeButton';
        disLikeButton.textContent = 'Не нравится';
        //создание div счетчика дизлайков
        let disLikesDiv = document.createElement('div');
        disLikesDiv.className = 'disLikesDiv';

        commentDivTextAndData.appendChild(commentDivUser);
        commentDivTextAndData.appendChild(commentDivText);

        divForLikeDislike.appendChild(likesDiv);
        divForLikeDislike.appendChild(likeButton);
        divForLikeDislike.appendChild(disLikeButton);
        divForLikeDislike.appendChild(disLikesDiv);

        commentDivCommentDivLikes.appendChild(commentDivTextAndData);
        commentDivCommentDivLikes.appendChild(divForLikeDislike);

        div.appendChild(commentDivCommentDivLikes);

        let a = document.getElementById('likeButton');
        a.onclick() = function () {
            document.getElementById('likesDiv').textContent = 'лайк';
        }
    }
    else {
        return;
    }
}
