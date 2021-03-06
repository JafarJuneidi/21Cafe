const plus = document.getElementsByClassName('plus');
const minus = document.getElementsByClassName('minus');
const number = document.getElementsByClassName('number');
const cardDelete = document.getElementsByClassName('fa-times-circle');
const card = document.getElementsByClassName('card__container');
const popUp = document.getElementsByClassName('pop_up');
const yes = document.getElementsByClassName('yes');
const no = document.getElementsByClassName('no');

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', () => {
        number[i].innerHTML = parseInt(number[i].innerHTML) + 1;
    });

    minus[i].addEventListener('click', () => {
        if (parseInt(number[i].innerHTML) > 1) {
            number[i].innerHTML = parseInt(number[i].innerHTML) - 1;
        }
    });
}

for (let i = 0; i < cardDelete.length; i++) {
    cardDelete[i].addEventListener('click', async () => {
        let press = new Promise((resolve, reject) => {
            yes[0].addEventListener('click', () => {
                resolve(true);
            });

            no[0].addEventListener('click', () => {
                resolve(false);
            });
        });

        popUp[0].style.display = 'flex';
        const result = await press;

        if (result) {
            card[i].style.display = 'none';
        }
        popUp[0].removeAttribute('style');
    });
}

const slider = document.querySelector('.slider');
let isDown = false;
let startY;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    // slider.classList.add('active');
    slider.style.cursor = 'grab';
    startY = e.pageY - slider.offsetTop;
    scrollTop = slider.scrollTop;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    // slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'default';
    // slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - slider.offsetTop;
    const walk = (y - startY) * 1.5; //scroll-fast
    slider.scrollTop = scrollTop - walk;
    console.log(walk);
});
