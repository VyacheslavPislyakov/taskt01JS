function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function counter() {
    return function () {
        return attempts--
    }
}

try {
    var min = prompt("Введите начальный диапазон", "");
    var max = prompt("Введите конечный диапазон", "");
    if ((false === !!min) || (false === !!max)){
        throw new SyntaxError("Пустое значение границы. Вы лентяй, я за Вас придумаю сам")
    }
} catch (e) {
    // console.log(e.message);
    // console.log(e.name);
    var maxx = 100;
    alert(e.message)
    min = 1;
    max = Math.floor(Math.random() * (maxx - min) + min);
    console.log(min + " " + max);
} finally {
    var currentNumb = getRandomInt(min, max);
    var attempts = 3;

    console.log("Задуманное число - " + currentNumb);
    alert("Угадайте число от " + min + " до " + max);
    while(attempts > 0){
        console.log("Попытки - " + attempts);
        var numb = prompt("У Вас осталось - " + attempts + " попыток. Введите число");
        if (parseInt(numb) == currentNumb){
            alert("Урааа, Вы выйграли!");
            break;
        } else if (attempts > 1){
            if (parseInt(numb) > currentNumb ) {
                alert("Это не верное число, попробуйте меньше число")
            } else {
                alert("Это не верное число, попробуйте больше число")
            }
        } else {
            alert("Вы проиграли. У Вас больше нет попыток. Это было число - " + currentNumb);
        }
        counter()();
    }
}
