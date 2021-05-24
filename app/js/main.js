import Animation from './modules/animation';
import AnimationToken from './modules/animationToken';
import TabMenu from './modules/tabMenu';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', () => {
    const headerAnimation = new Animation('.header__menu-item-link', 'animated__menuIn', 'animated__menuOut');
    headerAnimation.createAnimation();

    new AnimationToken('.token__wrapper-btn-img', '.token__wrapper-btn').bind();
    new AnimationToken('.tokenomics__union', '.tokenomics__wrapper').bind();

    new TabMenu('.header__burger', '.tab', '.header', 'tab-block').bindTab();
    new TabMenu('.header__menu-media-320', '.mobile-menu', '.header', 'mobile-menu--active').bindTab();

    scrolling('.pageup');
});