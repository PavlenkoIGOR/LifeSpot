function SetComment() {
    let UserData = {};//создается объект для хранения данных пользователя (имя и комментарий)

    UserData.userName = prompt("Введите Ваше имя: ");//запрос имени и запись в объект
    UserData.userComment = prompt("Введите свой комментарий: "); //запрос и запись комментария в объект

    if ((UserData.userName != '' || UserData.userComment != '') & (UserData.userName != null || UserData.userComment != null)) {

        let div = document.getElementById('mainCommentsField'); //выбор элемента по классу (родительский) - поле на котором все комментарии

        let commentDiv = document.createElement('div'); //создание дочернего div в котором будут комментарии

        let commentDivUser = document.createElement("div"); //создание в дочернем div div'а с данными юзверя
        let commentDivText = document.createElement("div");//создание в дочернем div div'а с текстом комментария

        commentDiv.className = "commentDiv";
        commentDivText.className = "commentDivText"; //присвоение класса div'у с текстом комментария
        commentDivUser.className = "commentDivUser"; //присвоение класса div'у с данными юзверя

        commentDivText.textContent = UserData.userComment;
        commentDivUser.textContent = "Пользователь: \n" + UserData.userName + "\n" + new Date().toLocaleString();  //вывод данных пользователя

        commentDiv.appendChild(commentDivUser);
        commentDiv.appendChild(commentDivText);
        div.appendChild(commentDiv);
    }
    else {
        return;
    }
}