const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.getElementById('number');
const heart = document.getElementById('heart');

plus.addEventListener('click', () => {
    number.innerHTML = parseInt(number.innerHTML) + 1;
});

minus.addEventListener('click', () => {
    if (parseInt(number.innerHTML) > 1) {
        number.innerHTML = parseInt(number.innerHTML) - 1;
    }
});

heart.addEventListener('click', () => {
    console.log(heart.style);
    const color = heart.style.color;
    if (color != 'red') {
        heart.style.color = 'red';
    } else if (color == 'red') {
        heart.style.color = '';
    }
});
