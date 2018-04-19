// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let imgGaleria = document.querySelector('#slide');
let imgIndex = 0;

let botaoProx = document.querySelector('#proximo');

botaoProx.addEventListener('click', function(){
    imgIndex = (imgIndex+1)%todasAsImagens.length;
    imgGaleria.src = servidorDasImagens + todasAsImagens[imgIndex];
});

let botaoAnt = document.querySelector('#anterior');

botaoAnt.addEventListener('click', function(){
    imgIndex--;
    if(imgIndex < 0){
        imgIndex = todasAsImagens.length-1;
    }else{
        imgIndex %= todasAsImagens.length;
    }
    imgGaleria.src = servidorDasImagens + todasAsImagens[imgIndex];
});
