const paginazione = document.getElementById('paginazione');
const labels = document.querySelectorAll('#paginazione > label');
const pagine = document.getElementById('pagine');
const radioBtn = document.querySelectorAll('#pagine > input[type=radio]');
let paginaCorrente = 1;
let toccoInizioX = 0;
let toccoFineX = 0;

paginazione.addEventListener('click', e => {
    //console.log(e);
    const item = e.target;
    if(item.nodeName === 'LABEL') {
        setCheckedLabel(item.dataset.page); 
    }
});

function setCheckedLabel(numeroPaginaSelezionata){
    labels[paginaCorrente-1].classList.remove('lab-sel');
    labels[numeroPaginaSelezionata-1].classList.add('lab-sel');
    paginaCorrente = numeroPaginaSelezionata;
}

pagine.addEventListener('touchstart', touchStart, false);
pagine.addEventListener('touchsend', touchEnd, false);

function touchStart(e) {
    toccoInizioX = e.changedTouches[0].screenX;
}

function touchEnd(e) {
    toccoFineX = e.changedTouches[0].screenX;
    toccoFineX < toccoInizioX ? moveTo('next') : moveTo('prev');
}

function moveTo(direction) {
    if(direction === 'next' && paginaCorrente < labels.lenght) {
        labels[paginaCorrente -1].classList.remove('lab-sel');
        labels[paginaCorrente].classList.add('lab-sel');
        radioBtn[paginaCorrente].checked = true;
        paginaCorrente++;
    } else if(direction === 'prev' && paginaCorrente > 1) {
        labels[paginaCorrente -1].classList.remove('lab-sel');
        labels[paginaCorrente -2].classList.add('lab-sel');
        radioBtn[paginaCorrente -2].checked = true;
        paginaCorrente--;
    }
}