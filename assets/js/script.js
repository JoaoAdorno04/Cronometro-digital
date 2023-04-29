let hr = 0;
let min = 0;
let sec = 0;
let intervalo;

function verify(digit){
    if (digit < 10){
        return('0'+digit);
    }
    else{
        return(digit);
    }
}

function stop(){
    clearInterval(intervalo);
    hr = 0;
    min = 0;
    sec = 0;
    document.getElementById('horas').innerText = '00';
    document.getElementById('minutos').innerText = '00';
    document.getElementById('segundos').innerText = '00';
}

function play(){
   intervalo = setInterval(counter, 1000)
}

function pause(){
    clearInterval(intervalo)
}


function counter(){
    sec++
    if (sec == 60){
        min++
        sec = 0
        document.getElementById('minutos').innerText = verify(min);
    }
    else if (min == 60){
        hr++
        min = 0
        document.getElementById('horas').innerText = verify(hr);
    }

    document.getElementById('segundos').innerText = verify(sec);
}