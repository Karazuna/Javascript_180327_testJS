/*
2018-03-27, 1260014 Cheol-Eon Kim
*/

var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Cloud Service<br>2018-1';

function getIdPw() {
    var id = prompt('ID 입력', ''); //초기값
    alert(id + '가 로그인함');

    var passwdSystem = '12345';
    var passwd = prompt('PW 입력', '');

    if (passwd === passwdSystem) {
        alert('정상 로그인!');
    }
    else {
        alert('비밀번호 오류');
    }
}

/* var text = "This is a text~!@#";
text = 12345;
alert(text); */

/* 
1 == "1" : true (data check)
1 === "1" : false (type/data check)
*/

/* var iceCream = 'chocolate';
if(iceCream === 'chocolate'){
    alert('chocolate ice cream?!');
}
else{
    alert('Ahhhhha, chocolate........');
} */

// getIdPw();

//함수를 객체로 처리함
document.querySelector('h1').onclick = function(){ //selector html, h1...
    getIdPw();
}

var myImg = document.querySelector('img');
myImg.onclick = function(){
    var src = myImg.getAttribute('src');
    
    if(src === 'images/firefox-icon.png'){
        myImg.setAttribute('src', 'images/google.png');
    }
    else {
        myImg.setAttribute('src', 'images/firefox-icon.png');
    }
}