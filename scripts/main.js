function getIdPw(){
    var id = prompt('ID 입력', '');
    var passwd = prompt('PW 입력', '');
    localStorage.setItem('id', id);
    localStorage.setItem('passwd', passwd);
}

var passwd = localStorage.getItem('passwd');
if(!passwd){
    getIdPw();
}

// var id = localStorage.getItem('id');
// var heading = document.querySelector('h1');
// heading.innerHTML = id + 'HomePage';