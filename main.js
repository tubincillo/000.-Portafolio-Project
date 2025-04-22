let foto = document.getElementById('banner-main');

function colores(){
    return Math.floor(Math.random()*256);
}

function cambioColores(){

    let coloresCambiados= 'rgb(' + colores() + ','  + colores() + ',' + colores() +')';
    event.target.style.backgroundColor = coloresCambiados; 

}

foto.addEventListener('click',cambioColores);