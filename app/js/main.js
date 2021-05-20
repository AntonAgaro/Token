import Animation from './modules/animation';
import AnimationToken from './modules/animationToken';

window.addEventListener('DOMContentLoaded', () => {
    const headerAnimation = new Animation('.header__menu-item-link', 'animated__menuIn', 'animated__menuOut');
    headerAnimation.createAnimation();

    new AnimationToken('.token__wrapper-btn-img', '.token__wrapper-btn').bind();
});