//1
let b1 = document.querySelector('.b1');

b1.onclick = () => {
    let t1 = prompt('Введите число:', 10);
    if (t1 > 0) {
        alert('Число положительное');
    }
    else if (t1 < 0) {
        alert('Число отрицательное');
    }
    else {
        alert('Это ноль');
    }
} 

//2
let b2 = document.querySelector('.b2');

b2.onclick = () => {
    let t2 = prompt('Введите возраст:', 10);
    if (t2 >= 0 && t2 <= 120) {
        alert('Все верно');
    }
    else {
        alert('Введите еще раз');
    }
} 

//3
let b3 = document.querySelector('.b3');

b3.onclick = () => {
    let t3 = prompt('Введите число:', -10);
    if (t3 >= 0) {
        alert(t3);
    }
    else {
        let t = Math.abs(t3);
        alert(t);
    }
} 

//4
let b4 = document.querySelector('.b4');

b4.onclick = () => {
    let t4_1 = prompt('Введите час:', 12);
    let t4_2 = prompt('Введите минуты:', 30);
    let t4_3 = prompt('Введите секунды:', 45);
    if (t4_1 >= 0 && t4_1 <= 23 && t4_2 >= 0 && t4_2 <= 59 && t4_3 >= 0 && t4_3 <= 59) {
        alert(t4_1 + ':' + t4_2 + ':' + t4_3);
    }
    else {
        alert('Введите еще раз')
    }
} 

//5
let b5 = document.querySelector('.b5');

b5.onclick = () => {
    let t5_1 = prompt('Введите первое число:', 12);
    let t5_2 = prompt('Введите знак:', '+');
    let t5_3 = prompt('Введите второе число:', 45);
    switch(t5_2) {
        case '+': 
            alert(+t5_1 + +t5_3);
            break;
        case '-':
            alert(+t5_1 - +t5_3);   
            break;
        case '*':
            alert(+t5_1 * +t5_3);
            break;
        case '/':
            alert(+t5_1 / +t5_3);
            break;
        default: 
            alert('Неверный знак');             
    }
} 


//6
let b6 = document.querySelector('.b6');

b6.onclick = () => {
    let t6 = prompt('Введите планету:', 'Земля');
    switch(t6.toLowerCase()) {
        case 'земля': 
            alert('Привет, землянин!');
            break;
        case 'earth': 
            alert('Привет, землянин!');
            break;    
        default: 
            alert('Привет, инопланетянин!');             
    }
} 