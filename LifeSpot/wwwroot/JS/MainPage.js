


function SeekAndShow() {
    // Получим все контейнеры с видео
    let elements = document.getElementsByClassName("video-container");

    // Пробежимся в цикле по контейнерам
    for (let i = 0; i <= elements.length; i++) {

        // Получим всё что внутри контейнера
        let childElements = elements[i];
        // Получим элемент, содержащий описание видео
        // Он у нас единственный с тегом h3, снова воспользуемся поиском по тегу,
        let videoDescription = childElements.getElementsByTagName('h3')[0];
        // Выведем его текст на консоль
        console.log(videoDescription.innerText); 
    }
};

