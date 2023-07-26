function SetComment() {

    let userData = prompt("Введите Ваше имя: ");//запрос имени

    let div = document.getElementById('mainCommentsField'); //выбор элекмента по классу (ролительский)

    let commentDiv = document.createElement('div'); //создание дочернего div в котором будут комментарии
    
    let commentDivUser = document.createElement("div"); //создание в дочернем div div'а с данными юзверя
    let commentDivText = document.createElement("div");//создание в дочернем div div'а с текстом комментария
    //let hrDiv = document.createElement('hr');

    commentDiv.className = "commentDiv";
    commentDivText.className = "commentDivText"; //присвоение класса div'у с текстом комментария
    commentDivUser.className = "commentDivUser"; //присвоение класса div'у с данными юзверя

    commentDivText.textContent = prompt("Введите свой комментарий: "); //запрос и запись комментария
    commentDivUser.textContent = "Пользователь: \n" + userData;  //запись данных пользователя

    
    //commentDiv.appendChild(hrDiv);
    commentDiv.appendChild(commentDivUser);
    commentDiv.appendChild(commentDivText);
    div.appendChild(commentDiv);
    
}