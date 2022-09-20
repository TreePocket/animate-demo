import gsap from "gsap";

/**
 * 数字递增递减动画
 * @param { Object } numberObj {tweenedNumber:0,list:[]} tweenedNumber:默认数值 list:每一位组成的字符数组
 * @param { Number } value 改变到的数值
 * @param { Object } config 动画配置属性 duration 动画持续时间
 */
function animateNumber(numberObj,value,config = {duration:5}) {
    gsap.to(numberObj, {
        duration: config.duration, tweenedNumber: value, onUpdate: () => {
          numberObj.list = numberObj.tweenedNumber.toFixed(0).toString().split('');
        }
      });
}

/**
 * 
 * @param {String} containerClass 滑动卡片父容器类名
 * @param {String} coverCardClass 滑动卡片覆盖卡片类名
 */
function animateSlideCard(containerClass, coverCardClass) {
    gsap.set(coverCardClass, { yPercent: 100 });
      gsap.utils.toArray(containerClass).forEach(container => {
        let info = container.querySelector(coverCardClass),
          tl = gsap.timeline({ paused: true });
        tl.to(info, { yPercent: 0 })
        container.addEventListener("mouseenter", () => tl.play());
        container.addEventListener("mouseleave", () => tl.reverse());
      });
}
export {
    animateNumber,
    animateSlideCard
}