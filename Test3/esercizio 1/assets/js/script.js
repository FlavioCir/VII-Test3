var timer = document.getElementById('timer');

function time() {
    let sec;

    if (sessionStorage.getItem('tempo') == null) {
        sec = 0;
    } else {
        sec = sessionStorage.getItem('tempo');
        sec = parseInt(sec);
    }
    setInterval(function() {

        sec += 1;
        sessionStorage.setItem('tempo', sec);
        timer.innerHTML = `${sec} secondi passati nella sessione`;
    }, 1000)
}

time();