const pin = document.getElementById('pin')

function nomber() {
    if (pin.value=='123456') {
        location.href='pengambilan.html'
    }
    else{
        alert('pin yang anda masukan salah')
    }
}
