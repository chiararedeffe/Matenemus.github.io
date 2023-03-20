const paginazione = document.getElementById('paginazione');

paginazione.addEventListener('click', e => {
    //console.log(e);
    const item = e.target;
    if(item.nodeName === 'LABEL') {
        setCheckedLabel(item.dataset.page); 
    }
});

function setCheckedLabel(numeroPaginaSelezionata){
    const labels = document.querySelectorAll('#paginazione > label');
    for(let i=0; i<labels.length; i++) {
        labels[i].classList.remove('lab-sel');
        if(i+1 == numeroPaginaSelezionata) {
            labels[i].classList.add('lab-sel');
        }
    }
}