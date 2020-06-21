let number = +prompt("misol sonini kiriting");
function math() {
    let swich = Math.ceil(Math.random() * 4)
    let num1 = Math.floor(Math.random() * 11)
    let num2 = Math.floor(Math.random() * 11)
    switch (swich) {
        case 1: let question_1 = +prompt(num1 + '+' + num2);
            if (question_1 == num1 + num2) {

                console.log(num1 + num2);
            } else {
                console.log('vi vibrali=' + question_1 + ', pravilniy otvet ' + (num1 + num2));

            }
            break;
        case 2: let question_2 = +prompt(num1 + '-' + num2);
            if (question_2 == num1 - num2) {

                console.log(num1 - num2);
            } else {
                console.log('vi vibrali=' + question_2 + ', pravilniy otvet ' + (num1 - num2));

            }
            break;
        case 3: let question_3 = +prompt(num1 + '*' + num2);
            if (question_3 == num1 * num2) {

                console.log(num1 * num2);
            } else {
                console.log('vi vibrali=' + question_3 + ', pravilniy otvet ' + (num1 * num2));

            }
            break;
        case 4: let question_4 = +prompt(num1 + '/' + num2);
            if (question_4 == num1 / num2) {

                console.log(num1 / num2);
            } else {
                console.log('vi vibrali=' + question_4 + ', pravilniy otvet ' + (num1 / num2));

            }
            break;
    }
    return swich
}
for (let i = 0; i < number; i++) {
    math();
}