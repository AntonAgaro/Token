import Animation from './modules/animation';

window.addEventListener('DOMContentLoaded', () => {
    const headerAnimation = new Animation('.header__menu-item-link', 'animated__menuIn', 'animated__menuOut');
    headerAnimation.createAnimation();
});