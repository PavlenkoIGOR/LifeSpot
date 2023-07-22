var p = prompt('Введите Ваш возраст: ');
if (p < 18) {
    var r = 18 - p;
    alert('Ваш возраст меньше 18! Встретимся через ' + r + " лет!");
    window.location.href = "http://www.google.com";
    //window.close(); - просто закрыть окно
}
else {
    alert("Добро пожаловать! " + new Date().toLocaleString());
};