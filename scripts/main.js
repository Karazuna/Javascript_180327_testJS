function setIdPw() {
    var id = prompt('ID 입력', '');
    var passwd = prompt('PW 입력', '');
    localStorage.setItem('id', id);
    localStorage.setItem('passwd', passwd);
}

setIdPw();

var myButton = document.querySelector('button');
myButton.onclick = function () {
    var roginId = prompt('ID 입력', '');
    var roginPw = prompt('PW 입력', '');

    if (roginId === localStorage.getItem('id')
        && roginPw === localStorage.getItem('passwd')) {
        alert("로그인 성공");
        
        var myHeading = document.querySelector('h1');
        myHeading.innerHTML = roginId + "'s<br>HomePage입니다"
    }
    else {
        alert("로그인 실패");
    }
}


