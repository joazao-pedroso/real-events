var passw = document.querySelector('.keyword')

var hide = document.querySelector('#hide')

hide.addEventListener('click', clicks)

function clicks() {
    if (passw.type == 'password') {
        passw.type = 'text'
    }
    else {
        passw.type = 'password'
    }
}