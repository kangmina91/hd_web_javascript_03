
// querySelectorAll
//querySelector와 사용 방법은 동일하며 선택자를 선택하여 배열과 비슷한 객체인 nodeList를 반환합니다. 
//반환객체가 nodeList이기에 for문 또는 forEach문을 사용합니다.
const TOPBAANER = document.querySelector('.TopBanner');
const TOPBAANER_DOTS = document.querySelectorAll('.TopBanner .dots li');


const TOPBAANER_SLIDE = new Swiper('.TopBanner_slide', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    on: {
        slideChangeTransitionStart: function () {
            console.log(this.realIndex);
            TOPBAANER_DOTS.forEach(it => it.classList.remove('on'));
            TOPBAANER_DOTS[this.realIndex].classList.add('on');
        }
    }

});


//forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
//forEach() 매개 변수 순서 currentValue -처리할 현재 요소. ,index -처리할 현재 요소의 인덱스. , array - forEach()를 호출한 배열.
TOPBAANER_DOTS.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();
        console.log(idx);
        TOPBAANER_SLIDE.slideToLoop(idx);
    })
});

// 익명함수는 함수명 대신 변수명에 함수 코드를 저장하는 구현 방식
// 화살표함수는 익명함수 중 하나로 function 없이 => 로 쓰는 방법.



const TOPBAANER_CLOSE = document.querySelector('.TopBanner .close')

TOPBAANER_CLOSE.addEventListener('click', e => {
    e.preventDefault();
    TOPBAANER.classList.add('on');
})
