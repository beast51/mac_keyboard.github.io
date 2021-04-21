// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function t11(e) {
    console.log(e.keyCode);
    let keys = document.querySelectorAll('.key');
    let out = keys.forEach(elem => {
        let data = elem.getAttribute('data');
        if (data == e.keyCode) {
            elem.classList.add('press');
        }
    });
};

function t111(e) {
    let keys = document.querySelectorAll('.key');
    let out = keys.forEach(elem => {
        let data = elem.getAttribute('data');
        if (data == e.keyCode) {
            elem.classList.remove('press');
        }
    });
};

document.querySelector('.i-11').addEventListener('keydown', t11);
document.querySelector('.i-11').addEventListener('keyup', t111);

// Этот вариант покороче, но проблема с дублирующими кнопками шифт и альт, будет находиться только первая ссылка и на клавиатуре не будут дублироваться шифт и кнтрл.
// function t11(e) {
//     document.querySelector(`.keyboard .buttons .key[data="${e.keyCode}"]`).classList.add('press');
// }

// function t113(e) {
//     document.querySelector(`.keyboard .buttons .key[data="${e.keyCode}"]`).classList.remove('press');
// }

// document.querySelector('.i-11').addEventListener('keydown', t11);
// document.querySelector('.i-11').addEventListener('keyup', t113);