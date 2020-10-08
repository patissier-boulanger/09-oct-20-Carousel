'use strict';
const firstImg = document.querySelector('.firstImg');
const lastImg = document.querySelector('.lastImg');
const fwdBtn = document.getElementById('fwdBtn');
const bwdBtn = document.getElementById('bwdBtn');

// addEventListener로 버튼들에 클릭 추가
fwdBtn.addEventListener('click', forward);
bwdBtn.addEventListener('click', backward);

//앞으로 가는 버튼 함수
function forward() {
    //현재 이미지는 appear 클래스를 가진 이미지
    const appeardImg = document.querySelector('.appear');
    //다음 이미지는 nextElementSibling, html상에서 다음 element가 나옴.
    const nextImg = appeardImg.nextElementSibling;
    //만약에 appear 클래스를 가진 이미지가 있다면(보여지고 있다면)
    if(appeardImg) {
        //forward 함수를 실행하면 appeardImg에서 appear 클래스를 지우고
        appeardImg.classList.remove('appear');
        //다음 엘리먼트인 nextImg에 appear 클래스를 넣음
        nextImg.classList.add('appear');
        //만약에 lastImg에 도달해서 그 다음 엘리먼트가 img 클래스를 포함하고 있지 않은 엘리먼트라면
        if (nextImg.classList.contains('img') === false) {
            //lastImg에서 appear를 지우고
            lastImg.classList.remove('appear');
            //다시 첫 이미지에 appear클래스를 넣음 그럼 다시 forward 함수를 실행하면 if(appeardImg)로 돌아감
            firstImg.classList.add('appear');
        };
    };
};



function backward() {
    const appeardImg = document.querySelector('.appear');
    const prevImg = appeardImg.previousElementSibling;
    if(prevImg === null) {
        appeardImg.classList.remove('appear');
        lastImg.classList.add('appear');
    } else if(appeardImg) {
        appeardImg.classList.remove('appear');
        prevImg.classList.add('appear');
    };
};



function init() {
//setInterval(forward, 5000)

};

init();