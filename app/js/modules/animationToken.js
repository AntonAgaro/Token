export default class AnimationToken {
    constructor(elem, btn) {
        this.elem = document.querySelector(elem);
        this.btn = document.querySelector(btn);
    }

    startAnimation() {
        this.elem.classList.add('animated');
    }

    stopAnimation() {
        //Получаем угол поворота transform: rotate
        let rotate = this.getRotate();
        //Убираем анимацию
        this.elem.classList.remove('animated');
    }

    getRotate() {
        //Вычисляем значение rotate
        let rotate = window.getComputedStyle(this.elem).transform;
        let values = rotate.split(/\(|,|\)/);
        let angle = Math.atan2(+values[2], +values[1]); 
        let result = ((angle * (180/Math.PI)+360)%360).toFixed(0);

        // Возвращаем элемент в исходное состояние за время
        this.elem.style.transform = `rotate(${result}deg)`;
        const timer = setInterval(() => {
            result = result - 10;
            if (result <= 0) {
                clearInterval(timer);
            } 
            this.elem.style.transform = `rotate(${result}deg)`;      
            }, 20);
    }

    bind() {
        this.btn.addEventListener('mouseover', () => {
            this.startAnimation();
        });

        this.btn.addEventListener('mouseleave', () => {
            this.stopAnimation();
        });
    }
}