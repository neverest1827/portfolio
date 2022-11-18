// Проверка поддержки webp, добавление класса webp или no-webp  для HTML
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height === 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    //
    testWebP(function (support) {
        if (support === true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}

//Обработка события нажатия по кнопке меню
export function menuPress(selector) {
    //Добавляем обработчик события при нажатии
    selector.addEventListener('click', function () {
        //Добавляем класс элементу
        selector.classList.toggle("nav__btn--active");
        document.querySelector('.header__inner').classList.toggle("header__inner--active")
    });
}

export function scrolTo() {
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            if (document.querySelector('.nav__btn--active')) {
                document.querySelector('.nav__btn--active').classList.remove('nav__btn--active')
                document.querySelector('.header__inner--active').classList.remove('header__inner--active')
            }
            const id = smoothLink.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            if (document.querySelector('.social--visible')) {
                document.querySelector('.social--visible').classList.remove('social--visible')
            }
        });

    }

}

