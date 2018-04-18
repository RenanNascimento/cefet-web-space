/* paragrafo de onde eles vem */
let botaoOndeVem = document.querySelector('#onde-vem');

botaoOndeVem.addEventListener('click', function(){
    let paragrafo = botaoOndeVem.parentNode;
    if(botaoOndeVem.textContent === "+"){
        botaoOndeVem.textContent = "-";
        paragrafo.classList.add('expandido');
    }else{
        botaoOndeVem.textContent = "+";
        paragrafo.classList.remove('expandido');
    }
});

/* paragrafo o que eles querem */
let botaoOQueQuerem = document.querySelector('#o-que-querem');

botaoOQueQuerem.addEventListener('click', function(){
    let paragrafo = botaoOQueQuerem.parentNode;
    if(botaoOQueQuerem.textContent === "+"){
        botaoOQueQuerem.textContent = "-";
        paragrafo.classList.add('expandido');
    }else{
        botaoOQueQuerem.textContent = "+";
        paragrafo.classList.remove('expandido');
    } 
});

/* paragrafo para onde eles vao */
let botaoOndeVao = document.querySelector('#onde-vao');

botaoOndeVao.addEventListener('click', function(){
    let paragrafo = botaoOndeVao.parentNode;
    if(botaoOndeVao.textContent === "+"){
        botaoOndeVao.textContent = "-";
        paragrafo.classList.add('expandido');
    }else{
        botaoOndeVao.textContent = "+";
        paragrafo.classList.remove('expandido');
    }
});
