/*
2018-03-27, 1260014 Cheol-Eon Kim
*/

var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Cloud Service<br>2018-1';

/* var text = "This is a text~!@#";
text = 12345;
alert(text); */

/* 
1 == "1" : true
1 === "1" : false
*/

/* var iceCream = 'chocolate';
if(iceCream === 'chocolate'){
    alert('chocolate ice cream?!');
}
else{
    alert('Ahhhhha, chocolate........');
} */

var id = prompt('ID 입력', ''); //초기값
alert(id + '가 로그인함');

var passwdSystem = '12345';
var passwd = prompt('PW 입력', '');
if(passwd == passwdSystem){
    alert('정상 로그인!');
}
else{
    alert('비밀번호 오류');
}