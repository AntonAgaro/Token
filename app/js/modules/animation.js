export default class Animation {
    constructor(elements, animationIn, animationOut) {
        this.elements = document.querySelectorAll(elements);
        this.animationIn = animationIn;
        this.animationOut = animationOut;
    }

    fadeIn(item) {
        let opacity = 0.01;
        item.style.opacity = opacity;
        item.style.display = 'block';
        const timer = setInterval(function() {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            item.style.opacity = opacity;
            opacity += opacity * 0.1;
        }, 10);
    }

    fadeOut(item) {
        let opacity = 1;
        const timer = setInterval(function() {
            if(opacity <= 0.1) {
                clearInterval(timer);
                    item.remove();
            }
            item.style.opacity = opacity;
            opacity -= opacity * 0.1;
        }, 10);
    }

    showRound(event, element) {
        //Удаляем сначала все кружки
        document.querySelectorAll('.round-round').forEach(item => {
            item.remove();
        });

        const round = document.createElement('img');
        round.setAttribute('src', 'images/header/hover.svg');
        if (event.target.matches('#header-first')) {
            round.classList.add('animated__menuInFirst', 'round-round');
        } else {
            round.classList.add('animated__menuIn', 'round-round');
        }
        console.log(event.target);
        element.append(round);
        this.fadeIn(round);
    }

    hideRound() {
        let round = document.querySelector('.round-round');
        this.fadeOut(round);
    }

    createAnimation() {
        this.elements.forEach(element => {
            element.addEventListener('mouseenter', (event) => {
                this.showRound(event, element);
            });
        });

        this.elements.forEach(element => {
            element.addEventListener('mouseleave', () => {
                this.hideRound(element);
            });
        });
    }
}