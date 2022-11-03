import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
const btnImportar = document.querySelector('#importar')

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}


if(btnImportar){
    btnImportar.addEventListener('click', ()=>{
        controller.importarDados()
    })
}else{
    throw Error('boooooom')
}